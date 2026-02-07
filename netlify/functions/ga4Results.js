// netlify/functions/ga4Results.js

exports.handler = async () => {
  try {
    // ✅ Mock response (we’ll replace with real GA4 Data API next)
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
      rangeLabel: "Last 30 days (mock)",
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // optional but helpful for debugging
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to load results",
        details: err?.message || String(err),
      }),
    };
  }
};
