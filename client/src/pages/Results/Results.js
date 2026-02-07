import React, { useEffect, useMemo, useState } from "react";

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

  // ✅ Fallback (so page never crashes even if API returns missing fields)
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

  // ✅ Health metric
  const totalConversions = safe.contactSubmits + safe.bookingClicks;
  const conversionRate =
    safe.users30d > 0
      ? ((totalConversions / safe.users30d) * 100).toFixed(1)
      : "0.0";

  return (
    <section style={styles.wrap}>
      <header style={styles.header}>
        <p style={styles.eyebrow}>RESULTS</p>
        <h1 style={styles.title}>StepByStep Club Dashboard</h1>

        {status.loading ? (
          <p style={styles.sub}>Loading results…</p>
        ) : status.error ? (
          <p style={{ ...styles.sub, ...styles.error }}>
            Couldn’t load results: {status.error}
          </p>
        ) : (
          <p style={styles.sub}>{safe.rangeLabel || "Last 30 days"}</p>
        )}
      </header>

      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KpiCard label="Users (30 days)" value={safe.users30d} />
        <KpiCard label="New users" value={safe.newUsers30d} />
        <KpiCard label="Avg engagement time" value={safe.avgEngagementTime} />
        <KpiCard label="Conversion rate" value={`${conversionRate}%`} />
      </div>

      {/* Acquisition */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Acquisition</h2>
        <div style={styles.panel}>
          <p style={styles.panelLabel}>Top traffic source</p>
          <p style={styles.panelValue}>{safe.topTrafficSource}</p>
        </div>
      </section>

      {/* Engagement */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Engagement</h2>
        <div style={styles.panel}>
          <p style={styles.panelLabel}>Top pages (views)</p>

          {safe.topPages?.length ? (
            <ul style={styles.list}>
              {safe.topPages.map((p) => (
                <li key={p.path} style={styles.listItem}>
                  <span style={styles.mono}>{p.path}</span>
                  <span style={styles.badge}>{p.views}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ ...styles.sub, marginTop: 10, opacity: 0.75 }}>
              No page data yet.
            </p>
          )}
        </div>
      </section>

      {/* Conversion */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Conversion</h2>

        <div style={styles.convGrid}>
          <div style={styles.panel}>
            <p style={styles.panelLabel}>Contact form submits</p>
            <p style={styles.panelValue}>{safe.contactSubmits}</p>
          </div>

          <div style={styles.panel}>
            <p style={styles.panelLabel}>Booking / registration clicks</p>
            <p style={styles.panelValue}>{safe.bookingClicks}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

function KpiCard({ label, value }) {
  return (
    <div style={styles.card}>
      <p style={styles.cardLabel}>{label}</p>
      <p style={styles.cardValue}>{value}</p>
    </div>
  );
}

const styles = {
  wrap: {
    padding: "32px 18px 60px",
    maxWidth: 1100,
    margin: "0 auto",
    color: "#0e2034",
  },
  header: {
    marginBottom: 18,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: "0.22em",
    fontWeight: 800,
    opacity: 0.7,
    margin: 0,
  },
  title: {
    margin: "10px 0 6px",
    fontSize: "clamp(26px, 4vw, 38px)",
    letterSpacing: "-0.02em",
  },
  sub: {
    margin: 0,
    opacity: 0.8,
    lineHeight: 1.6,
  },
  error: {
    color: "#b42318",
    opacity: 0.95,
    fontWeight: 700,
  },
  kpiGrid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginTop: 16,
  },
  card: {
    background: "rgba(14, 32, 52, 0.03)",
    border: "1px solid rgba(14, 32, 52, 0.10)",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 10px 30px rgba(14, 32, 52, 0.06)",
  },
  cardLabel: {
    margin: 0,
    fontSize: 12,
    fontWeight: 800,
    opacity: 0.7,
  },
  cardValue: {
    margin: "10px 0 0",
    fontSize: 26,
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  section: {
    marginTop: 28,
  },
  h2: {
    margin: "0 0 10px",
    fontSize: 18,
    letterSpacing: "-0.01em",
  },
  panel: {
    background: "rgba(14, 32, 52, 0.02)",
    border: "1px solid rgba(14, 32, 52, 0.10)",
    borderRadius: 16,
    padding: 16,
  },
  panelLabel: {
    margin: 0,
    fontSize: 12,
    fontWeight: 800,
    opacity: 0.7,
  },
  panelValue: {
    margin: "10px 0 0",
    fontSize: 18,
    fontWeight: 900,
  },
  convGrid: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "12px 0 0",
    display: "grid",
    gap: 10,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  mono: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 13,
    opacity: 0.9,
  },
  badge: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(21, 183, 232, 0.14)",
    border: "1px solid rgba(21, 183, 232, 0.22)",
  },
};