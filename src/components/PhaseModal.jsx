import React, { useState, useEffect } from 'react';
import { X, Play, Clock, Target, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import AvatarSelection from './Avatar/AvatarSelection';
import BabylonOffice from './VirtualOffice/BabylonOffice';
import HRQuiz from './Quiz/HRQuiz';
import MemoryGame from './Games/MemoryGame';
import CustomerSimulation from './Games/CustomerSimulation';

function PhaseModal({ phase, onClose }) {
  const { completePhase, setCurrentPhase } = useGame();
  const [currentStep, setCurrentStep] = useState(0);
  const [contentReady, setContentReady] = useState(false);

  // Effect to track when content is ready
  useEffect(() => {
    setContentReady(false);
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleStartPhase = () => {
    setCurrentPhase(phase.index);
    setCurrentStep(1);
  };

  const handlePhaseComplete = () => {
    completePhase(phase.index);
    onClose();
  };

  const renderPhaseContent = () => {
    if (currentStep === 0) {
      return (
        <motion.div 
          className="phase-overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-xl font-bold mb-3 game-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {phase.title}
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {phase.description}
          </motion.p>
          
          <motion.div 
            className="phase-details grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {[
              { icon: Clock, label: 'Duration', value: phase.estimatedTime, color: 'text-blue-500' },
              { icon: Target, label: 'Goals', value: `${phase.objectives?.length || 0} items`, color: 'text-green-500' },
              { icon: Award, label: 'Type', value: phase.type, color: 'text-yellow-500' }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                className="detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (0.1 * index), duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                }}
              >
                <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
                <h3 className="font-semibold text-sm">{item.label}</h3>
                <p className="text-sm capitalize">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {phase.objectives && (
            <motion.div 
              className="objectives-list mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <h3 className="font-semibold mb-2 text-sm">Objectives:</h3>
              <ul className="space-y-1">
                {phase.objectives.map((objective, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (0.1 * index), duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-sm">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.button 
            onClick={contentReady ? handleStartPhase : undefined}
            className="btn-primary w-full flex items-center justify-center gap-2 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: contentReady ? 1 : 0.6, 
              y: 0,
              scale: contentReady ? 1 : 0.95
            }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={contentReady ? { 
              scale: 1.02,
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
            } : {}}
            whileTap={contentReady ? { scale: 0.98 } : {}}
            style={{ 
              cursor: contentReady ? 'pointer' : 'not-allowed',
              filter: contentReady ? 'none' : 'grayscale(0.3)'
            }}
          >
            <motion.div
              animate={contentReady ? {} : { rotate: 360 }}
              transition={contentReady ? {} : { duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Play className="w-4 h-4" />
            </motion.div>
            {contentReady ? 'Start' : 'Loading...'}
          </motion.button>
        </motion.div>
      );
    }

    // Render specific phase content
    switch (phase.type) {
      case 'interactive':
        return <AvatarSelection onComplete={handlePhaseComplete} />;
      case '3d':
        return <BabylonOffice onComplete={handlePhaseComplete} />;
      case 'quiz':
        return <HRQuiz onComplete={handlePhaseComplete} />;
      case 'game':
        return <MemoryGame onComplete={handlePhaseComplete} />;
      case 'simulation':
        return <CustomerSimulation onComplete={handlePhaseComplete} />;
      default:
        return <div>Phase content not implemented yet.</div>;
    }
  };

  return (
    <motion.div 
      className="enhanced-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="enhanced-modal-content"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.8, 
          y: 50,
          transition: { duration: 0.2 }
        }}
      >
        <motion.button 
          onClick={onClose}
          className="close-button"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            padding: '0.5rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X className="w-6 h-6" />
        </motion.button>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={contentReady ? 'ready' : 'loading'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPhaseContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default PhaseModal;