import { Reveal } from './Reveal'

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 1.5rem', background: '#fff' }}>
      <div
        style={{
          maxWidth:             1100,
          margin:               '0 auto',
          display:              'grid',
          gridTemplateColumns:  'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                  '4rem',
          alignItems:           'center',
        }}
      >
        {/* Visual card */}
        <Reveal>
          <div
            style={{
              background: 'linear-gradient(145deg, #eeffcc, #d4f5a0)',
              borderRadius: 32,
              padding:      '3rem 2.5rem',
              position:     'relative',
              overflow:     'hidden',
            }}
          >
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌿</div>
            <div
              style={{
                position:  'absolute',
                top:       -20,
                right:     -20,
                fontSize:  '8rem',
                opacity:   0.12,
                userSelect: 'none',
              }}
            >
              🍬
            </div>
            <h3
              style={{
                fontFamily:   "'Fraunces', serif",
                fontWeight:   900,
                fontSize:     '1.8rem',
                color:        '#1a3a00',
                marginBottom: '0.5rem',
              }}
            >
              The Humble Kamias
            </h3>
            <p style={{ color: '#3d6020', lineHeight: 1.7, fontWeight: 600 }}>
              A backyard legend across the Philippines, kamias has been flavoring
              sinigang and atchara for generations. We turned it into the snack it
              was always meant to be.
            </p>
            <div
              style={{
                display:   'flex',
                gap:       12,
                marginTop: '1.5rem',
                flexWrap:  'wrap',
              }}
            >
              {['Vitamin C Rich', 'Naturally Tart', 'Tropical', 'Unique'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background:   '#b5e550',
                    color:        '#1a3a00',
                    borderRadius: 20,
                    padding:      '4px 12px',
                    fontSize:     12,
                    fontWeight:   800,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Text content */}
        <Reveal delay={0.15}>
          <div>
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
                Our Story
              </span>
            </div>

            <h2
              style={{
                fontFamily:   "'Fraunces', serif",
                fontWeight:   900,
                fontSize:     'clamp(1.8rem, 4vw, 2.8rem)',
                color:        '#1a3a00',
                lineHeight:   1.15,
                marginBottom: '1rem',
              }}
            >
              From the Backyard<br />Tree to Your Bag.
            </h2>

            <p
              style={{
                color:        '#3d6020',
                lineHeight:   1.8,
                fontSize:     '1.05rem',
                fontWeight:   600,
                marginBottom: '1rem',
              }}
            >
              KAMIAM was born from a simple frustration: why does the most uniquely
              Filipino fruit have zero representation in snack culture? We grew up
              eating raw kamias with salt, dipping it in bagoong, and sneaking it
              from Lola's tree — and we knew the world needed to taste this.
            </p>

            <p
              style={{
                color:      '#3d6020',
                lineHeight: 1.8,
                fontSize:   '1.05rem',
                fontWeight: 600,
              }}
            >
              We spent 2 years perfecting the gummy formula — getting that signature
              pucker right, locking in the tartness, and keeping everything as
              natural as possible. The result? A candy that tastes like Philippine
              summers in a bag.
            </p>

            {/* Stat pills */}
            <div
              style={{
                marginTop: '2rem',
                display:   'flex',
                gap:       16,
                flexWrap:  'wrap',
              }}
            >
              {[
                { number: '2022',    label: 'Founded' },
                { number: 'Batangas', label: 'Sourced Here' },
                { number: 'PH-wide', label: 'Now Available' },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  style={{
                    background:   '#f0fff0',
                    border:       '1.5px solid #b5e550',
                    borderRadius: 16,
                    padding:      '1rem 1.25rem',
                    minWidth:     120,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 900,
                      fontSize:   '1.5rem',
                      color:      '#3a6b00',
                    }}
                  >
                    {number}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#6b8f3a' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
