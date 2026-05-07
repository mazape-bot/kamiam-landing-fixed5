import { useState } from 'react'
import { Reveal } from './Reveal'
import { PRODUCTS } from '../data/constants'

function ProductCard({ product, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background:   '#243010',
          borderRadius: 28,
          padding:      '2rem',
          border:       `1.5px solid ${hovered ? product.color : '#3a5018'}`,
          boxShadow:    hovered ? `0 16px 48px ${product.accent}40` : 'none',
          transform:    hovered ? 'translateY(-8px)' : 'translateY(0)',
          transition:   'all 0.3s ease',
          cursor:       'default',
          position:     'relative',
          overflow:     'hidden',
          display:      'flex',
          flexDirection:'column',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position:     'absolute',
            top:          0,
            left:         0,
            right:        0,
            height:       4,
            background:   `linear-gradient(90deg, ${product.color}, ${product.accent})`,
            borderRadius: '28px 28px 0 0',
          }}
        />

        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{product.emoji}</div>

        {/* Flavor badge */}
        <div
          style={{
            display:      'inline-block',
            background:   `${product.color}22`,
            border:       `1px solid ${product.color}66`,
            borderRadius: 12,
            padding:      '3px 10px',
            marginBottom: '0.75rem',
          }}
        >
          <span
            style={{
              fontWeight:    800,
              fontSize:      11,
              color:         product.color,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {product.flavor}
          </span>
        </div>

        <h3
          style={{
            fontFamily:   "'Fraunces', serif",
            fontWeight:   900,
            fontSize:     '1.3rem',
            color:        '#eeffcc',
            marginBottom: '0.5rem',
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            color:        '#a0c070',
            lineHeight:   1.7,
            fontWeight:   600,
            fontSize:     '0.9rem',
            marginBottom: '1.5rem',
            flexGrow:     1,
          }}
        >
          {product.desc}
        </p>

        <button
          style={{
            width:       '100%',
            background:  `linear-gradient(135deg, ${product.color}, ${product.accent})`,
            border:      'none',
            color:       '#1a2a0a',
            fontFamily:  "'Nunito', sans-serif",
            fontWeight:  900,
            fontSize:    14,
            padding:     '10px',
            borderRadius: 16,
            cursor:      'pointer',
            transition:  'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Add to Cart 🛒
        </button>
      </div>
    </Reveal>
  )
}

export default function Products() {
  return (
    <section id="products" style={{ padding: '6rem 1.5rem', background: '#1a2a0a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display:      'inline-block',
                background:   'rgba(181,229,80,0.2)',
                border:       '1px solid rgba(181,229,80,0.4)',
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
                The Collection
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize:   'clamp(1.8rem, 5vw, 3rem)',
                color:      '#eeffcc',
                lineHeight: 1.15,
              }}
            >
              Pick Your Pucker Level.
            </h2>

            <p
              style={{
                color:      '#9fd440',
                fontSize:   '1.05rem',
                fontWeight: 600,
                maxWidth:   500,
                margin:     '1rem auto 0',
              }}
            >
              Four flavors. Infinite excuses to eat more gummies.
            </p>
          </div>
        </Reveal>

        {/* Product grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap:                 '1.25rem',
          }}
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
