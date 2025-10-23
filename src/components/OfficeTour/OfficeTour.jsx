import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

export default function OfficeTour({ onComplete }) {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('header');
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true); // NEW: Controls background animations
  
  const latitude = 12.9716;
  const longitude = 77.5946;
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
      {/* Floating Background Elements - Paused during typing */}
      {[...Array(6)].map((_, i) => {
        const safeWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const safeHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const initialX = Math.random() * safeWidth;
        const initialY = Math.random() * safeHeight;
        const animateX = Math.random() * safeWidth;
        const animateY = Math.random() * safeHeight;
        
        return (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: initialX,
            y: initialY,
            scale: 0
          }}
          animate={isTyping ? { opacity: 0 } : {
            opacity: [0, 0.08, 0],
            x: animateX,
            y: animateY,
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
        );
      })}

      {/* Gaming Elements - Paused during typing */}
      {[...Array(4)].map((_, i) => {
        const safeWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const safeHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const initialX = Math.random() * safeWidth;
        const initialY = Math.random() * safeHeight;
        const animateX = Math.random() * safeWidth;
        const animateY = Math.random() * safeHeight;
        
        return (
        <motion.div
          key={`tech-${i}`}
          initial={{ 
            opacity: 0,
            x: initialX,
            y: initialY
          }}
          animate={{
            opacity: isTyping ? [0, 0.02, 0] : [0, 0.06, 0],
            x: animateX,
            y: animateY,
            rotate: isTyping ? 0 : [0, 360],
            scale: isTyping ? [0.7, 0.9, 0.7] : [0.5, 1, 0.5]
          }}
          transition={{
            duration: isTyping ? 35 : 20 + Math.random() * 10,
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
          {i % 4 === 0 ? '💻' : i % 4 === 1 ? '🚀' : i % 4 === 2 ? '⚡' : '🎯'}
        </motion.div>
        );
      })}

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
          y: 40
        }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1,
          delay: 0.3
        }}
      >
        {/* Floating Code Symbols - Paused during typing */}
        {['<>', '{}', '[]', '&&'].map((symbol, i) => {
          const xOffset = Math.sin(i) * 8;
          return (
          <motion.div
            key={`code-symbol-${i}`}
            animate={{
              y: isTyping ? 0 : [0, -15, 0],
              x: isTyping ? 0 : [0, xOffset, 0],
              opacity: isTyping ? [0.01, 0.02, 0.01] : [0.03, 0.06, 0.03]
            }}
            transition={{
              duration: isTyping ? 12 : 6 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${10 + (i % 4) * 25}%`,
              left: `${5 + (i % 3) * 45}%`,
              color: 'rgba(74, 157, 149, 0.15)',
              fontSize: '14px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              pointerEvents: 'none',
              zIndex: 1,
              textShadow: '0 0 5px rgba(74, 157, 149, 0.2)'
            }}
          >
            {symbol}
          </motion.div>
          );
        })}

        {/* Background Pattern - Slowed during typing */}
        <motion.div
          animate={{
            backgroundPosition: isTyping ? ['0px 0px', '20px 20px'] : ['0px 0px', '40px 40px'],
            opacity: isTyping ? [0.01, 0.02, 0.01] : [0.02, 0.05, 0.02]
          }}
          transition={{
            duration: isTyping ? 40 : 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'clamp(24px, 3vw, 32px)',
            pointerEvents: 'none',
            zIndex: 1,
            background: `
              radial-gradient(circle at 20% 30%, rgba(74, 157, 149, 0.05) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, rgba(74, 157, 149, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px'
          }}
        />

        {/* Circuit Board Pattern - Slowed during typing */}
        <motion.div
          animate={{
            backgroundPosition: isTyping ? ['0px 0px', '15px 15px'] : ['0px 0px', '30px 30px'],
            opacity: isTyping ? [0.01, 0.03, 0.01] : [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: isTyping ? 35 : 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'clamp(24px, 3vw, 32px)',
            pointerEvents: 'none',
            zIndex: 1,
            background: `
              radial-gradient(circle at 25% 25%, rgba(74, 157, 149, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(74, 157, 149, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Energy Pulse Border */}
        <motion.div
          animate={{
            opacity: [0, 0.6, 0],
            scale: [1, 1.01, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: 'clamp(26px, 3vw, 34px)',
            border: '2px solid rgba(74, 157, 149, 0.4)',
            pointerEvents: 'none',
            zIndex: 1,
            background: 'linear-gradient(45deg, transparent, rgba(74, 157, 149, 0.08), transparent)',
            backgroundSize: '30px 30px',
            filter: 'blur(0.5px)'
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
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              ...pos,
              width: '12px',
              height: '12px',
              background: 'linear-gradient(45deg, #4a9d95, #5fb9b0)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              pointerEvents: 'none',
              zIndex: 2,
              boxShadow: '0 0 15px rgba(74, 157, 149, 0.7)'
            }}
          />
        ))}

        {/* Gaming HUD Elements */}
        {[
          { top: '15px', left: '50%', width: '40px', height: '2px' },
          { bottom: '15px', left: '50%', width: '40px', height: '2px' },
          { top: '50%', left: '15px', width: '2px', height: '40px' },
          { top: '50%', right: '15px', width: '2px', height: '40px' }
        ].map((style, i) => (
          <motion.div
            key={`hud-${i}`}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              ...style,
              transform: style.left === '50%' ? 'translateX(-50%)' : style.top === '50%' ? 'translateY(-50%)' : 'none',
              background: 'linear-gradient(90deg, #4a9d95, #5fb9b0)',
              borderRadius: '2px',
              pointerEvents: 'none',
              zIndex: 2,
              boxShadow: '0 0 8px rgba(74, 157, 149, 0.6)'
            }}
          />
        ))}

        {/* Sequential Header Section */}
        <motion.div 
          style={{
            background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
            padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem)',
            borderBottom: '2px solid #3a8d85',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: -20, scaleX: 0 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scaleX: 1
          }}
          transition={{ 
            delay: 0.2, 
            duration: 0.8, 
            ease: "easeOut",
            scaleX: { duration: 1.2, ease: "easeInOut" }
          }}
          onAnimationComplete={() => {
            setHeaderAnimationComplete(true);
            setAnimationPhase('typing');
          }}
        >
          {/* Background Glow - Only during typing */}
          <motion.div
            animate={animationPhase === 'typing' ? {
              opacity: [0.1, 0.2, 0.1]
            } : { opacity: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.1)',
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
            {headerAnimationComplete && (
              <TypeWriter 
                key="office-header"
                text="About Your New Office"
                speed={50}
                delay={200}
                onComplete={() => {
                  setShowSubtitle(true);
                }}
              />
            )}
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
                onComplete={() => {
                  setShowContent(true);
                  setTypingComplete(true);
                  setAnimationPhase('content');
                  setIsTyping(false); // IMPORTANT: Stop typing phase
                }}
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
            opacity: (showContent && typingComplete) ? 1 : 0, 
            y: (showContent && typingComplete) ? 0 : 20 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Gaming UI Elements */}
          {[...Array(4)].map((_, i) => {
            const randomX = Math.random() * 600;
            const randomY = Math.random() * 300;
            return (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: randomX,
                y: randomY
              }}
              animate={{
                opacity: (showContent && typingComplete) ? [0, 0.1, 0] : [0],
                x: [randomX, randomX + 50, randomX],
                y: [randomY, randomY + 25, randomY],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: i % 3 === 0 ? '10px' : '6px',
                height: i % 3 === 0 ? '10px' : '6px',
                background: i % 4 === 0 ? 
                  'linear-gradient(45deg, #4a9d95, #5fb9b0)' :
                  i % 4 === 1 ?
                  'radial-gradient(circle, #4a9d95, #3d8b7e)' :
                  i % 4 === 2 ?
                  'conic-gradient(#4a9d95, #5fb9b0, #4a9d95)' :
                  `hsl(${180 + Math.random() * 40}, 75%, 60%)`,
                borderRadius: i % 3 === 0 ? '2px' : '50%',
                pointerEvents: 'none',
                zIndex: 1,
                boxShadow: '0 0 12px rgba(74, 157, 149, 0.6)',
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
            );
          })}

          {/* Energy Stream Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`energy-${i}`}
              animate={{
                x: ['-5%', '120%'],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: `${20 + i * 30}%`,
                left: 0,
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #4a9d95, #5fb9b0, transparent)',
                borderRadius: '1px',
                pointerEvents: 'none',
                zIndex: 1,
                boxShadow: '0 0 8px rgba(74, 157, 149, 0.8)'
              }}
            />
          ))}

          {/* Hexagonal Tech Grid */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              animate={{
                opacity: showContent ? [0, 0.08, 0] : [0],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 120, 240, 360]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: `${10 + (i % 4) * 25}%`,
                left: `${5 + Math.floor(i / 4) * 90}%`,
                width: '12px',
                height: '12px',
                border: '1px solid rgba(74, 157, 149, 0.3)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                pointerEvents: 'none',
                zIndex: 1,
                filter: 'drop-shadow(0 0 4px rgba(74, 157, 149, 0.4))'
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
              {/* Address Card - NO ZOOM on hover */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.95)',
                  borderRadius: '12px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30
                }}
                transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 150 }}
                whileHover={{
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Location Radar Effect */}
                <motion.div
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0.5, 0, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(59, 130, 246, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(50%, -50%)'
                  }}
                />

                {/* Floating Location Markers */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`location-marker-${i}`}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: `${30 + i * 20}%`,
                      right: `${15 + i * 5}px`,
                      width: '5px',
                      height: '5px',
                      background: 'linear-gradient(45deg, #3b82f6, #60a5fa)',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)'
                    }}
                  />
                ))}
                
                {/* Scan line */}
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

              {/* Contact Number Card - NO ZOOM on hover */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.95)',
                  borderRadius: '12px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '2px solid rgba(251, 191, 36, 0.4)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30
                }}
                transition={{ delay: 1.15, duration: 0.6, type: "spring", stiffness: 150 }}
                whileHover={{
                  boxShadow: '0 8px 20px rgba(22, 163, 74, 0.15)',
                  borderColor: 'rgba(22, 163, 74, 0.5)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Gaming Corner Effects */}
                {[
                  { top: '8px', left: '8px' },
                  { top: '8px', right: '8px' },
                  { bottom: '8px', left: '8px' },
                  { bottom: '8px', right: '8px' }
                ].map((pos, i) => (
                  <motion.div
                    key={`phone-corner-${i}`}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      ...pos,
                      width: '4px',
                      height: '4px',
                      background: '#16a34a',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      boxShadow: '0 0 8px rgba(22, 163, 74, 0.6)'
                    }}
                  />
                ))}

                {/* Floating Tech Particles */}
                {[...Array(3)].map((_, i) => {
                  const xParticleOffset = Math.sin(i * 2) * 8;
                  return (
                  <motion.div
                    key={`phone-particle-${i}`}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, xParticleOffset, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: `${20 + i * 20}%`,
                      right: '15px',
                      width: '6px',
                      height: '6px',
                      background: 'linear-gradient(45deg, #16a34a, #22c55e)',
                      borderRadius: '50%',
                      pointerEvents: 'none',
                      zIndex: 1,
                      boxShadow: '0 0 6px rgba(22, 163, 74, 0.4)'
                    }}
                  />
                  );
                })}
                
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

              {/* Email Card - NO ZOOM on hover */}
              <motion.div 
                style={{
                  background: 'rgba(250, 244, 226, 0.95)',
                  borderRadius: '12px',
                  padding: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  border: '2px solid rgba(124, 58, 237, 0.3)',
                  boxShadow: '0 4px 15px rgba(124, 58, 237, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  x: showContent ? 0 : -30
                }}
                transition={{ delay: 1.3, duration: 0.6, type: "spring", stiffness: 150 }}
                whileHover={{
                  boxShadow: '0 8px 20px rgba(124, 58, 237, 0.2)',
                  borderColor: 'rgba(124, 58, 237, 0.5)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Digital Wave Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)',
                    pointerEvents: 'none',
                    borderRadius: '12px'
                  }}
                />

                {/* Email Pulse Indicators */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`email-pulse-${i}`}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: '20%',
                      right: `${10 + i * 8}px`,
                      width: '3px',
                      height: '3px',
                      background: '#7c3aed',
                      borderRadius: '50%',
                      pointerEvents: 'none'
                    }}
                  />
                ))}
                
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

            {/* Right Column - Interactive Map - NO ZOOM on hover */}
            <motion.div 
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: showContent ? 1 : 0,
                x: showContent ? 0 : 30
              }}
              transition={{ delay: 1.45, duration: 0.6, type: "spring", stiffness: 150 }}
            >
              <motion.div 
                onClick={handleMapClick}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  background: '#f3f4f6',
                  borderRadius: '12px',
                  border: '2px solid #4a9d95',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(74, 157, 149, 0.2)',
                  cursor: 'pointer'
                }}
                whileHover={{
                  boxShadow: '0 12px 30px rgba(74, 157, 149, 0.3)',
                  borderColor: '#5fb9b0',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 4px 15px rgba(74, 157, 149, 0.2)',
                    '0 6px 20px rgba(74, 157, 149, 0.3)',
                    '0 4px 15px rgba(74, 157, 149, 0.2)'
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* GPS Signal Rings */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '30px',
                    height: '30px',
                    border: '3px solid #4a9d95',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 3
                  }}
                />

                {/* Navigation Paths */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`nav-path-${i}`}
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                      width: '40px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #4a9d95, #5fb9b0)',
                      borderRadius: '1px',
                      pointerEvents: 'none',
                      zIndex: 3,
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'left center',
                      boxShadow: '0 0 6px rgba(74, 157, 149, 0.6)'
                    }}
                  />
                ))}
                
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
          >
            {/* Info Card Background Animation */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1]
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
                background: 'linear-gradient(45deg, rgba(74, 157, 149, 0.05) 0%, rgba(74, 157, 149, 0) 50%)',
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
            {/* Tech Particles */}
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
                letterSpacing: '0.02em)',
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
              {/* Scan line effect */}
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
    </motion.div>
  );
}