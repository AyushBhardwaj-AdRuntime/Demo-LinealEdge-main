import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTASection from '../components/CTASection';

gsap.registerPlugin(ScrollTrigger);

import { BrandLogo, BrandWordmark } from "@/components/ui/brand-logo";

function BrandLogoFocus({ focus, className = '' }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const parts = {
        'L': '.logo-part-l',
        'E': '.logo-part-e',
        'S': '.logo-part-s',
      };

      const allParts = ['.logo-part-l', '.logo-part-e', '.logo-part-s'];
      const unfocusedParts = allParts.filter(p => parts[focus] !== p);

      // All logo parts start at opacity 1 on render (via CSS/BrandLogo defaults)
      // When triggered, fade the unfocused parts down to 0.15 to intensely highlight the focused part.
      gsap.to(unfocusedParts, {
        opacity: 0,
        filter: "blur(2px)",
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 65%',
          toggleActions: 'play none none none'
        }
      });

      // Add a subtle glowing scale bounce to the focused part
      gsap.fromTo(parts[focus],
        { scale: 1 },
        {
          scale: 1.05,
          duration: 1.5,
          ease: 'elastic.out(1, 0.4)',
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 65%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [focus]);

  return (
    <div ref={ref} className={className} style={{ width: '100%', maxWidth: '460px', display: 'flex', justifyContent: 'center' }}>
      <BrandLogo markOnly style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(10,20,40,0.04))' }} />
    </div>
  );
}

/* ── Hero Section ───────────────────── */
function HeroSection() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Forcibly clear any strictly cached GSAP styles on Navbar just in case of fast back/forward navigation
      const globalNav = document.querySelector('.navbar');
      if (globalNav) gsap.set(globalNav, { clearProps: 'all' });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
// KPI is now part of hero-bottom-content, no separate animation needed

      // Anchor rotation around individual path centers
      gsap.set(['.logo-part-l', '.logo-part-e', '.logo-part-s'], { transformOrigin: "50% 50%" });

      // Phase 8B: Adaptive scatter distances via matchMedia
      // Mobile gets smaller scatter to reduce GPU overhead & off-screen travel time
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        gsap.set('.logo-part-l', { x: -400, y: -300, rotation: -90, scale: 4, opacity: 0, filter: "blur(12px)" });
        gsap.set('.logo-part-e', { x: 0, y: 500, rotation: 90, scale: 4, opacity: 0, filter: "blur(12px)" });
        gsap.set('.logo-part-s', { x: 400, y: -300, rotation: 135, scale: 4, opacity: 0, filter: "blur(12px)" });
      } else {
        // Desktop: full cinematic scatter
        gsap.set('.logo-part-l', { x: -1200, y: -800, rotation: -180, scale: 8, opacity: 0, filter: "blur(24px)" });
        gsap.set('.logo-part-e', { x: 0, y: 1500, rotation: 180, scale: 8, opacity: 0, filter: "blur(24px)" });
        gsap.set('.logo-part-s', { x: 1200, y: -800, rotation: 270, scale: 8, opacity: 0, filter: "blur(24px)" });
      }

      // Layout states
      gsap.set('.logo-container', { opacity: 1, scale: 1.15 });
      gsap.set('.hero-wordmark-wrap', { opacity: 0, y: 14 });
      gsap.set('.hero-bottom-content', { opacity: 0, y: 40 });
      gsap.set('.hero-bg-image', { opacity: 0, scale: 1.1 });

      // 1. Cinematic Convergence Animation — converges to x:0,y:0 regardless of start position
      tl.to('.logo-part-l', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "expo.out" }, 0.2)
        .to('.logo-part-e', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "expo.out" }, 0.4)
        .to('.logo-part-s', { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.6, ease: "bounce.out(1.2, 0.4)" }, 0.8);

      // 2. The Impact 
      tl.fromTo('.logo-green-glow',
        { opacity: 1, scale: 0.1 },
        { opacity: 0, scale: 8, duration: 1.5, ease: "power3.out" },
        0.85 
      );

      tl.fromTo('.logo-l-glow',
        { opacity: 1, scale: 0.5 },
        { opacity: 0, scale: 5, duration: 1.8, ease: "power2.out" },
        0.85
      );

      tl.to('.hero-wordmark-wrap', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.95);

      if (globalNav) {
        tl.to(globalNav, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          duration: 1.2,
          ease: 'power3.out'
        }, 1.8);
      }

      // Phase 2: Logo shifts to the left, background image reveals, bottom content slides in
      tl.to('.logo-container', { scale: 1.12, x: '-31vw', y: 0, opacity: 1, duration: 1.4, ease: 'power3.inOut' }, 2.8)
        .to('.hero-bg-image', { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }, 2.6)
        .to('.hero-bottom-content', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, 3.2);

      // 3. Subtle float after sequence completes
      gsap.to('.logo-mark', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 4.5 });

    }, heroRef);
    return () => {
      const navNode = document.querySelector('.navbar');
      if (navNode) gsap.set(navNode, { clearProps: 'all' });
      gsap.killTweensOf('.logo-container');
      gsap.killTweensOf('.hero-bottom-content');
      gsap.killTweensOf('.hero-bg-image');
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero hero-premium" ref={heroRef}>
      {/* Full-bleed background image with dark cinematic overlay */}
      <div className="hero-bg-image" />
      <div className="hero-bg-overlay" />
      <div className="hero-bg-grain" />

      {/* Center logo animation area — plays first, then shifts to bg */}
      <div className="hero-logo-stage">
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="logo-glow-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '380px', display: 'flex', justifyContent: 'center' }}>
            <div className="logo-green-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(24,168,74,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div className="logo-l-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

            <div className="logo-mark" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <BrandLogo markOnly style={{ width: '100%', height: 'auto', overflow: 'visible' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom content — Lineal Edge style: text left, KPI right */}
      <div className="hero-bottom-content">
        <div className="hero-logo-spacer" aria-hidden="true" />
        <div className="hero-bottom-left">
          <h1 className="hero-main-title">
            <span className="hero-title-line hero-title-intro">
              Built on <span className="hero-title-emphasis">Generations</span> of Trust,
            </span>
            <span className="hero-title-line hero-title-strong hero-title-nowrap">
              We Help You <span className="hero-title-emphasis">Grow</span> and
            </span>
            <span className="hero-title-line hero-title-strong">
              <span className="hero-title-emphasis">Protect Your Wealth</span>
            </span>
          </h1>
          <Link to="/contact" className="hero-cta-btn hero-cta-primary inline-arrow-btn arrow-hover-cta" style={{ 
            marginTop: '24px', 
            padding: '0 32px',
            borderRadius: '8px', 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            height: '48px',
            fontSize: '16px',
            fontWeight: 600,
            backgroundColor: 'var(--button-brand-green)',
            color: '#FFFFFF',
            textDecoration: 'none',
            border: 'none',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.28)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            letterSpacing: '0.3px'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--button-brand-green-hover)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.36)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--button-brand-green)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.28)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <span className="arrow-hover-label">Schedule a Consultation</span>
          </Link>
        </div>
      </div>



    </section>
  );
}

