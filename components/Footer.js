'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
];

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/', label: 'GitHub' },
  {
    icon: <Linkedin size={18} />,
    href: 'https://linkedin.com/in/axel-huxley-ram%C3%ADrez-s%C3%A1nchez-58194b165',
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={18} />,
    href: 'mailto:axel_ra.s@hotmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, paddingTop: 0 }}>
      {/* Gradient divider */}
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.3), transparent)',
        }}
      />

      <div className="container" style={{ padding: '60px 24px 40px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <a
              href="#hero"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                background:
                  'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                marginBottom: 14,
              }}
            >
              {'<Huxley />'}
            </a>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              UI Team Leader & Software Engineer especializado en React, Next.js
              y React Native. Construyendo experiencias digitales de clase
              mundial.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}
            >
              Navegación
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                  onMouseLeave={(e) =>
                    (e.target.style.color = 'var(--text-muted)')
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}
            >
              Conecta
            </h4>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ y: -3 }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.04)',
            marginBottom: 24,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Axel Huxley Ramírez. Todos los derechos
            reservados.
          </p>
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            Built with <Heart size={12} style={{ color: '#ec4899' }} /> &
            Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
}
