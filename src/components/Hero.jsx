export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        background:     'linear-gradient(160deg, #eeffcc 0%, #f5fff0 40%, #fffde8 100%)',
        position:       'relative',
        overflow:       'hidden',
        paddingTop:     68,
      }}
    >
      {/* Decorative blobs */}
      <div className="animate-blob" style={{ position: 'absolute', top: '8%', right: '-5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(181,229,80,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="animate-blob-delay" style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,224,102,0.28) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="animate-blob-slow" style={{ position: 'absolute', top: '40%', left: '60%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,240,160,0.4) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth:  1100,
          margin:    '0 auto',
          padding:   '4rem 1.5rem',
          textAlign: 'center',
          position:  'relative',
          zIndex:    1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           6,
            background:    '#d4f5a0',
            border:        '1.5px solid #9fd440',
            borderRadius:  24,
            padding:       '6px 16px',
            marginBottom:  '1.5rem',
            animation:     'fadeDown 0.6s ease both',
          }}
        >
          <span style={{ fontSize: 13 }}>🇵🇭</span>
          <span style={{ fontWeight: 700, fontSize: 12, color: '#3a6b00', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Proudly Filipino · Born in Batangas
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily:    "'Fraunces', serif",
            fontWeight:    900,
            fontSize:      'clamp(3rem, 9vw, 7rem)',
            lineHeight:    1.0,
            color:         '#1a3a00',
            marginBottom:  '0.3em',
            letterSpacing: '-2px',
            animation:     'fadeUp 0.7s ease 0.1s both',
          }}
        >
          Sour. Wild.<br />
          <span className="text-gradient-green">Irresistibly</span>{' '}
          <em style={{ fontStyle: 'italic' }}>Filipino.</em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize:     'clamp(1rem, 2.5vw, 1.25rem)',
            color:        '#3d6020',
            maxWidth:     580,
            margin:       '1.5rem auto 2.5rem',
            lineHeight:   1.7,
            animation:    'fadeUp 0.7s ease 0.2s both',
            fontWeight:   600,
          }}
        >
          The first gummy candy made from real{' '}
          <strong style={{ color: '#3a6b00' }}>kamias fruit</strong>. Pucker
          up — this is Philippine sour culture in gummy form, no apologies.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display:        'flex',
            gap:            16,
            justifyContent: 'center',
            flexWrap:       'wrap',
            animation:      'fadeUp 0.7s ease 0.3s both',
          }}
        >
          <button
            onClick={() => scrollTo('products')}
            className="btn-primary"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize:   16,
              padding:    '14px 32px',
              border:     'none',
              cursor:     'pointer',
            }}
          >
            Shop the Flavors 🍬
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="btn-outline"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize:   16,
              padding:    '14px 32px',
              cursor:     'pointer',
            }}
          >
            Our Story
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'center',
            gap:            'clamp(1.5rem, 4vw, 3rem)',
            marginTop:      '3.5rem',
            flexWrap:       'wrap',
            animation:      'fadeUp 0.7s ease 0.4s both',
          }}
        >
          {[
            ['10,000+', 'Happy Munchers'],
            ['4',       'Bold Flavors'],
            ['100%',    'Real Kamias'],
            ['0',       'Fake Stuff'],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize:   'clamp(1.8rem, 4vw, 2.5rem)',
                  color:      '#3a6b00',
                  lineHeight: 1.1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize:      12,
                  fontWeight:    700,
                  color:         '#6b8f3a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop:     2,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating gummies */}
        <div
          className="animate-float"
          style={{
            marginTop:      '3rem',
            fontSize:       'clamp(2.5rem, 6vw, 4rem)',
            display:        'flex',
            justifyContent: 'center',
            gap:            '1rem',
          }}
        >
          🍬🌿🍬
        </div>
      </div>
    </section>
  )
}
