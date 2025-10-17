import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  onComplete = () => {},
  style = {},
  className = "",
  as = "span"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    console.log('TypeWriter effect running:', { text, speed, delay });
    
    if (!text) {
      console.log('No text provided to TypeWriter');
      return;
    }
    
    setDisplayText('');
    setIsComplete(false);
    
    const startTimer = setTimeout(() => {
      console.log('Starting typewriter animation for:', text);
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          const newText = text.slice(0, currentIndex + 1);
          console.log('Typing:', newText);
          setDisplayText(newText);
          currentIndex++;
        } else {
          console.log('TypeWriter completed for:', text);
          clearInterval(typeInterval);
          setIsComplete(true);
          onComplete();
        }
      }, speed);
      
      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay, onComplete]);

  const Component = motion[as] || motion.span;

  console.log('TypeWriter rendering:', { displayText, isComplete, text });

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ color: '#f59e0b', marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </Component>
  );
};

export default TypeWriter;