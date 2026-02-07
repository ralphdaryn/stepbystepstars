import React, { useEffect, useMemo, useState } from "react";
import "./Results.scss";

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

  // ✅ Safe fallback so UI never breaks
  const safe = useMemo(() => {
    const fallback = {
      users30d: 0,
      newUsers30d: 0,
      avgEngagementTime: "—",
      contactSubmits: 0,
      bookingClicks: 0,
      topTrafficSource: "—",
      topPages: [],
      rangeLabel: "Last 30 days",
    };

    return { ...fallback, ...(data || {}) };
  }, [data]);

  // ✅ Conversion rate
  const totalConversions = safe.contactSubmits + safe.bookingClicks;
  const conversionRate =
    safe.users30d > 0
      ? ((totalConversions / safe.users30d) * 100).toFixed(1)
      : "0.0";

  // ✅ Format page path for client-friendly display
  const formatPath = (path) => {
    if (path === "/") return "/homepage";
    return path;
  };

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

      {/* KPI Cards */}
      <div className="results__kpi-grid">
        <KpiCard label="Users (30 days)" value={safe.users30d} />
        <KpiCard label="New users" value={safe.newUsers30d} />
        <KpiCard label="Avg engagement time" value={safe.avgEngagementTime} />
        <KpiCard label="Conversion rate" value={`${conversionRate}%`} />
      </div>

      {/* Acquisition */}
      <section className="results__section">
        <h2 className="results__h2">Acquisition</h2>
        <div className="results__panel">
          <p className="results__panel-label">Top traffic source</p>
          <p className="results__panel-value">{safe.topTrafficSource}</p>
        </div>
      </section>

      {/* Engagement */}
      <section className="results__section">
        <h2 className="results__h2">Engagement</h2>
        <div className="results__panel">
          <p className="results__panel-label">Top pages (views)</p>

          {safe.topPages?.length ? (
            <ul className="results__list">
              {safe.topPages.map((p) => (
                <li key={p.path} className="results__list-item">
                  <span className="results__mono">
                    {formatPath(p.path)}
                  </span>
                  <span className="results__badge">{p.views}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="results__empty">No page data yet.</p>
          )}
        </div>
      </section>

      {/* Conversion */}
      <section className="results__section">
        <h2 className="results__h2">Conversion</h2>

        <div className="results__conv-grid">
          <div className="results__panel">
            <p className="results__panel-label">Contact form submits</p>
            <p className="results__panel-value">{safe.contactSubmits}</p>
          </div>
          <div className="results__panel">
            <p className="results__panel-label">
              Booking / Registration clicks
            </p>
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