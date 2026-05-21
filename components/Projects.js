'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';



function SpotlightCard({ children, project, style }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });
  const { t } = useLanguage();



  const handleMouse = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Spotlight overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: spotlight.visible
            ? `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, ${project.color}12, transparent 60%)`
            : 'none',
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.07,
      }}
    >
      <SpotlightCard
        project={project}
        style={{
          background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
          border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.05)'}`,
          borderRadius: 20,
          padding: 28,
          cursor: 'default',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: hovered ? `0 12px 48px ${project.color}15` : 'none',
          transform: hovered ? 'translateY(-6px)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          {/* Top gradient line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s',
              zIndex: 3,
            }}
          />

          {/* Featured badge */}
          {project.featured && (
            <div
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                padding: '3px 10px',
                background: `${project.color}18`,
                border: `1px solid ${project.color}35`,
                borderRadius: 50,
                fontSize: '0.68rem',
                fontFamily: "'Fira Code', monospace",
                color: project.color,
                zIndex: 3,
              }}
            >
              ★ Featured
            </div>
          )}

          {/* Icon */}
          <motion.div
            animate={
              hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              width: 52,
              height: 52,
              background: `${project.color}12`,
              border: `1px solid ${project.color}25`,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: 20,
            }}
          >
            {project.icon}
          </motion.div>

          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              marginBottom: 12,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 20,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              marginBottom: 22,
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '3px 10px',
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}20`,
                  borderRadius: 6,
                  fontSize: '0.7rem',
                  fontFamily: "'Fira Code', monospace",
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 10 }}>
            <motion.a
              href={project.github}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: project.color,
                padding: '7px 14px',
                borderRadius: 8,
                border: `1px solid ${project.color}25`,
                background: `${project.color}08`,
                transition: 'all 0.2s',
              }}
            >
              <Github size={13} />
              Código
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                padding: '7px 14px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s',
              }}
            >
              <ExternalLink size={13} />
              Demo
            </motion.a>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState(t('projects.filterAll'));
  const PROJECTS = [
    {
      title: t('projects.items.atomicDesign.title'),
      description:
        t('projects.items.atomicDesign.description'),
      tags: ['React', 'TypeScript', 'Atomic Design', 'MUI', 'Jest'],
      color: '#6366f1',
      icon: '🏗️',
      featured: true,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.heb.title'),
      description:
        t('projects.items.heb.description'),
      tags: ['React', 'React Native', 'Redux', 'Ant Design', 'Axios'],
      color: '#8b5cf6',
      icon: '📦',
      featured: true,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.crm.title'),
      description:
        t('projects.items.crm.description'),
      tags: ['React', 'GraphQL', 'MongoDB', 'Tailwind', 'Node.js'],
      color: '#06b6d4',
      icon: '📊',
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.mobileApps.title'),
      description:
        t('projects.items.mobileApps.description'),
      tags: ['React Native', 'Expo', 'AsyncStorage', 'Push Notifications'],
      color: '#10b981',
      icon: '📱',
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.ecommerce.title'),
      description:
        t('projects.items.ecommerce.description'),
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      color: '#f59e0b',
      icon: '🛒',
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.portfolio.title'),
      description:
        t('projects.items.portfolio.description'),
      tags: ['Next.js 15', 'React 19', 'Framer Motion', 'CSS3'],
      color: '#ec4899',
      icon: '🚀',
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.items.tanstack.title'),
      description:
        t('projects.items.tanstack.description'),
      tags: ['React 19', 'Tanstack Query', 'CSS3', 'Node.js', 'Tailwind'],
      color: '#ff4154', // Rojo característico de TanStack
      icon: '🔄',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/tanstackQuery-basic-example',
      demo: '#',
    },
    {
      title: t('projects.items.chat.title'),
      description:
        t('projects.items.chat.description'),
      tags: ['React 19', 'Graph QL', 'CSS3', 'Node.js', 'Tailwind', 'socket.io'],
      color: '#3b82f6', // Azul para comunicación/chat
      icon: '💬',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/chatapp',
      demo: '#',
    },
    {
      title: t('projects.items.algorithms.title'),
      description:
        t('projects.items.algorithms.description'),
      tags: ['JavaScript', 'Algortimos'],
      color: '#facc15', // Amarillo JavaScript
      icon: '🧠',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/algoritmos',
      demo: '#',
    },
    {
      title: t('projects.items.crmGraphql.title'),
      description:
        t('projects.items.crmGraphql.description'),
      tags: ['React', 'GraphQL', 'CRM', 'Apollo', 'Redux'],
      color: '#22c55e', // Verde para CRM/Ventas
      icon: '👥',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/interface-crm-graphQL',
      demo: '#',
    },
    {
      title: t('projects.items.cinema.title'),
      description:
        t('projects.items.cinema.description'),
      tags: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
      color: '#7c3aed', // Violeta profundo para cine
      icon: '🎬',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/blog-movies',
      demo: '#',
    },
    {
      title: t('projects.items.instagram.title'),
      description:
        t('projects.items.instagram.description'),
      tags: ['React Native'],
      color: '#f43f5e', // Rosa/Fucsia estilo Instagram
      icon: '📸',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/copy-instagram',
      demo: '#',
    },
    {
      title: t('projects.items.videoEngine.title'),
      description:
        t('projects.items.videoEngine.description'),
      tags: ['Node.js', 'FFmpeg', 'Jimp'],
      color: '#0ea5e9', // Azul cielo para procesamiento/tecnología
      icon: '🎞️',
      featured: false,
      github: 'https://github.com/AxelHuxleyy/video-to-video-filter-b-w',
      demo: '#',
    },
  ];
  const categories = [
    t('projects.filterAll'),
    'React',
    'React Native',
    'TypeScript',
    'Node.js',
  ];
  const filtered =
    filter === t('projects.filterAll')
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.some((t) => t.includes(filter)));

  useEffect(() => {
    console.log('executing...');

    setFilter(t('projects.filterAll'));
  }, [lang])


  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">{t('projects.label')}</div>
        <h2 className="section-title">
          {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">
          {t('projects.subtitle')}
        </p>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                border: '1px solid',
                fontSize: '0.84rem',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                background: filter === cat ? 'var(--accent)' : 'transparent',
                borderColor:
                  filter === cat ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                color: filter === cat ? 'white' : 'var(--text-secondary)',
                transition: 'all 0.25s',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: 22,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
