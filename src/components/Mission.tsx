'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const pillarConfigs = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
      </svg>
    ),
    titleKey: 'mission.pillar1Title',
    descKey: 'mission.pillar1Desc',
    statKey: 'mission.pillar1Stat',
    color: 'forest',
    coords: { x: 120, y: 100 },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    titleKey: 'mission.pillar2Title',
    descKey: 'mission.pillar2Desc',
    statKey: 'mission.pillar2Stat',
    color: 'river',
    coords: { x: 680, y: 100 },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titleKey: 'mission.pillar3Title',
    descKey: 'mission.pillar3Desc',
    statKey: 'mission.pillar3Stat',
    color: 'saffron',
    coords: { x: 120, y: 380 },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    titleKey: 'mission.pillar4Title',
    descKey: 'mission.pillar4Desc',
    statKey: 'mission.pillar4Stat',
    color: 'gold',
    coords: { x: 680, y: 380 },
  },
];

const colorMap: Record<string, { gradient: string; glow: string; stroke: string; text: string }> = {
  forest: {
    gradient: 'from-forest to-forest-light',
    glow: 'rgba(20,90,66,0.35)',
    stroke: '#145A42',
    text: 'text-forest-light',
  },
  river: {
    gradient: 'from-river-dark to-river-light',
    glow: 'rgba(30,144,200,0.35)',
    stroke: '#1E90C8',
    text: 'text-river-light',
  },
  saffron: {
    gradient: 'from-saffron-dark to-saffron-light',
    glow: 'rgba(255,107,43,0.35)',
    stroke: '#FF6B2B',
    text: 'text-saffron-light',
  },
  gold: {
    gradient: 'from-earth to-gold-light',
    glow: 'rgba(212,168,67,0.35)',
    stroke: '#D4A843',
    text: 'text-gold-light',
  },
};

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mobileActiveIdx, setMobileActiveIdx] = useState<number | null>(null);
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

  return (
    <section ref={sectionRef} id="mission" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-forest/5 blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-gold tracking-[0.2em] uppercase mb-4">
            {t('mission.sectionLabel')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            {t('mission.heading')} <span className="text-gradient-saffron">{t('mission.headingHighlight')}</span>
          </h2>
        </div>

        {/* ================= DESKTOP INTERACTIVE NODE NETWORK ================= */}
        <div className="hidden md:block relative w-full h-[480px] max-w-4xl mx-auto reveal" style={{ transitionDelay: '0.1s' }}>
          
          {/* Connector lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 800 480" width="100%" height="100%">
            {pillarConfigs.map((pillar, idx) => {
              const isActive = activeIdx === idx;
              const colors = colorMap[pillar.color];
              return (
                <g key={t(pillar.titleKey)}>
                  {/* Energy Flowing Line */}
                  <line
                    x1="400"
                    y1="240"
                    x2={pillar.coords.x}
                    y2={pillar.coords.y}
                    stroke={isActive ? colors.stroke : '#145A42'}
                    strokeWidth={isActive ? '3.5' : '1.5'}
                    className={`transition-all duration-500 ${
                      isActive ? 'animate-dash-flow' : 'opacity-30'
                    }`}
                    strokeDasharray={isActive ? '8 6' : '6 6'}
                  />
                  {/* Glowing end point circle */}
                  <circle
                    cx={pillar.coords.x}
                    cy={pillar.coords.y}
                    r={isActive ? '8' : '4'}
                    fill={isActive ? colors.stroke : '#145A42'}
                    className="transition-all duration-500"
                    style={isActive ? { filter: `drop-shadow(0 0 8px ${colors.stroke})` } : {}}
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive HTML elements rendered inside SVG using foreignObjects */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 800 480">
            
            {/* Center Morphing Info Panel */}
            <foreignObject x={240} y={110} width={320} height={260} className="overflow-visible pointer-events-auto">
              <div className="w-full h-full flex items-center justify-center">
                <div className={`glass-strong border rounded-3xl p-6 flex flex-col justify-center items-center text-center w-full h-full shadow-2xl transition-all duration-500 ${
                  activeIdx !== null 
                    ? `border-gold/30 shadow-gold/5` 
                    : 'border-forest-light/20 shadow-forest-light/5'
                }`}>
                  {activeIdx === null ? (
                    <div className="flex flex-col items-center justify-center h-full animate-[scale-in_0.4s_ease-out]">
                      {/* Leaf Icon */}
                      <div className="w-14 h-14 rounded-full bg-forest-light/20 flex items-center justify-center mb-4 text-gold animate-float-slow border border-forest-light/30">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 2 4a7 7 0 0 1-10 14Z" />
                          <path d="M9 22H5a3 3 0 0 1-3-3V5" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg text-ivory mb-2 tracking-wide font-[var(--font-outfit)]">
                        {t('mission.explorePillars')}
                      </h3>
                      <p className="text-[11px] text-ivory/40 max-w-[220px] leading-relaxed">
                        {t('mission.explorePrompt')}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2.5 border ${
                        colorMap[pillarConfigs[activeIdx].color].text
                      } border-current bg-current/5`}>
                        {t('mission.pillarLabel', { number: activeIdx + 1 })}
                      </span>
                      <h3 className="font-bold text-xl text-ivory mb-3 font-[var(--font-outfit)] animate-[fade-up_0.35s_ease-out]">
                        {t(pillarConfigs[activeIdx].titleKey)}
                      </h3>
                      <p className="text-xs text-ivory/60 leading-relaxed max-w-[260px] mb-4 min-h-[56px] animate-[fade-up_0.35s_ease-out_0.05s_both]">
                        {t(pillarConfigs[activeIdx].descKey)}
                      </p>
                      <div className="text-xs font-bold text-gold uppercase tracking-wider border border-gold/25 bg-gold/5 py-1 px-3 rounded-full animate-[fade-up_0.35s_ease-out_0.1s_both]">
                        {t(pillarConfigs[activeIdx].statKey)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </foreignObject>

            {/* Symmetrical Corner Nodes */}
            {pillarConfigs.map((pillar, idx) => {
              const isActive = activeIdx === idx;
              const themeColors = colorMap[pillar.color];
              return (
                <foreignObject
                  key={t(pillar.titleKey)}
                  x={pillar.coords.x - 45}
                  y={pillar.coords.y - 45}
                  width={90}
                  height={90}
                  className="overflow-visible pointer-events-auto"
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center"
                    onMouseEnter={() => setActiveIdx(idx)}
                    onMouseLeave={() => setActiveIdx(null)}
                  >
                    {/* Ring pulsing aura */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${themeColors.gradient} opacity-0 pointer-events-none ${
                      isActive ? 'animate-pulse-ring' : ''
                    }`} />
                    
                    {/* Circle Node */}
                    <button
                      className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center border transition-all duration-500 cursor-pointer ${
                        isActive
                          ? `bg-deep-2 border-gold text-gold scale-110 shadow-[0_0_30px_${themeColors.glow}]`
                          : 'bg-forest/20 border-forest-light/25 text-ivory/60 hover:text-ivory hover:border-gold/30 hover:scale-105 shadow-lg'
                      }`}
                      aria-label={t(pillar.titleKey)}
                      suppressHydrationWarning
                    >
                      {pillar.icon}
                      <span className="text-[9px] font-bold uppercase tracking-wider mt-1 text-center truncate max-w-[72px]">
                        {t(pillar.titleKey).split(' ')[0]}
                      </span>
                    </button>
                  </div>
                </foreignObject>
              );
            })}

          </svg>
        </div>

        {/* ================= MOBILE ACCORDION NETWORK STACK ================= */}
        <div className="block md:hidden flex flex-col gap-4 w-full px-4 reveal" style={{ transitionDelay: '0.1s' }}>
          <p className="text-center text-xs text-ivory/40 mb-4">
            {t('mission.mobilePrompt')}
          </p>

          {pillarConfigs.map((pillar, idx) => {
            const isExpanded = mobileActiveIdx === idx;
            const themeColors = colorMap[pillar.color];
            return (
              <div
                key={t(pillar.titleKey)}
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'bg-deep-2 border-gold/30 shadow-[0_0_20px_rgba(212,168,67,0.05)]'
                    : 'bg-forest/10 border-forest-light/10 hover:border-forest-light/20'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setMobileActiveIdx(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-4 cursor-pointer"
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4">
                    {/* Animated Pulsing Icon */}
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${themeColors.gradient} opacity-0 ${
                        isExpanded ? 'animate-pulse-ring' : ''
                      }`} />
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center z-10 transition-colors ${
                        isExpanded
                          ? 'bg-gradient-to-br from-forest to-forest-light border-gold text-gold shadow-lg shadow-gold/5'
                          : 'bg-ivory/5 border-ivory/10 text-ivory/70'
                      }`}>
                        {pillar.icon}
                      </div>
                    </div>
                    {/* Title */}
                    <span className={`font-bold tracking-tight text-left transition-colors ${
                      isExpanded ? 'text-gold' : 'text-ivory'
                    }`}>
                      {t(pillar.titleKey)}
                    </span>
                  </div>
                  {/* Arrow Icon */}
                  <svg
                    className={`text-ivory/40 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-gold' : ''
                    }`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-ivory/5 bg-deep-2/40">
                    <p className="text-xs text-ivory/70 leading-relaxed mb-4">
                      {t(pillar.descKey)}
                    </p>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                      themeColors.text
                    } border-current bg-current/5`}>
                      {t(pillar.statKey)}
                    </span>
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
