'use client';
import { motion } from 'framer-motion';

export default function About() {
  const facts = [
    { icon: '🏢', label: 'Empresa actual', value: 'Accenture' },
    { icon: '👨‍💼', label: 'Rol', value: 'Sr. UI Team Lead' },
    { icon: '📍', label: 'Ubicación', value: 'Querétaro, MX' },
    { icon: '🎓', label: 'Educación', value: 'Ing. Software' },
    { icon: '🌐', label: 'Idiomas', value: 'Español / Inglés C1' },
    { icon: '🏗️', label: 'Arquitectura', value: 'Atomic Design' },
    { icon: '🧪', label: 'Testing', value: '80% Coverage' },
    { icon: '⚡', label: 'Disponibilidad', value: 'Remote / Híbrido' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="section-label">Sobre mí</div>
            <h2 className="section-title">
              Liderando equipos que
              <br />
              construyen a <span className="gradient-text">escala</span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: 20,
                fontSize: '1rem',
              }}
            >
              Soy un UI Team Leader & Software Engineer con{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                6+ años de experiencia
              </strong>{' '}
              construyendo aplicaciones web y móviles para clientes Fortune 500
              en Accenture. Lidero un equipo de 8+ developers, diseñando
              sistemas de diseño a escala global con Atomic Design y asegurando
              un estándar de 80% de cobertura en testing.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: 32,
                fontSize: '1rem',
              }}
            >
              Especializado en el ecosistema React, transformo requerimientos
              complejos de negocio en arquitecturas escalables con zero-latency
              feel. Apasionado por el puente entre complejidad técnica y
              crecimiento de negocio.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <motion.a
                href="#experience"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver trayectoria
              </motion.a>
            </div>
          </motion.div>

          {/* Right: bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                margin: '0 auto 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 0 60px rgba(99,102,241,0.25)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 3,
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.8rem',
                }}
              >
                👨‍💻
              </div>
              {/* Orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1px dashed rgba(99,102,241,0.25)',
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -35,
                  borderRadius: '50%',
                  border: '1px dashed rgba(139,92,246,0.15)',
                }}
              />
              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: -4,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#6366f1',
                    boxShadow: '0 0 12px #6366f1',
                  }}
                />
              </motion.div>
            </div>

            {/* Facts bento grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
            >
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  className="glass-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  style={{
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
                    {fact.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        fontFamily: "'Fira Code', monospace",
                        marginBottom: 1,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {fact.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
