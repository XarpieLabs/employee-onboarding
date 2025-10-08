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
      width: '100%',
      minHeight: '100vh',
      padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'white',
          marginBottom: '1rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          padding: '1rem'
        }}>
          <img 
            src={logoDark} 
            alt="IndiVillage Logo" 
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '0.5rem',
          fontFamily: 'Roboto, sans-serif'
        }}>
          Congratulations!
        </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: '#64748b',
          fontFamily: 'Roboto, sans-serif'
        }}>
          You've completed the onboarding journey
        </p>
      </div>

      <div className="certificate-container" id="certificate">
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
              #176a5c,
              #176a5c 10px,
              transparent 10px,
              transparent 20px
            )
          `,
          pointerEvents: 'none'
        }} />

        <div className="certificate-header">
          <div style={{
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img 
              src={logoDark} 
              alt="IndiVillage Logo" 
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          <h1 className="certificate-title" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Certificate of Completion
          </h1>
          <p className="certificate-subtitle" style={{ fontFamily: 'Roboto, sans-serif' }}>
            IndiVillage Technology - Employee Onboarding Program
          </p>
        </div>

        <div className="certificate-body">
          <p className="certificate-text" style={{ fontFamily: 'Roboto, sans-serif' }}>
            This is to certify that
          </p>
          
          <div className="certificate-name" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {userName}
          </div>

          <p className="certificate-text" style={{ marginTop: '1.5rem', fontFamily: 'Roboto, sans-serif' }}>
            has successfully completed the comprehensive onboarding program at IndiVillage Technology
            {role && (
              <span>
                <br />
                for the position of <strong>{role.title}</strong>
              </span>
            )}
          </p>

          <p className="certificate-text" style={{ 
            marginTop: '1.5rem', 
            fontSize: '1rem', 
            color: '#6b7280',
            fontFamily: 'Roboto, sans-serif'
          }}>
            This program covered company culture, values, policies, and role-specific training,
            demonstrating commitment to excellence and professional development.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '1rem',
              background: '#f8fafc',
              borderRadius: '8px',
              minWidth: '150px'
            }}>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6b7280', 
                marginBottom: '0.25rem',
                fontFamily: 'Roboto, sans-serif'
              }}>
                Completion Date
              </p>
              <p style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#111827',
                fontFamily: 'Roboto, sans-serif'
              }}>
                {currentDate}
              </p>
            </div>
            {role && (
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '8px',
                minWidth: '150px'
              }}>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#6b7280', 
                  marginBottom: '0.25rem',
                  fontFamily: 'Roboto, sans-serif'
                }}>
                  Department
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  color: '#111827',
                  fontFamily: 'Roboto, sans-serif'
                }}>
                  {role.department}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="certificate-footer">
          <div className="certificate-signature">
            <div className="certificate-signature-line" />
            <p style={{ 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '0.25rem',
              fontFamily: 'Roboto, sans-serif'
            }}>
              CEO Signature
            </p>
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#6b7280',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Chief Executive Officer
            </p>
          </div>

          <div className="certificate-signature">
            <div className="certificate-signature-line" />
            <p style={{ 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '0.25rem',
              fontFamily: 'Roboto, sans-serif'
            }}>
              HR Director
            </p>
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#6b7280',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Human Resources
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#f0fdf4',
          border: '2px solid #86efac',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#166534',
            margin: 0,
            fontWeight: '500',
            fontFamily: 'Roboto, sans-serif'
          }}>
            Certificate ID: IV-{Math.random().toString(36).substring(2, 11).toUpperCase()}
          </p>
        </div>
      </div>

      <div className="certificate-actions" style={{ marginTop: '2rem' }}>
        <button
          onClick={handlePrint}
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#6366f1',
            fontFamily: 'Roboto, sans-serif'
          }}
        >
          <Printer size={20} />
          Print Certificate
        </button>

        <button
          onClick={handleDownload}
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#8b5cf6',
            fontFamily: 'Roboto, sans-serif'
          }}
        >
          <Download size={20} />
          Download PDF
        </button>

        <button
          onClick={onComplete}
          className="btn"
          style={{
            background: '#176a5c',
            fontFamily: 'Roboto, sans-serif'
          }}
        >
          Complete Onboarding →
        </button>
      </div>

      <div style={{
        marginTop: '2rem',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <p style={{
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: '#64748b',
          lineHeight: '1.6',
          fontFamily: 'Roboto, sans-serif'
        }}>
          Welcome to the IndiVillage family! We're excited to have you on board.
          Your journey with us is just beginning, and we look forward to your contributions
          and growth with our team.
        </p>
      </div>
    </div>
  );
}