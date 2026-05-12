import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, Cloud, Database, Layout, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

const iconMap = {
  Bot: <Bot />,
  Brain: <Brain />,
  Sparkles: <Sparkles />,
  Cloud: <Cloud />,
  Database: <Database />,
  Layout: <Layout />,
  Wrench: <Wrench />
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5
    }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to turn complex problems into scalable AI products."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}
                whileHover={{ 
                  scale: 1.1,
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: { duration: 0.2 }
                }}
              >
                {iconMap[skill.icon]}
              </motion.div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{skill.category}</h3>

              {/* Sub-cards grid */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + itemIndex * 0.05 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      background: 'rgba(255, 255, 255, 0.15)',
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      cursor: 'default'
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Subtle background glow */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
