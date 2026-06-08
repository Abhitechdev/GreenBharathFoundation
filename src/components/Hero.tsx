'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scroll = window.scrollY;
      const overlay = heroRef.current.querySelector('.hero-overlay') as HTMLElement;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (overlay) overlay.style.opacity = `${0.5 + scroll * 0.001}`;
      if (content) content.style.transform = `translateY(${scroll * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-forest.png"
          alt="Lush green Indian forest canopy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/40 to-deep transition-opacity duration-300" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${6 + i * 4}px`,
              height: `${6 + i * 4}px`,
              background: `radial-gradient(circle, rgba(212,168,67,${0.3 - i * 0.04}) 0%, transparent 70%)`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 animate-[fade-up_0.8s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse-glow" />
          <span className="text-sm font-medium text-gold tracking-wide">
            {t('hero.badge')}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 animate-[fade-up_0.8s_ease-out_0.2s_both]">
          <span className="block text-ivory">{t('hero.headingLine1')}</span>
          <span className="block text-gradient-saffron mt-2">{t('hero.headingLine2')}</span>
          <span className="block text-ivory mt-2">{t('hero.headingLine3')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-ivory/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fade-up_0.8s_ease-out_0.4s_both]">
          {t('hero.subtitle')}
          <span className="text-gold">{t('hero.subtitleHighlight')}</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[fade-up_0.8s_ease-out_0.6s_both]">
          <Link href="/donate" className="btn-primary text-lg !px-8 !py-4 cursor-pointer" suppressHydrationWarning>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {t('hero.ctaPlantTree')}
            </span>
          </Link>
          <Link href="/mission" className="btn-outline text-lg !px-8 !py-4 cursor-pointer" suppressHydrationWarning>
            <span className="flex items-center gap-2">
              {t('hero.ctaMission')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-[fade-up_0.8s_ease-out_0.8s_both]">
          {[
            { value: t('hero.statTreesValue'), label: t('hero.statTreesLabel') },
            { value: t('hero.statStatesValue'), label: t('hero.statStatesLabel') },
            { value: t('hero.statVolunteersValue'), label: t('hero.statVolunteersLabel') },
            { value: t('hero.statHectaresValue'), label: t('hero.statHectaresLabel') },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 sm:p-6 group hover:bg-forest/20 transition-all duration-500 cursor-default">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-xs sm:text-sm text-ivory/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-[fade-up_1s_ease-out_1s_both]">
        <span className="text-xs text-ivory/40 tracking-widest uppercase">{t('hero.scroll')}</span>
        <div className="w-5 h-8 rounded-full border-2 border-ivory/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
