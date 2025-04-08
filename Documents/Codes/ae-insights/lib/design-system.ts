// Design tokens for the AE Insights application
// These values can be referenced throughout the application

export const designTokens = {
  // Color palette
  colors: {
    // Primary brand colors
    primary: {
      50: "hsl(230, 100%, 97%)",
      100: "hsl(230, 95%, 94%)",
      200: "hsl(230, 90%, 88%)",
      300: "hsl(230, 85%, 80%)",
      400: "hsl(230, 80%, 70%)",
      500: "hsl(230, 75%, 60%)",
      600: "hsl(230, 70%, 50%)",
      700: "hsl(230, 65%, 40%)",
      800: "hsl(230, 60%, 30%)",
      900: "hsl(230, 55%, 20%)",
      950: "hsl(230, 50%, 15%)",
    },
    // Neutral colors for text, backgrounds, etc.
    neutral: {
      50: "hsl(220, 20%, 98%)",
      100: "hsl(220, 15%, 95%)",
      200: "hsl(220, 15%, 91%)",
      300: "hsl(220, 10%, 85%)",
      400: "hsl(220, 10%, 70%)",
      500: "hsl(220, 10%, 50%)",
      600: "hsl(220, 10%, 40%)",
      700: "hsl(220, 15%, 30%)",
      800: "hsl(220, 15%, 20%)",
      900: "hsl(220, 20%, 10%)",
      950: "hsl(220, 25%, 5%)",
    },
    // Accent colors for highlights, alerts, etc.
    accent: {
      blue: "hsl(210, 100%, 50%)",
      purple: "hsl(260, 100%, 60%)",
      teal: "hsl(180, 100%, 40%)",
      green: "hsl(150, 80%, 40%)",
      yellow: "hsl(40, 100%, 50%)",
      red: "hsl(0, 100%, 60%)",
    },
    // Semantic colors
    semantic: {
      success: "hsl(150, 80%, 40%)",
      warning: "hsl(40, 100%, 50%)",
      error: "hsl(0, 100%, 60%)",
      info: "hsl(210, 100%, 50%)",
    },
    // Gradient presets
    gradients: {
      primaryGradient: "linear-gradient(135deg, hsl(230, 75%, 60%) 0%, hsl(260, 100%, 60%) 100%)",
      accentGradient: "linear-gradient(135deg, hsl(210, 100%, 50%) 0%, hsl(180, 100%, 40%) 100%)",
      subtleGradient: "linear-gradient(135deg, hsl(220, 20%, 98%) 0%, hsl(220, 15%, 95%) 100%)",
    },
  },

  // Typography
  typography: {
    // Font families
    fontFamily: {
      sans: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    // Font sizes (in rem)
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
    },
    // Font weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    // Line heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    // Letter spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  // Spacing
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
    // Soft shadows for cards and elements
    soft: "0 2px 10px rgba(0, 0, 0, 0.05)",
    "soft-lg": "0 4px 20px rgba(0, 0, 0, 0.08)",
    // Colored shadows
    "primary-sm": "0 2px 8px rgba(79, 70, 229, 0.15)",
    "primary-md": "0 4px 12px rgba(79, 70, 229, 0.2)",
  },

  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  // Transitions
  transitions: {
    DEFAULT: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "100ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "150ms cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "150ms cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Z-index
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
    // Specific z-index values for common components
    header: "100",
    modal: "200",
    tooltip: "300",
    toast: "400",
  },
}

// Component-specific design tokens
export const componentTokens = {
  // Card design tokens
  card: {
    padding: {
      sm: designTokens.spacing[4],
      md: designTokens.spacing[6],
      lg: designTokens.spacing[8],
    },
    borderRadius: designTokens.borderRadius.lg,
    shadow: designTokens.shadows.soft,
    hoverShadow: designTokens.shadows["soft-lg"],
    border: `1px solid ${designTokens.colors.neutral[200]}`,
    background: "white",
    transition: designTokens.transitions.DEFAULT,
  },

  // Button design tokens
  button: {
    padding: {
      sm: `${designTokens.spacing[1.5]} ${designTokens.spacing[3]}`,
      md: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      lg: `${designTokens.spacing[2.5]} ${designTokens.spacing[5]}`,
    },
    borderRadius: designTokens.borderRadius.md,
    fontSize: {
      sm: designTokens.typography.fontSize.sm,
      md: designTokens.typography.fontSize.base,
      lg: designTokens.typography.fontSize.lg,
    },
    fontWeight: designTokens.typography.fontWeight.medium,
    transition: designTokens.transitions.DEFAULT,
  },

  // Input design tokens
  input: {
    padding: {
      sm: `${designTokens.spacing[1.5]} ${designTokens.spacing[3]}`,
      md: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      lg: `${designTokens.spacing[2.5]} ${designTokens.spacing[5]}`,
    },
    borderRadius: designTokens.borderRadius.md,
    fontSize: {
      sm: designTokens.typography.fontSize.sm,
      md: designTokens.typography.fontSize.base,
      lg: designTokens.typography.fontSize.lg,
    },
    border: `1px solid ${designTokens.colors.neutral[300]}`,
    focusBorder: `1px solid ${designTokens.colors.primary[500]}`,
    focusRing: `0 0 0 2px ${designTokens.colors.primary[100]}`,
    transition: designTokens.transitions.DEFAULT,
  },
}

// Responsive breakpoints
export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

