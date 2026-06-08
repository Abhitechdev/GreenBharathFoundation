'use client';

import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-xl border border-ivory/10 bg-ivory/5 p-0.5" id="language-switcher">
      {languages.map((lang) => {
        const isActive = i18n.language?.startsWith(lang.code);
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-saffron to-saffron-dark text-white shadow-md shadow-saffron/20'
                : 'text-ivory/50 hover:text-ivory hover:bg-ivory/10'
            }`}
            aria-label={`Switch to ${lang.code === 'en' ? 'English' : 'Hindi'}`}
            suppressHydrationWarning
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
