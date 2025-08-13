# Business Landing Page

A modern and versatile React business landing page template built with Vite.

## Project Type

**Business Landing Page / Multipurpose Template** - A comprehensive template featuring multiple demo layouts for different business types including startups, corporate, personal, portfolio, and e-commerce presentations.

## Key Features

- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Multiple Demo Layouts** - Over 15+ different demo variations including business, startup, portfolio, blog, e-commerce, and more
- **Modern UI Components** - Clean and professional components with smooth animations
- **Interactive Elements** - Carousels, sliders, modal videos, and dynamic content sections
- **Blog Integration** - Complete blog system with multiple layouts and post types
- **Portfolio Showcase** - Various portfolio grid and masonry layouts
- **E-commerce Ready** - Shop pages with product grids and checkout functionality

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 5.x
- **Styling**: SASS/SCSS + Bootstrap 5
- **UI Components**: React Bootstrap
- **Routing**: React Router Dom v6
- **Animations**: React Type Animation, React Parallax, React Responsive Carousel
- **Icons**: Material Design Icons, React Icons
- **Sliders**: React Slick, Tiny Slider React
- **Integrations**: Supabase (configured for future use)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation components
│   ├── footer/         # Footer variants
│   ├── blog/           # Blog-related components
│   ├── pricing/        # Pricing table components
│   └── client/         # Client/testimonial components
├── pages/              # Page components
│   ├── index/          # Demo home pages
│   ├── blog/           # Blog pages
│   ├── portfolio/      # Portfolio pages
│   ├── shop/           # E-commerce pages
│   └── spcial/         # Special pages (404, maintenance, etc.)
├── assets/             # Static assets
│   ├── images/         # Image assets
│   ├── scss/           # SASS stylesheets
│   ├── css/            # CSS files
│   └── icons/          # Icon utilities
├── data/               # Data files and mock content
├── integrations/       # Third-party integrations
│   └── supabase/       # Supabase configuration
└── App.jsx             # Main application component
```

## Page Functionality

- **Home (/)**: Main landing page with multiple demo variations
- **Business Pages**: Corporate, startup, marketing, and finance focused layouts
- **Personal Pages**: Portfolio, freelancer, and personal blog layouts
- **E-commerce**: Product grids, shop details, cart, and checkout
- **Blog System**: Multiple blog layouts (grid, masonry, list) with post details
- **Portfolio**: Various portfolio presentations with project showcases
- **Special Pages**: Coming soon, maintenance, 404 error pages
- **Utility Pages**: About, services, pricing, team, contact, and FAQ pages

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Demo Variations

The template includes numerous demo layouts:
- **Business**: Corporate and startup focused designs
- **Portfolio**: Creative and professional portfolio layouts  
- **Blog**: Personal and corporate blog designs
- **E-commerce**: Fashion and product showcase layouts
- **Specialty**: Restaurant, cafe, charity, and event layouts
- **Technology**: Crypto, SaaS, and application landing pages

## Customization

The template uses SASS for styling with easily customizable variables in `src/assets/scss/_variables.scss`. Colors, fonts, and spacing can be modified through these variables.

## Supabase Integration

Basic Supabase configuration is included in `src/integrations/supabase/` for future database and authentication needs. The configuration uses environment variables for API keys and URLs.

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Performance

The template is optimized for performance with:
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size with tree shaking
- Efficient CSS delivery