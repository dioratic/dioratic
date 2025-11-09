'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Dioratic Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">Dioratic</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('nav.services')}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link href="/#services" className="hover:text-gray-900 transition-colors">{t('footer.services.ai')}</Link></li>
              <li><Link href="/#services" className="hover:text-gray-900 transition-colors">{t('footer.services.local')}</Link></li>
              <li><Link href="/#services" className="hover:text-gray-900 transition-colors">{t('footer.services.data')}</Link></li>
              <li><Link href="/#services" className="hover:text-gray-900 transition-colors">{t('footer.services.consulting')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('nav.contact')}</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <a 
                href="mailto:support@dioratic.com" 
                className="flex items-center space-x-2 hover:text-gray-900 transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@dioratic.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Dioratic. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

