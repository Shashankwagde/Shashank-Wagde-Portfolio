import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CodeXml } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const cardHoverVariants = {
  idle: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected works blending autonomous agents with intuitive interfaces."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover="hover"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Glow effect overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.15) 0%, transparent 70%)',
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
                whileHover={{ opacity: 1 }}
              />

              {/* Project Image */}
              <motion.div
                style={{
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#1a1a1a'
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8
                  }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                {/* Overlay gradient */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                    opacity: 0,
                    pointerEvents: 'none'
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* View icon on hover */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    pointerEvents: 'none'
                  }}
                  whileHover={{ opacity: 1, scale: 1 }}
                >
                  <ExternalLink size={24} color="white" />
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{project.title}</h3>
                  </div>
                  <motion.a
                    href={project.link}
                    style={{ color: 'var(--text-secondary)' }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>
                  {project.description}
                </p>

                <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      style={{
                        padding: '0.35rem 0.85rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                      }}
                      whileHover={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'var(--accent)',
                        color: 'white',
                        scale: 1.05
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
