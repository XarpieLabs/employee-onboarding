// ============================================
// FILE: src/components/Certificate/Certificate.jsx
// STEP 13: Certificate with IndiVillage Logo
// ============================================

import React from 'react';
import { Download, Printer } from 'lucide-react';
import logoDark from '../../Asset/logoDark.png';

export default function Certificate({ userName = "Employee Name", role, onComplete }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
      position: 'relative'
    }}>
      {/* Main Card */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1600px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white'
      }}>
        {/* Header Section with Gradient */}
        <div style={{
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.75rem, 1.5vw, 1.25rem)',
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
            fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
            fontWeight: '700',
            color: '#fde68a',
            margin: '0 0 0.3rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            Congratulations on Completing Your Onboarding!
          </h1>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            color: 'white',
            margin: 0,
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            Your official certificate of completion
          </p>
        </div>

        {/* Content Section */}
        <div style={{
          background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
          padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)'
        }}>
          {/* Certificate Container */}
          <div id="certificate" style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(2rem, 4vw, 2.5rem)',
            background: 'white',
            borderRadius: '12px',
            border: '6px solid #2c7a7b',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              background: `
                repeating-linear-gradient(
                  45deg,
                  #2c7a7b,
                  #2c7a7b 10px,
                  transparent 10px,
                  transparent 20px
                )
              `,
              pointerEvents: 'none',
              borderRadius: '6px'
            }} />

            {/* Certificate Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
              <div style={{
                marginBottom: '0.85rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src={logoDark} 
                  alt="IndiVillage Logo" 
                  style={{
                    height: 'clamp(40px, 6vw, 50px)',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h1 style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                fontWeight: '900',
                color: '#2c7a7b',
                marginBottom: '0.5rem',
                margin: '0 0 0.5rem 0'
              }}>
                Certificate of Completion
              </h1>
              <p style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                color: '#6b7280',
                margin: 0
              }}>
                IndiVillage Technology - Employee Onboarding Program
              </p>
            </div>

            {/* Certificate Body */}
            <div style={{ textAlign: 'center', margin: '1.5rem 0', position: 'relative' }}>
              <p style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                color: '#374151',
                lineHeight: '1.6',
                margin: '0.75rem 0'
              }}>
                This is to certify that
              </p>
              
              <div style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(1.35rem, 3vw, 1.65rem)',
                fontWeight: '700',
                color: '#111827',
                margin: '0.75rem 0',
                borderBottom: '2px solid #2c7a7b',
                display: 'inline-block',
                padding: '0.35rem 1.5rem'
              }}>
                {userName}
              </div>

              <p style={{ 
                marginTop: '1.25rem', 
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                color: '#374151',
                lineHeight: '1.6',
                margin: '1.25rem 0 0.75rem'
              }}>
                has successfully completed the comprehensive onboarding program at IndiVillage Technology
                {role && (
                  <span>
                    <br />
                    for the position of <strong>{role.title}</strong>
                  </span>
                )}
              </p>

              <p style={{ 
                marginTop: '1rem', 
                fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)', 
                color: '#6b7280',
                fontFamily: 'Roboto, sans-serif',
                lineHeight: '1.6',
                margin: '1rem 0 0'
              }}>
                This program covered company culture, values, policies, and role-specific training,
                demonstrating commitment to excellence and professional development.
              </p>

              {/* Info Boxes */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
                marginTop: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  minWidth: '140px',
                  border: '1px solid #e5e7eb'
                }}>
                  <p style={{ 
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)', 
                    color: '#6b7280', 
                    marginBottom: '0.2rem',
                    fontFamily: 'Roboto, sans-serif',
                    margin: '0 0 0.2rem 0'
                  }}>
                    Completion Date
                  </p>
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
                    fontWeight: '600', 
                    color: '#111827',
                    fontFamily: 'Roboto, sans-serif',
                    margin: 0
                  }}>
                    {currentDate}
                  </p>
                </div>
                {role && (
                  <div style={{
                    textAlign: 'center',
                    padding: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    minWidth: '140px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <p style={{ 
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)', 
                      color: '#6b7280', 
                      marginBottom: '0.2rem',
                      fontFamily: 'Roboto, sans-serif',
                      margin: '0 0 0.2rem 0'
                    }}>
                      Department
                    </p>
                    <p style={{ 
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)', 
                      fontWeight: '600', 
                      color: '#111827',
                      fontFamily: 'Roboto, sans-serif',
                      margin: 0
                    }}>
                      {role.department}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Certificate Footer - Signatures */}
            <div style={{
              marginTop: '2.5rem',
              paddingTop: '1.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '2px solid #e5e7eb',
              position: 'relative',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center', flex: 1, minWidth: '120px' }}>
                <div style={{ 
                  borderTop: '2px solid #111827',
                  width: '160px',
                  margin: '0 auto 0.35rem'
                }} />
                <p style={{ 
                  fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)', 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '0.2rem',
                  fontFamily: 'Roboto, sans-serif',
                  margin: '0 0 0.2rem 0'
                }}>
                  CEO Signature
                </p>
                <p style={{ 
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)', 
                  color: '#6b7280',
                  fontFamily: 'Roboto, sans-serif',
                  margin: 0
                }}>
                  Chief Executive Officer
                </p>
              </div>

              <div style={{ textAlign: 'center', flex: 1, minWidth: '120px' }}>
                <div style={{ 
                  borderTop: '2px solid #111827',
                  width: '160px',
                  margin: '0 auto 0.35rem'
                }} />
                <p style={{ 
                  fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)', 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '0.2rem',
                  fontFamily: 'Roboto, sans-serif',
                  margin: '0 0 0.2rem 0'
                }}>
                  HR Director
                </p>
                <p style={{ 
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)', 
                  color: '#6b7280',
                  fontFamily: 'Roboto, sans-serif',
                  margin: 0
                }}>
                  Human Resources
                </p>
              </div>
            </div>

            {/* Certificate ID */}
            <div style={{
              marginTop: '1.75rem',
              padding: 'clamp(0.75rem, 1.5vw, 0.85rem)',
              background: '#f0fdf4',
              border: '2px solid #86efac',
              borderRadius: '8px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <p style={{
                fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)',
                color: '#166534',
                margin: 0,
                fontWeight: '500',
                fontFamily: 'Roboto, sans-serif'
              }}>
                Certificate ID: IV-{Math.random().toString(36).substring(2, 11).toUpperCase()}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex',
            gap: 'clamp(0.75rem, 1.5vw, 1rem)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Roboto, sans-serif',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                textTransform: 'capitalize',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
              }}
            >
              <Printer size={18} />
              Print Certificate
            </button>

            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Roboto, sans-serif',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                textTransform: 'capitalize',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
              }}
            >
              <Download size={18} />
              Download PDF
            </button>
          </div>

          {/* Continue Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>
            <button
              onClick={onComplete}
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
                letterSpacing: '0.02em'
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
              Complete Onboarding
            </button>
          </div>

          {/* Welcome Message */}
          <div style={{
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#2d3748',
              lineHeight: '1.6',
              fontFamily: 'Roboto, sans-serif',
              margin: 0
            }}>
              Welcome to the IndiVillage family! We are excited to have you on board.
              Your journey with us is just beginning, and we look forward to your contributions
              and growth with our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}