/* ── Scrollytelling Section ─────────── */
function ScrollytellingSection() {
  const scrollyRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial state: Phase 1 starts visible (L focused, others faded - all visible)
      gsap.set(['.logo-part-l', '.logo-part-e', '.logo-part-s'], { transformOrigin: "50% 50%" });
      // Phase 1: L bright, E and S faded but visible
      gsap.set('.logo-part-l', { opacity: 1, filter: 'blur(0px)', scale: 1.05 });
      gsap.set(['.logo-part-e', '.logo-part-s'], { opacity: 0.2, filter: 'blur(1.5px)', scale: 1 });

      gsap.set('.text-phase1', { opacity: 1, y: 0, autoAlpha: 1 });
      gsap.set('.text-phase2', { opacity: 0, y: 40, autoAlpha: 0 });
      gsap.set('.text-phase3', { opacity: 0, y: 40, autoAlpha: 0 });

      // Phase 8A: Shorter scroll distance on mobile for faster phase transitions
      const scrollEnd = window.matchMedia('(max-width: 768px)').matches ? '+=1100' : '+=1800';

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollyRef.current,
          start: 'top top',
          end: scrollEnd,
          pin: true,
          pinSpacing: true,
          scrub: 0.55,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 'labelsDirectional',
            delay: 0.06,
            duration: { min: 0.22, max: 0.38 },
            ease: 'power2.out',
            directional: true,
            inertia: false
          }
        }
      });

      scrollTl
        .addLabel('phase1')
        // Hold L state on first pin so it doesn't rush past when entering from hero.
        .to({}, { duration: 0.6 })
        // Transition PHASE 1 -> PHASE 2 (E focused, L and S faded but visible)
        .to('.text-phase1', { opacity: 0, y: -40, autoAlpha: 0, duration: 1, ease: 'power2.inOut' })
        .to('.logo-part-l', { opacity: 0.2, filter: 'blur(1.5px)', scale: 1, duration: 1 }, "<")
        .to('.logo-part-e', { opacity: 1, filter: 'blur(0px)', scale: 1.05, duration: 1 }, "<")
        .to('.logo-part-s', { opacity: 0.2, filter: 'blur(1.5px)', scale: 1, duration: 1 }, "<")
        .to('.text-phase2', { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out' }, "<0.2")
        .addLabel('phase2')

        // Transition PHASE 2 -> PHASE 3 (S focused, L and E faded but visible)
        .to({}, { duration: 0.2 })
        .to('.text-phase2', { opacity: 0, y: -40, autoAlpha: 0, duration: 1, ease: 'power2.inOut' })
        .to('.logo-part-l', { opacity: 0.2, filter: 'blur(1.5px)', scale: 1, duration: 1 }, "<")
        .to('.logo-part-e', { opacity: 0.2, filter: 'blur(1.5px)', scale: 1, duration: 1 }, "<")
        .to('.logo-part-s', { opacity: 1, filter: 'blur(0px)', scale: 1.05, duration: 1 }, "<")
        .to('.text-phase3', { opacity: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power2.out' }, "<0.2")
        .addLabel('phase3');

    }, scrollyRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="scrolly-section" ref={scrollyRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      <div className="hero-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', gap: '30px', padding: '0 40px' }}>
        {/* Left Column: Logo */}
        <div className="logo-container" style={{ opacity: 1, display: 'flex', justifyContent: 'center', width: '50%', transform: 'translate(-40px, 0) scale(0.9)' }}>
          <div className="logo-glow-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '414px', display: 'flex', justifyContent: 'center' }}>
            <div className="logo-mark" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <BrandLogo markOnly style={{ width: '100%', height: 'auto', overflow: 'visible' }} />
            </div>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="hero-text-content" style={{ width: '50%', position: 'relative', height: '400px', display: 'flex', alignItems: 'center', opacity: 1, transform: 'translateX(0)' }}>
          
          {/* Phase 1 Layer */}
          <div className="text-layer text-phase1" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 1, visibility: 'visible' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>01 — Foundation</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '24px' }}>Foundation: Securing the Bedrock</h2>
            <div className="phase-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              {['Mastering the essential habits of personal finance', 'Instilling the discipline to build lasting wealth', 'Establishing a structural base for future generations.'].map((d, i) => (
                <div key={i} className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div className="detail-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} /><span className="detail-text" style={{ fontSize: '15px', color: 'rgba(10,20,40,0.8)' }}>{d}</span></div>
              ))}
            </div>
          </div>

          {/* Phase 2 Layer */}
          <div className="text-layer text-phase2" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>02 — Protection</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '24px' }}>Protection: Fortifying the System</h2>
            <div className="phase-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              {['Implementing comprehensive risk planning and insurance solutions', 'Establishing robust reserves to shield against uncertainty', 'Ensuring first-generation wealth is actively preserved.'].map((d, i) => (
                <div key={i} className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div className="detail-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} /><span className="detail-text" style={{ fontSize: '15px', color: 'rgba(10,20,40,0.8)' }}>{d}</span></div>
              ))}
            </div>
          </div>

          {/* Phase 3 Layer */}
          <div className="text-layer text-phase3" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', opacity: 0, visibility: 'hidden' }}>
            <div className="phase-label" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}><div className="label-line" style={{ width: 30, height: 1, backgroundColor: 'rgba(10,20,40,0.2)' }} /><span className="label-text" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 500, color: 'rgba(10,20,40,0.5)' }}>03 — Growth</span></div>
            <h2 className="phase-title" style={{ fontSize: '42px', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '24px' }}>Growth: Cultivating Prosperity</h2>
            <div className="phase-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              {['Deploying capital into tailored investment strategies for expansion', 'Transforming a secure foundation into optimized growth', 'Empowering future generations to thrive with confidence.'].map((d, i) => (
                <div key={i} className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div className="detail-dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} /><span className="detail-text" style={{ fontSize: '15px', color: 'rgba(10,20,40,0.8)' }}>{d}</span></div>
              ))}
            </div>
            <div className="cta-group" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/contact" className="cta-primary cta-book-call arrow-hover-cta"><span className="arrow-hover-label">Book a Call</span></Link>
              <Link to="/contact" className="cta-secondary arrow-hover-cta"><span className="arrow-hover-label">View All Services</span></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Phase Sections ─────────────────── */
