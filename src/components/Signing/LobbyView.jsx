import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import lobbyBg from '../../Asset/lobby-bg-wide.png';
import pointerHand from '../../Asset/pointer-hand.png';

export default function LobbyView({
  hrCompleted,
  financeCompleted,
  allCompleted,
  onDoorClick,
  onComplete
}) {
  const containerRef = useRef(null);
  const [doorPositions, setDoorPositions] = useState({ hr: {}, finance: {} });

  // Calculate door positions based on how background-size: cover works
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const containerRatio = containerWidth / containerHeight;

      // Your image's original dimensions (adjust these to match your actual image)
      const imageWidth = 1920;
      const imageHeight = 1080;
      const imageRatio = imageWidth / imageHeight;

      let scale, offsetX = 0, offsetY = 0;

      // Calculate how background-size: cover scales the image
      if (containerRatio > imageRatio) {
        // Container is wider - image will be cropped top/bottom
        scale = containerWidth / imageWidth;
        const scaledHeight = imageHeight * scale;
        offsetY = (containerHeight - scaledHeight) / 2;
      } else {
        // Container is taller - image will be cropped left/right
        scale = containerHeight / imageHeight;
        const scaledWidth = imageWidth * scale;
        offsetX = (containerWidth - scaledWidth) / 2;
      }

      // Door positions
      const originalDoors = {
        hr: {
          x: 793,
          y: 390,
          width: 235,
          height: 410
        },
        finance: {
          x: 1156,
          y: 390,
          width: 260,
          height: 410
        }
      };

      // Convert to screen coordinates
      const calculateDoorStyle = (door) => ({
        left: `${offsetX + (door.x * scale)}px`,
        top: `${offsetY + (door.y * scale)}px`,
        width: `${door.width * scale}px`,
        height: `${door.height * scale}px`
      });

      setDoorPositions({
        hr: calculateDoorStyle(originalDoors.hr),
        finance: calculateDoorStyle(originalDoors.finance),
        // Also calculate pointer and badge positions
        pointers: {
          hr: {
            left: `${offsetX + (79 * scale)}px`,
            top: `${offsetY + (400* scale)}px`
          },
          finance: {
            left: `${offsetX + (1150 * scale)}px`,
            top: `${offsetY + (400 * scale)}px`
          }
        },
        badges: {
          hr: {
            left: `${offsetX + (614 * scale)}px`,
            top: `${offsetY + (194 * scale)}px`
          },
          finance: {
            left: `${offsetX + (1114 * scale)}px`,
            top: `${offsetY + (194 * scale)}px`
          }
        }
      });
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    
    // Also recalculate after a short delay to ensure image is loaded
    const timer = setTimeout(calculatePositions, 100);

    return () => {
      window.removeEventListener('resize', calculatePositions);
      clearTimeout(timer);
    };
  }, []);

  // Hand pointer configurations
  const pointers = {
    hr: { left: '25%', top: '43%' },
    finance: { left: '65%', top: '43%' }
  };

  // Badge configurations
  const badges = {
    hr: { left: '32%', top: '18%' },
    finance: { left: '58%', top: '18%' }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundImage: `url(${lobbyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}
    >
      {/* HR Door Clickable Area */}
      <button
        onClick={() => onDoorClick('hr')}
        aria-label="Enter HR Department"
        style={{
          position: 'absolute',
          left: doorPositions.hr.left || '32%',
          top: doorPositions.hr.top || '48%',
          width: doorPositions.hr.width || '12%',
          height: doorPositions.hr.height || '42%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent',
          border: '2px dashed transparent',
          cursor: 'pointer',
          outline: 'none',
          zIndex: 10,
          transition: 'all 0.3s ease',
          borderRadius: '8px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(128, 128, 128, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(128, 128, 128, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
        }}
      />

      {/* Finance Door Clickable Area */}
      <button
        onClick={() => onDoorClick('finance')}
        aria-label="Enter Finance Department"
        style={{
          position: 'absolute',
          left: doorPositions.finance.left || '58%',
          top: doorPositions.finance.top || '48%',
          width: doorPositions.finance.width || '12%',
          height: doorPositions.finance.height || '42%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent',
          border: '2px dashed transparent',
          cursor: 'pointer',
          outline: 'none',
          zIndex: 10,
          transition: 'all 0.3s ease',
          borderRadius: '8px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(128, 128, 128, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(128, 128, 128, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
        }}
      />

      {/* HR Hand Pointer */}
      {!hrCompleted && (
        <div
          style={{
            position: 'absolute',
            left: doorPositions.pointers?.hr.left || '25%',
            top: doorPositions.pointers?.hr.top || '43%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(35px, 4vw, 55px)',
            maxWidth: '55px',
            animation: 'floatY 1.4s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <img
            src={pointerHand}
            alt="Click HR Door"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      )}

      {/* Finance Hand Pointer */}
      {!financeCompleted && (
        <div
          style={{
            position: 'absolute',
            left: doorPositions.pointers?.finance.left || '65%',
            top: doorPositions.pointers?.finance.top || '43%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(35px, 4vw, 55px)',
            maxWidth: '55px',
            animation: 'floatY 1.4s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 5
          }}
        >
          <img
            src={pointerHand}
            alt="Click Finance Door"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      )}

      {/* HR Complete Badge */}
      {hrCompleted && (
        <Badge 
          left={doorPositions.badges?.hr.left || '32%'} 
          top={doorPositions.badges?.hr.top || '18%'} 
          label="Complete" 
        />
      )}

      {/* Finance Complete Badge */}
      {financeCompleted && (
        <Badge 
          left={doorPositions.badges?.finance.left || '58%'} 
          top={doorPositions.badges?.finance.top || '18%'} 
          label="Complete" 
        />
      )}

      {/* Continue Button */}
      {allCompleted && (
        <div
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'fadeInUp 0.6s ease-in',
            zIndex: 20
          }}
        >
          <button
            onClick={onComplete}
            className="btn"
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
              padding: 'clamp(0.7rem, 1.5vw, 0.9rem) clamp(2rem, 4vw, 2.5rem)',
              minHeight: 'clamp(42px, 7vw, 48px)'
            }}
          >
            Continue to Next Step →
          </button>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes floatY {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0); 
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-15px); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translate(-50%, 30px); 
          }
          to { 
            opacity: 1; 
            transform: translate(-50%, 0); 
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
    </div>
  );
}

/* Badge Component */
function Badge({ left, top, label }) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        transform: 'translate(-50%, -50%)',
        background: 'rgba(16, 185, 129, 0.95)',
        color: 'white',
        fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
        fontWeight: '600',
        padding: 'clamp(0.35rem, 0.7vw, 0.55rem) clamp(0.7rem, 1.3vw, 1rem)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.5)',
        animation: 'fadeIn 0.4s ease-in',
        pointerEvents: 'none',
        zIndex: 20
      }}
    >
      <CheckCircle size={16} />
      {label}
    </div>
  );
}