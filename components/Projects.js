'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Atomic Design System — Fortune 500',
    description:
      'Sistema de diseño global desde cero para plataformas web financieras. Arquitectura de componentes reutilizables con Atomic Design, mejorando consistencia de UI y reduciendo tiempo de desarrollo.',
    tags: ['React', 'TypeScript', 'Atomic Design', 'MUI', 'Jest'],
    color: '#6366f1',
    icon: '🏗️',
    featured: true,
    github: '#',
    demo: '#',
  },
  {
    title: 'Plataforma de Inventario — HEB',
    description:
      'Plataforma interna de alto impacto para gestión de inventario y pricing. Soluciones cross-platform con React y React Native, algoritmos de búsqueda avanzados y state management robusto.',
    tags: ['React', 'React Native', 'Redux', 'Ant Design', 'Axios'],
    color: '#8b5cf6',
    icon: '📦',
    featured: true,
    github: '#',
    demo: '#',
  },
  {
    title: 'CRM Full-Stack',
    description:
      'Sistema CRM robusto con React, GraphQL y MongoDB. Centralización de inventario, sales tracking y administración de RRHH. Dashboards de analítica en tiempo real.',
    tags: ['React', 'GraphQL', 'MongoDB', 'Tailwind', 'Node.js'],
    color: '#06b6d4',
    icon: '📊',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    description:
      'Aplicaciones móviles con sincronización offline-first usando React Native y Expo. Patrón de captura de datos sin conexión con sync automático al restaurar conectividad.',
    tags: ['React Native', 'Expo', 'AsyncStorage', 'Push Notifications'],
    color: '#10b981',
    icon: '📱',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce MERN Stack',
    description:
      'Plataforma e-commerce especializada para retail con catálogos dinámicos, integraciones de API custom y gestión eficiente de productos.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    color: '#f59e0b',
    icon: '🛒',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Personal',
    description:
      'Este mismo portafolio. Diseño premium con Next.js 15, React 19, partículas interactivas, animaciones con Framer Motion y arquitectura App Router.',
    tags: ['Next.js 15', 'React 19', 'Framer Motion', 'CSS3'],
    color: '#ec4899',
    icon: '🚀',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Basic Example tanstack Query',
    description:
      'Ejemplo basico de uso de tanstack query, fetch, delete, create y update. Esta conectando con una api mimsa que puedes encontrar en el repo.',
    tags: ['React 19', 'Tanstack Query', 'CSS3', 'Node.js', 'Tailwind'],
    color: '#ff4154', // Rojo característico de TanStack
    icon: '🔄',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/tanstackQuery-basic-example',
    demo: '#',
  },
  {
    title: 'Chat App',
    description:
      'Creacion de un chat en tiempo real con socket.io, grafana y node.js. Desarrollo de front-end y back-end, mismos que se pueden encontrar en el repo.',
    tags: ['React 19', 'Graph QL', 'CSS3', 'Node.js', 'Tailwind', 'socket.io'],
    color: '#3b82f6', // Azul para comunicación/chat
    icon: '💬',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/chatapp',
    demo: '#',
  },
  {
    title: 'Algortimos en javaScript',
    description:
      'Biblioteca técnica de lógica computacional en JavaScript. Soluciones para grafos, árboles y algoritmos de ordenamiento enfocadas en optimizar el rendimiento y entender a fondo la complejidad algorítmica.',
    tags: ['JavaScript', 'Algortimos'],
    color: '#facc15', // Amarillo JavaScript
    icon: '🧠',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/algoritmos',
    demo: '#',
  },
  {
    title: 'Customer Relationship Management (CRM)',
    description:
      'Sistema de gestión CRM optimizado con GraphQL y React. Implementa consultas de datos eficientes para administración de prospectos, enfocándose en la modularidad, el alto rendimiento y la interactividad en tiempo real.',
    tags: ['React', 'GraphQL', 'CRM', 'Apollo', 'Redux'],
    color: '#22c55e', // Verde para CRM/Ventas
    icon: '👥',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/interface-crm-graphQL',
    demo: '#',
  },
  {
    title: 'Cinema club',
    description:
      'Plataforma cinematográfica construida con PHP. Enfocada en renderizado dinámico y bases de datos, ofrece una estructura sólida para administrar información multimedia mediante lógica servidor eficiente.',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    color: '#7c3aed', // Violeta profundo para cine
    icon: '🎬',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/blog-movies',
    demo: '#',
  },
  {
    title: 'Copy instagram',
    description:
      'En el proyecto se busco realizar una copia de la aplicacion instagram, copiando unicamente lo visual sin conexiones a ninguna api.',
    tags: ['React Native'],
    color: '#f43f5e', // Rosa/Fucsia estilo Instagram
    icon: '📸',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/copy-instagram',
    demo: '#',
  },
  {
    title: 'Parallel Video Processing Engine',
    description:
      'Motor de procesamiento paralelo en Node.js que optimiza el uso de CPU mediante clusters. Automatiza la extracción, filtrado y renderizado de video utilizando FFmpeg y Jimp.',
    tags: ['Node.js', 'FFmpeg', 'Jimp'],
    color: '#0ea5e9', // Azul cielo para procesamiento/tecnología
    icon: '🎞️',
    featured: false,
    github: 'https://github.com/AxelHuxleyy/video-to-video-filter-b-w',
    demo: '#',
  },
];

function SpotlightCard({ children, project, style }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

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
  const [filter, setFilter] = useState('Todos');
  const categories = [
    'Todos',
    'React',
    'React Native',
    'TypeScript',
    'Node.js',
  ];
  const filtered =
    filter === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.some((t) => t.includes(filter)));

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">Trabajo</div>
        <h2 className="section-title">
          Proyectos <span className="gradient-text">Destacados</span>
        </h2>
        <p className="section-subtitle">
          Proyectos reales que demuestran liderazgo técnico, arquitectura
          escalable y desarrollo full-stack.
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
