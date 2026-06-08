'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { labelKey: 'footer.aboutUs', href: '/mission' },
    { labelKey: 'footer.ourPrograms', href: '/programs' },
    { labelKey: 'footer.impactReport', href: '/impact' },
    { labelKey: 'footer.volunteer', href: '/contact' },
  ];

  const programLinks = [
    { labelKey: 'footer.vanMahotsav', href: '/programs' },
    { labelKey: 'footer.wildlifeGuardians', href: '/programs' },
    { labelKey: 'footer.greenSchools', href: '/programs' },
    { labelKey: 'footer.cleanRivers', href: '/programs' },
    { labelKey: 'footer.urbanForests', href: '/programs' },
  ];

  const legalLinks = [
    { labelKey: 'footer.privacyPolicy', href: 'mailto:info@greenbharat.org?subject=Privacy%20Policy' },
    { labelKey: 'footer.termsOfUse', href: 'mailto:info@greenbharat.org?subject=Terms%20of%20Use' },
    { labelKey: 'footer.financials', href: 'mailto:info@greenbharat.org?subject=Financial%20Report%20Request' },
  ];

  return (
    <footer className="relative border-t border-ivory/5" id="footer">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V8" />
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold font-[var(--font-outfit)] text-ivory">
                  {t('nav.brandGreen')} <span className="text-gradient-saffron">{t('nav.brandBharat')}</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-ivory/40 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              {t('footer.programs')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              {t('footer.stayUpdated')}
            </h4>
            <p className="text-sm text-ivory/40 mb-4">
              {t('footer.newsletterText')}
            </p>
            <form
              action="mailto:newsletter@greenbharat.org"
              method="post"
              encType="text/plain"
              className="flex gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-gold/30 transition-all duration-300"
                id="footer-email-input"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300 cursor-pointer"
                id="footer-subscribe-btn"
                aria-label="Subscribe to newsletter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mandala-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory/25">
          <span>{t('footer.copyright', { year: currentYear })}</span>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="hover:text-ivory/50 transition-colors cursor-pointer"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
