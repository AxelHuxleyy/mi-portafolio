'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';

const ROLES = [
  'UI Team Leader',
  'React / Next.js Expert',
  'React Native Developer',
  'Software Engineer',
  'Atomic Design Architect',
];

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !counted.current) {
          counted.current = true;
          const num = parseInt(target);
          const duration = 1800;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        70,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const stats = [
    { num: '6', suffix: '+', label: 'Años de experiencia' },
    { num: '8', suffix: '+', label: 'Developers liderados' },
    { num: '15', suffix: '+', label: 'Tecnologías dominadas' },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0,
          maskImage:
            'radial-gradient(ellipse 70% 70% at 30% 50%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 30% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 200,
          height: 200,
          border: '1px solid rgba(99,102,241,0.12)',
          borderRadius: 40,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: 120,
          height: 120,
          border: '1px solid rgba(139,92,246,0.1)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          right: '30%',
          width: 8,
          height: 8,
          background: '#6366f1',
          borderRadius: '50%',
          boxShadow: '0 0 20px #6366f1',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          style={{ maxWidth: 820 }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 18px',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: 50,
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: '#10b981',
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulse-glow 2s infinite',
                color: '#10b981',
              }}
            />
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.76rem',
                color: '#10b981',
                letterSpacing: '0.05em',
              }}
            >
              Disponible para nuevos retos
            </span>
          </motion.div>

          {/* Main heading */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              marginBottom: 16,
              color: 'var(--text-primary)',
            }}
          >
            Hola, soy{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Axel Huxley
            </span>
          </h1>

          {/* Typing role */}
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.3rem, 3vw, 2.1rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 28,
              minHeight: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span>{displayed}</span>
            <span
              style={{
                display: 'inline-block',
                width: 3,
                height: '1.1em',
                background: 'var(--accent)',
                borderRadius: 2,
                animation: 'blink 1s infinite',
                marginLeft: 2,
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              maxWidth: 620,
              marginBottom: 48,
            }}
          >
            Lidero equipos de desarrollo y construyo experiencias web y móviles
            de alto impacto para clientes{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Fortune 500
            </span>
            . Especializado en{' '}
            <span style={{ color: '#8b5cf6', fontWeight: 600 }}>React</span>,{' '}
            <span style={{ color: '#06b6d4', fontWeight: 600 }}>Next.js</span> y{' '}
            <span style={{ color: '#ec4899', fontWeight: 600 }}>
              React Native
            </span>{' '}
            con arquitectura{' '}
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>
              Atomic Design
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 72,
            }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Briefcase size={16} />
              Ver Proyectos
            </motion.a>
            <motion.a
              href="/cv-axel.pdf"
              download
              className="btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ borderStyle: 'dashed' }}
            >
              <ArrowDown size={16} />
              Descargar CV
            </motion.a>
          </div>

          {/* Stats with animated counters */}
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.1,
                  }}
                >
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: "'Fira Code', monospace",
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 24,
              height: 40,
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 8,
            }}
          >
            <div
              style={{
                width: 3,
                height: 8,
                background: 'var(--accent)',
                borderRadius: 2,
                animation: 'scrollDot 2s infinite',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
