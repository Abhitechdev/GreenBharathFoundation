'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const programs = [
  {
    title: 'Van Mahotsav Drive',
    description:
      'Our flagship annual plantation campaign spanning all 28 states. Communities come together every monsoon to plant millions of native trees.',
    image: '/community-planting.png',
    tags: ['Reforestation', 'Community'],
    stats: { target: '2M Trees/Year', reach: '28 States' },
  },
  {
    title: 'Wildlife Guardians',
    description:
      'Protecting India\'s endangered species through habitat restoration, anti-poaching patrols, and corridor creation between fragmented forests.',
    image: '/wildlife-tiger.png',
    tags: ['Conservation', 'Wildlife'],
    stats: { target: '15 Corridors', reach: '12 Sanctuaries' },
  },
  {
    title: 'Green Schools Initiative',
    description:
      'Transforming 10,000 schools into environmental learning hubs with gardens, waste management systems, and nature curricula.',
    image: '/hero-forest.png',
    tags: ['Education', 'Youth'],
    stats: { target: '10K Schools', reach: '5M Students' },
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="programs" className="section relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-river/5 blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-sm font-semibold text-river-light tracking-[0.2em] uppercase mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            Initiatives That{' '}
            <span className="text-gradient-forest">Transform</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto">
            From dense forests to urban schools, our programs create lasting impact across diverse landscapes and communities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="flex flex-col gap-8">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`reveal glass-card overflow-hidden group cursor-pointer ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-deep/60" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ivory mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-ivory/50 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8">
                    <div>
                      <div className="text-lg font-bold text-gradient-saffron">{program.stats.target}</div>
                      <div className="text-xs text-ivory/30 mt-1">Target</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gradient-gold">{program.stats.reach}</div>
                      <div className="text-xs text-ivory/30 mt-1">Reach</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-saffron transition-colors duration-300">
                      Learn More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
