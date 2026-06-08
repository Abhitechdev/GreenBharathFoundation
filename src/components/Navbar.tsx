'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const navLinks = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.mission', href: '/mission' },
  { labelKey: 'nav.impact', href: '/impact' },
  { labelKey: 'nav.programs', href: '/programs' },
  { labelKey: 'nav.stories', href: '/stories' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export default function Navbar() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-2xl'
          : 'bg-transparent'
      }`}
      id="main-nav"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
              <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
            </svg>
          </div>
          <div>
            <span className="text-lg font-bold font-[var(--font-outfit)] tracking-tight text-ivory">
              {t('nav.brandGreen')} <span className="text-gradient-saffron">{t('nav.brandBharat')}</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold opacity-70">
              {t('nav.brandFoundation')}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-gold bg-gold/10'
                    : 'text-ivory/70 hover:text-ivory hover:bg-ivory/5'
                }`}
                id={`nav-${link.href === '/' ? 'home' : link.href.slice(1)}`}
                suppressHydrationWarning
              >
                {t(link.labelKey)}
              </Link>
            );
          })}
        </div>

        {/* CTA + Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="hidden sm:flex btn-primary !py-2 !px-5 !text-sm cursor-pointer"
            id="nav-donate-btn"
            suppressHydrationWarning
          >
            <span>{t('nav.donateNow')}</span>
          </Link>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-ivory hover:bg-ivory/10 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t('nav.toggleMenu')}
            id="mobile-menu-toggle"
            suppressHydrationWarning
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-gold bg-gold/10'
                    : 'text-ivory/70 hover:text-ivory hover:bg-ivory/5'
                }`}
                suppressHydrationWarning
              >
                {t(link.labelKey)}
              </Link>
            );
          })}
          <div className="flex justify-center mt-2 mb-2">
            <LanguageSwitcher />
          </div>
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary mt-2 justify-center cursor-pointer"
            suppressHydrationWarning
          >
            <span>{t('nav.donateNow')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
