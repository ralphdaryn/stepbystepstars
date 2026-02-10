// src/pages/Dashboard/Dashboard.js
import React, { useEffect, useMemo, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.scss";

/* =========================
   STATIC PAGE GROUPS
========================= */
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

/* =========================
   SOURCE FORMATTERS
========================= */
function formatSourceLabel(sourceMedium = "") {
  const s = String(sourceMedium).toLowerCase().trim();

  if (!s || s === "(not set)") return "Direct / Untracked visits";
  if (s.includes("google / organic")) return "Google Search";
  if (s.includes("(direct) / (none)")) return "Direct visits";
  if (s.includes("instagram")) return "Instagram";
  if (s.includes("facebook")) return "Facebook";
  if (s.includes("twitter") || s.includes("t.co")) return "X (Twitter)";

  return sourceMedium;
}

function formatSourceHint(sourceMedium = "") {
  const s = String(sourceMedium).toLowerCase().trim();

  if (!s || s === "(not set)")
    return "Typed the website, bookmark, or apps without tracking";
  if (s.includes("google / organic"))
    return "Found the site via Google search";
  if (s.includes("(direct) / (none)"))
    return "Typed the site directly or used a saved link";
  if (s.includes("instagram"))
    return "Clicked from Instagram bio, story, or message";

  return "";
}

/* =========================
   KPI CARD
========================= */
function KpiCard({ label, value }) {
  return (
    <div className="dashboard__kpi">
      <p className="dashboard__label">{label}</p>
      <p className="dashboard__kpiValue">{value}</p>
    </div>
  );
}

/* =========================
   MAIN DASHBOARD
========================= */
export default function Dashboard() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState({ loading: false, error: "" });
  const [apiStatus, setApiStatus] = useState("");

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

  /* =========================
     FETCH GA4 DATA (SECURED)
  ========================= */
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setStatus({ loading: true, error: "" });

        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience:
              process.env.REACT_APP_AUTH0_AUDIENCE ||
              "https://rd-dashboard-api",
          },
        });

        const res = await fetch(
          `${API_BASE_URL}/api/dashboard/ga4Results`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(await res.text());
        }

        const json = await res.json();
        if (mounted) setData(json);
      } catch (err) {
        if (mounted)
          setStatus({ loading: false, error: err.message });
      } finally {
        if (mounted) setStatus((s) => ({ ...s, loading: false }));
      }
    };

    if (isAuthenticated) load();
    else setData(null);

    return () => (mounted = false);
  }, [isAuthenticated, API_BASE_URL, getAccessTokenSilently]);

  /* =========================
     API HEALTH CHECK
  ========================= */
  useEffect(() => {
    let alive = true;

    const ping = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/health`);
        const json = await res.json();
        if (alive)
          setApiStatus(
            json?.status === "ok"
              ? "API Connected ✅"
              : "API Error ❌"
          );
      } catch {
        if (alive) setApiStatus("API not reachable ❌");
      }
    };

    if (isAuthenticated) ping();
    else setApiStatus("");

    return () => (alive = false);
  }, [isAuthenticated, API_BASE_URL]);

  /* =========================
     SAFE DATA + CALCS
  ========================= */
  const safe = useMemo(
    () => ({
      users30d: 0,
      newUsers30d: 0,
      avgEngagementTime: "—",
      contactSubmits: 0,
      bookingClicks: 0,
      topTrafficSource: "(not set)",
      topSources: [],
      topPages: [],
      rangeLabel: "Last 30 days",
      ...(data || {}),
    }),
    [data]
  );

  const totalConversions =
    safe.contactSubmits + safe.bookingClicks;

  const conversionRate =
    safe.users30d > 0
      ? ((totalConversions / safe.users30d) * 100).toFixed(1)
      : "0.0";

  const formatPath = (p) => (p === "/" ? "/homepage" : p);

  const { eventsPages, fitnessPages, otherPages } = useMemo(() => {
    const map = new Map(
      (safe.topPages || []).map((p) => [p.path, p.views])
    );

    const events = EVENT_PAGES.map((p) => ({
      path: p,
      views: map.get(p) ?? 0,
    }));

    const fitness = FITNESS_PAGES.map((p) => ({
      path: p,
      views: map.get(p) ?? 0,
    }));

    const known = new Set([...EVENT_PAGES, ...FITNESS_PAGES]);
    const other = (safe.topPages || []).filter(
      (p) => !known.has(p.path)
    );

    return { eventsPages: events, fitnessPages: fitness, otherPages: other };
  }, [safe.topPages]);

  /* =========================
     LOCKED VIEW
  ========================= */
  if (!isAuthenticated) {
    return (
      <section className="dashboard dashboard__locked">
        <h1>StepbyStep Club Analytics</h1>
        <button onClick={() => loginWithRedirect()}>
          Log in to view dashboard
        </button>
      </section>
    );
  }

  /* =========================
     RENDER
  ========================= */
  return (
    <section className="dashboard">
      <header className="dashboard__header">
        <h1>StepbyStep Club Analytics</h1>
        <p>{apiStatus}</p>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      </header>

      <div className="dashboard__kpis">
        <KpiCard label="Users (30 days)" value={safe.users30d} />
        <KpiCard label="New users" value={safe.newUsers30d} />
        <KpiCard
          label="Avg engagement time"
          value={safe.avgEngagementTime}
        />
        <KpiCard
          label="Conversion rate"
          value={`${conversionRate}%`}
        />
      </div>

      <section>
        <h2>Acquisition</h2>
        <p>{formatSourceLabel(safe.topTrafficSource)}</p>
      </section>

      <section>
        <h2>Engagement</h2>

        <h3>Events</h3>
        {eventsPages.map((p) => (
          <div key={p.path}>
            {formatPath(p.path)} — {p.views}
          </div>
        ))}

        <h3>Fitness</h3>
        {fitnessPages.map((p) => (
          <div key={p.path}>
            {formatPath(p.path)} — {p.views}
          </div>
        ))}
      </section>

      <section>
        <h2>Conversion</h2>
        <p>Contact submits: {safe.contactSubmits}</p>
        <p>Booking clicks: {safe.bookingClicks}</p>
        <p>Total conversions: {totalConversions}</p>
      </section>
    </section>
  );
}