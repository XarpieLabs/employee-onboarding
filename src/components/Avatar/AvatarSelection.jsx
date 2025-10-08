// ============================================
// FILE: src/components/Avatar/AvatarSelection.jsx
// STEP 13: Certificate with IndiVillage Logo
// ============================================
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
];

const AVATAR_BACKGROUNDS = [
  "#d4f1e8",
  "#ffe8cc",
  "#ffd4e5",
  "#c5f2dc",
  "#fffacd",
  "#d0f0fd",
  "#ffd4f4",
  "#ffe4cc",
];

export default function AvatarSelection({ onDone, logo, onAvatarSelect }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(4);

  const handleAvatarSelect = (index) => {
    setSelected(index);
    if (onAvatarSelect) onAvatarSelect(AVATARS[index]);
  };

  const handleContinue = () => {
    if (onDone) onDone(AVATARS[selected]);
  };

  return (
    <div
      className="avatar-selection-wrapper avatar-screen-bg"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(0.5rem, 2vw, 1rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(1rem, 2.5vw, 2rem)",
          width: "100%",
          maxWidth: "90rem",
        }}
      >
        <p
          style={{
            color: "#374151",
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            textAlign: "center",
            margin: 0,
          }}
        >
          {t('welcome.employee')}
        </p>

        <h3
          style={{
            fontSize: "clamp(1.1rem, 3.5vw, 2rem)",
            fontWeight: "bold",
            color: "#1f2937",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {t('avatar.title')}
        </h3>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            overflowX: "auto",
            overflowY: "visible",
            padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(0.5rem, 1vw, 1rem)",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            style={{
              backgroundColor: "#b6e2f5",
              borderRadius: "9999px",
              padding: "clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 3rem)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              border: "clamp(3px, 0.4vw, 4px) solid #7ec8e3",
              minWidth: "fit-content",
              overflow: "visible",
              display: "inline-flex",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(0.5rem, 1.5vw, 1.5rem)",
                flexWrap: "nowrap",
                padding: "clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              {AVATARS.map((src, index) => (
                <div
                  key={index}
                  onClick={() => handleAvatarSelect(index)}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                    transform: selected === index ? "scale(1.05)" : "scale(0.92)",
                    opacity: selected === index ? 1 : 0.7,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {selected === index && (
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: "clamp(-10px, -1.5vw, -16px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "clamp(8px, 1.2vw, 12px) solid transparent",
                        borderRight: "clamp(8px, 1.2vw, 12px) solid transparent",
                        borderTop: "clamp(12px, 1.8vw, 16px) solid #fb923c",
                        zIndex: 20,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div
                    style={{
                      width: "clamp(50px, 8vw, 100px)",
                      height: "clamp(50px, 8vw, 100px)",
                      borderRadius: "clamp(12px, 2vw, 18px)",
                      overflow: "hidden",
                      transition: "all 200ms ease",
                      border: selected === index 
                        ? "clamp(2px, 0.4vw, 4px) solid #3b82f6" 
                        : "clamp(2px, 0.3vw, 3px) solid transparent",
                      boxShadow: selected === index 
                        ? "0 6px 16px rgba(59,130,246,0.25)" 
                        : "0 2px 6px rgba(0,0,0,0.1)",
                      background: AVATAR_BACKGROUNDS[index],
                      padding: "clamp(6px, 1.2vw, 12px)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Avatar ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "clamp(8px, 1.5vw, 14px)",
                      }}
                    />
                  </div>

                  {selected === index && (
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        bottom: "clamp(-10px, -1.5vw, -16px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "clamp(8px, 1.2vw, 12px) solid transparent",
                        borderRight: "clamp(8px, 1.2vw, 12px) solid transparent",
                        borderBottom: "clamp(12px, 1.8vw, 16px) solid #fb923c",
                        zIndex: 20,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(0.75rem, 1.5vw, 1.5rem)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            type="button"
            className="btn"
            onClick={handleContinue}
          >
            {t('avatar.button')}
          </button>
        </div>
      </div>
    </div>
  );
}