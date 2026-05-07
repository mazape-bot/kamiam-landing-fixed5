import { Reveal } from './Reveal'
import { FEATURES } from '../data/constants'

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding:    '6rem 1.5rem',
        background: 'linear-gradient(180deg, #f5fff0 0%, #eeffcc 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display:      'inline-block',
                background:   '#d4f5a0',
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
                Why KAMIAM
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
              Candy That Actually<br />Gives a Damn.
            </h2>

            <p
              style={{
                color:     '#3d6020',
                fontSize:  '1.05rem',
                fontWeight: 600,
                maxWidth:  500,
                margin:    '1rem auto 0',
              }}
            >
              Every ingredient, every flavor, every chewy bite — chosen with purpose
              and pure Philippine heart.
            </p>
          </div>
        </Reveal>

        {/* Feature cards grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '1.25rem',
          }}
        >
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div
                className="card-hover"
                style={{
                  background:   '#fff',
                  borderRadius: 24,
                  padding:      '1.75rem',
                  border:       '1.5px solid #d4f0a0',
                  cursor:       'default',
                  height:       '100%',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: '0.75rem' }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontFamily:   "'Fraunces', serif",
                    fontWeight:   900,
                    fontSize:     '1.2rem',
                    color:        '#1a3a00',
                    marginBottom: '0.5rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color:      '#5a7a30',
                    lineHeight: 1.7,
                    fontWeight: 600,
                    fontSize:   '0.95rem',
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
