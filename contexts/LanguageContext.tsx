'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.services': 'Υπηρεσίες',
    'nav.about': 'Σχετικά',
    'nav.contact': 'Επικοινωνία',
    
    // Hero Section
    'hero.title': 'Εξελίξτε την επιχείρησή σας με Τεχνητή Νοημοσύνη',
    'hero.subtitle': 'Η Dioratic είναι ο αξιόπιστος συνεργάτης σας για την ενσωμάτωση λύσεων τεχνητής νοημοσύνης στις επιχειρησιακές σας διαδικασίες',
    'hero.tagline': 'Εξειδικευμένες λύσεις AI για την επιχείρησή σας',
    'hero.cta': 'Ξεκινήστε τώρα',
    'hero.cta.primary': 'Ξεκινήστε τώρα',
    'hero.cta.secondary': 'Δείτε τις υπηρεσίες',
    'hero.learn': 'Μάθετε περισσότερα',
    'hero.stats.clients': 'Πελάτες',
    'hero.stats.projects': 'Έργα ολοκληρώθηκαν',
    'hero.stats.satisfaction': 'Ικανοποίηση',
    
    // Services
    'services.title': 'Οι Υπηρεσίες μας',
    'services.subtitle': 'Προσαρμοσμένες λύσεις AI για την επιχείρησή σας',
    'services.viewall': 'Δείτε τες όλες',
    'services.pricing': 'Προσαρμοσμένες τιμές',
    'services.learn': 'Μάθετε περισσότερα',
    'services.ai.title': 'Ενσωμάτωση AI',
    'services.ai.desc': 'Αυτοματοποιήστε και βελτιστοποιήστε τις επιχειρησιακές σας διαδικασίες με προηγμένες λύσεις τεχνητής νοημοσύνης προσαρμοσμένες στις ανάγκες σας.',
    'services.local.title': 'Τοπικά Μοντέλα',
    'services.local.desc': 'Αναπτύξτε και διαχειριστείτε ιδιωτικά, on-premise μοντέλα AI για μέγιστη ασφάλεια και έλεγχο των δεδομένων σας.',
    'services.data.title': 'Καθαρισμός Δεδομένων',
    'services.data.desc': 'Μετατρέψτε τα ανοργάνωτα δεδομένα σας σε καθαρές, δομημένες πληροφορίες έτοιμες για ανάλυση και AI training.',
    'services.consulting.title': 'Συμβουλευτικές Υπηρεσίες',
    'services.consulting.desc': 'Στρατηγικές συμβουλές για να αξιοποιήσετε στο έπακρο τις δυνατότητες της τεχνητής νοημοσύνης στον κλάδο σας.',
    
    // About
    'about.title': 'Γιατί Dioratic;',
    'about.subtitle': 'Η εμπειρία και η καινοτομία συναντιούνται',
    'about.image': 'AI Λύσεις',
    'about.expertise.title': 'Τεχνογνωσία',
    'about.expertise.desc': 'Η ομάδα μας αποτελείται από έμπειρους data scientists και AI engineers με αποδεδειγμένη εμπειρία.',
    'about.custom.title': 'Προσαρμοσμένες Λύσεις',
    'about.custom.desc': 'Κάθε επιχείρηση είναι μοναδική. Δημιουργούμε λύσεις που ταιριάζουν ακριβώς στις ανάγκες σας.',
    'about.support.title': 'Συνεχής Υποστήριξη',
    'about.support.desc': 'Είμαστε στο πλευρό σας σε κάθε βήμα, από την αρχική ανάλυση μέχρι την πλήρη υλοποίηση και μετά.',
    
    // CTA Section
    'cta.title': 'Έτοιμοι να ξεκινήσετε;',
    'cta.subtitle': 'Ας συνεργαστούμε για να φέρουμε την επιχείρησή σας στο μέλλον',
    'cta.button': 'Επικοινωνήστε μαζί μας',
    
    // Contact Page
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.subtitle': 'Είμαστε εδώ να σας βοηθήσουμε να υλοποιήσετε τους στόχους σας με τη δύναμη της τεχνητής νοημοσύνης',
    'contact.email.title': 'Στείλτε μας Email',
    'contact.email.desc': 'Περιγράψτε το έργο σας και θα επικοινωνήσουμε μαζί σας σύντομα',
    'contact.email.cta': 'Στείλτε μας ένα μήνυμα στο',
    'contact.email.send': 'Αποστολή Email',
    'contact.email.copy': 'Αντιγραφή',
    'contact.email.copied': 'Αντιγράφηκε!',
    'contact.ready.title': 'Ξεκινήστε το ταξίδι σας στην AI',
    'contact.ready.desc': 'Είτε θέλετε να αυτοματοποιήσετε διαδικασίες, να αναλύσετε δεδομένα ή να αναπτύξετε custom AI λύσεις, η Dioratic είναι εδώ για να σας βοηθήσει.',
    'contact.ready.points.1': 'Δωρεάν αρχική διαβούλευση',
    'contact.ready.points.2': 'Προσαρμοσμένες λύσεις για την επιχείρησή σας',
    'contact.ready.points.3': 'Ταχεία απόκριση σε λιγότερο από 24 ώρες',
    'contact.ready.points.4': 'Διαφανής επικοινωνία καθ\' όλη τη διαδικασία',
    'contact.response': 'Χρόνος Απάντησης',
    'contact.solutions': 'Προσαρμοσμένες Λύσεις',
    'contact.cta.title': 'Έτοιμοι να ξεκινήσετε;',
    'contact.cta.subtitle': 'Επικοινωνήστε μαζί μας και ξεκινήστε το ταξίδι σας στην τεχνητή νοημοσύνη.',
    'contact.cta.button': 'Στείλτε μας Email',
    
    // Footer
    'footer.tagline': 'Φέρνοντας το μέλλον της AI στην επιχείρησή σας',
    'footer.rights': 'Με επιφύλαξη παντός δικαιώματος.',
    'footer.services.ai': 'Ενσωμάτωση AI',
    'footer.services.local': 'Τοπικά Μοντέλα',
    'footer.services.data': 'Καθαρισμός Δεδομένων',
    'footer.services.consulting': 'Συμβουλευτικές Υπηρεσίες',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Your Business with Artificial Intelligence',
    'hero.subtitle': 'Dioratic is your trusted partner for integrating AI solutions into your business workflows',
    'hero.tagline': 'Specialized AI solutions for your business',
    'hero.cta': 'Get Started',
    'hero.cta.primary': 'Start working',
    'hero.cta.secondary': 'View services',
    'hero.learn': 'Learn More',
    'hero.stats.clients': 'Clients served',
    'hero.stats.projects': 'Projects completed',
    'hero.stats.satisfaction': 'Client satisfaction',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Custom AI solutions for your business',
    'services.viewall': 'View all',
    'services.pricing': 'Custom pricing',
    'services.learn': 'Learn more',
    'services.ai.title': 'AI Workflow Integration',
    'services.ai.desc': 'Automate and optimize your business processes with advanced AI solutions tailored to your needs.',
    'services.local.title': 'Local AI Models',
    'services.local.desc': 'Deploy and manage private, on-premise AI models for maximum security and control of your data.',
    'services.data.title': 'Data Cleaning & Organization',
    'services.data.desc': 'Transform your unstructured data into clean, organized information ready for analysis and AI training.',
    'services.consulting.title': 'AI Consulting Services',
    'services.consulting.desc': 'Strategic advice to maximize the potential of artificial intelligence in your industry.',
    
    // About
    'about.title': 'Why Dioratic?',
    'about.subtitle': 'Where expertise meets innovation',
    'about.image': 'AI Solutions',
    'about.expertise.title': 'Expertise',
    'about.expertise.desc': 'Our team consists of experienced data scientists and AI engineers with proven track records.',
    'about.custom.title': 'Custom Solutions',
    'about.custom.desc': 'Every business is unique. We create solutions that fit your exact needs.',
    'about.support.title': 'Continuous Support',
    'about.support.desc': 'We\'re with you every step of the way, from initial analysis to full implementation and beyond.',
    
    // CTA Section
    'cta.title': 'Ready to get started?',
    'cta.subtitle': 'Let\'s work together to bring your business into the future',
    'cta.button': 'Contact Us',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re here to help you achieve your goals with the power of artificial intelligence',
    'contact.email.title': 'Send us an Email',
    'contact.email.desc': 'Describe your project and we\'ll get back to you shortly',
    'contact.email.cta': 'Send us a message at',
    'contact.email.send': 'Send Email',
    'contact.email.copy': 'Copy',
    'contact.email.copied': 'Copied!',
    'contact.ready.title': 'Start Your AI Journey',
    'contact.ready.desc': 'Whether you want to automate processes, analyze data, or develop custom AI solutions, Dioratic is here to help.',
    'contact.ready.points.1': 'Free initial consultation',
    'contact.ready.points.2': 'Custom solutions for your business',
    'contact.ready.points.3': 'Fast response in less than 24 hours',
    'contact.ready.points.4': 'Transparent communication throughout the process',
    'contact.response': 'Response Time',
    'contact.solutions': 'Custom Solutions',
    'contact.cta.title': 'Ready to get started?',
    'contact.cta.subtitle': 'Contact us now and start your artificial intelligence journey.',
    'contact.cta.button': 'Send us an Email',
    
    // Footer
    'footer.tagline': 'Bringing the future of AI to your business',
    'footer.rights': 'All rights reserved.',
    'footer.services.ai': 'AI Workflow Integration',
    'footer.services.local': 'Local AI Models',
    'footer.services.data': 'Data Cleaning',
    'footer.services.consulting': 'AI Consulting',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('el');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'el' ? 'en' : 'el');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['el']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

