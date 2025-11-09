'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = 'support@dioratic.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('contact.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Email Contact Card - Centered */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.email.title')}
              </h2>
              
              <p className="text-gray-600 mb-8">
                {t('contact.email.desc')}
              </p>

              {/* Email Display with Actions */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <a 
                  href={`mailto:${email}`}
                  className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors break-all"
                >
                  {email}
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleEmailClick}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('contact.email.send')}</span>
                </button>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-600">{t('contact.email.copied')}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>{t('contact.email.copy')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Why Contact Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">{t('contact.ready.title')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('contact.ready.desc')}</p>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{t(`contact.ready.points.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  &lt; 24h
                </div>
                <div className="text-gray-600 text-sm">
                  {t('contact.response')}
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  100%
                </div>
                <div className="text-gray-600 text-sm">
                  {t('contact.solutions')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('contact.cta.subtitle')}
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{t('contact.cta.button')}</span>
          </a>
        </div>
      </section>
    </div>
  );
}

