// src/pages/Dashboard/Dashboard.js
import React, { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.scss";

// ✅ Your exact list (outside component = no ESLint warning)
const EVENT_PAGES = [
  "/specialevents",
  "/birthdayparties",
  "/privateplaygroup",
  "/waiverkids",
];

const FITNESS_PAGES = [
  "/mommyandme",
  "/groupfitness",
  "/personaltraining",
  "/strollerfitness",
];

// ✅ Convert GA4 "source / medium" into client-friendly labels
function formatSourceLabel(sourceMedium = "") {
  const s = String(sourceMedium).toLowerCase().trim();

  // GA4 may return "(not set)" when it can't attribute the session source
  if (s === "(not set)" || s === "") return "Direct / Untracked visits";

  if (s.includes("google / organic")) return "Google Search";
  if (s.includes("(direct) / (none)")) return "Direct visits";

  // Instagram often shows up as l.instagram.com / referral
  if (s.includes("instagram")) return "Instagram";

  // Optional: other common
  if (s.includes("facebook")) return "Facebook";
  if (s.includes("t.co") || s.includes("twitter")) return "X (Twitter)";

  // fallback: show raw if it’s something else (keeps it honest)
  return sourceMedium;
}

// ✅ Small explanation under each label (optional)
function formatSourceHint(sourceMedium = "") {
  const s = String(sourceMedium).toLowerCase().trim();

  if (s === "(not set)" || s === "") {
    return "Typed the website, bookmark, or apps that don’t pass tracking info";
  }
  if (s.includes("google / organic")) {
    return "Found the site through Google search";
  }
  if (s.includes("(direct) / (none)")) {
    return "Typed the website directly or used a saved link";
  }
  if (s.includes("instagram")) {
    return "Clicked from Instagram bio, story, or message link";
  }

  return "";
}

// ✅ KPI Card — MUST match your SCSS classnames
function KpiCard({ label, value }) {
  return (
    <div className="dashboard__kpi">
      <p className="dashboard__kpiLabel">{label}</p>
      <p className="dashboard__kpiValue">{value}</p>
    </div>
  );
}

// ✅ Full-page overlay loader (simple + clean)
function DashboardLoader({ label = "Loading dashboard…" }) {
  return (
    <div className="dashboard__overlay" role="status" aria-live="polite">
      <div className="dashboard__overlayCard">
        <div className="dashboard__spinner" aria-hidden="true" />
        <p className="dashboard__overlayText">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const {
    isLoading: authLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState({ loading: false, error: "" });

  // ✅ Spring Boot health status
  const [apiStatus, setApiStatus] = useState("");

  // ✅ NEW: range selector (matches your backend support)
  const [days, setDays] = useState(30);

  // ✅ API base URL (Render in prod via env var, localhost in dev)
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

  // ✅ client-specific endpoint (matches your Spring Boot controller)
  // ✅ add ?days= for range support
  const GA4_ENDPOINT = `${API_BASE_URL}/api/dashboard/stepbystep/ga4Results?days=${encodeURIComponent(
    days
  )}`;

  // ✅ GA4 results — gated by login
  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setStatus({ loading: true, error: "" });

        // ✅ get Auth0 JWT and call Spring Boot protected endpoint
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience:
              process.env.REACT_APP_AUTH0_AUDIENCE || "https://rd-dashboard-api",
          },
        });

        const res = await fetch(GA4_ENDPOINT, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 403) {
          throw new Error("Access denied (403). This account is not authorized.");
        }

        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || "Failed to load results.");
        }

        const json = await res.json();

        if (isMounted) {
          setData(json);
          setStatus({ loading: false, error: "" });
        }
      } catch (err) {
        if (isMounted) {
          setData(null);
          setStatus({
            loading: false,
            error: err?.message || "Something went wrong fetching results.",
          });
        }
      }
    };

    if (isAuthenticated) {
      load();
    } else {
      setData(null);
      setStatus({ loading: false, error: "" });
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, GA4_ENDPOINT, getAccessTokenSilently]);

  // ✅ Spring Boot ping (public) — gated by login
  useEffect(() => {
    let alive = true;

    const ping = async () => {
      try {
        setApiStatus("Checking API...");
        const res = await fetch(`${API_BASE_URL}/api/health`);
        const json = await res.json();

        if (!alive) return;

        setApiStatus(json?.status === "ok" ? "API Connected ✅" : "API not ok ❌");
      } catch {
        if (!alive) return;
        setApiStatus("API blocked (CORS) or not running ❌");
      }
    };

    if (isAuthenticated) {
      ping();
    } else {
      setApiStatus("");
    }

    return () => {
      alive = false;
    };
  }, [isAuthenticated, API_BASE_URL]);

  const safe = useMemo(() => {
    const fallback = {
      users30d: 0,
      newUsers30d: 0,
      avgEngagementTime: "—",
      contactSubmits: 0,
      bookingClicks: 0,
      topTrafficSource: "(not set)",
      topSources: [],
      topPages: [],
      rangeLabel: `Last ${days} days`,
    };

    return { ...fallback, ...(data || {}) };
  }, [data, days]);

  const totalConversions = (safe.contactSubmits || 0) + (safe.bookingClicks || 0);
  const conversionRate =
    (safe.users30d || 0) > 0
      ? ((totalConversions / safe.users30d) * 100).toFixed(1)
      : "0.0";

  const formatPath = (path) => {
    if (path === "/") return "/homepage";
    return path;
  };

  // ✅ show ALL your pages every time (0 if not in GA4 yet)
  const { eventsPages, fitnessPages, otherPages } = useMemo(() => {
    const pages = Array.isArray(safe.topPages) ? safe.topPages : [];
    const byPath = new Map(pages.map((p) => [p.path, Number(p.views) || 0]));

    const events = EVENT_PAGES.map((path) => ({
      path,
      views: byPath.get(path) ?? 0,
    }));

    const fitness = FITNESS_PAGES.map((path) => ({
      path,
      views: byPath.get(path) ?? 0,
    }));

    const groupedSet = new Set([...EVENT_PAGES, ...FITNESS_PAGES]);
    const other = pages.filter((p) => !groupedSet.has(p.path));

    return { eventsPages: events, fitnessPages: fitness, otherPages: other };
  }, [safe.topPages]);

  const showOverlay = authLoading || status.loading;

  // ✅ Auth0 still deciding? show loader (prevents awkward flashes)
  if (authLoading) {
    return (
      <section className="dashboard">
        <DashboardLoader label="Securing dashboard…" />
      </section>
    );
  }

  // ✅ Locked view until login
  if (!isAuthenticated) {
    return (
      <section className="dashboard dashboard__locked">
        <header className="dashboard__header">
          <p className="dashboard__eyebrow">DASHBOARD</p>
          <h1 className="dashboard__title">StepbyStep Club Analytics</h1>
          <p className="dashboard__sub">Log in to view metrics.</p>

          <button
            className="dashboard__btn"
            onClick={() => loginWithRedirect()}
            type="button"
          >
            Log in to view metrics
          </button>
        </header>
      </section>
    );
  }

  return (
    <section className="dashboard">
      {showOverlay ? <DashboardLoader label="Loading analytics…" /> : null}

      <header className="dashboard__header">
        <div className="dashboard__topRow">
          <div>
            <p className="dashboard__eyebrow">DASHBOARD</p>
            <h1 className="dashboard__title">StepbyStep Club Analytics</h1>

            {apiStatus ? <p className="dashboard__sub">{apiStatus}</p> : null}

            {status.error ? (
              <p className="dashboard__sub dashboard__sub--error">
                Couldn’t load results: {status.error}
              </p>
            ) : (
              <p className="dashboard__sub">{safe.rangeLabel}</p>
            )}
          </div>

          {/* ✅ RIGHT SIDE CONTROLS */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span className="dashboard__sub" style={{ margin: 0 }}>
                Range
              </span>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                style={{
                  height: 40,
                  borderRadius: 10,
                  padding: "0 12px",
                  border: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <option value={7}>Last 7 days</option>
                <option value={14}>Last 14 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
            </label>

            <button
              className="dashboard__btn dashboard__btn--ghost"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              type="button"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard__kpis">
        <KpiCard label={`Users (${days} days)`} value={safe.users30d} />
        <KpiCard label="New users" value={safe.newUsers30d} />
        <KpiCard label="Avg engagement time" value={safe.avgEngagementTime} />
        <KpiCard label="Conversion rate" value={`${conversionRate}%`} />
      </div>

      <section className="dashboard__section">
        <h2 className="dashboard__h2">Acquisition</h2>

        <div className="dashboard__panel">
          <p className="dashboard__label">Top traffic source</p>

          <p className="dashboard__value">
            {formatSourceLabel(safe.topTrafficSource)}
          </p>

          {Array.isArray(safe.topSources) && safe.topSources.length ? (
            <div className="dashboard__sources">
              <p className="dashboard__groupTitle">Top sources (sessions)</p>

              <ul className="dashboard__list">
                {safe.topSources.map((s) => {
                  const label = formatSourceLabel(s.source);
                  const hint = formatSourceHint(s.source);

                  return (
                    <li key={s.source} className="dashboard__listItem">
                      <span className="dashboard__mono">
                        {label}
                        {hint ? <span className="dashboard__hint">{hint}</span> : null}
                      </span>

                      <span className="dashboard__badge">{s.sessions}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <p className="dashboard__empty">No source data yet.</p>
          )}
        </div>
      </section>

      <section className="dashboard__section">
        <h2 className="dashboard__h2">Engagement</h2>

        <div className="dashboard__panel">
          <p className="dashboard__label">Top pages (views)</p>

          <div className="dashboard__group">
            <p className="dashboard__groupTitle">Events</p>
            <ul className="dashboard__list">
              {eventsPages.map((p) => (
                <li key={p.path} className="dashboard__listItem">
                  <span className="dashboard__mono">{formatPath(p.path)}</span>
                  <span className="dashboard__badge">{p.views}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dashboard__group">
            <p className="dashboard__groupTitle">Fitness</p>
            <ul className="dashboard__list">
              {fitnessPages.map((p) => (
                <li key={p.path} className="dashboard__listItem">
                  <span className="dashboard__mono">{formatPath(p.path)}</span>
                  <span className="dashboard__badge">{p.views}</span>
                </li>
              ))}
            </ul>
          </div>

          {otherPages.length ? (
            <div className="dashboard__group">
              <p className="dashboard__groupTitle">Other</p>
              <ul className="dashboard__list">
                {otherPages.map((p) => (
                  <li key={p.path} className="dashboard__listItem">
                    <span className="dashboard__mono">{formatPath(p.path)}</span>
                    <span className="dashboard__badge">{p.views}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="dashboard__section">
        <h2 className="dashboard__h2">Conversion</h2>

        <div className="dashboard__panel">
          <div className="dashboard__conversions">
            <KpiCard label="Contact submits" value={safe.contactSubmits} />
            <KpiCard label="Booking clicks" value={safe.bookingClicks} />
            <KpiCard label="Total conversions" value={totalConversions} />
          </div>

          <div className="dashboard__row" style={{ marginTop: 14 }}>
            <p className="dashboard__label">Conversion rate</p>
            <p className="dashboard__value">{conversionRate}%</p>
          </div>

          <p className="dashboard__sub" style={{ marginTop: 8 }}>
            Conversion rate = (Contact submits + Booking clicks) ÷ Users
          </p>
        </div>
      </section>
    </section>
  );
}