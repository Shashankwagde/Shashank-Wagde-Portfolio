import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + index * 0.15,
      duration: 0.5
    }
  })
};

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          title="Professional Journey"
          subtitle="My career path in AI research and engineering."
        />

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Animated Vertical Line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)',
              transformOrigin: 'top',
              borderRadius: '1px'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                {/* Animated Dot */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '-2.35rem',
                    top: '0.5rem',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: index === 0 ? 'white' : 'var(--border)',
                    border: '2px solid var(--bg-primary)',
                    zIndex: 1
                  }}
                  whileHover={{ scale: 1.5 }}
                  animate={index === 0 ? {
                    boxShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.5)', '0 0 0 rgba(255,255,255,0)']
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <p style={{ color: 'white', fontWeight: 500 }}>{exp.company}</p>
                  </motion.div>
                  <motion.span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px'
                    }}
                    whileHover={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    {exp.period}
                  </motion.span>
                </div>

                <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', fontSize: '0.95rem' }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
