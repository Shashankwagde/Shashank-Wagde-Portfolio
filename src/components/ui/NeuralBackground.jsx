import React from 'react';
import { motion } from 'framer-motion';

const NeuralBackground = () => {
  // Generate fixed positions for consistent effect
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 3.3) % 100}%`,
    top: `${(i * 3.7) % 100}%`,
    delay: i * 0.1,
    duration: 3 + (i % 3)
  }));

  const lines = Array.from({ length: 25 }, (_, i) => ({
    id: `line-${i}`,
    left: `${(i * 4) % 100}%`,
    top: `${(i * 4.2) % 100}%`,
    width: 80 + (i % 40),
    delay: i * 0.15,
    duration: 2 + (i % 3)
  }));

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: `part-${i}`,
    left: `${(i * 5) % 100}%`,
    top: `${(i * 5.3) % 100}%`,
    delay: i * 0.2,
    duration: 4 + (i % 4)
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: '#050505',
      pointerEvents: 'none'
    }}>
      {/* Bright pulsing neural nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          style={{
            position: 'absolute',
            left: node.left,
            top: node.top,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 0 20px 4px rgba(255,255,255,0.8)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Neural connection lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          style={{
            position: 'absolute',
            left: line.left,
            top: line.top,
            width: line.width,
            height: 1,
            background: 'rgba(255,255,255,0.6)',
            transform: 'rotate(45deg)'
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleX: [0.5, 1, 0.5]
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Floating data particles */}
      {particles.map((part) => (
        <motion.div
          key={part.id}
          style={{
            position: 'absolute',
            left: part.left,
            top: part.top,
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 10px 2px rgba(16,185,129,0.8)'
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: part.duration,
            delay: part.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}

      {/* Subtle grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
};

export default NeuralBackground;
