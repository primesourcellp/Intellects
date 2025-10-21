// Central Theme Configuration based on Logo Colors
// This ensures consistency across all pages

export const theme = {
  // Primary Colors (Based on Logo)
  colors: {
    primary: {
      main: '#1E3A8A',        // Deep Blue (Navy)
      light: '#3B82F6',       // Bright Blue
      lighter: '#60A5FA',     // Sky Blue
      lightest: '#DBEAFE',    // Pale Blue
      dark: '#1E40AF',        // Darker Blue
    },
    secondary: {
      main: '#6366F1',        // Indigo
      light: '#818CF8',       // Light Indigo
      lighter: '#A5B4FC',     // Pale Indigo
      lightest: '#E0E7FF',    // Very Pale Indigo
    },
    accent: {
      main: '#0EA5E9',        // Cyan/Teal
      light: '#22D3EE',       // Light Cyan
      lighter: '#67E8F9',     // Pale Cyan
      lightest: '#CFFAFE',    // Very Pale Cyan
    },
    neutral: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      black: '#000000',
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    secondary: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
    accent: 'linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)',
    hero: 'linear-gradient(135deg, #1E3A8A 0%, #6366F1 50%, #0EA5E9 100%)',
    card: 'linear-gradient(145deg, #FFFFFF 0%, #F9FAFB 100%)',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 4px 6px -1px rgba(30, 58, 138, 0.1), 0 2px 4px -1px rgba(30, 58, 138, 0.06)',
    md: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)',
    lg: '0 20px 25px -5px rgba(30, 58, 138, 0.15), 0 10px 10px -5px rgba(30, 58, 138, 0.04)',
    xl: '0 25px 50px -12px rgba(30, 58, 138, 0.25)',
    glow: '0 0 20px rgba(30, 58, 138, 0.3)',
    glowAccent: '0 0 20px rgba(14, 165, 233, 0.4)',
  },

  // Typography
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Border Radius
  borderRadius: {
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Animation Variants (Framer Motion)
  animations: {
    fadeInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
  },
};

// Utility function to get color
export const getColor = (path) => {
  const keys = path.split('.');
  let value = theme.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

// Utility function to get rgba color
export const getRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default theme;

