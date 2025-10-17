import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';
// import logoDark from '../../Asset/logoDark.png';

export default function OfficeTour({ onComplete }) {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  // Bengaluru MG Road coordinates
  const latitude = 12.9716;
  const longitude = 77.5946;
  
  // Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank');
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
      {/* Logo */}
      {/* <div style={{
        marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
        animation: 'fadeInDown 0.8s ease-out'
      }}>
        <img
          src={logoDark}
          alt="IndiVillage Technology"
          style={{
            height: 'clamp(25px, 3.5vw, 35px)',
            width: 'auto'
          }}
        />
      </div> */}

      {/* Main Card */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1400px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid #4a9d95'
      }}>
        {/* Header Section */}
        <div style={{
          background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
          padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)',
          borderBottom: '2px solid #3a8d85',
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
            textAlign: 'center',
            marginBottom: 'clamp(0.3rem, 0.5vw, 0.4rem)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            letterSpacing: '0.02em',
            lineHeight: '1.3',
            margin: '0 0 0.3rem 0',
            position: 'relative'
          }}>
            <TypeWriter 
              key="office-header"
              text="About Your New Office"
              speed={50}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          <div style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
            color: 'white',
            textAlign: 'center',
            margin: '0',
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            {showSubtitle && (
              <TypeWriter 
                key="office-subtitle"
                text="Find your way to IndiVillage Technology"
                speed={30}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <motion.div 
          style={{
            background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
            padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            fontWeight: '600',
            color: '#1a365d',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            textAlign: 'left',
            margin: '0 0 clamp(1rem, 2vw, 1.5rem) 0'
          }}>
            Office Location
          </h2>

          {/* Two Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>
            {/* Left Column - Contact Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.8rem, 1.6vw, 1rem)'
            }}>
              {/* Address Card */}
              <div style={{
                background: 'rgba(250, 244, 226, 0.9)',
                borderRadius: '10px',
                padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    background: '#1e40af',
                    borderRadius: '6px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Building2 size={16} color="white" />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: '700',
                    color: '#1e40af',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    Address
                  </h3>
                </div>
                <div style={{
                  fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)',
                  color: '#374151',
                  lineHeight: '1.6'
                }}>
                  <p style={{ margin: '0 0 0.25rem 0', fontWeight: '600' }}>IndiVillage Technology Pvt Ltd</p>
                  <p style={{ margin: '0 0 0.25rem 0' }}>#42, 3rd Floor, Prestige Towers</p>
                  <p style={{ margin: '0 0 0.25rem 0' }}>MG Road, Bengaluru - 560001</p>
                  <p style={{ margin: 0 }}>Karnataka, India</p>
                </div>
              </div>

              {/* Contact Number Card */}
              <div style={{
                background: 'rgba(250, 244, 226, 0.9)',
                borderRadius: '10px',
                padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    background: '#16a34a',
                    borderRadius: '6px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={16} color="white" />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: '700',
                    color: '#16a34a',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    Contact Number
                  </h3>
                </div>
                <p style={{
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  fontWeight: '600',
                  color: '#374151',
                  margin: 0
                }}>
                  +91 80 1234 5678
                </p>
              </div>

              {/* Email Card */}
              <div style={{
                background: 'rgba(250, 244, 226, 0.9)',
                borderRadius: '10px',
                padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    background: '#7c3aed',
                    borderRadius: '6px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={16} color="white" />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: '700',
                    color: '#7c3aed',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    Email Address
                  </h3>
                </div>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)',
                  fontWeight: '600',
                  color: '#374151',
                  margin: 0
                }}>
                  hr@indivillage.com
                </p>
              </div>
            </div>

            {/* Right Column - Map with Google Maps Embed */}
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Map Container */}
              <div 
                onClick={handleMapClick}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  background: '#f3f4f6',
                  borderRadius: '10px',
                  border: '1px solid #c4c4c4',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  cursor: 'pointer'
                }}
              >
                {/* Google Maps Embed - Real Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9358656516754!2d77.60063931482183!3d12.975397990856873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ 
                    border: 0,
                    pointerEvents: 'none'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
                
                {/* Overlay for click detection */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'transparent',
                  zIndex: 1
                }}></div>

                {/* "Click to open in Google Maps" button */}
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(37, 99, 235, 0.95)',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: 'clamp(0.5rem, 1vw, 0.65rem)',
                  color: 'white',
                  fontWeight: '600',
                  zIndex: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <MapPin size={10} />
                  Click to open in Google Maps
                </div>
              </div>
            </div>
          </div>

          {/* How to Reach */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '8px',
            padding: 'clamp(0.75rem, 1.5vw, 1rem)',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{
              fontSize: 'clamp(0.75rem, 1.6vw, 0.85rem)',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem',
              margin: '0 0 0.5rem 0'
            }}>
              How to Reach
            </h3>
            <p style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 0.75rem)',
              color: '#6b7280',
              lineHeight: '1.5',
              margin: 0
            }}>
              Our office is conveniently located in the heart of Bengaluru on MG Road. The nearest metro station is MG Road Metro Station (Blue Line), just a 5-minute walk away. Ample parking is available in the Prestige Towers parking facility.
            </p>
          </div>

          {/* Get Started Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center'
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
              Continue to Next Step
            </button>
          </div>
        </motion.div>
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
      `}</style>
    </div>
  );
}