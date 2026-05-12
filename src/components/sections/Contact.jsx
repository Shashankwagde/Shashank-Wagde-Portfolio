import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const InputField = ({ label, type = 'text', placeholder, isTextarea = false, value, onChange,name }) => {
  const [focused, setFocused] = useState(false);
  
  const inputStyle = {
    background: '#1a1a2e',
    border: '1px solid #2d2d44',
    padding: '1rem',
    borderRadius: '12px',
    color: '#ffffff',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    fontFamily: 'inherit',
    position: 'relative',
    zIndex: 10,
    pointerEvents: 'auto',
    touchAction: 'auto'
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
      <label style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          onFocus={(e) => {
            setFocused(true);
            e.target.style.borderColor = '#22d3ee';
            e.target.style.boxShadow = '0 0 25px rgba(34,211,238,0.15)';
          }}
          onBlur={(e) => {
            setFocused(false);
            e.target.style.borderColor = '#2d2d44';
            e.target.style.boxShadow = 'none';
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          onFocus={(e) => {
            setFocused(true);
            e.target.style.borderColor = '#22d3ee';
            e.target.style.boxShadow = '0 0 25px rgba(34,211,238,0.15)';
          }}
          onBlur={(e) => {
            setFocused(false);
            e.target.style.borderColor = '#2d2d44';
            e.target.style.boxShadow = 'none';
          }}
        />
      )}
{/* Animated border accent */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: focused ? '100%' : '0%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)',
          borderRadius: '1px',
          transform: 'translateX(-50%)',
          pointerEvents: 'none'
        }}
        animate={{
          width: focused ? '100%' : '0%',
          opacity: focused ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill in all fields' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const mailtoLink = `mailto:${portfolioData.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus({ success: true, message: 'Email client opened! Thanks for reaching out.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to open email client. Please email directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's build the <br /> <span style={{ color: 'var(--accent)' }}>next big thing</span>.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '400px' }}>
              Whether you have a specific project in mind or just want to chat about AI agents, I'm always open to new connections.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.a
                href={`mailto:${portfolioData.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', fontSize: '1.1rem' }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  style={{ width: '40px', height: '40px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee' }}
                  whileHover={{ scale: 1.1, background: 'rgba(34, 211, 238, 0.2)' }}
                >
                  <Mail size={20} />
                </motion.div>
                {portfolioData.email}
              </motion.a>
              <div style={{ display: 'flex', gap: '1rem' }}>
<motion.a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee' }}
                  whileHover={{ scale: 1.1, background: 'rgba(34, 211, 238, 0.2)', y: -3 }}
>
<img src="/Github.gif" alt="GitHub" style={{ width: '60px', height: '60px' }} />
                </motion.a>
                <motion.a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '40px', height: '40px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee' }}
                  whileHover={{ scale: 1.1, background: 'rgba(34, 211, 238, 0.2)', y: -3 }}
                >
<img src="/LinkedIn.gif" alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
                </motion.a>
              </div>
            </div>
          </motion.div>

<motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: '#0a0a14',
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid #2d2d44',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            <InputField 
              label="Full Name" 
              placeholder="John Doe" 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField 
              label="Email Address" 
              type="email" 
              placeholder="john@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField 
              label="Message" 
              placeholder="How can I help you?" 
              isTextarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
<motion.button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                color: '#030712',
                padding: '1rem',
                borderRadius: '12px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 10
              }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 30px rgba(34,211,238,0.4)' 
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shine effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ x: ['0%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
<motion.span
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}
                whileHover={{ x: [0, 3, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.span>
            </motion.button>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: submitStatus.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${submitStatus.success ? '#22c55e' : '#ef4444'}`,
                  color: submitStatus.success ? '#22c55e' : '#ef4444',
                  textAlign: 'center'
                }}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
