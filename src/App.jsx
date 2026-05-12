import React from 'react';
import { motion } from 'framer-motion';
import './styles/variables.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Events from './components/sections/Events';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import NeuralBackground from './components/ui/NeuralBackground';

function App() {
  return (
    <div className="app">
      {/* Interactive Neural Network Background */}
      <NeuralBackground />
      
      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" style={{ padding: '6rem 0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Left side - Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 1, 0],
                    scale: [1, 1.01, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '300px',
                    height: '350px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(8,145,178,0.2) 100%)',
                    border: '2px solid var(--card-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.img 
                    src="/src/assets/hero.png" 
                    alt="Shashank Wagde"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '18px' }}
                    animate={{ x: [0, 1, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <motion.div
                    animate={{ 
                      boxShadow: '0 0 30px rgba(34,211,238,0.6)',
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '20px',
                      border: '2px solid #22d3ee',
                    }}
                  />
                  {/* Surround effects */}
                  <motion.div 
                    className="particle-1"
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: 20,
                      height: 20,
                      background: 'rgba(34,211,238,0.6)',
                      borderRadius: '50%',
                      opacity: 0
                    }}
                    animate={{ 
                      scale: [0, 1.5, 0], 
                      opacity: [0, 0.8, 0],
                      y: [0, -20, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="particle-2"
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '-8px',
                      width: 16,
                      height: 16,
                      background: 'rgba(34,211,238,0.5)',
                      borderRadius: '50%',
                      opacity: 0
                    }}
                    animate={{ 
                      scale: [0, 1.2, 0], 
                      opacity: [0, 0.7, 0],
                      x: [0, 15, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.div 
                    className="ring-effect"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '20px',
                      border: '2px solid rgba(34,211,238,0.3)',
                      opacity: 0
                    }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
              
              {/* Stats */}
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2.5rem', color: '#22d3ee', fontWeight: 700 }}>5</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects Done</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2.5rem', color: '#22d3ee', fontWeight: 700 }}>9.30</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>CGPA</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2.5rem', color: '#22d3ee', fontWeight: 700 }}>15</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Certifications</p>
                </div>
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                I'm Shashank Manoj Wagde, a B.Tech Computer Science student (CGPA: 9.30) at Maharashtra Institute of Technology, Chh. Sambhajinagar.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem' }}>
                I build AI-powered applications and intelligent systems using Python and machine learning, focusing on solving real-world problems through automation and data-driven solutions. My work includes LLM-based assistants, text-to-image pipelines, and deep learning models.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '1rem' }}>
                I serve as Treasurer & Secretary of the Training and Placement Cell, where I manage operations and coordinate events, while continuously improving through hands-on projects and problem-solving.
              </p>
            </motion.div>
          </div>
        </section>
        
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Events />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
