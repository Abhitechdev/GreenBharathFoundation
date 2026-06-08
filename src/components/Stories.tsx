'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rohan Kapoor',
    role: 'Corporate Volunteer, Mumbai',
    tagline: 'Urban Forest Lead',
    photo: '/avatar-rohan.png',
    description: 'Left his desk job to lead corporate reforestation drives in Mumbai\'s outskirts, mobilizing over 200 volunteers to plant native saplings.',
    quote: 'I volunteered on a whim and it changed my life. The energy on the ground, planting saplings with strangers who become family — there\'s nothing like it.',
    impact: 'Category: Urban Forests',
  },
  {
    name: 'Kavita Devi',
    role: 'Village Sarpanch, Rajasthan',
    tagline: 'Community Leader',
    photo: '/avatar-kavita.png',
    description: 'Spearheaded the transformation of a 25-hectare dry wasteland in Rajasthan into a thriving micro-forest, restoring local water tables.',
    quote: 'Green Bharat transformed our village. What was once barren wasteland is now a thriving forest. Our children have clean air and our women have livelihoods from the forest produce.',
    impact: 'Category: Village Revival',
  },
  {
    name: 'Dr. Arjun Menon',
    role: 'Wildlife Biologist, WII',
    tagline: 'Wildlife Biologist',
    photo: '/avatar-arjun.png',
    description: 'Advises scientific mapping and monitoring of corridors to ensure reforested areas connect animal habitats safely.',
    quote: 'As a wildlife biologist, I\'ve seen the corridors created by Green Bharat bring back species we hadn\'t seen in decades. Their scientific approach to conservation is remarkable.',
    impact: 'Category: Ecological Science',
  },
  {
    name: 'Priya Sharma',
    role: 'Teacher, Green School Uttarakhand',
    tagline: 'Educator & Advocate',
    photo: '/avatar-priya.png',
    description: 'Established local environmental clubs and waste management programs in over 15 public schools across Uttarakhand.',
    quote: 'The Green Schools program changed how my students see the environment. They\'re now the ones teaching their parents about composting and water conservation.',
    impact: 'Category: Green Education',
  },
  {
    name: 'Lakshmi Naik',
    role: 'Farmer, Karnataka',
    tagline: 'Agroforestry Pioneer',
    photo: '/avatar-lakshmi.png',
    description: 'Pioneered soil rejuvenation, organic multi-crop farming, and tree husbandry methods in rural Karnataka.',
    quote: 'Green Bharat\'s agroforestry model has doubled our family income while restoring our ancestral land. It proves that economy and ecology can walk hand in hand.',
    impact: 'Category: Agroforestry',
  },
];

export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [autoplayIdx, setAutoplayIdx] = useState(0);

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
      setAutoplayIdx((currentIdx) => (currentIdx + 1) % testimonials.length);
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
            Voices of Change
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            Stories from the <span className="text-gradient-gold">Ground</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto mb-8">
            Real stories from the people whose lives have been transformed by our collective green mission. Click any card to explore the full story.
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
                <span>Autoplay: On</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21" />
                </svg>
                <span>Autoplay: Off</span>
              </>
            )}
          </button>
        </div>

        {/* Stories 3D Flip Card Container */}
        <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          {testimonials.map((t, idx) => {
            const isFlipped = isAutoplay ? autoplayIdx === idx : Boolean(flippedCards[idx]);

            return (
              <div
                key={t.name}
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
                        src={t.photo}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Bio info */}
                    <h3 className="text-center font-bold text-xl text-ivory tracking-tight mb-1">
                      {t.name}
                    </h3>
                    <div className="text-center text-[10px] text-gold font-bold tracking-widest uppercase mb-4">
                      {t.role}
                    </div>
                    <p className="text-sm text-ivory/60 text-center leading-relaxed font-light">
                      {t.description}
                    </p>
                  </div>

                  <div>
                    {/* Tagline */}
                    <div className="text-[11px] text-center font-medium bg-forest/35 text-gold-light border border-forest-light/10 py-1.5 px-3 rounded-full mb-4 truncate">
                      {t.tagline}
                    </div>
                    {/* Read Story Button */}
                    <button
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ivory/5 border border-ivory/10 text-xs font-semibold text-ivory hover:bg-gold/10 hover:border-gold/25 transition-all duration-300"
                      suppressHydrationWarning
                    >
                      <span>Read Story</span>
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
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="h-[1px] bg-ivory/10 w-full mb-4" />
                    {/* Bottom row */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-wider text-saffron uppercase bg-saffron/10 border border-saffron/25 py-1 px-3 rounded-md">
                        {t.impact}
                      </span>
                      {/* Close button */}
                      <button
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-ivory/5 border border-ivory/10 hover:bg-gold/15 hover:border-gold/30 hover:text-gold text-ivory transition-all duration-300"
                        title="Close Story"
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
