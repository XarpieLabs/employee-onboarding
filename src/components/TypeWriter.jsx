import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ 
  text, 
  speed = 80, 
  delay = 0, 
  onComplete = () => {},
  style = {},
  className = "",
  as = "span"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  // Update the ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  useEffect(() => {
    if (!text) return;
    
    // Reset state
    setDisplayText('');
    setIsComplete(false);
    
    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
          onCompleteRef.current();
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  const Component = motion[as] || motion.span;

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
          style={{ color: '#fde68a', marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </Component>
  );
};

export default TypeWriter;