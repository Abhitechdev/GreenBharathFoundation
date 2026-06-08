'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const testimonialConfigs = [
  {
    nameKey: 'stories.person1Name',
    roleKey: 'stories.person1Role',
    taglineKey: 'stories.person1Tagline',
    photo: '/avatar-rohan.png',
    descKey: 'stories.person1Desc',
    quoteKey: 'stories.person1Quote',
    impactKey: 'stories.person1Impact',
  },
  {
    nameKey: 'stories.person2Name',
    roleKey: 'stories.person2Role',
    taglineKey: 'stories.person2Tagline',
    photo: '/avatar-kavita.png',
    descKey: 'stories.person2Desc',
    quoteKey: 'stories.person2Quote',
    impactKey: 'stories.person2Impact',
  },
  {
    nameKey: 'stories.person3Name',
    roleKey: 'stories.person3Role',
    taglineKey: 'stories.person3Tagline',
    photo: '/avatar-arjun.png',
    descKey: 'stories.person3Desc',
    quoteKey: 'stories.person3Quote',
    impactKey: 'stories.person3Impact',
  },
  {
    nameKey: 'stories.person4Name',
    roleKey: 'stories.person4Role',
    taglineKey: 'stories.person4Tagline',
    photo: '/avatar-priya.png',
    descKey: 'stories.person4Desc',
    quoteKey: 'stories.person4Quote',
    impactKey: 'stories.person4Impact',
  },
  {
    nameKey: 'stories.person5Name',
    roleKey: 'stories.person5Role',
    taglineKey: 'stories.person5Tagline',
    photo: '/avatar-lakshmi.png',
    descKey: 'stories.person5Desc',
    quoteKey: 'stories.person5Quote',
    impactKey: 'stories.person5Impact',
  },
];

export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [autoplayIdx, setAutoplayIdx] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setAutoplayIdx((currentIdx) => (currentIdx + 1) % testimonialConfigs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleCardClick = (idx: number) => {
    // Pause autoplay once user manually interacts with cards
    setIsAutoplay(false);
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleAutoplay = () => {
    setIsAutoplay((current) => !current);
  };

  return (
    <section ref={sectionRef} id="stories" className="section relative">
      {/* Background decoration glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-forest/5 blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-gold tracking-[0.2em] uppercase mb-4">
            {t('stories.sectionLabel')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            {t('stories.heading')} <span className="text-gradient-gold">{t('stories.headingHighlight')}</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto mb-8">
            {t('stories.subtitle')}
          </p>

          {/* Autoplay Controls */}
          <button
            onClick={toggleAutoplay}
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              isAutoplay
                ? 'bg-gold/15 text-gold border-gold/30 hover:bg-gold/20'
                : 'bg-ivory/5 text-ivory/60 border-ivory/10 hover:bg-ivory/10 hover:text-ivory'
            }`}
            id="story-autoplay-toggle"
            suppressHydrationWarning
          >
            {isAutoplay ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="4" height="16" />
                  <rect x="16" y="4" width="4" height="16" />
                </svg>
                <span>{t('stories.autoplayOn')}</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21" />
                </svg>
                <span>{t('stories.autoplayOff')}</span>
              </>
            )}
          </button>
        </div>

        {/* Stories 3D Flip Card Container */}
        <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          {testimonialConfigs.map((tc, idx) => {
            const isFlipped = isAutoplay ? autoplayIdx === idx : Boolean(flippedCards[idx]);

            return (
              <div
                key={t(tc.nameKey)}
                onClick={() => handleCardClick(idx)}
                className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.55rem)] perspective-1000 ${
                  isFlipped ? 'card-flipped' : ''
                }`}
                id={`story-card-${idx}`}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleCardClick(idx);
                  }
                }}
              >
              <div className="card-flip-inner transform-style-3d relative rounded-3xl">
                
                {/* CARD FRONT */}
                <div className="backface-hidden absolute inset-0 glass-strong border border-ivory/10 rounded-3xl p-6 flex flex-col justify-between hover:border-gold/30 transition-colors duration-500 shadow-xl">
                  <div>
                    {/* Portrait Photo with biophilic glow ring */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 mb-5 mx-auto relative shadow-lg shadow-gold/5 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={tc.photo}
                        alt={t(tc.nameKey)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Bio info */}
                    <h3 className="text-center font-bold text-xl text-ivory tracking-tight mb-1">
                      {t(tc.nameKey)}
                    </h3>
                    <div className="text-center text-[10px] text-gold font-bold tracking-widest uppercase mb-4">
                      {t(tc.roleKey)}
                    </div>
                    <p className="text-sm text-ivory/60 text-center leading-relaxed font-light">
                      {t(tc.descKey)}
                    </p>
                  </div>

                  <div>
                    {/* Tagline */}
                    <div className="text-[11px] text-center font-medium bg-forest/35 text-gold-light border border-forest-light/10 py-1.5 px-3 rounded-full mb-4 truncate">
                      {t(tc.taglineKey)}
                    </div>
                    {/* Read Story Button */}
                    <button
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ivory/5 border border-ivory/10 text-xs font-semibold text-ivory hover:bg-gold/10 hover:border-gold/25 transition-all duration-300"
                      suppressHydrationWarning
                    >
                      <span>{t('stories.readStory')}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="backface-hidden absolute inset-0 glass-strong border border-gold/25 rounded-3xl p-6 flex flex-col justify-between rotate-y-180 bg-deep-2/95 shadow-2xl">
                  <div>
                    {/* Quote mark svg */}
                    <svg
                      className="text-gold/25 mb-2"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    {/* Story quote */}
                    <p className="text-sm md:text-base text-ivory/90 italic leading-relaxed font-light mb-6 overflow-y-auto max-h-[200px] pr-1 scrollbar-thin">
                      &ldquo;{t(tc.quoteKey)}&rdquo;
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="h-[1px] bg-ivory/10 w-full mb-4" />
                    {/* Bottom row */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-wider text-saffron uppercase bg-saffron/10 border border-saffron/25 py-1 px-3 rounded-md">
                        {t(tc.impactKey)}
                      </span>
                      {/* Close button */}
                      <button
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-ivory/5 border border-ivory/10 hover:bg-gold/15 hover:border-gold/30 hover:text-gold text-ivory transition-all duration-300"
                        title={t('stories.closeStory')}
                        suppressHydrationWarning
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
