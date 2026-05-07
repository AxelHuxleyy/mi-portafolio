'use client'
import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    role: 'Sr. Analyst / UI Team Lead',
    company: 'Accenture',
    period: 'Mar 2022 — Presente',
    type: 'Full-time',
    color: '#6366f1',
    description:
      'Liderazgo de equipo de 8+ developers para clientes Fortune 500 del sector financiero. Arquitectura de sistemas de diseño globales con Atomic Design y desarrollo cross-platform.',
    achievements: [
      'Lideré y mentoricé un equipo de alto rendimiento de 8 developers, supervisando code reviews y crecimiento técnico',
      'Arquitecté un sistema Atomic Design global desde cero para plataformas web financieras Fortune 500',
      'Contribución técnica clave en desarrollo de apps móviles cross-platform con React Native',
      'Reduje drásticamente el time-to-market con spikes arquitectónicos y API mocking con MSW',
      'Modernicé el state management integrando TanStack Query y Redux Toolkit',
      'Establecí estándar mandatorio de 80% de cobertura en unit testing con Jest y RTL',
      'Colaboración con stakeholders multinacionales traduciendo requerimientos complejos a arquitecturas web',
    ],
    stack: ['React', 'TypeScript', 'MUI', 'React Native', 'TanStack Query', 'Jest', 'MSW'],
  },
  {
    role: 'Front-end Developer',
    company: 'HEB',
    period: 'Sep 2021 — Dic 2021',
    type: 'Full-time',
    color: '#8b5cf6',
    description:
      'Desarrollo de plataforma interna de alto impacto para gestión de inventario y pricing. Soluciones cross-platform con React y React Native.',
    achievements: [
      'Desarrollé plataforma interna para gestión de inventario y pricing en tiempo récord',
      'Ingeniería de soluciones cross-platform (web + móvil) con React y React Native',
      'Implementé algoritmos de búsqueda avanzados para optimizar el descubrimiento de productos',
      'Arquitecté state management robusto con Redux y comunicación API con Axios',
      'Diseñé componentes profesionales con Ant Design, traduciendo prototipos Adobe XD pixel-perfect',
    ],
    stack: ['React', 'React Native', 'Redux', 'Ant Design', 'Axios', 'CSS'],
  },
  {
    role: 'Internship — Backend Developer',
    company: 'Neoris',
    period: 'Ene 2021 — Jun 2021',
    type: 'Internship',
    color: '#06b6d4',
    description:
      'Desarrollo de APIs RESTful y microservicios. Gestión de bases de datos PostgreSQL y Oracle con enfoque en calidad de código y CI/CD.',
    achievements: [
      'Desarrollé y mantuve APIs RESTful y microservicios con Java y Spring Boot',
      'Gestión de bases de datos PostgreSQL y Oracle, optimizando queries complejas',
      'Implementé unit tests automatizados con JUnit manteniendo alta cobertura',
      'Colaboración en entorno Ágil (Scrum) utilizando Jenkins para CI',
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Oracle', 'JUnit', 'Jenkins'],
  },
  {
    role: 'Software Developer',
    company: 'Freelance',
    period: 'Ene 2018 — Mar 2019',
    type: 'Freelance',
    color: '#f59e0b',
    description:
      'Desarrollo full-stack independiente: CRM systems, e-commerce platforms, landing pages y dashboards de analítica para clientes diversos.',
    achievements: [
      'Desarrollé CRM full-stack con React, GraphQL y MongoDB para operaciones de negocio',
      'Ingeniería de dashboards de analítica en tiempo real con Axios y Tailwind CSS',
      'Diseñé plataformas e-commerce especializadas (MERN stack) para retail',
      'Construí landing pages de alto rendimiento con PHP y CSS para sectores industrial y automotriz',
      'Aprendizaje autodidacta de GraphQL para resolver requisitos complejos de data',
    ],
    stack: ['React', 'GraphQL', 'MongoDB', 'Node.js', 'Tailwind', 'PHP'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Trayectoria</div>
        <h2 className="section-title">
          Mi <span className="gradient-text">Experiencia</span>
        </h2>
        <p className="section-subtitle">
          De freelancer a líder de equipo en Accenture — una trayectoria de
          crecimiento constante en el desarrollo de software.
        </p>

        <div style={{ position: 'relative', maxWidth: 880 }}>
          {/* Timeline vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              left: 19,
              top: 20,
              width: 2,
              background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4, #f59e0b)',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.12,
              }}
              style={{
                display: 'flex',
                gap: 32,
                marginBottom: 36,
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `${exp.color}15`,
                    border: `2px solid ${exp.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 24px ${exp.color}30`,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: exp.color,
                    }}
                  />
                  {/* Pulse ring */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      border: `1px solid ${exp.color}`,
                      opacity: i === 0 ? 1 : 0,
                      animation: i === 0 ? 'pulse-glow 2s infinite' : 'none',
                      color: exp.color,
                    }}
                  />
                </motion.div>
              </div>

              {/* Card */}
              <div
                className="glass-card"
                style={{ flex: 1, padding: 28 }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.08rem',
                        color: 'var(--text-primary)',
                        marginBottom: 4,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          color: exp.color,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}
                      >
                        {exp.company}
                      </span>
                      <span
                        style={{
                          padding: '2px 9px',
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}28`,
                          borderRadius: 4,
                          fontSize: '0.68rem',
                          fontFamily: "'Fira Code', monospace",
                          color: exp.color,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                      marginTop: 4,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 18,
                    marginTop: 12,
                  }}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul
                  style={{
                    marginBottom: 20,
                    paddingLeft: 0,
                    listStyle: 'none',
                  }}
                >
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      style={{
                        display: 'flex',
                        gap: 10,
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        marginBottom: 7,
                        alignItems: 'flex-start',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: exp.color,
                          marginTop: 3,
                          flexShrink: 0,
                          fontSize: '0.7rem',
                        }}
                      >
                        ▸
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                  }}
                >
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '3px 10px',
                        background: `${exp.color}0d`,
                        border: `1px solid ${exp.color}20`,
                        borderRadius: 6,
                        fontSize: '0.7rem',
                        fontFamily: "'Fira Code', monospace",
                        color: exp.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
