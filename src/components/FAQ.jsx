import { useState } from 'react'
import { Reveal } from './Reveal'
import { FAQS } from '../data/constants'

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <Reveal delay={index * 0.05}>
      <div
        style={{
          background:    '#fff',
          borderRadius:  20,
          border:        `1.5px solid ${isOpen ? '#9fd440' : '#d4f0a0'}`,
          overflow:      'hidden',
          transition:    'border-color 0.2s',
        }}
      >
        <button
          onClick={onToggle}
          style={{
            width:          '100%',
            background:     'none',
            border:         'none',
            padding:        '1.25rem 1.5rem',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            cursor:         'pointer',
            textAlign:      'left',
            gap:            '1rem',
          }}
          aria-expanded={isOpen}
        >
          <span
            style={{
              fontWeight: 800,
              fontSize:   '0.95rem',
              color:      '#1a3a00',
            }}
          >
            {faq.q}
          </span>
          <span
            style={{
              fontSize:    22,
              color:       '#7db800',
              transform:   isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition:  'transform 0.3s ease',
              flexShrink:  0,
              lineHeight:  1,
              fontWeight:  300,
            }}
          >
            +
          </span>
        </button>

        <div
          style={{
            maxHeight:  isOpen ? 300 : 0,
            overflow:   'hidden',
            transition: 'max-height 0.35s ease',
          }}
        >
          <p
            style={{
              padding:    '0 1.5rem 1.25rem',
              color:      '#3d6020',
              lineHeight: 1.75,
              fontWeight: 600,
              fontSize:   '0.9rem',
              margin:     0,
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      style={{
        padding:    '6rem 1.5rem',
        background: 'linear-gradient(180deg, #eeffcc 0%, #f5fff0 100%)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                FAQ
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize:   'clamp(1.8rem, 5vw, 2.8rem)',
                color:      '#1a3a00',
                lineHeight: 1.2,
              }}
            >
              You Asked. We Answered.{' '}
              <em style={{ fontStyle: 'italic', color: '#5a8a20' }}>
                (While eating gummies.)
              </em>
            </h2>
          </div>
        </Reveal>

        {/* FAQ list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
