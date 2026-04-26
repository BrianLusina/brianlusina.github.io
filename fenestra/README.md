# Fenestra - Creative Portfolio Landing Page

A beautiful, organic landing page built with React, Tailwind CSS, and modern web design principles.

## 🎨 Design Philosophy: Organic Modernism

Fenestra combines natural, flowing aesthetics with contemporary web design:

- **Color Palette**: Deep forest green, warm taupe, soft cream
- **Typography**: Serif headlines (Playfair Display) + refined sans-serif body (Lato)
- **Layout**: Organic curves, asymmetric composition, generous whitespace
- **Interactions**: Smooth transitions, gentle hover effects, subtle animations
- **Aesthetic**: Cultivated minimalism with botanical accents

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/pnpm
- Git

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
fenestra/
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies
├── src/
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # React entry point
│   ├── index.css       # Global styles and design tokens
│   ├── pages/
│   │   ├── Home.tsx    # Landing page with all sections
│   │   └── NotFound.tsx # 404 page
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utility functions
└── public/             # Static assets (favicon, robots.txt)
```

## 🎯 Features

- **Hero Section**: Full-height hero with organic background and navigation
- **Work Portfolio**: Grid showcase of creative projects
- **About Section**: Brand story and mission
- **Thoughts/Blog**: Article showcase section
- **Contact Section**: Call-to-action for inquiries
- **Footer**: Navigation and social links
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Smooth Animations**: Scroll-triggered reveals and interactive effects

## 🛠️ Tech Stack

- **React 19**: Modern UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Wouter**: Lightweight client-side routing
- **Vite**: Fast build tool and dev server

## 🎨 Design Tokens

All design decisions are centralized in `src/index.css`:

```css
/* Color System */
--primary: oklch(0.3 0.08 155);        /* Deep forest green */
--secondary: oklch(0.55 0.04 45);      /* Warm taupe */
--accent: oklch(0.85 0.02 155);        /* Muted sage */
--background: oklch(1 0 0);            /* White */
--foreground: oklch(0.18 0.02 45);     /* Deep charcoal */

/* Typography */
Display: Playfair Display (serif)
Body: Lato (sans-serif)
```

## 🔧 Customization

### Colors
Edit the CSS variables in `src/index.css` under `:root` section:

```css
:root {
  --primary: oklch(0.3 0.08 155);
  --secondary: oklch(0.55 0.04 45);
  /* ... more colors ... */
}
```

### Typography
Font imports are in `src/index.css`. Change font families in the `@layer base` section.

### Content
Edit sections in `src/pages/Home.tsx`:
- Update text, images, and links
- Modify grid layouts and component structure
- Add new sections by copying existing ones

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Key Components

### Navigation Buttons
```tsx
<a href="#section" className="btn-organic">
  🌿 LABEL
</a>
```

### Section Dividers
```tsx
<div className="divider-organic">
  <img src="divider-image.webp" alt="divider" />
</div>
```

### Animations
- `fade-in-up`: Section reveal animation
- `float`: Leaf accent floating animation
- `bounce`: Scroll indicator animation

## 🚢 Deployment

### Build for Production
```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Manus
The project is configured for deployment on Manus hosting platform.

## 📝 License

MIT License - Feel free to use this template for your own projects.

## 🤝 Contributing

To add new sections or features:

1. Create a new component in `src/components/`
2. Import and use in `src/pages/Home.tsx`
3. Follow the existing design patterns and styling conventions
4. Test responsive behavior on mobile and desktop

## 📧 Support

For questions or issues, please reach out through the contact section on the website.

---

Built with ❤️ using React, Tailwind CSS, and a passion for organic design.
