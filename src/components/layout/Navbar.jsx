import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'events', 'contact'];
    
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    handleActiveSection();
    
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(34, 211, 238, 0.1)',
          transition: 'all 0.4s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              <motion.img
              src="/Rocket.gif" 
              alt="Rocket"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
                objectFit: 'contain'
              }}
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </motion.a>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {navLinks.map((link, index) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;
                const isHovered = hoveredLink === index;
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      position: 'relative',
                      padding: '0.25rem 0'
                    }}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.span
                      style={{ 
                        position: 'relative', 
                        zIndex: 1,
                        color: isActive || isHovered ? 'white' : 'var(--text-secondary)'
                      }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: '#22d3ee',
                        borderRadius: '1px'
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: (isActive || isHovered) ? 1 : 0 }}
                    />
                    {isActive && !isHovered && (
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '-12px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#22d3ee',
                          transform: 'translateY(-50%)',
                          boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              href="#contact"
              style={{
                padding: '0.5rem 1.25rem',
                background: '#22d3ee',
                color: '#030712',
                borderRadius: '999px',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 999
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '280px',
                height: '100vh',
                background: 'var(--bg-primary)',
                borderLeft: '1px solid var(--card-border)',
                zIndex: 1001,
                padding: '6rem 2rem 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {navLinks.map((link, index) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#22d3ee' : 'var(--text-secondary)',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--card-border)'
                    }}
                    whileHover={{ x: 10, color: '#22d3ee' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  background: '#22d3ee',
                  color: '#030712',
                  borderRadius: '999px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textAlign: 'center'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
