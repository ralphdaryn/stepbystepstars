// src/pages/Dashboard/Dashboard.js
import React, { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.scss";

// ✅ Your exact list (outside component = no ESLint warning)
const EVENT_PAGES = [
  "/specialevents",
  "/birthdayparties",
  "/privateplaygroup",
  "/waiver",
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

  // Optional: other common ones
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

export default function Dashboard() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState({ loading: false, error: "" });

  // ✅ NEW (Spring Boot health status)
  const [apiStatus, setApiStatus] = useState("");

  // ✅ NEW: API base URL (Render in prod via env var, localhost in dev)
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

  // ✅ Your GA4 useEffect (same logic) — just gated by login
  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setStatus({ loading: true, error: "" });

        const res = await fetch("/.netlify/functions/ga4Results", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

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
      // reset when logged out (so nothing displays)
      setData(null);
      setStatus({ loading: false, error: "" });
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  // ✅ Spring Boot ping (harmless) — gated by login
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
      rangeLabel: "Last 30 days",
    };

    return { ...fallback, ...(data || {}) };
  }, [data]);

  const totalConversions = safe.contactSubmits + safe.bookingClicks;
  const conversionRate =
    safe.users30d > 0
      ? ((totalConversions / safe.users30d) * 100).toFixed(1)
      : "0.0";

  const formatPath = (path) => {
    if (path === "/") return "/homepage";
    return path;
  };

  // ✅ FIX B: show ALL your pages every time (0 if not in GA4 yet)
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

  // ✅ Layout change only: show a clean "locked" view until login
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
      <header className="dashboard__header">
        <div className="dashboard__topRow">
          <div>
            <p className="dashboard__eyebrow">DASHBOARD</p>
            <h1 className="dashboard__title">StepbyStep Club Analytics</h1>

            {/* ✅ Spring Boot status line */}
            {apiStatus ? <p className="dashboard__sub">{apiStatus}</p> : null}

            {status.loading ? (
              <p className="dashboard__sub">Loading results…</p>
            ) : status.error ? (
              <p className="dashboard__sub dashboard__sub--error">
                Couldn’t load results: {status.error}
              </p>
            ) : (
              <p className="dashboard__sub">{safe.rangeLabel}</p>
            )}
          </div>

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
      </header>

      <div className="dashboard__kpis">
        <KpiCard label="Users (30 days)" value={safe.users30d} />
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
                        {hint ? (
                          <span className="dashboard__hint">{hint}</span>
                        ) : null}
                      </span>

                      <span className="dashboard__badge">{s.sessions}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
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
                    <span className="dashboard__mono">
                      {formatPath(p.path)}
                    </span>
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

        <div className="dashboard__conversions">
          <div className="dashboard__panel">
            <p className="dashboard__label">Contact form submits</p>
            <p className="dashboard__value">{safe.contactSubmits}</p>
          </div>

          <div className="dashboard__panel">
            <p className="dashboard__label">Booking / Registration clicks</p>
            <p className="dashboard__value">{safe.bookingClicks}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

function KpiCard({ label, value }) {
  return (
    <div className="dashboard__kpi">
      <p className="dashboard__kpiLabel">{label}</p>
      <p className="dashboard__kpiValue">{value}</p>
    </div>
  );
}