import React from "react";

export default function PhaseCard({ phase, onClick, active }) {
  return (
    <div className="phase-card" onClick={onClick}>
      <div className="flex items-start gap-4">
        <div className="phase-number">{phase.id}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>{phase.title}</div>
          <div style={{ color: "var(--muted)", marginTop: 6, fontSize: 13 }}>{phase.subtitle}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          {active ? "Active" : "Tap to open"}
        </div>
        <div>
          <button className="btn" onClick={(e)=>{ e.stopPropagation(); onClick && onClick(); }}>Open</button>
        </div>
      </div>
    </div>
  );
}
