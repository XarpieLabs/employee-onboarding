// ============================================
// FILE: src/components/OfficeTour/OfficeTour.jsx
// STEP 4: Office Location
// ============================================

import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export default function OfficeTour({ onComplete }) {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
    }}>
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            marginBottom: '1rem',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
          }}>
            <Building2 size={40} color="white" />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '0.5rem'
          }}>
            About Your New Office
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: '#64748b'
          }}>
            Find your way to IndiVillage Technology
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '2px solid #e2e8f0'
          }}>
            <MapPin style={{ width: '32px', height: '32px', color: '#176a5c' }} />
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              fontWeight: '700', 
              margin: 0,
              color: '#1e293b'
            }}>
              Office Location
            </h3>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Building2 size={24} color="#667eea" />
                  Address
                </h4>
                <p style={{ 
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', 
                  color: '#475569', 
                  lineHeight: '1.8', 
                  marginBottom: '0'
                }}>
                  <strong style={{ color: '#1e293b' }}>IndiVillage Technology Pvt Ltd</strong><br />
                  #42, 3rd Floor, Prestige Towers<br />
                  MG Road, Bengaluru - 560001<br />
                  Karnataka, India
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#64748b', 
                      margin: '0 0 0.25rem 0',
                      fontWeight: '500'
                    }}>
                      Contact Number
                    </p>
                    <p style={{ 
                      fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', 
                      color: '#1e293b',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      +91 80 1234 5678
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#64748b', 
                      margin: '0 0 0.25rem 0',
                      fontWeight: '500'
                    }}>
                      Email Address
                    </p>
                    <p style={{ 
                      fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', 
                      color: '#1e293b',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      hr@indivillage.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              width: '100%',
              height: '500px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '3px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9358656516754!2d77.60063931482183!3d12.975397990856873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IndiVillage Office Location"
              />
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)',
            borderRadius: '12px',
            padding: 'clamp(1rem, 2vw, 1.5rem)',
            marginBottom: '2rem',
            border: '2px solid #93c5fd'
          }}>
            <h4 style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '0.75rem'
            }}>
              How to Reach
            </h4>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#475569',
              lineHeight: '1.7',
              margin: 0
            }}>
              Our office is conveniently located in the heart of Bengaluru on MG Road. 
              The nearest metro station is MG Road Metro Station (Blue Line), just a 5-minute walk away. 
              Ample parking is available in the Prestige Towers parking facility.
            </p>
          </div>

          <button
            onClick={onComplete}
            className="btn"
            style={{
              width: '100%',
              background: '#176a5c',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              padding: '1rem 2rem'
            }}
          >
            Continue to Next Step →
          </button>
        </div>
      </div>
    </div>
  );
}