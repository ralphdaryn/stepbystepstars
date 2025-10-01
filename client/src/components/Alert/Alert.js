import { useEffect, useState } from "react";
import "./Alert.scss";

const TARGET = new Date(2025, 10, 9, 0, 0, 0); // Nov 9, 2025 (0-indexed month)

const pad2 = (n) => String(n).padStart(2, "0");
const getRemaining = () => {
  const ms = TARGET - new Date();
  if (ms <= 0) return { ms: 0, d: 0, h: 0, m: 0, s: 0 };
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { ms, d, h, m, s };
};

export default function Alert() {
  const [t, setT] = useState(getRemaining());
  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const done = t.ms <= 0;

  return (
    <>
      <div className="alert-banner" role="status" aria-live="polite">
        <span className="alert-banner__emoji" aria-hidden>
          🎉
        </span>
        <span className="alert-banner__label">
          {done ? "We’re 1 year old today!" : "Celebrating 1 year in"}
        </span>
        {!done && (
          <span className="alert-banner__timer">
            {t.d}d {pad2(t.h)}:{pad2(t.m)}:{pad2(t.s)}
          </span>
        )}
        <span
          className="alert-banner__emoji alert-banner__emoji--end"
          aria-hidden
        >
          🥳
        </span>
      </div>
      <div className="alert-banner__spacer" aria-hidden="true" />
    </>
  );
}