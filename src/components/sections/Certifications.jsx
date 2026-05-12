import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BadgeCheck, BookOpen, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const getBorderColor = (type) => {
  if (type === 'co') return 'rgba(34, 211, 238, 0.4)';
  if (type === 'extra') return 'rgba(167, 139, 250, 0.4)';
  return 'var(--card-border)';
};

const getIconColor = (type) => {
  if (type === 'co') return '#22d3ee';
  if (type === 'extra') return '#a78bfa';
  return '#22d3ee';
};

const getBadgeColor = (type) => {
  if (type === 'co') return 'rgba(34, 211, 238, 0.1)';
  if (type === 'extra') return 'rgba(167, 139, 250, 0.1)';
  return 'rgba(34, 211, 238, 0.1)';
};

const CertificationCard = ({ cert, index }) => {
  const borderColor = getBorderColor(cert.type);
  const iconColor = getIconColor(cert.type);
  const badgeColor = getBadgeColor(cert.type);
  
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        border: `1px solid ${borderColor}`,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--card-border)',
        borderRadius: '16px',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.15) 0%, transparent 70%)',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
        whileHover={{ opacity: 1 }}
      />
      <motion.div
        style={{
          width: '48px',
          height: '48px',
          background: badgeColor,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: iconColor
        }}
        whileHover={{ 
          scale: 1.1,
          background: badgeColor.replace('0.1', '0.2'),
          transition: { duration: 0.2 }
        }}
      >
        <Award size={24} />
      </motion.div>
      <motion.div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.25rem 0.75rem',
          background: badgeColor,
          borderRadius: '999px',
          fontSize: '0.75rem',
          color: iconColor,
          fontWeight: 500,
          marginBottom: '0.75rem'
        }}
      >
        <BadgeCheck size={14} />
        {cert.organization}
      </motion.div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.3 }}>
        {cert.name}
      </h3>
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}
        whileHover={{ color: 'var(--text-secondary)' }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CheckCircle size={14} style={{ color: '#34d399' }} />
        </motion.div>
        Verified
      </motion.div>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        borderTop: `2px solid ${borderColor}`,
        borderRight: `2px solid ${borderColor}`,
        borderTopRightRadius: '16px',
        opacity: 0.3
      }} />
    </motion.div>
  );
};

const Certifications = () => {
  const coCerts = portfolioData.certifications?.filter(c => c.type === 'co') || [];
  const extraCerts = portfolioData.certifications?.filter(c => c.type === 'extra') || [];

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Title */}
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
            Certifications & Achievements
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
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1rem' }}
          >
            Professional certifications and achievements in technical and non-technical domains.
          </motion.p>
        </motion.div>

        {/* Side by Side Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          {/* Co-Curricular Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <BookOpen size={28} color="#22d3ee" />
              <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>Co-Curricular</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
            >
              Technical certifications and achievements that validate my expertise in AI/ML and software development.
            </motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {coCerts.map((cert, index) => (
                <CertificationCard key={cert.name} cert={cert} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Extra-Curricular Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Star size={28} color="#a78bfa" />
              <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>Extra-Curricular</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
            >
              Additional achievements and certifications beyond technical skills.
            </motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {extraCerts.map((cert, index) => (
                <CertificationCard key={cert.name} cert={cert} index={index + coCerts.length} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
