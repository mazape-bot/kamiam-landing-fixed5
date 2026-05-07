import { Reveal } from './Reveal'
import { TESTIMONIALS } from '../data/constants'

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '6rem 1.5rem', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display:      'inline-block',
                background:   '#eeffcc',
                borderRadius: 20,
                padding:      '4px 14px',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontWeight:    800,
                  fontSize:      12,
                  color:         '#3a6b00',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Reviews
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize:   'clamp(1.8rem, 5vw, 3rem)',
                color:      '#1a3a00',
                lineHeight: 1.15,
              }}
            >
              The People Have Spoken.<br />
              <em style={{ fontStyle: 'italic', color: '#5a8a20' }}>
                (Their Mouths Were Full.)
              </em>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap:                 '1.25rem',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                style={{
                  background:   '#f8fff0',
                  borderRadius: 24,
                  padding:      '1.75rem',
                  border:       '1.5px solid #d4f0a0',
                  height:       '100%',
                  display:      'flex',
                  flexDirection: 'column',
                  transition:   'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform  = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow  = '0 8px 32px rgba(125,184,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform  = 'translateY(0)'
                  e.currentTarget.style.boxShadow  = 'none'
                }}
              >
                {/* Stars */}
                <div style={{ color: '#f0c040', fontSize: 18, marginBottom: '0.75rem', letterSpacing: 2 }}>
                  {'★'.repeat(t.stars)}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color:        '#3d6020',
                    lineHeight:   1.75,
                    fontWeight:   600,
                    fontSize:     '0.95rem',
                    marginBottom: '1.25rem',
                    fontStyle:    'italic',
                    flexGrow:     1,
                  }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width:           38,
                      height:          38,
                      borderRadius:    '50%',
                      background:      'linear-gradient(135deg, #b5e550, #7db800)',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      fontSize:        16,
                      fontWeight:      900,
                      color:           '#1a3a00',
                      flexShrink:      0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a3a00' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#6b8f3a', fontWeight: 600 }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
