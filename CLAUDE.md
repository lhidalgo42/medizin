# Medizin - Medical Procedures Mobile App

## Overview
Medizin is a React Native mobile application built with Expo that provides medical procedures and protocols for healthcare professionals. The app includes interactive diagrams, calculators, and step-by-step procedures.

## Architecture

### Tech Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet with custom theme system
- **Internationalization**: i18n-js
- **State Management**: Zustand
- **Animations**: React Native Reanimated
- **Gestures**: React Native Gesture Handler
- **Graphics**: React Native SVG

### Project Structure
```
app/
├── components/          # Reusable UI components
│   ├── Card.tsx        # Standard card component
│   ├── BackButton.tsx  # Unified back button
│   ├── ProcedureLayout.tsx # Standard layout for procedures
│   ├── ThemeContext.tsx    # Theme management
│   └── FlowDiagram/    # Interactive diagram components
├── styles/             # Centralized styling
│   ├── theme.ts       # Theme definitions
│   └── commonStyles.ts # Common style utilities
├── procedures/         # Medical procedure screens
│   ├── bloodPressure/ # Blood pressure related procedures
│   ├── calculator/    # Medical calculators
│   ├── drugs/         # Drug administration guides
│   └── ...
├── data/              # Static data and configurations
└── config/            # App configuration files

src/
├── i18n/              # Internationalization
│   ├── translations/  # Translation files (en/es)
│   └── utils/         # i18n utilities
└── store/             # State management
```

## Key Features

### 1. Medical Procedures
- Blood pressure management (hypertensive crisis, hypotension)
- Drug calculations and administration
- Electrolyte disorders
- Glycemia management
- Bleeding protocols
- Transfusion procedures

### 2. Interactive Components
- **Flow Diagrams**: Interactive decision trees with zoom/pan
- **Calculators**: Medical calculation tools (BMI, BSA, HCO3 deficit)
- **Step-by-step Guides**: Detailed procedure instructions

### 3. Internationalization
- English and Spanish support
- Dynamic translation loading
- Fallback system for missing translations

### 4. Theme System
- Light and dark mode support
- Consistent color palette
- Centralized styling system

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI
- Expo Go app (for testing)

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for web
npm run build:web

# Lint code
npm run lint
```

### Development Guidelines

1. **Component Structure**: Use the standardized components from `app/components/`
2. **Styling**: Use the theme system and common styles
3. **Procedures**: Follow the `ProcedureLayout` pattern for consistency
4. **Translations**: Add translations in both English and Spanish
5. **Type Safety**: Use TypeScript strictly, avoid `any` types

### Code Standards
- Use ESLint and Prettier configurations
- Follow the established component patterns
- Maintain consistent file naming (camelCase for components)
- Use meaningful commit messages

## Testing

Currently, testing is done manually using Expo Go. Future improvements should include:
- Unit tests with Jest
- Component testing with React Native Testing Library
- E2E testing with Detox

## Deployment

### Web Deployment
```bash
npm run build:web
```

### Mobile App Store Deployment
Use Expo Application Services (EAS):
```bash
npx eas build
npx eas submit
```

### Docker Deployment
```bash
# Development
docker-compose up

# Production
docker-compose --profile production up
```

## Performance Considerations

1. **Lazy Loading**: Translations are loaded dynamically
2. **Component Reusability**: Centralized components reduce bundle size
3. **Image Optimization**: Use appropriate image formats and sizes
4. **Memory Management**: Proper cleanup of subscriptions and listeners

## Security

- No sensitive data is stored locally
- All medical data is static (no patient information)
- Follow React Native security best practices

## Contributing

1. Follow the established code patterns
2. Use the component library for consistency
3. Add translations for new features
4. Test on both iOS and Android
5. Update this documentation for significant changes

## Troubleshooting

### Common Issues
1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **Theme not updating**: Check ThemeProvider wrapping in _layout.tsx
3. **Translation missing**: Verify translation keys in i18n files
4. **Navigation issues**: Check expo-router file structure

### Useful Commands
```bash
# Clear Metro cache
npx expo start --clear

# Reset project
npx expo install --fix

# Check dependencies
npx expo doctor
```

## Future Enhancements

1. **Offline Support**: Cache translations and procedures
2. **Search Functionality**: Global search across procedures
3. **Favorites**: Save frequently used procedures
4. **User Settings**: Customizable app preferences
5. **Analytics**: Usage tracking (privacy-compliant)
6. **More Languages**: Additional language support
7. **Advanced Calculators**: More medical calculation tools
8. **Export Features**: PDF export of procedures

---

*This app is designed for educational purposes and should not replace professional medical judgment.*