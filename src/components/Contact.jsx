import { useState } from 'react'
import { Reveal } from './Reveal'

const inputStyle = {
  width:        '100%',
  boxSizing:    'border-box',
  background:   '#1a2a0a',
  border:       '1.5px solid #3a5018',
  borderRadius: 14,
  padding:      '12px 16px',
  color:        '#eeffcc',
  fontFamily:   "'Nunito', sans-serif",
  fontWeight:   600,
  fontSize:     15,
  outline:      'none',
  transition:   'border-color 0.2s',
}

export default function Contact() {
  const [formData,  setFormData]  = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const focusBorder  = (e) => (e.target.style.borderColor = '#7db800')
  const blurBorder   = (e) => (e.target.style.borderColor = '#3a5018')

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', background: '#1a2a0a' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div
              style={{
                display:      'inline-block',
                background:   'rgba(181,229,80,0.15)',
                border:       '1px solid rgba(181,229,80,0.3)',
                borderRadius: 20,
                padding:      '4px 14px',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontWeight:    800,
                  fontSize:      12,
                  color:         '#b5e550',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Get in Touch
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize:   'clamp(1.8rem, 5vw, 2.8rem)',
                color:      '#eeffcc',
                lineHeight: 1.15,
              }}
            >
              Let's Talk Gummies.
            </h2>

            <p style={{ color: '#9fd440', fontWeight: 600, marginTop: '0.75rem' }}>
              Wholesale inquiries, press, or just want to say kamusta? We read everything.
            </p>
          </div>
        </Reveal>

        {/* Form or success */}
        <Reveal delay={0.1}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                background:   '#243010',
                borderRadius: 28,
                padding:      '2.5rem',
                border:       '1.5px solid #3a5018',
              }}
            >
              {/* Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="name"
                  style={{
                    display:       'block',
                    fontWeight:    800,
                    fontSize:      13,
                    color:         '#9fd440',
                    marginBottom:  6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Juan dela Cruz"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="email"
                  style={{
                    display:       'block',
                    fontWeight:    800,
                    fontSize:      13,
                    color:         '#9fd440',
                    marginBottom:  6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  htmlFor="message"
                  style={{
                    display:       'block',
                    fontWeight:    800,
                    fontSize:      13,
                    color:         '#9fd440',
                    marginBottom:  6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us anything — we're all ears (and gummies)."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  width:      '100%',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize:   16,
                  padding:    '14px',
                  border:     'none',
                  cursor:     loading ? 'not-allowed' : 'pointer',
                  opacity:    loading ? 0.75 : 1,
                  borderRadius: 16,
                }}
              >
                {loading ? 'Sending… 🌿' : 'Send Message 💌'}
              </button>
            </form>
          ) : (
            <div
              style={{
                background:   '#243010',
                borderRadius: 28,
                padding:      '3rem',
                border:       '1.5px solid #7db800',
                textAlign:    'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3
                style={{
                  fontFamily:   "'Fraunces', serif",
                  fontWeight:   900,
                  fontSize:     '1.5rem',
                  color:        '#eeffcc',
                  marginBottom: '0.5rem',
                }}
              >
                Message Received!
              </h3>
              <p style={{ color: '#9fd440', fontWeight: 600 }}>
                Salamat! We'll get back to you within 24 hours. In the meantime — have a gummy. 🍬
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
