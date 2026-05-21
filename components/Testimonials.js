'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const TESTIMONIALS = t('testimonials.items') || [];
  const colors = ['#6366f1', '#06b6d4', '#8b5cf6'];

  return (
    <section id="testimonials" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-label">{t('testimonials.label')}</div>
        <h2 className="section-title">
          {t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">
          {t('testimonials.subtitle')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginTop: 20,
          }}
        >
          {Array.isArray(TESTIMONIALS) && TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.15,
              }}
              className="glass-card"
              style={{
                padding: '36px 32px 32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderTop: `2px solid ${colors[i % colors.length]}60`,
                height: '100%',
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${colors[i % colors.length]}, ${colors[(i + 1) % colors.length]})`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 20px ${colors[i % colors.length]}35`,
                  marginBottom: 24,
                }}
              >
                <Quote size={22} color="white" strokeWidth={2.5} />
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  marginBottom: 32,
                  flex: 1,
                }}
              >
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `${colors[i % colors.length]}18`,
                    border: `1px solid ${colors[i % colors.length]}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors[i % colors.length],
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {testimonial.role ? testimonial.role.charAt(0) : 'U'}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      margin: 0,
                      marginBottom: 2,
                    }}
                  >
                    {testimonial.role ? testimonial.role.split(' / ')[0] : 'User'}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {testimonial.role ? (testimonial.role.split(' / ')[1] || testimonial.role) : 'Colleague'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
