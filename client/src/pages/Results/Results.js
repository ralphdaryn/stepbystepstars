// src/pages/Results/Results.js
import React, { useEffect, useMemo, useState } from "react";
import "./Results.scss";

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

export default function Results() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: "" });

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

    load();

    return () => {
      isMounted = false;
    };
  }, []);

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

  return (
    <section className="results">
      <header className="results__header">
        <p className="results__eyebrow">RESULTS</p>
        <h1 className="results__title">StepByStep Club Dashboard</h1>

        {status.loading ? (
          <p className="results__sub">Loading results…</p>
        ) : status.error ? (
          <p className="results__sub results__sub--error">
            Couldn’t load results: {status.error}
          </p>
        ) : (
          <p className="results__sub">{safe.rangeLabel}</p>
        )}
      </header>

      <div className="results__kpi-grid">
        <KpiCard label="Users (30 days)" value={safe.users30d} />
        <KpiCard label="New users" value={safe.newUsers30d} />
        <KpiCard label="Avg engagement time" value={safe.avgEngagementTime} />
        <KpiCard label="Conversion rate" value={`${conversionRate}%`} />
      </div>

      <section className="results__section">
        <h2 className="results__h2">Acquisition</h2>

        <div className="results__panel">
          <p className="results__panel-label">Top traffic source</p>

          {/* ✅ Friendly label instead of GA4 raw value */}
          <p className="results__panel-value">
            {formatSourceLabel(safe.topTrafficSource)}
          </p>

          {Array.isArray(safe.topSources) && safe.topSources.length ? (
            <div className="results__sources">
              <p className="results__group-title">Top sources (sessions)</p>

              <ul className="results__list">
                {safe.topSources.map((s) => {
                  const label = formatSourceLabel(s.source);
                  const hint = formatSourceHint(s.source);

                  return (
                    <li key={s.source} className="results__list-item">
                      <span className="results__mono">
                        {label}
                        {hint ? (
                          <span style={{ display: "block", opacity: 0.7, fontSize: 12 }}>
                            {hint}
                          </span>
                        ) : null}
                      </span>

                      <span className="results__badge">{s.sessions}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="results__section">
        <h2 className="results__h2">Engagement</h2>

        <div className="results__panel">
          <p className="results__panel-label">Top pages (views)</p>

          <div className="results__group">
            <p className="results__group-title">Events</p>
            <ul className="results__list">
              {eventsPages.map((p) => (
                <li key={p.path} className="results__list-item">
                  <span className="results__mono">{formatPath(p.path)}</span>
                  <span className="results__badge">{p.views}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="results__group">
            <p className="results__group-title">Fitness</p>
            <ul className="results__list">
              {fitnessPages.map((p) => (
                <li key={p.path} className="results__list-item">
                  <span className="results__mono">{formatPath(p.path)}</span>
                  <span className="results__badge">{p.views}</span>
                </li>
              ))}
            </ul>
          </div>

          {otherPages.length ? (
            <div className="results__group">
              <p className="results__group-title">Other</p>
              <ul className="results__list">
                {otherPages.map((p) => (
                  <li key={p.path} className="results__list-item">
                    <span className="results__mono">{formatPath(p.path)}</span>
                    <span className="results__badge">{p.views}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="results__section">
        <h2 className="results__h2">Conversion</h2>

        <div className="results__conv-grid">
          <div className="results__panel">
            <p className="results__panel-label">Contact form submits</p>
            <p className="results__panel-value">{safe.contactSubmits}</p>
          </div>

          <div className="results__panel">
            <p className="results__panel-label">Booking / Registration clicks</p>
            <p className="results__panel-value">{safe.bookingClicks}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

function KpiCard({ label, value }) {
  return (
    <div className="results__card">
      <p className="results__card-label">{label}</p>
      <p className="results__card-value">{value}</p>
    </div>
  );
}