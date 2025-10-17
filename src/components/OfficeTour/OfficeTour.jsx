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
    <motion.div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
        background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
        position: 'relative'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Background Elements - Gaming Style */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            opacity: [0, 0.08, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1.2, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '25px',
            height: '25px',
            background: `linear-gradient(45deg, rgba(74, 157, 149, 0.08) 0%, rgba(95, 185, 176, 0.12) 100%)`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      {/* Gaming Elements - Code/Tech Icons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`tech-${i}`}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 0.06, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 360],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 1,
            color: 'rgba(74, 157, 149, 0.08)',
            fontSize: '18px'
          }}
        >
          {i % 4 === 0 ? '💻' : i % 4 === 1 ? '�' : i % 4 === 2 ? '⚡' : '�'}
        </motion.div>
      ))}

      {/* Main Card */}
      <motion.div 
        style={{ 
          width: '100%', 
          maxWidth: '1400px',
          background: 'white',
          borderRadius: 'clamp(24px, 3vw, 32px)',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '3px solid #4a9d95',
          position: 'relative',
          zIndex: 2
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.7, 
          y: 80,
          rotateX: 20,
          filter: 'blur(15px)'
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)'
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 1,
          delay: 0.3
        }}
        whileHover={{
          scale: 1.01,
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Gaming-Style Border Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            background: [
              'linear-gradient(0deg, rgba(74, 157, 149, 0.3) 0%, transparent 50%)',
              'linear-gradient(180deg, rgba(74, 157, 149, 0.3) 0%, transparent 50%)',
              'linear-gradient(0deg, rgba(74, 157, 149, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'clamp(24px, 3vw, 32px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Game-Style Corner Effects */}
        {[
          { top: '10px', left: '10px' },
          { top: '10px', right: '10px' },
          { bottom: '10px', left: '10px' },
          { bottom: '10px', right: '10px' }
        ].map((pos, i) => (
          <motion.div
            key={`corner-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              ...pos,
              width: '8px',
              height: '8px',
              background: 'linear-gradient(45deg, #4a9d95, #5fb9b0)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 2,
              boxShadow: '0 0 10px rgba(74, 157, 149, 0.5)'
            }}
          />
        ))}

        {/* Header Section */}
        <motion.div 
          style={{
            background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
            padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)',
            borderBottom: '2px solid #3a8d85',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Animated Header Background */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none'
            }}
          />

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
        </motion.div>

        {/* Main Content Section */}
        <motion.div 
          style={{
            background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
            padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Gaming UI Elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 600,
                y: Math.random() * 300
              }}
              animate={{
                opacity: showContent ? [0, 0.08, 0] : 0,
                x: Math.random() * 600,
                y: Math.random() * 300,
                scale: [0.5, 1, 0.5],
                rotate: [0, 90]
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: `hsl(${180 + Math.random() * 40}, 60%, 60%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1,
                boxShadow: '0 0 4px rgba(74, 157, 149, 0.3)'
              }}
            />
          ))}

          <motion.h2 
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              fontWeight: '600',
              color: '#1a365d',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              textAlign: 'left',
              margin: '0 0 clamp(1rem, 2vw, 1.5rem) 0',
              position: 'relative',
              zIndex: 2
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              x: showContent ? 0 : -30
            }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Office Location
          </motion.h2>

          {/* Two Column Layout */}
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              position: 'relative',
              zIndex: 2
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 40
            }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Left Column - Contact Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.8rem, 1.6vw, 1rem)'
            }}>
              {/* Address Card */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.9)',
                  borderRadius: '10px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30,
                  scale: showContent ? 1 : 0.9
                }}
                transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Game-style scan line */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: showContent ? '100%' : '-100%'
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(74, 157, 149, 0.2) 50%, transparent 100%)',
                    pointerEvents: 'none',
                    borderRadius: '10px'
                  }}
                />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <motion.div 
                    style={{
                      background: '#1e40af',
                      borderRadius: '6px',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Building2 size={16} color="white" />
                  </motion.div>
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
              </motion.div>

              {/* Contact Number Card */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.9)',
                  borderRadius: '10px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30,
                  scale: showContent ? 1 : 0.9
                }}
                transition={{ delay: 1.15, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: showContent ? '100%' : '-100%'
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                    delay: 1.35
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(74, 157, 149, 0.2) 50%, transparent 100%)',
                    pointerEvents: 'none',
                    borderRadius: '10px'
                  }}
                />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <motion.div 
                    style={{
                      background: '#16a34a',
                      borderRadius: '6px',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Phone size={16} color="white" />
                  </motion.div>
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
              </motion.div>

              {/* Email Card */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.9)',
                  borderRadius: '10px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30,
                  scale: showContent ? 1 : 0.9
                }}
                transition={{ delay: 1.3, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: showContent ? '100%' : '-100%'
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(74, 157, 149, 0.2) 50%, transparent 100%)',
                    pointerEvents: 'none',
                    borderRadius: '10px'
                  }}
                />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.75rem'
                }}>
                  <motion.div 
                    style={{
                      background: '#7c3aed',
                      borderRadius: '6px',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Mail size={16} color="white" />
                  </motion.div>
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
              </motion.div>
            </div>

            {/* Right Column - Interactive Map */}
            <motion.div 
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ 
                opacity: showContent ? 1 : 0,
                x: showContent ? 0 : 30,
                scale: showContent ? 1 : 0.95
              }}
              transition={{ delay: 1.45, duration: 0.6, type: "spring", stiffness: 150 }}
            >
              {/* Map Container */}
              <motion.div 
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
                whileHover={{
                  scale: 1.01,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Gaming-style UI corners */}
                {[
                  { top: '5px', left: '5px' },
                  { top: '5px', right: '5px' },
                  { bottom: '5px', left: '5px' },
                  { bottom: '5px', right: '5px' }
                ].map((pos, i) => (
                  <motion.div
                    key={`map-corner-${i}`}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      ...pos,
                      width: '4px',
                      height: '4px',
                      background: '#4a9d95',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      zIndex: 3,
                      boxShadow: '0 0 6px rgba(74, 157, 149, 0.6)'
                    }}
                  />
                ))}

                {/* Google Maps Embed */}
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
                  zIndex: 2
                }}></div>

                {/* Interactive Map Button */}
                <motion.div 
                  style={{
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
                    zIndex: 3,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    background: 'rgba(37, 99, 235, 1)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    boxShadow: [
                      '0 2px 8px rgba(0,0,0,0.2)',
                      '0 4px 16px rgba(37, 99, 235, 0.3)',
                      '0 2px 8px rgba(0,0,0,0.2)'
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <MapPin size={10} />
                  Open in Google Maps
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* How to Reach */}
          <motion.div 
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              padding: 'clamp(0.75rem, 1.5vw, 1rem)',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 30
            }}
            transition={{ delay: 1.8, duration: 0.6 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
              transition: { duration: 0.2 }
            }}
          >
            {/* Info Card Background Animation */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)',
                  'linear-gradient(225deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)',
                  'linear-gradient(45deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '8px',
                pointerEvents: 'none'
              }}
            />
            <h3 style={{
              fontSize: 'clamp(0.75rem, 1.6vw, 0.85rem)',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '0.5rem',
              margin: '0 0 0.5rem 0',
              position: 'relative',
              zIndex: 1
            }}>
              How to Reach
            </h3>
            <p style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 0.75rem)',
              color: '#6b7280',
              lineHeight: '1.5',
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              Our office is conveniently located in the heart of Bengaluru on MG Road. The nearest metro station is MG Road Metro Station (Blue Line), just a 5-minute walk away. Ample parking is available in the Prestige Towers parking facility.
            </p>
          </motion.div>

          {/* Get Started Button */}
          <motion.div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20
            }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            {/* Gaming-style Tech Particles */}
            {[...Array(4)].map((_, sparkleIndex) => (
              <motion.div
                key={`tech-particle-${sparkleIndex}`}
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  rotate: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 150,
                  y: (Math.random() - 0.5) * 80,
                  rotate: [0, 180],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: sparkleIndex * 0.8,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '4px',
                  height: '4px',
                  background: '#4a9d95',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 1,
                  boxShadow: '0 0 6px rgba(74, 157, 149, 0.6)'
                }}
              />
            ))}

            <motion.button
              onClick={onComplete}
              style={{
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                fontWeight: '700',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #4a9d95 0%, #3d8b7e 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(74, 157, 149, 0.4)',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                letterSpacing: '0.02em',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 20px rgba(74, 157, 149, 0.6)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 4px 12px rgba(74, 157, 149, 0.4)',
                  '0 6px 16px rgba(74, 157, 149, 0.5)',
                  '0 4px 12px rgba(74, 157, 149, 0.4)'
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Gaming-style scan line effect */}
              <motion.div
                animate={{
                  x: ['-120%', '220%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
                  pointerEvents: 'none',
                  borderRadius: '8px'
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>
                Continue to Next Step
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

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
    </motion.div>
  );
}