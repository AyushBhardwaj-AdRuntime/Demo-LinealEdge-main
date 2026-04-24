import React, { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({
  title = 'Ready to build a foundation that lasts?',
  description = <>Let's discuss your life parameters and map out your personalized<br />financial blueprint.</>,
  buttonLabel = 'Schedule a Consultation',
  buttonHref = '/contact',
  className = '',
}) {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const sectionClassName = ['bg-blue-texture', 'section', 'section-cta', 'dark-cta-section', 'cta-compact-stack', className]
    .filter(Boolean)
    .join(' ');

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text content on scroll
      gsap.from('.cta-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      // Animate description
      gsap.from('.cta-description', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: 'power3.out'
      });

      // Animate button on scroll with delay
      gsap.from('.cta-button-compact', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.88,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'back.out(1.4)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    if (/^https?:\/\//.test(buttonHref)) {
      window.open(buttonHref, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(buttonHref);
  };

  return (
    <section ref={sectionRef} className={sectionClassName} style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(120% 90% at -8% -10%, rgba(120, 168, 225, 0.14) 0%, rgba(120, 168, 225, 0) 52%), radial-gradient(120% 90% at 108% 108%, rgba(147, 182, 230, 0.12) 0%, rgba(147, 182, 230, 0) 54%), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 14px), linear-gradient(180deg, rgba(4, 18, 45, 0.94) 0%, rgba(7, 31, 69, 0.98) 55%, rgba(26, 50, 96, 1) 100%)',
        pointerEvents: 'none'
      }} />
      <div className="cta-shell" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        <div className="cta-panel" style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          padding: 'clamp(40px, 4.2vw, 48px) clamp(24px, 4vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '18px',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
          boxShadow: '0 24px 46px rgba(3, 12, 34, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}>
          <div className="cta-copy-wrap" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {/* Heading */}
            <h2 className="cta-heading" style={{
              fontSize: 'clamp(1.6rem, 2.9vw, 2.35rem)',
              fontWeight: 400,
              fontFamily: "'DM Serif Text', Georgia, serif",
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
              lineHeight: '1.18',
              margin: '0 0 10px 0',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap'
            }}>
              {title}
            </h2>

            {/* Description */}
            <p className="cta-description" style={{
              fontSize: 'clamp(0.95rem, 1.15vw, 1.06rem)',
              lineHeight: '1.65',
              color: '#cbd5e1',
              margin: '0 auto',
              maxWidth: '600px',
              fontWeight: 400,
              letterSpacing: '0.2px'
            }}>
              {description}
            </p>
          </div>

          {/* Button */}
          <button 
            className="btn btn-green arrow-hover-cta button-primary cta-button-compact"
            onClick={handleClick}
            style={{
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: 600,
              backgroundColor: 'var(--button-brand-green)',
              backgroundImage: 'none',
              color: '#0d2a57',
              border: '1px solid rgba(13, 42, 87, 0.16)',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 20px rgba(4, 18, 45, 0.2)',
              transition: 'transform 0.26s ease, background-color 0.26s ease, color 0.26s ease, border-color 0.26s ease, box-shadow 0.26s ease',
              textDecoration: 'none',
              willChange: 'transform, background-color, box-shadow',
              marginTop: '4px',
              minWidth: '220px',
              alignSelf: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(4, 18, 45, 0.26)';
              e.currentTarget.style.backgroundColor = 'var(--button-brand-green-hover)';
              e.currentTarget.style.borderColor = 'rgba(13, 42, 87, 0.26)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(4, 18, 45, 0.2)';
              e.currentTarget.style.backgroundColor = 'var(--button-brand-green)';
              e.currentTarget.style.borderColor = 'rgba(13, 42, 87, 0.16)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid rgba(214, 227, 244, 0.9)';
              e.currentTarget.style.outlineOffset = '4px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            <span className="arrow-hover-label">{buttonLabel}</span>
          </button>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        .cta-compact-stack {
          padding: clamp(76px, 8vw, 104px) 0 !important;
          background: linear-gradient(180deg, #04122d 0%, #071f45 52%, #1a3260 100%) !important;
        }

        .cta-compact-stack .cta-heading,
        .cta-compact-stack .cta-description {
          text-wrap: balance;
        }

        .cta-compact-stack .cta-heading {
          color: #ffffff !important;
        }

        .cta-compact-stack .cta-description {
          color: #cbd5e1 !important;
          max-width: 600px;
          margin-inline: auto;
        }

        .cta-compact-stack .cta-shell {
          width: 100%;
        }

        @media (max-width: 768px) {
          .cta-compact-stack {
            padding: 62px 0 !important;
          }

          .cta-compact-stack .cta-shell {
            padding: 0 20px !important;
          }

          .cta-compact-stack .cta-copy-wrap {
            max-width: 620px !important;
          }

          .cta-compact-stack .cta-heading {
            white-space: normal !important;
            line-height: 1.12 !important;
          }

          .cta-compact-stack > div {
            padding: 28px 20px !important;
            gap: 14px !important;
          }

          .cta-button-compact {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .cta-compact-stack {
            padding: 52px 0 !important;
          }

          .cta-compact-stack .cta-shell {
            padding: 0 16px !important;
          }

          .cta-compact-stack .cta-copy-wrap {
            max-width: 100% !important;
          }

          .cta-compact-stack > div {
            padding: 24px 16px !important;
            gap: 12px !important;
          }

          .cta-compact-stack h2 {
            font-size: 1.45rem !important;
          }

          .cta-compact-stack p {
            font-size: 0.92rem !important;
          }

          .cta-button-compact {
            padding: 10px 28px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
