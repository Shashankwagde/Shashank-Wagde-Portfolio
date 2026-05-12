import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Image } from 'lucide-react';
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

const EventCard = ({ event, index }) => {
  const roleColor = '#a78bfa';
  
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
        border: '1px solid rgba(167, 139, 250, 0.4)',
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
          background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.15) 0%, transparent 70%)',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Event Image */}
      {event.image && (
        <div style={{
          width: '100%',
          height: '180px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          position: 'relative',
          background: 'rgba(255,255,255,0.05)'
        }}>
          <img 
            src={event.image} 
            alt={event.title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg><span>Add Photo</span></div>`;
            }}
          />
        </div>
      )}
      
      {/* Role Badge */}
      <motion.div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.35rem 0.75rem',
          background: `${roleColor}20`,
          borderRadius: '999px',
          fontSize: '0.75rem',
          color: roleColor,
          fontWeight: 600,
          marginBottom: '0.75rem'
        }}
      >
        <Calendar size={16} />
        {event.role}
      </motion.div>
      
      {/* Event Title */}
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        marginBottom: '0.5rem', 
        lineHeight: 1.3,
        color: 'var(--text-primary)'
      }}>
        {event.title}
      </h3>
      
      {/* Organization & Period */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.75rem'
      }}>
        <span style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-secondary)',
          fontWeight: 500
        }}>
          {event.organization}
        </span>
        <span style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)',
          background: 'rgba(255,255,255,0.05)',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px'
        }}>
          {event.period}
        </span>
      </div>
      
      {/* Description */}
      <p style={{ 
        fontSize: '0.95rem', 
        color: 'var(--text-secondary)',
        lineHeight: 1.6
      }}>
        {event.description}
      </p>
      
      {/* Corner Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        borderTop: `2px solid ${roleColor}`,
        borderRight: `2px solid ${roleColor}`,
        borderTopRightRadius: '16px',
        opacity: 0.3
      }} />
    </motion.div>
  );
};

const Events = () => {
  const events = portfolioData.events || [];

  return (
    <section id="events" className="section">
      <div className="container">
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
            Events Organized
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #a78bfa, #8b5cf6)',
                borderRadius: '2px',
                boxShadow: '0 0 10px rgba(167,139,250,0.5), 0 0 20px rgba(167,139,250,0.3)'
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
            Placement drives and events organized under my supervision as Treasurer & Secretary of T&P Cell.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
