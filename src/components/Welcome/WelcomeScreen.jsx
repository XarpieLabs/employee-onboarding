import React from 'react';
import { useTranslation } from 'react-i18next'; 
import welcome1 from '../../Asset/welcome1.png';
import welcome2 from '../../Asset/welcome2.png';
import welcome3 from '../../Asset/welcome3.png';
import welcome4 from '../../Asset/welcome4.png';
import logoDark from '../../Asset/logoDark.png';

export default function WelcomeScreen({ onGetStarted }) {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      image: welcome1,
      title: 'Learn',
      subtitle: 'Mission & Values',
      delay: '0.3s'
    },
    {
      id: 2,
      image: welcome2,
      title: 'Create',
      subtitle: 'Your Profile',
      delay: '0.5s'
    },
    {
      id: 3,
      image: welcome3,
      title: 'Sign',
      subtitle: 'Documents',
      delay: '0.7s'
    },
    {
      id: 4,
      image: welcome4,
      title: 'Learn',
      subtitle: 'Your Role',
      delay: '0.9s'
    }
  ];

return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
      position: 'relative'
    }}>
      {/* Logo */}
      <div style={{
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
        animation: 'fadeInDown 0.8s ease-out',
        zIndex: 1
      }}>
        <img
          src={logoDark}
          alt="IndiVillage Technology"
          style={{
            height: 'clamp(50px, 7vw, 80px)',
            width: 'auto'
          }}
        />
      </div>
      
      {/* Main Card */}
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white',
        outline: '3px solid #4a9d95',
        outlineOffset: '0px',
        animation: 'scaleIn 0.8s ease-out 0.2s both',
        transform: 'scale(0.95)',
        opacity: 0,
        zIndex: 2
      }}>
        {/* Header Section with Gradient */}
        <div style={{
          padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>

          <h1 style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: '700',
            color: '#fde68a',
            margin: '0 0 0.3rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            Welcome to the Indivillage Onboarding
          </h1>
          <p style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
            color: 'white',
            margin: 0,
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            What you will achieve Experience
          </p>
        </div>

        {/* Features Section */}
        <div style={{
          padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
          background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 'clamp(0.5rem, 1vw, 0.75rem)', // 👈 REDUCED GAP (was 1rem, 2vw, 1.5rem)
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
            justifyItems: 'center'
          }}>
            {features.map((feature) => (
              <div
                key={feature.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  animation: `fadeInUpBounce 1s ease-out ${feature.delay} both`,
                  opacity: 0,
                  transform: 'translateY(60px)',
                  maxWidth: '160px'
                }}
              >
                {/* Image Circle - NO HOVER ANIMATION */}
                <div style={{
                  width: 'clamp(80px, 12vw, 100px)',
                  height: 'clamp(80px, 12vw, 100px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '0.6rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15), 0 0 0 3px white, 0 0 0 4px #cbd5e0',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                  // 👈 REMOVED: transition, cursor, onMouseEnter, onMouseLeave
                }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Text */}
                <h3 style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                  fontWeight: '700',
                  color: '#1a365d',
                  margin: '0 0 0.2rem 0',
                  lineHeight: 1.2
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.6rem, 1.3vw, 0.75rem)',
                  color: '#2d3748',
                  margin: 0,
                  lineHeight: 1.3,
                  fontWeight: '400'
                }}>
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeInScale 1s ease-out 1.2s both',
            opacity: 0,
            transform: 'scale(0.9)'
          }}>
            <button
              onClick={onGetStarted}
              style={{
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                fontWeight: '700',
                color: '#1e5a8e',
                background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                letterSpacing: '0.02em',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUpBounce {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px);
          }
          80% {
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}