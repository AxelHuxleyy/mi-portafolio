'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  const links = [
    { label: t('nav.home'),       href: '#hero' },
    { label: t('nav.about'),      href: '#about' },
    { label: t('nav.skills'),     href: '#skills' },
    { label: t('nav.projects'),   href: '#projects' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.experience'), href: '#experience' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'skills', 'projects', 'testimonials', 'experience'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(5,5,8,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}
        >
          {'<Huxley />'}
        </motion.a>

        {/* Desktop nav + lang toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <nav className="desktop-nav">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.86rem',
                  fontWeight: active === link.href ? 600 : 450,
                  color:
                    active === link.href
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: 2,
                      left: '20%',
                      right: '20%',
                      height: 2,
                      background: 'var(--gradient-primary)',
                      borderRadius: 2,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle Button */}
          <motion.button
            onClick={toggleLang}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 50,
              border: '1px solid rgba(99,102,241,0.35)',
              background: 'rgba(99,102,241,0.08)',
              cursor: 'pointer',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.04em',
              transition: 'all 0.25s',
              backdropFilter: 'blur(8px)',
              marginLeft: 8,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 5 }}
              >
                <span style={{ fontSize: '1rem' }}>
                  {lang === 'es' ? '🇲🇽' : '🇺🇸'}
                </span>
                {lang === 'es' ? 'ES' : 'EN'}
              </motion.span>
            </AnimatePresence>
            <span style={{ color: 'rgba(99,102,241,0.4)', fontSize: '0.7rem' }}>|</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
              {lang === 'es' ? 'EN' : 'ES'}
            </span>
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--text-primary)',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              background: 'rgba(5,5,8,0.98)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 24px 24px' }}>
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color:
                      active === link.href
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile language toggle */}
              <div style={{ paddingTop: 16 }}>
                <button
                  onClick={toggleLang}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>
                    {lang === 'es' ? '🇺🇸' : '🇲🇽'}
                  </span>
                  {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
