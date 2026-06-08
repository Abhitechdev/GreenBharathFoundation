'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="section relative">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-forest/5 blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-forest-light tracking-[0.2em] uppercase mb-4">
            {t('contact.sectionLabel')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            {t('contact.heading')} <span className="text-gradient-forest">{t('contact.headingHighlight')}</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div className="reveal glass-strong rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ivory mb-2">{t('contact.successTitle')}</h3>
                <p className="text-ivory/50">{t('contact.successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-ivory/60 mb-2">
                    {t('contact.labelName')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300"
                    placeholder={t('contact.placeholderName')}
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-ivory/60 mb-2">
                    {t('contact.labelEmail')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300"
                    placeholder={t('contact.placeholderEmail')}
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-ivory/60 mb-2">
                    {t('contact.labelMessage')}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none"
                    placeholder={t('contact.placeholderMessage')}
                    suppressHydrationWarning
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center !py-3.5 cursor-pointer"
                  id="contact-submit-btn"
                  suppressHydrationWarning
                >
                  <span>{t('contact.submitBtn')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
