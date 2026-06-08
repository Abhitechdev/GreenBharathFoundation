'use client';

import { useEffect, useRef, useState } from 'react';

const socialLinks = [
  { label: 'X', href: 'https://x.com/GreenBharatOrg', name: 'X' },
  { label: 'In', href: 'https://www.linkedin.com/company/green-bharat-foundation', name: 'LinkedIn' },
  { label: 'Ig', href: 'https://www.instagram.com/greenbharatfoundation', name: 'Instagram' },
  { label: 'Yt', href: 'https://www.youtube.com/@GreenBharatFoundation', name: 'YouTube' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            Join the <span className="text-gradient-forest">Movement</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto">
            Whether you want to volunteer, partner, or simply learn more — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-2xl font-bold text-ivory mb-2">Message Sent!</h3>
                <p className="text-ivory/50">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-ivory/60 mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-ivory/60 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300"
                    placeholder="you@example.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-ivory/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none"
                    placeholder="How would you like to get involved?"
                    suppressHydrationWarning
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center !py-3.5 cursor-pointer"
                  id="contact-submit-btn"
                  suppressHydrationWarning
                >
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="reveal flex flex-col gap-6" style={{ transitionDelay: '0.15s' }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: 'Head Office',
                detail: 'Green Bharat Foundation\nC-14, Sector 6, Noida\nUttar Pradesh 201301',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                title: 'Email Us',
                detail: 'info@greenbharat.org\nvolunteer@greenbharat.org',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                title: 'Call Us',
                detail: '+91 120 456 7890\nMon–Sat, 9 AM – 6 PM IST',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 flex items-start gap-4 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center flex-shrink-0 text-gold">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-ivory mb-1">{item.title}</h4>
                  <p className="text-sm text-ivory/40 whitespace-pre-line leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-ivory mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-ivory/5 border border-ivory/10 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-pointer text-sm font-bold"
                    id={`social-${link.label.toLowerCase()}`}
                    aria-label={`Open Green Bharat Foundation on ${link.name}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
