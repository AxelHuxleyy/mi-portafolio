'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

const SKILLS = [
  {
    category: 'Frontend Core',
    icon: '🎨',
    color: '#6366f1',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript ES6+', level: 95 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    color: '#8b5cf6',
    items: [
      { name: 'React Native', level: 85 },
      { name: 'Expo', level: 82 },
      { name: 'Cross-platform', level: 88 },
    ],
  },
  {
    category: 'State & Data',
    icon: '⚙️',
    color: '#06b6d4',
    items: [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'TanStack Query', level: 85 },
      { name: 'Context API', level: 92 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Architecture & QA',
    icon: '🏗️',
    color: '#f59e0b',
    items: [
      { name: 'Atomic Design', level: 92 },
      { name: 'Jest / RTL', level: 88 },
      { name: 'TDD', level: 82 },
      { name: 'MSW (Mock)', level: 80 },
    ],
  },
  {
    category: 'UI Libraries',
    icon: '🧩',
    color: '#ec4899',
    items: [
      { name: 'Material UI', level: 90 },
      { name: 'Ant Design', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend & DevOps',
    icon: '🔧',
    color: '#10b981',
    items: [
      { name: 'Node.js / APIs', level: 78 },
      { name: 'MongoDB / SQL', level: 75 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Jenkins CI', level: 72 },
    ],
  },
]

const TECH_BADGES = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'Expo',
  'Redux Toolkit', 'TanStack Query', 'GraphQL', 'Node.js',
  'Jest', 'React Testing Library', 'MSW', 'Material UI',
  'Ant Design', 'Tailwind CSS', 'Framer Motion', 'Vite',
  'Git', 'MongoDB', 'PostgreSQL', 'Spring Boot', 'Python',
  'Atomic Design', 'TDD', 'Axios', 'REST APIs',
]

function SkillBar({ name, level, color, delay }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: "'Fira Code', monospace",
            color,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 5,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            delay: delay,
          }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: 3,
            boxShadow: `0 0 8px ${color}44`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Shimmer effect */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">{t('skills.label')}</div>
        <h2 className="section-title">
          Mis <span className="gradient-text">{t('skills.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">
          {t('skills.subtitle')}
        </p>

        {/* Skill categories grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
            marginBottom: 72,
          }}
        >
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: gi * 0.08,
              }}
              style={{ padding: 26 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 22,
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{group.icon}</span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: group.color,
                  }}
                >
                  {group.category}
                </span>
              </div>
              {group.items.map((item, ii) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  color={group.color}
                  delay={gi * 0.08 + ii * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges cloud */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              marginBottom: 24,
              textTransform: 'uppercase',
            }}
          >
            {t('skills.ecosystem')}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
              maxWidth: 750,
              margin: '0 auto',
            }}
          >
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                style={{ cursor: 'default' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
