import React from "react";

export default function Results() {
  // ✅ Mock data for now (we’ll replace with GA4 Data API later)
  const data = {
    users30d: 1240,
    newUsers30d: 860,
    avgEngagementTime: "2m 34s",
    contactSubmits: 42,
    bookingClicks: 19,
    topTrafficSource: "Organic Search",
    topPages: [
      { path: "/", views: 980 },
      { path: "/birthdayparties", views: 520 },
      { path: "/specialevents", views: 310 },
      { path: "/mommyandme", views: 260 },
      { path: "/contact", views: 190 },
    ],
  };

  // ✅ Health metric
  const totalConversions = data.contactSubmits + data.bookingClicks;
  const conversionRate =
    data.users30d > 0
      ? ((totalConversions / data.users30d) * 100).toFixed(1)
      : "0.0";

  return (
    <section style={styles.wrap}>
      <header style={styles.header}>
        <p style={styles.eyebrow}>RESULTS</p>
        <h1 style={styles.title}>StepByStep Club Dashboard</h1>
        <p style={styles.sub}>Last 30 days (mock data for now)</p>
      </header>

      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KpiCard label="Users (30 days)" value={data.users30d} />
        <KpiCard label="New users" value={data.newUsers30d} />
        <KpiCard label="Avg engagement time" value={data.avgEngagementTime} />
        <KpiCard label="Conversion rate" value={`${conversionRate}%`} />
      </div>

      {/* Acquisition */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Acquisition</h2>
        <div style={styles.panel}>
          <p style={styles.panelLabel}>Top traffic source</p>
          <p style={styles.panelValue}>{data.topTrafficSource}</p>
        </div>
      </section>

      {/* Engagement */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Engagement</h2>
        <div style={styles.panel}>
          <p style={styles.panelLabel}>Top pages (views)</p>

          <ul style={styles.list}>
            {data.topPages.map((p) => (
              <li key={p.path} style={styles.listItem}>
                <span style={styles.mono}>{p.path}</span>
                <span style={styles.badge}>{p.views}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conversion */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Conversion</h2>

        <div style={styles.convGrid}>
          <div style={styles.panel}>
            <p style={styles.panelLabel}>Contact form submits</p>
            <p style={styles.panelValue}>{data.contactSubmits}</p>
          </div>

          <div style={styles.panel}>
            <p style={styles.panelLabel}>Booking / registration clicks</p>
            <p style={styles.panelValue}>{data.bookingClicks}</p>
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