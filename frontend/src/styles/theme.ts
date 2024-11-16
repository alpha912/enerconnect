export const fonts = {
  mono: ['Fira Code VF', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'].join(','),
  sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'].join(','),
};

export const colors = {
  primary: {
    50: '#e8f1fe',
    100: '#c5d9fc',
    200: '#9dc0fa',
    300: '#74a7f7',
    400: '#4b8ef5',
    500: '#1a73e8', // Primary brand color
    600: '#1557b0',
    700: '#0f3d7d',
    800: '#0a264b',
    900: '#041019',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

export const spacing = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  padding: {
    page: '1.5rem',
    section: '2rem',
  },
};

export const typography = {
  h1: {
    fontSize: '4xl',
    lineHeight: 'tight',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '2xl',
    lineHeight: 'tight',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 'xl',
    lineHeight: 'snug',
    fontWeight: 'semibold',
  },
  body: {
    fontSize: 'base',
    lineHeight: 'relaxed',
    fontWeight: 'normal',
  },
  small: {
    fontSize: 'sm',
    lineHeight: 'relaxed',
    fontWeight: 'normal',
  },
};

export const theme = {
  fonts,
  colors,
  spacing,
  typography,
} as const;

export type Theme = typeof theme;
