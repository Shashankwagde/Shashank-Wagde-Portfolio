import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ paddingTop: '10rem', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '999px',
              border: '1px solid var(--card-border)',
              fontSize: '0.8rem',
              marginBottom: '2rem'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22d3ee' }}
            />
            <span style={{ color: 'var(--text-secondary)' }}>{portfolioData.availability}</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            <span style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, display: 'block' }}>
              HELLO, I'M
            </span>
            <span style={{ 
              color: '#22d3ee', 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: 800,
              textShadow: '0 0 30px rgba(34,211,238,0.5), 0 0 60px rgba(34,211,238,0.3)'
            }}>
              {portfolioData.name}
            </span>
            <br />
            <span style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: 500, color: '#a0a0a0', display: 'block', marginTop: '0.5rem' }}>
              {portfolioData.title}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 3rem auto',
              lineHeight: 1.6
            }}
          >
            {portfolioData.about}
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              style={{
                padding: '0.8rem 2rem',
                background: '#22d3ee',
                color: '#030712',
                borderRadius: '999px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={18} /></motion.span>
            </motion.a>

            <motion.a
              href={portfolioData.resumeUrl}
              style={{
                padding: '0.8rem 2rem',
                border: '1px solid var(--card-border)',
                borderRadius: '999px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)'
              }}
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><Download size={18} /></motion.span> Download CV
            </motion.a>

            <motion.div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
<motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.2, rotate: 5 }}
>
<img src="/Github.gif" alt="GitHub" style={{ width: '60px', height: '60px' }} />
              </motion.a>
              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.2, rotate: 5 }}
>
<img src="/LinkedIn.gif" alt="LinkedIn" style={{ width: '32px', height: '32px', marginTop: '14px' }} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-muted)' }}
      >
        <motion.div animate={{ rotate: 90 }} transition={{ duration: 0.5 }}>
          <ArrowRight size={24} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
