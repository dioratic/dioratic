'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section - Clean Minimal Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        {/* Subtle background bubbles */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">50+</span>
              <span className="text-gray-600">{t('hero.stats.clients')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">50+</span>
              <span className="text-gray-600">{t('hero.stats.projects')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">100%</span>
              <span className="text-gray-600">{t('hero.stats.satisfaction')}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-sm text-gray-500 mb-12">
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('hero.cta.primary')}
            </Link>
            <Link 
              href="#services"
              className="px-8 py-3.5 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors duration-200"
            >
              {t('hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t('services.title')}
            </h2>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
              {t('services.viewall')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('services.ai.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {t('services.ai.desc')}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{t('services.pricing')}</span>
                <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {t('services.learn')}
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('services.local.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {t('services.local.desc')}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{t('services.pricing')}</span>
                <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {t('services.learn')}
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('services.data.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {t('services.data.desc')}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{t('services.pricing')}</span>
                <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {t('services.learn')}
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('services.consulting.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {t('services.consulting.desc')}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{t('services.pricing')}</span>
                <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  {t('services.learn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('about.expertise.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('about.expertise.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('about.custom.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('about.custom.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('about.support.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('about.support.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - GIF animation */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/dioratic.gif" 
                alt={t('about.image')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean minimal style with lighter blue */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
