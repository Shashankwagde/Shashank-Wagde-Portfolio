import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      style={{ marginBottom: '3rem' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.h2
        style={{ fontSize: '2.5rem', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}
      >
        {title}
        {/* Enhanced animated underline with glow */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #22d3ee, #0891b2)',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(34,211,238,0.5), 0 0 20px rgba(34,211,238,0.3)'
          }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '60px', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />
        {/* Accent dot */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-11px',
            right: '-8px',
            width: '8px',
            height: '8px',
            background: '#22d3ee',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(34,211,238,0.8)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1rem' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
