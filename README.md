# Paygneo React Application

This is a React-based conversion of the Paygneo fintech website, featuring modern payment processing and payroll solutions.

## Project Structure

```
src/
├── Components/
│   ├── NavigationComponent/
│   │   ├── Navigation.jsx          # Main navigation header
│   │   └── index.js
│   ├── PreloaderComponent/
│   │   └── Preloader.jsx           # Loading screen component
│   ├── SectionComponent/
│   │   ├── BannerSection.jsx       # Hero banner section
│   │   ├── ProductSection.jsx      # Products showcase
│   │   ├── PayoutServiceSection.jsx # Payout services
│   │   ├── SecurePrivateSection.jsx # Security section
│   │   ├── PayoutTextSection.jsx   # Payout text section
│   │   ├── PaymentWorkflowSection.jsx # Payment workflow
│   │   ├── PaymentsTextSection.jsx # Payments text section
│   │   ├── PoweringSection.jsx     # Powering section
│   │   ├── PaymentProcessSection.jsx # Payment process
│   │   ├── SupportSection.jsx      # Support section
│   │   ├── ReachOutSection.jsx     # Contact section
│   │   ├── Footer.jsx              # Footer component
│   │   └── index.js
│   └── SmallComponent/
│       ├── CustomButton.jsx        # Reusable button component
│       ├── CursorEffect.jsx        # Custom cursor effects
│       ├── BeamEffect.jsx          # Beam animation effects
│       ├── AudioPlayer.jsx         # Audio controls
│       └── index.js
├── App.jsx                         # Main application component
├── App.css                         # Application styles
├── main.jsx                       # Application entry point
└── index.css                      # Global styles
```

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Interactive Animations**: GSAP animations and Rive.js integrations
- **Video Backgrounds**: Multiple video sections with autoplay
- **Audio Integration**: Background music with controls
- **Carousel Components**: Owl Carousel for product showcases
- **Custom Effects**: Beam animations and cursor effects
- **Modern UI**: Clean, professional fintech design

## Dependencies

The application uses several external libraries and scripts:

- **Bootstrap**: For responsive layout and components
- **GSAP**: For advanced animations
- **Owl Carousel**: For carousel functionality
- **Rive.js**: For interactive animations
- **jQuery**: For DOM manipulation
- **Tilt.js**: For 3D tilt effects

## Assets

All assets are located in the `public/assets/` directory:

- **Images**: SVG icons, logos, and graphics
- **Videos**: Background videos and animations
- **Audio**: Sound effects and background music
- **CSS**: Styling files
- **JavaScript**: External scripts and libraries
- **Rive Files**: Interactive animation files

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Component Usage

### CustomButton
```jsx
import { CustomButton } from './Components/SmallComponent';

<CustomButton onClick={handleClick} className="custom-class">
  Button Text
</CustomButton>
```

### Navigation
```jsx
import { Navigation } from './Components/NavigationComponent';

<Navigation />
```

### Section Components
```jsx
import { BannerSection, ProductSection } from './Components/SectionComponent';

<BannerSection />
<ProductSection />
```

## Notes

- All original CSS classes and IDs are preserved for compatibility
- External scripts are loaded dynamically in the App component
- Video files are optimized for web delivery
- The application maintains the same visual design as the original HTML version

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software for Paygneo.