function PhaseSection({ id, className, label, title, description, details, Visual, reversed, indicatorState, dividerClass }) {
  const ref = useRef(null);
  const visualNode = Visual ? React.createElement(Visual, { className: 'mark-svg brand-logo-focus-wrapper' }) : null;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${className} .phase-visual`, {
        scrollTrigger: { trigger: `.${className}`, start: 'top 70%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 0.3, ease: 'power2.out',
      });
      gsap.to(`.${className} .phase-content`, {
        scrollTrigger: { trigger: `.${className}`, start: 'top 65%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, [className]);

  return (
    <section className={`phase-section ${className}`} id={id} ref={ref} style={reversed ? { flexDirection: 'row-reverse' } : undefined}>
      <div className={`top-divider ${dividerClass}`} />
      <div className="phase-indicator">
        {indicatorState.map((s, i) => <div key={i} className={`indicator-bar ${s}`} />)}
      </div>
      <div className="section-connector top"><div className="connector-glow" /></div>
      <div className="phase-visual" style={{ transform: `translateX(${reversed ? '40' : '-40'}px)`, opacity: 0 }}>
        <div className={`visual-glow ${reversed ? 'green-glow' : 'white-glow'}`} />
        {visualNode}
      </div>
      <div className={`phase-content ${reversed ? 'right-pad' : 'left-pad'}`} style={{ transform: `translateX(${reversed ? '-40' : '40'}px)`, opacity: 0 }}>
        <div className="phase-label"><div className="label-line" /><span className="label-text">{label}</span></div>
        <h2 className="phase-title">{title}</h2>
        <p className="phase-description">{description}</p>
        <div className="phase-details">
          {details.map((d, i) => (
            <div key={i} className="detail-item"><div className="detail-dot" /><span className="detail-text">{d}</span></div>
          ))}
        </div>
      </div>
      <div className={`phase-bg ${reversed ? 'right' : 'left'}`} />
      <div className="bridge-glow bottom center" />
      <div className="section-connector" style={{ bottom: 0 }}><div className="connector-glow" /></div>
    </section>
  );
}

function GrowthSection() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.phase-three', start: 'top 60%', toggleActions: 'play none none none' },
      });

      // Phase 3: Growth Area
      tl.to('.phase-three .growth-visual', { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })

        // Text cascade
        .to('.phase-three .growth-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=1')
        .to('.phase-three .growth-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.8')
        .to('.phase-three .cta-group', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.6');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="phase-section phase-three" id="phase-three" ref={ref}>
      <div className="top-divider divider-phase-three" />
      <div className="phase-indicator">
        <div className="indicator-bar done" />
        <div className="indicator-bar done" />
        <div className="indicator-bar active" />
      </div>
      <div className="section-connector top"><div className="connector-glow" /></div>
      <div className="growth-glow-outer" />
      <div className="growth-glow-inner" />
      <div className="growth-visual" style={{ transform: 'translateY(40px) scale(0.9)', opacity: 0, position: 'relative', width: '100%', maxWidth: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BrandLogoFocus focus="S" className="mark-svg brand-logo-focus-wrapper" />
      </div>
      <div className="phase-label" style={{ marginBottom: 20 }}><div className="label-line" /><span className="label-text">03 — Growth</span></div>
      <h2 className="growth-title" style={{ transform: 'translateY(30px)', opacity: 0 }}>Charting your bespoke future</h2>
      <p className="growth-subtitle" style={{ transform: 'translateY(20px)', opacity: 0 }}>
        Continuous strategic compounding designed to assure your comfortable life after retirement and family aspirations. Together, we secure the future.
      </p>
      <div className="cta-group" style={{ transform: 'translateY(20px)', opacity: 0 }}>
        <GetStartedButton />
        <Link to="/contact" className="cta-secondary arrow-hover-cta"><span className="arrow-hover-label">Learn More</span></Link>
      </div>
    </section>
  );
}

function OurServicesSectionOne() {
  const solutionCards = [
    {
      title: 'Protection Solutions',
      points: [
        'Life (Term) Insurance',
        'Health Insurance',
        'Estate Planning & Will Drafting.',
      ],
      backgroundColor: '#0b2a5f',
      textColor: '#b7e592',
      pointBg: '#2fc35a',
      pointColor: '#0b2a5f',
      logoBg: '#8ca2c6',
    },
    {
      title: ' Growth Solutions',
      points: [
        'Mutual Funds',
        'Portfolio Management Services (PMS)',
        'Alternative Investment Funds (AIF)',
        'Specialized Investment Funds (SIF)',
      ],
      backgroundColor: '#2fc35a',
      textColor: '#f3f7ff',
      pointBg: '#0b2a5f',
      pointColor: '#f3f7ff',
      logoBg: '#8ca2c6',
    },
  ];

  return (
    <section className="hp-services-1" style={{ padding: '140px 100px 80px' }}>
      {/* Header Split — two columns */}
      <div className="hp-services-1__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '70px', gap: '60px' }}>
        
        {/* Left Column */}
        <div className="hp-services-1__intro" style={{ flex: '0 0 auto' }}>
          <span style={{ 
            display: 'inline-block', 
            backgroundColor: '#ffffff', 
            padding: '6px 20px', 
            borderRadius: '50vw', 
            fontSize: '13px', 
            fontWeight: 600, 
            color: '#1A3260', 
            marginBottom: '28px',
            letterSpacing: '0.05em'
          }}>
            Our Services
          </span>
          <h2 style={{ 
            fontSize: '54px', 
            lineHeight: '1.05', 
            fontWeight: 400, 
            color: '#1A3260', 
            fontFamily: "'DM Serif Text', Georgia, serif",
            maxWidth: '720px',
            letterSpacing: '-0.02em',
            overflowWrap: 'break-word',
            wordBreak: 'normal',
            margin: 0
          }}>
            Tailored Strategies for Your Financial Legacy
          </h2>
        </div>

        {/* Right Column */}
        <div className="hp-services-1__copy" style={{ maxWidth: '420px', paddingTop: '60px' }}>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: '#1A3260', 
            margin: 0 
          }}>
            We tailor workflows to meet each client's needs, leveraging top accounting technology for seamless and efficient bookkeeping. We serve clients in various industries, including hospitality, nightlife, real estate, legal, and medical.
          </p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="service-cards-grid hp-services-1__cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '20px' }}>
        {solutionCards.map((card) => (
          <div key={card.title} className="hp-services-1__card" style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '28px',
            padding: '34px 36px',
            minHeight: '320px',
            backgroundColor: card.backgroundColor,
            boxShadow: '0 14px 30px rgba(10,20,40,0.12)'
          }}>
            <div className="hp-services-1__card-top" style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 136px',
              gap: '26px',
              alignItems: 'start'
            }}>
              <h3
                className={`hp-services-1__card-title ${card.title === 'Protection Solutions' ? 'service-title-protection' : ''}`}
                style={{
                fontSize: '64px',
                lineHeight: '1.04',
                fontWeight: 600,
                color: card.textColor,
                fontFamily: "'DM Serif Text', Georgia, serif",
                margin: 0,
                maxWidth: '520px'
                }}>
                {card.title}
              </h3>

              <div className="hp-services-1__logo-tile" style={{
                width: '136px',
                minWidth: '136px',
                borderRadius: '12px',
                backgroundColor: card.logoBg,
                height: '104px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BrandLogo markOnly style={{ width: '66px', opacity: 0.5 }} />
              </div>
            </div>

            <div className="hp-services-1__points" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
              marginTop: card.title === '🌱 Growth Solutions' ? '88px' : '22px'
            }}>
              {card.points.map((point, index) => {
                const isOddFullWidthItem = card.points.length % 2 === 1 && index === card.points.length - 1;

                return (
                  <div key={point} style={{
                    backgroundColor: card.pointBg,
                    color: card.pointColor,
                    borderRadius: '10px',
                    padding: '12px 14px',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '1.25',
                    minHeight: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isOddFullWidthItem ? 'center' : 'flex-start',
                    textAlign: isOddFullWidthItem ? 'center' : 'left',
                    gridColumn: isOddFullWidthItem ? '1 / -1' : 'auto'
                  }}>
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const journeyStories = [
  {
    year: '1971',
    title: '1971: Planting the Seed',
    content:
      'Over five decades ago, Name began traveling 50 kilometers a day on a bicycle to instill the raw discipline of savings into families. By distributing home pig banks to children, he planted the very first seeds of financial responsibility. He laid the deep, structural groundwork that true wealth requires.',
  },
  {
    year: '1990',
    title: '1990: Nurturing & Protecting the Roots',
    content:
      'As the seedling emerged, Name stepped in to nurture and defend it. For decades, our focus was on shielding our clients from external threats through comprehensive life and health insurance, ensuring the roots grew strong and unbreakable. As the markets evolved, we guided that protected capital into Mutual Funds, watering the roots through the power of compounding.',
  },
  {
    year: '2023',
    title: '2023: The Canopy & The Harvest',
    content:
      'Today, that carefully protected sapling has grown into a lush, solid tree. With the entry of Name, Lineal Edge is focused on the harvest. We honor the deep roots of our existing clients while welcoming new families by offering more complex, best-in-class, high-yield "fruits"—such as Alternative Investment Funds (AIFs), Portfolio Management Services (PMS), and comprehensive Estate Planning.\n\nWe pride ourselves on delivering these sophisticated, high-value solutions with brilliant technical and real-world clarity.',
  },
];

function BusinessImpactSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const timelineRef = useRef(null);
  const contentViewportRef = useRef(null);

  useLayoutEffect(() => {
    const sectionNode = sectionRef.current;
    const timelineNode = timelineRef.current;
    const mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      const ctx = gsap.context(() => {
        const getScrollDistance = () => {
          const contentHeight = timelineRef.current?.scrollHeight ?? 0;
          const visibleHeight = contentViewportRef.current?.offsetHeight ?? 0;
          return Math.max(0, contentHeight - visibleHeight);
        };

        const syncSectionHeight = () => {
          const wrapperHeight = wrapperRef.current?.offsetHeight ?? 0;
          const scrollDistance = getScrollDistance();

          if (sectionRef.current) {
            sectionRef.current.style.minHeight = `${wrapperHeight + scrollDistance}px`;
          }
        };

        syncSectionHeight();

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${Math.max(getScrollDistance(), 1)}`,
          pin: wrapperRef.current,
          pinSpacing: false,
          pinReparent: true,
          pinType: 'fixed',
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: syncSectionHeight,
          onRefresh: self => {
            syncSectionHeight();
            gsap.set(timelineRef.current, {
              y: -getScrollDistance() * self.progress,
            });
          },
          onUpdate: self => {
            gsap.set(timelineRef.current, {
              y: -getScrollDistance() * self.progress,
            });
          },
        });

        gsap.set(timelineRef.current, { y: 0 });

        return () => {
          trigger.kill();
          gsap.set(timelineRef.current, { clearProps: 'transform' });
        };
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => {
      if (sectionNode) {
        sectionNode.style.removeProperty('min-height');
      }
      if (timelineNode) {
        gsap.set(timelineNode, { clearProps: 'transform' });
      }
      mm.revert();
    };
  }, []);

  return (
    <section
      className="hp-impact"
      ref={sectionRef}
      style={{
        width: '100%',
        padding: '0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <div className="hp-impact__wrapper" style={{ 
        width: '100%', 
        display: 'flex', 
        minHeight: '100vh',
        position: 'relative', 
        zIndex: 1,
        alignItems: 'center',
        padding: '48px 0',
        background: '#07162E',
        overflow: 'hidden'
      }} ref={wrapperRef}>
        <div style={{ position: 'absolute', inset: '-100px auto auto -100px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(103,161,241,0.08) 0%, rgba(103,161,241,0) 68%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 'auto -120px -120px auto', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,75,145,0.1) 0%, rgba(12,75,145,0) 72%)', pointerEvents: 'none' }} />
        <div className="hp-impact__inner" style={{
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          minHeight: '560px',
          padding: '0 40px',
        }}>
        
        {/* LEFT SIDE: 30% Fixed Content */}
        <aside className="hp-impact__sidebar" style={{ 
          flex: '0 0 30%', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Push text to the top instead of centering
          borderRight: '1px solid rgba(255, 255, 255, 0.26)', // Clean vertical divider
          paddingRight: '10px',
          paddingTop: '10px' // Align "Our Journey" with the right-side text start position
        }}>
          <h2 className="hp-impact__title" style={{ fontSize: '46px', color: '#00D84A', fontFamily: "'DM Serif Text', Georgia, serif", marginBottom: '56px', fontWeight: 400, lineHeight: 1.08 }}>
            Our Journey
          </h2>

          <div className="hp-impact__stat" style={{ marginBottom: '44px' }}>
            <div className="hp-impact__stat-value" style={{ fontSize: '134px', lineHeight: '0.86', fontWeight: 400, color: '#ffffff', letterSpacing: '-0.04em', fontFamily: "'Cormorant Garamond', serif" }}>
              50+
            </div>
            <div className="hp-impact__stat-label" style={{ marginTop: '10px', fontSize: '20px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>
              Years Of Trust
            </div>
          </div>

          <div className="hp-impact__stat">
            <div className="hp-impact__stat-value" style={{ fontSize: '134px', lineHeight: '0.86', fontWeight: 400, color: '#ffffff', letterSpacing: '-0.04em', fontFamily: "'Cormorant Garamond', serif" }}>
              1500+
            </div>
            <div className="hp-impact__stat-label" style={{ marginTop: '10px', fontSize: '20px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>
              Clients Managed
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE: 70% Scrollable Window */}
        <div 
          className="hp-impact__content" 
          ref={contentViewportRef}
          style={{ 
            flex: '0 0 70%', 
            paddingLeft: '80px', 
            height: '560px', 
            overflow: 'hidden', // Visually hides text outside the 420px area
            position: 'relative'
          }}
        >
          {/* Fade gradients for premium reading feel */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '60px', background: 'linear-gradient(180deg, #07162E 0%, rgba(7,22,46,0) 100%)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60px', background: 'linear-gradient(0deg, #07162E 0%, rgba(7,22,46,0) 100%)', zIndex: 10, pointerEvents: 'none' }} />

          <div className="hp-impact__timeline" ref={timelineRef} style={{ paddingTop: '40px', paddingBottom: '32px' }}>
            {journeyStories.map((story, index) => (
              <article key={story.title} className="hp-impact__item" style={{ marginBottom: index === journeyStories.length - 1 ? '0' : '88px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
                  <div className="hp-impact__year" style={{ color: '#00D84A', fontSize: '34px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {story.year}
                  </div>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0)' }} />
                </div>

                <h3 className="hp-impact__heading" style={{ fontSize: '64px', lineHeight: '1.06', margin: '0 0 32px', color: '#FFFFFF', fontFamily: "'DM Serif Text', Georgia, serif", fontWeight: 400, letterSpacing: '-0.02em' }}>
                  {story.title}
                </h3>

                <p style={{ margin: 0, maxWidth: '92%', fontSize: '46px', lineHeight: '1.65', color: '#cbd5e1', fontWeight: 500, whiteSpace: 'pre-line' }}>
                  {story.content}
                </p>
              </article>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function MeetOurLeadersSection() {
  return (
    <section className="hp-leaders" style={{ padding: '100px 100px 120px', background: 'transparent' }}>
      <div className="hp-leaders__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Left Side: Text and Buttons */}
        <div className="hp-leaders__intro" style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
          <span style={{ 
            display: 'inline-block', 
            backgroundColor: '#ffffff', 
            padding: '6px 20px', 
            borderRadius: '50vw', 
            fontSize: '13px', 
            fontWeight: 600, 
            color: '#1A3260', 
            marginBottom: '28px',
            letterSpacing: '0.05em',
            border: '1px solid rgba(23,53,45,0.25)',
            width: 'fit-content'
          }}>
            Personal and Business Accounting Team
          </span>
          <h2 style={{ 
            fontSize: '54px', 
            fontWeight: 400, 
            fontFamily: "'DM Serif Text', Georgia, serif",
            color: '#1A3260', 
            lineHeight: '1.15',
            margin: '0 0 24px'
          }}>
            Meet Our Leaders
          </h2>
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: '#1A3260', 
            marginBottom: '40px',
            maxWidth: '42ch',
            fontWeight: 400
          }}>
            Our success stems from a seasoned professional team bringing extensive experience and expertise to every client engagement.
          </p>
          
          <div className="hp-leaders__actions" style={{ display: 'flex', gap: '14px' }}>
            <Link to="/contact" className="inline-arrow-btn arrow-hover-cta" style={{ 
              background: 'var(--button-brand-green)', 
              border: 'none', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: 600, 
              cursor: 'pointer', 
              color: '#071F45', 
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 10px 18px rgba(16, 185, 129, 0.2)'
            }}>
              <span className="arrow-hover-label">Meet the Team</span>
            </Link>
            <Link to="/contact" className="inline-arrow-btn arrow-hover-cta" style={{ 
              background: 'transparent', 
              border: '1px solid #1A3260', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: 600, 
              cursor: 'pointer', 
              color: '#1A3260', 
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <span className="arrow-hover-label">Career Opportunities</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Portrait Cards */}
        <div className="portrait-grid hp-leaders__portraits" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', aspectRatio: '3/4' }}>
              <img
                src="/leader-daniel.jpg"
                alt="Daniel Brila"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/leader-daniel.svg';
                }}
              />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 400, fontFamily: "'DM Serif Text', Georgia, serif", color: '#1A3260', margin: '0 0 4px' }}>Daniel Brila</h3>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#5a6b6d', margin: 0 }}>President</p>
          </div>
          <div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', aspectRatio: '3/4' }}>
              <img
                src="/leader-rebecca.jpg"
                alt="Rebeca Johnson"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/leader-rebecca.svg';
                }}
              />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 400, fontFamily: "'DM Serif Text', Georgia, serif", color: '#1A3260', margin: '0 0 4px' }}>Rebeca Johnson</h3>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#5a6b6d', margin: 0 }}>Senior Tax Manager</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function OurServicesSectionTwo() {
  return (
    <section className="hp-services-2" style={{ padding: '100px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f6fafb 100%)' }}>
      <div className="hp-services-2__container" style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 60px' }}>
        <div className="hp-services-2__grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '20px'
        }}>

          {/* Row 1, Col 1 — Dark teal hero card */}
          <div className="hp-services-2__hero-card" style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.04) 15px, rgba(255,255,255,0.04) 18px), radial-gradient(circle at 86% 14%, rgba(198,233,159,0.12) 0%, transparent 56%), linear-gradient(155deg, #071F45 0%, #1A3260 100%)',
            borderRadius: '14px',
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#ffffff',
            minHeight: '300px'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '999px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '18px'
              }}>Our Services</span>
              <h2 style={{
                fontSize: '42px',
                fontWeight: 500,
                fontFamily: "'DM Serif Text', Georgia, serif",
                lineHeight: '1.15',
                color: '#ffffff',
                margin: '0 0 32px',
                textShadow: '0 1px 1px rgba(8,26,30,0.28)'
              }}>
                We&apos;re on The Pulse of Tax Industry Trends
              </h2>
            </div>
            <Link to="/contact" className="inline-arrow-btn arrow-hover-cta" style={{
              background: 'var(--button-brand-green)',
              color: '#071F45',
              border: 'none',
              padding: '14px 24px',
              borderRadius: '12px',
              width: 'fit-content',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 18px rgba(16, 185, 129, 0.2)'
            }}>
              <span className="arrow-hover-label">Contact us</span>
            </Link>
          </div>

          {/* Row 1, Col 2 — Increased Profitability */}
          <div style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfc 100%)',
            borderRadius: '14px',
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            border: '1px solid #dbe5e8',
            boxShadow: '0 8px 20px rgba(18,36,46,0.08)'
          }}>
            <div style={{
              width: '50px', height: '50px',
              background: '#ffffff',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              color: '#1f4f50'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 20H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 17V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M11 17V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 17V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 9L11 5L16 10L21 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#1A3260', marginBottom: '12px', fontFamily: 'var(--font-main)' }}>
              Increased Profitability
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.62', color: '#607880', margin: 0 }}>
              Businesses working with Lineal Edge save up to 30% on taxes annually.
            </p>
          </div>

          {/* Row 1, Col 3 — Graph card (spans 2 rows) */}
          <div className="hp-services-2__graph-card" style={{
            background: 'linear-gradient(180deg, #d0edb1 0%, #bddf9d 100%)',
            borderRadius: '14px',
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gridRow: 'span 2',
            border: '1px solid #dbe5e8',
            boxShadow: '0 8px 20px rgba(18,36,46,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <p style={{ margin: 0, lineHeight: '1.5', color: '#1A3260', fontWeight: 500, fontSize: '16px' }}>
                Growth of Businesses Using Lineal Edge Professional Accounting Services
              </p>
              <span style={{ fontSize: '18px', lineHeight: 1, color: '#1A3260', cursor: 'pointer' }}>✕</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '250px', marginTop: '40px' }}>
              {[
                { pct: '65%', year: '2022', h: '45%' },
                { pct: '75%', year: '2023', h: '60%' },
                { pct: '88%', year: '2024', h: '80%' }
              ].map((b) => (
                <div key={b.year} style={{ textAlign: 'center', width: '30%' }}>
                  <div style={{ position: 'relative', height: b.h, background: '#173f42', borderRadius: '4px', display: 'flex', justifyContent: 'center', minHeight: '60px' }}>
                    <span style={{ position: 'absolute', top: '-35px', fontSize: '24px', fontWeight: 'bold', color: '#1A3260' }}>{b.pct}</span>
                  </div>
                  <p style={{ marginTop: '8px', fontSize: '14px', color: '#1A3260', fontWeight: 500 }}>{b.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2, Col 1 — Time Savings */}
          <div style={{
            background: 'linear-gradient(180deg, #f4f7f8 0%, #edf3f5 100%)',
            borderRadius: '14px',
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            border: '1px solid #dbe5e8',
            boxShadow: '0 8px 20px rgba(18,36,46,0.08)'
          }}>
            <div style={{
              width: '50px', height: '50px',
              background: '#ffffff',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              color: '#1f4f50'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 8V12L15 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.5H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#1A3260', marginBottom: '12px', fontFamily: 'var(--font-main)' }}>
              Time Savings
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.62', color: '#607880', margin: 0 }}>
              Companies reduce financial admin work by 50% with automated accounting solutions.
            </p>
          </div>

          {/* Row 2, Col 2 — Meeting image */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid #dbe5e8',
            boxShadow: '0 8px 20px rgba(18,36,46,0.08)'
          }}>
            <img
              src="/hero-bg.png"
              alt="Professional meeting"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '280px' }}
            />
          </div>

          {/* Row 2, Col 3 is filled by the graph card spanning 2 rows */}

        </div>
      </div>
    </section>
  );
}

function OurBlogSection() {
  const blogPosts = [
    {
      imageUrl: '/blog_property.png',
      categories: ['Property'],
      date: 'March 28, 2025',
      title: 'Do Seniors Pay Property Taxes in Massachusetts?',
      url: 'https://execor.vamtam.com/2025/03/28/do-seniors-pay-property-taxes-in-massachusetts/',
    },
    {
      imageUrl: '/blog_accounting.png',
      categories: ['Property', 'Tax'],
      date: 'March 28, 2025',
      title: 'Reduce Taxes and Sleep Well at Night',
      url: 'https://execor.vamtam.com/2025/03/28/reduce-taxes-and-sleep-well-at-night/',
    },
  ];

  return (
    <section className="hp-blog" style={{ padding: '120px 0', background: '#f2f4f1' }}>
      <div className="hp-blog__container" style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 60px' }}>

        {/* Header */}
        <div className="hp-blog__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
          <div>
            <span style={{
              display: 'inline-block',
              backgroundColor: '#ffffff',
              padding: '6px 20px',
              borderRadius: '50vw',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1A3260',
              marginBottom: '24px',
              letterSpacing: '0.05em'
            }}>
              Our Blog
            </span>
            <h2 style={{
              fontSize: '54px',
              fontWeight: 400,
              fontFamily: "'DM Serif Text', Georgia, serif",
              color: '#1A3260',
              lineHeight: '1.15',
              margin: 0
            }}>
              Insights & Strategies. Your Guide<br/>to Smarter Accounting.
            </h2>
          </div>
          <Link
            to="/contact"
            className="arrow-hover-cta arrow-hover-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid #1A3260',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              color: '#1A3260',
              fontSize: '15px',
              textDecoration: 'none',
              marginTop: '40px',
              transition: 'transform 0.2s ease'
            }}
          >
            <span className="arrow-hover-label">View More</span>
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="hp-blog__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid rgba(23,53,45,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ width: '100%', height: '260px', overflow: 'hidden' }}>
                <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} />
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {post.categories.map((cat) => (
                      <span key={cat} style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#1A3260',
                        background: '#e8eeea',
                        padding: '4px 12px',
                        borderRadius: '50vw'
                      }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontSize: '13px', color: '#6b7c7e' }}>{post.date}</span>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  fontFamily: "'DM Serif Text', Georgia, serif",
                  color: '#1A3260',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksheetsSection() {
  const worksheets = [
    {
      title: 'Entity Summary Worksheet',
      description: 'To summarize your multimember LLC, partnership, or corporation\'s financial information.',
      url: 'https://execor.vamtam.com/worksheet',
    },
    {
      title: 'Tax Info Sheet',
      description: "We'll need these tax documents and information to file.",
      url: 'https://execor.vamtam.com/worksheet',
    },
    {
      title: 'Rental Real Estate Worksheet',
      description: 'To summarize income and expenses from a rental unit.',
      url: 'https://execor.vamtam.com/worksheet',
    },
  ];

  return (
    <section className="hp-worksheets" style={{ padding: '120px 0', background: '#f7f8f6' }}>
      <div className="hp-worksheets__container" style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 60px' }}>

        {/* Header */}
        <div className="hp-worksheets__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
          <div>
            <span style={{
              display: 'inline-block',
              backgroundColor: '#ffffff',
              padding: '6px 20px',
              borderRadius: '50vw',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1A3260',
              marginBottom: '24px',
              letterSpacing: '0.05em',
              border: '1px solid rgba(23,53,45,0.1)'
            }}>
              Personal and Business Accounting Team
            </span>
            <h2 style={{
              fontSize: '54px',
              fontWeight: 400,
              fontFamily: "'DM Serif Text', Georgia, serif",
              color: '#1A3260',
              lineHeight: '1.15',
              margin: 0
            }}>
              Helpful Worksheets to Simplify<br/>Your Finances
            </h2>
          </div>
          <Link
            to="/contact"
            className="arrow-hover-cta arrow-hover-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid #1A3260',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              color: '#1A3260',
              fontSize: '15px',
              textDecoration: 'none',
              marginTop: '40px'
            }}
          >
            <span className="arrow-hover-label">View More</span>
          </Link>
        </div>

        {/* Worksheet Cards */}
        <div className="hp-worksheets__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {worksheets.map((ws) => (
            <div key={ws.title} style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              border: '1px solid rgba(23,53,45,0.06)'
            }}>
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  fontFamily: "'DM Serif Text', Georgia, serif",
                  color: '#1A3260',
                  margin: '0 0 14px',
                  lineHeight: '1.35'
                }}>
                  {ws.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3d4f51', margin: 0 }}>
                  {ws.description}
                </p>
              </div>
              <a
                href={ws.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1A3260',
                  textDecoration: 'none',
                  borderBottom: '2px solid #1A3260',
                  paddingBottom: '2px',
                  width: 'fit-content'
                }}
              >
                Download <span style={{ fontSize: '18px' }}>↓</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Export ─────────────────────── */
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ScrollytellingSection />
      <div className="landing-sections">
        {/* Unified card wrapper — Lineal Edge-style connected sections */}
        <div className="home-shell" style={{
          maxWidth: '1440px',
          margin: '0 auto',
          // borderRadius: '22px',
          border: '1px solid rgba(26, 50, 96, 0.08)',
          boxShadow: '0 14px 34px rgba(10, 20, 40, 0.06)',
          overflow: 'hidden',
          background: '#f3f5f2'
        }}>
          <OurServicesSectionOne />
          <BusinessImpactSection />
          <MeetOurLeadersSection />
        </div>
        <OurServicesSectionTwo />
        <CTASection />
      </div>
      {/* 
      <PhaseSection
        id="phase-one" className="phase-one"
        label="01 — Foundation" title="Your Goals"
        description="Evaluating your current financial landscape and identifying the immediate needs and safety nets. Because your child's education and your comfort matter."
        details={['Comprehensive financial health evaluation', 'Identifying core life ambitions', 'Building an emergency healthcare fund']}
        Visual={(props) => <BrandLogoFocus focus="L" {...props} />} reversed={false}
        indicatorState={['active', 'inactive', 'inactive']}
        dividerClass="divider-phase-one"
      />
      <PhaseSection
        id="phase-two" className="phase-two"
        label="02 — Protection" title="Customised Approach"
        description="We bring an objective eye and a customised approach towards aligning your investments to your ambitions. Charting the course to your bespoke future."
        details={['Objective investment alignment', 'Tailored risk profiling & strategy', 'Strategic transition planning for retirement']}
        Visual={(props) => <BrandLogoFocus focus="E" {...props} />} reversed={true}
        indicatorState={['done', 'active', 'inactive']}
        dividerClass="divider-phase-two"
      />
      <GrowthSection />
      */}

    </main>
  );
}
