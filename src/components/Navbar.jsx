import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/constants'

export default function Navbar({ scrollTo }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        background:     scrolled ? 'rgba(250,255,242,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)'             : 'none',
        borderBottom:   scrolled ? '1px solid #d4f0a0'      : '1px solid transparent',
        transition:     'all 0.35s ease',
        padding:        '0 1.5rem',
      }}
    >
      {/* ── Desktop row ── */}
      <div
        style={{
          maxWidth:       1200,
          margin:         '0 auto',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          height:         68,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          style={{
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            display:    'flex',
            alignItems: 'center',
            gap:        8,
            padding:    0,
          }}
          aria-label="Back to top"
        >
          <div
            style={{
              width:           36,
              height:          36,
              borderRadius:    '50%',
              background:      'linear-gradient(135deg, #b5e550, #7db800)',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              fontSize:        18,
            }}
          >
            🌿
          </div>
          <span
            style={{
              fontFamily:    "'Fraunces', serif",
              fontWeight:    900,
              fontSize:      22,
              color:         '#3a6b00',
              letterSpacing: '-0.5px',
            }}
          >
            KAMIAM
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              className="nav-link"
              style={{
                background:  'none',
                border:      'none',
                cursor:      'pointer',
                fontFamily:  "'Nunito', sans-serif",
                fontWeight:  700,
                fontSize:    14,
                color:       '#3a6b00',
                padding:     '6px 12px',
                borderRadius: 20,
                transition:  'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#e8ffc0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => handleNav('contact')}
            className="btn-primary ml-2"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize:   14,
              padding:    '9px 20px',
              border:     'none',
              cursor:     'pointer',
            }}
          >
            Order Now 🛒
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border:     'none',
            fontSize:   24,
            cursor:     'pointer',
            color:      '#3a6b00',
            lineHeight: 1,
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          style={{
            background:     'rgba(250,255,242,0.97)',
            backdropFilter: 'blur(12px)',
            padding:        '1rem 1.5rem 1.5rem',
            display:        'flex',
            flexDirection:  'column',
            gap:            8,
            borderTop:      '1px solid #d4f0a0',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              style={{
                background: 'none',
                border:     'none',
                cursor:     'pointer',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize:   16,
                color:      '#3a6b00',
                textAlign:  'left',
                padding:    '10px 0',
                borderBottom: '1px solid #eeffcc',
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary mt-2"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize:   15,
              padding:    '12px',
              border:     'none',
              cursor:     'pointer',
              width:      '100%',
            }}
          >
            Order Now 🛒
          </button>
        </div>
      )}
    </nav>
  )
}
