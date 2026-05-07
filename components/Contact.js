'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const socials = [
  { name: 'GitHub', url: 'https://github.com/', color: '#e2e8f0', icon: <Github size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/axel-huxley-ram%C3%ADrez-s%C3%A1nchez-58194b165', color: '#0ea5e9', icon: <Linkedin size={20} /> },
  { name: 'Email', url: 'mailto:axel_ra.s@hotmail.com', color: '#6366f1', icon: <Mail size={20} /> },
]

const inputBase = {
  width: '100%', padding: '14px 16px', background: 'var(--bg-card)',
  border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)',
  fontSize: '0.9rem', fontFamily: "'Inter', sans-serif", outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
}

const labelBase = {
  display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-secondary)',
  marginBottom: 8, fontFamily: "'Fira Code', monospace", letterSpacing: '0.03em',
}

function focusIn(e) { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)' }
function focusOut(e) { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent'); setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">Contacto</div>
        <h2 className="section-title">¡Hablemos de tu <span className="gradient-text">próximo proyecto</span>!</h2>
        <p className="section-subtitle">Disponible para posiciones de liderazgo técnico, proyectos freelance y colaboraciones.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, maxWidth: 1000 }}>
          {/* Info card */}
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ padding: 32, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20, marginBottom: 24 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✉️</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>¿Tienes un proyecto en mente?</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>Ya sea liderazgo técnico, desarrollo de aplicaciones o consultoría en arquitectura frontend.</p>

              {[{ icon: <Mail size={16} />, label: 'Email', value: 'axel_ra.s@hotmail.com' }, { icon: <MapPin size={16} />, label: 'Ubicación', value: 'Querétaro, México 🇲🇽' }].map(info => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#6366f1' }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'Fira Code', monospace" }}>{info.label}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 500 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(s => (
                <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name} whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ width: 50, height: 50, borderRadius: 14, background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.background = s.color + '10' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
                >{s.icon}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label htmlFor="name" style={labelBase}>Tu nombre</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Juan García" required style={inputBase} onFocus={focusIn} onBlur={focusOut} />
            </div>
            <div>
              <label htmlFor="email" style={labelBase}>Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="juan@empresa.com" required style={inputBase} onFocus={focusIn} onBlur={focusOut} />
            </div>
            <div>
              <label htmlFor="message" style={labelBase}>Mensaje</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto..." required rows={5} style={{ ...inputBase, resize: 'vertical', minHeight: 140 }} onFocus={focusIn} onBlur={focusOut} />
            </div>
            <motion.button type="submit" disabled={status !== 'idle'} className="btn-primary" whileHover={status === 'idle' ? { scale: 1.02 } : {}} whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              style={{ justifyContent: 'center', width: '100%', opacity: status === 'sending' ? 0.7 : 1, background: status === 'sent' ? 'linear-gradient(135deg, #10b981, #059669)' : undefined }}>
              {status === 'idle' && <><Send size={16} /> Enviar mensaje</>}
              {status === 'sending' && <><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex' }}><Loader2 size={16} /></motion.span> Enviando...</>}
              {status === 'sent' && <><CheckCircle size={16} /> ¡Mensaje enviado!</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
