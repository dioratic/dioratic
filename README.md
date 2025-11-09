# Dioratic - AI Consultancy Website

A modern, bilingual (Greek/English) website for Dioratic, an AI consultancy company that helps businesses implement AI in their workflows, deploy local models, and manage their data.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds with animated floating elements
- Smooth animations and transitions
- Responsive design that works on all devices
- Clean and professional UI

🌐 **Bilingual Support**
- Greek (default language)
- English
- Easy language toggle in navigation
- All content translated

🎯 **Key Pages**
- **Homepage**: Hero section, services showcase, about section, and call-to-action
- **Contact Page**: Email contact with strong call-to-action (support@dioratic.com)

📦 **Services Highlighted**
- AI Workflow Integration
- Local AI Models
- Data Cleaning & Organization
- AI Consulting Services

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (with Greek character support)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository (if not already cloned)
```bash
git clone <repository-url>
cd dioratic
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dioratic/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar with language toggle
│   └── Footer.tsx          # Footer component
├── contexts/
│   └── LanguageContext.tsx # Language management and translations
├── public/                 # Static assets
└── package.json
```

## Features Breakdown

### Language Toggle
- Click the language button in the navigation to switch between Greek and English
- All content updates automatically
- Default language is Greek

### Homepage Sections
1. **Hero Section**: Eye-catching introduction with animated background
2. **Services**: Four main services with icons and descriptions
3. **About**: Why choose Dioratic (Expertise, Custom Solutions, Support)
4. **CTA**: Strong call-to-action to contact

### Contact Page
- Prominent email display: support@dioratic.com
- Quick actions: Send email button and Copy email button
- Benefits of contacting Dioratic
- Response time guarantee (< 24 hours)
- Strong final CTA section

## Customization

### Updating Translations
Edit the translations object in `contexts/LanguageContext.tsx`:

```typescript
const translations = {
  el: { /* Greek translations */ },
  en: { /* English translations */ }
};
```

### Changing Colors
The website uses a gradient color scheme with blue, purple, and pink. Update colors in:
- Tailwind classes in components
- Global styles in `app/globals.css`

### Adding New Pages
1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Use the `useLanguage()` hook for translations

## Deployment

This Next.js app can be deployed to:

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Or any platform supporting Next.js

## Contact

For any questions about this website, reach out to:
- Email: support@dioratic.com

## License

All rights reserved © 2025 Dioratic

---

Built with ❤️ using Next.js and Tailwind CSS
