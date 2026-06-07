'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const impactData = [
  {
    value: 5000000,
    display: 5,
    suffix: 'M+',
    label: 'Trees Planted',
    description: 'Native saplings across 28 states',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
      </svg>
    ),
  },
  {
    value: 12000,
    display: 12,
    suffix: 'K',
    label: 'Hectares Restored',
    description: 'Degraded land brought back to life',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    value: 150000,
    display: 150,
    suffix: 'K+',
    label: 'Volunteers',
    description: 'Active green warriors nationwide',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 850000,
    display: 850,
    suffix: 'K',
    label: 'Tonnes CO₂ Offset',
    description: 'Carbon absorbed by our forests',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    value: 2500,
    display: 2500,
    suffix: '+',
    label: 'Villages Empowered',
    description: 'Sustainable livelihoods created',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: 300000,
    display: 300,
    suffix: 'K',
    label: 'Students Educated',
    description: 'Young minds inspired for change',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function Impact() {
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
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="section relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-saffron/3 blur-[150px]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-sm font-semibold text-saffron tracking-[0.2em] uppercase mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            Numbers That{' '}
            <span className="text-gradient-gold">Speak</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto">
            Real results from the ground — measured, verified, and growing every day.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactData.map((item, idx) => (
            <div
              key={item.label}
              className="reveal glass-card p-8 text-center group cursor-default"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-forest to-forest-light/50 flex items-center justify-center mb-5 text-gold group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                <AnimatedCounter end={item.display} suffix={item.suffix} />
              </div>
              <div className="text-lg font-semibold text-ivory mb-1">{item.label}</div>
              <div className="text-sm text-ivory/40">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-16 reveal">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-ivory">2026 Planting Goal</h3>
                <p className="text-ivory/40 text-sm">Target: 1 Million Trees This Year</p>
              </div>
              <span className="text-2xl font-bold text-gradient-saffron mt-2 sm:mt-0">73%</span>
            </div>
            <div className="w-full h-3 bg-deep-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-saffron via-gold to-saffron-light transition-all duration-1000"
                style={{ width: '73%' }}
              />
            </div>
            <div className="flex justify-between mt-3 text-xs text-ivory/30">
              <span>730,000 planted</span>
              <span>1,000,000 goal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
