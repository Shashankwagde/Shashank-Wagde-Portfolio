import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const quickLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--card-border)', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
            {portfolioData.name}.
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Crafting high-end digital experiences with precision and passion. Let's create something extraordinary.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'white' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {quickLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                style={{ marginBottom: '0.75rem' }}
                whileHover={{ x: 5 }}
              >
                <a 
                  href={link.href}
                  style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'white' }}>
            Contact
          </h4>
          <motion.a 
            href={`mailto:${portfolioData.email}`}
            style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}
            whileHover={{ color: 'white' }}
          >
            {portfolioData.email}
          </motion.a>
          
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.a 
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
              whileHover={{ color: 'white', scale: 1.1 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .315.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
              whileHover={{ color: 'white', scale: 1.1 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--card-border)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
