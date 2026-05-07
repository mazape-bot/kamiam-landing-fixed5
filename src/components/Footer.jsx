import { useState } from 'react'

const SHOP_LINKS    = ['All Flavors', 'Classic Kamias', 'Mango Fusion', 'Calamansi Burst', 'Chili Picante']
const COMPANY_LINKS = ['Our Story', 'Sustainability', 'Press Kit', 'Wholesale', 'Contact']

function FooterLink({ label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color:      hovered ? '#b5e550' : '#6b8f3a',
        fontWeight: 600,
        fontSize:   '0.9rem',
        marginBottom: 6,
        cursor:     'pointer',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background:  '#111a06',
        padding:     '3rem 1.5rem',
        borderTop:   '1px solid #2a3a10',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 '2rem',
            marginBottom:        '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
              <div
                style={{
                  width:          32,
                  height:         32,
                  borderRadius:   '50%',
                  background:     'linear-gradient(135deg, #b5e550, #7db800)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       16,
                }}
              >
                🌿
              </div>
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize:   20,
                  color:      '#b5e550',
                }}
              >
                KAMIAM
              </span>
            </div>
            <p
              style={{
                color:      '#6b8f3a',
                fontWeight: 600,
                fontSize:   '0.9rem',
                lineHeight: 1.7,
              }}
            >
              The sour revolution starts here. Real kamias. Real flavor. Real Filipino.
            </p>

            {/* Social icons (placeholder) */}
            <div style={{ display: 'flex', gap: 8, marginTop: '1rem' }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width:          36,
                    height:         36,
                    borderRadius:   '50%',
                    background:     '#1a2a0a',
                    border:         '1px solid #3a5018',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    fontSize:       16,
                    cursor:         'pointer',
                    transition:     'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#7db800')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#3a5018')}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <div
              style={{
                fontWeight:    800,
                fontSize:      13,
                color:         '#9fd440',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom:  '1rem',
              }}
            >
              Shop
            </div>
            {SHOP_LINKS.map((l) => <FooterLink key={l} label={l} />)}
          </div>

          {/* Company links */}
          <div>
            <div
              style={{
                fontWeight:    800,
                fontSize:      13,
                color:         '#9fd440',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom:  '1rem',
              }}
            >
              Company
            </div>
            {COMPANY_LINKS.map((l) => <FooterLink key={l} label={l} />)}
          </div>

          {/* Newsletter */}
          <div>
            <div
              style={{
                fontWeight:    800,
                fontSize:      13,
                color:         '#9fd440',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom:  '1rem',
              }}
            >
              Stay Sour
            </div>
            <p
              style={{
                color:        '#6b8f3a',
                fontWeight:   600,
                fontSize:     '0.9rem',
                marginBottom: '1rem',
                lineHeight:   1.6,
              }}
            >
              New flavors, promos & barangay drops — right to your inbox.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex:         1,
                  background:   '#1a2a0a',
                  border:       '1.5px solid #3a5018',
                  borderRadius: 12,
                  padding:      '8px 12px',
                  color:        '#eeffcc',
                  fontFamily:   "'Nunito', sans-serif",
                  fontWeight:   600,
                  fontSize:     13,
                  outline:      'none',
                  minWidth:     0,
                }}
                onFocus={(e)  => (e.target.style.borderColor = '#7db800')}
                onBlur={(e)   => (e.target.style.borderColor = '#3a5018')}
              />
              <button
                style={{
                  background:   'linear-gradient(135deg, #b5e550, #7db800)',
                  border:       'none',
                  borderRadius: 12,
                  padding:      '8px 14px',
                  color:        '#1a2a0a',
                  fontWeight:   900,
                  fontSize:     13,
                  cursor:       'pointer',
                  whiteSpace:   'nowrap',
                }}
              >
                Go →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop:      '1px solid #2a3a10',
            paddingTop:     '1.5rem',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            flexWrap:       'wrap',
            gap:            '1rem',
          }}
        >
          <div style={{ color: '#3a5018', fontWeight: 600, fontSize: '0.85rem' }}>
            © {year} KAMIAM. All rights reserved. Made with 💚 in the Philippines.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <FooterLink key={l} label={l} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
