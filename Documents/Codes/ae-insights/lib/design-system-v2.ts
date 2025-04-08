// Design System V2 for AE Insights
// A sophisticated, AI-tech inspired design system

export const designSystemV2 = {
  // Color palette - refined for AI-tech aesthetic
  colors: {
    // Primary brand colors - shifted to a more sophisticated purple
    primary: {
      50: "hsl(260, 100%, 98%)",
      100: "hsl(260, 95%, 95%)",
      200: "hsl(260, 90%, 90%)",
      300: "hsl(260, 85%, 80%)",
      400: "hsl(260, 80%, 70%)",
      500: "hsl(260, 75%, 60%)",
      600: "hsl(260, 70%, 50%)",
      700: "hsl(260, 65%, 40%)",
      800: "hsl(260, 60%, 30%)",
      900: "hsl(260, 55%, 20%)",
      950: "hsl(260, 50%, 15%)",
    },
    // Neutral colors - cooler tones for a tech feel
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
    // Accent colors - more vibrant for data visualization
    accent: {
      blue: "hsl(210, 100%, 60%)",
      purple: "hsl(270, 100%, 65%)",
      teal: "hsl(180, 100%, 45%)",
      green: "hsl(150, 80%, 45%)",
      yellow: "hsl(40, 100%, 55%)",
      red: "hsl(0, 100%, 65%)",
    },
    // Semantic colors - enhanced for better contrast
    semantic: {
      success: "hsl(150, 80%, 45%)",
      warning: "hsl(40, 100%, 55%)",
      error: "hsl(0, 100%, 65%)",
      info: "hsl(210, 100%, 60%)",
    },
    // Gradient presets - more sophisticated gradients
    gradients: {
      primaryGradient: "linear-gradient(135deg, hsl(260, 75%, 60%) 0%, hsl(280, 100%, 65%) 100%)",
      accentGradient: "linear-gradient(135deg, hsl(210, 100%, 60%) 0%, hsl(180, 100%, 45%) 100%)",
      subtleGradient: "linear-gradient(135deg, hsl(220, 20%, 98%) 0%, hsl(220, 15%, 95%) 100%)",
      glassGradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
    },
  },

  // Typography - refined for better readability and hierarchy
  typography: {
    // Font families
    fontFamily: {
      sans: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      display:
        'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    // Font sizes (in rem) - more precise scale
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
    // Font weights - more options for finer control
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    // Line heights - refined for better readability
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    // Letter spacing - refined for better readability
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    // Heading styles - consistent heading structure
    headings: {
      h1: {
        fontSize: "2.25rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.025em",
      },
      h2: {
        fontSize: "1.875rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.025em",
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.025em",
      },
      h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: "-0.015em",
      },
      h5: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: "-0.015em",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
      },
    },
  },

  // Spacing - refined for better rhythm and consistency
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem", // 2px
    1: "0.25rem", // 4px
    1.5: "0.375rem", // 6px
    2: "0.5rem", // 8px
    2.5: "0.625rem", // 10px
    3: "0.75rem", // 12px
    3.5: "0.875rem", // 14px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    7: "1.75rem", // 28px
    8: "2rem", // 32px
    9: "2.25rem", // 36px
    10: "2.5rem", // 40px
    11: "2.75rem", // 44px
    12: "3rem", // 48px
    14: "3.5rem", // 56px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    28: "7rem", // 112px
    32: "8rem", // 128px
    36: "9rem", // 144px
    40: "10rem", // 160px
    44: "11rem", // 176px
    48: "12rem", // 192px
    52: "13rem", // 208px
    56: "14rem", // 224px
    60: "15rem", // 240px
    64: "16rem", // 256px
    72: "18rem", // 288px
    80: "20rem", // 320px
    96: "24rem", // 384px
  },

  // Shadows - refined for subtle depth
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
    none: "none",
    // Soft shadows for cards and elements
    soft: "0 2px 10px rgba(0, 0, 0, 0.03)",
    "soft-lg": "0 4px 20px rgba(0, 0, 0, 0.05)",
    // Colored shadows
    "primary-sm": "0 2px 8px rgba(147, 51, 234, 0.15)",
    "primary-md": "0 4px 12px rgba(147, 51, 234, 0.2)",
    // Glass effect shadows
    glass: "0 4px 16px rgba(0, 0, 0, 0.03)",
  },

  // Border radius - refined for modern look
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    DEFAULT: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Transitions - refined for smoother animations
  transitions: {
    DEFAULT: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "100ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "150ms cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "150ms cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // Z-index - refined for better stacking context
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
    dropdown: "500",
  },

  // Grid system - refined for better layout
  grid: {
    columns: 12,
    gutter: "2rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // Breakpoints - refined for better responsive design
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
}

// Component-specific design tokens
export const componentTokensV2 = {
  // Card design tokens - refined for better depth and hierarchy
  card: {
    padding: {
      sm: designSystemV2.spacing[4],
      md: designSystemV2.spacing[6],
      lg: designSystemV2.spacing[8],
    },
    borderRadius: designSystemV2.borderRadius["2xl"],
    shadow: designSystemV2.shadows.soft,
    hoverShadow: designSystemV2.shadows["soft-lg"],
    border: `1px solid ${designSystemV2.colors.neutral[200]}`,
    background: "white",
    transition: designSystemV2.transitions.DEFAULT,
    // Glass effect
    glass: {
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(8px)",
      border: `1px solid ${designSystemV2.colors.neutral[200]}`,
    },
  },

  // Button design tokens - refined for better interaction
  button: {
    padding: {
      sm: `${designSystemV2.spacing[1.5]} ${designSystemV2.spacing[3]}`,
      md: `${designSystemV2.spacing[2]} ${designSystemV2.spacing[4]}`,
      lg: `${designSystemV2.spacing[2.5]} ${designSystemV2.spacing[5]}`,
    },
    borderRadius: designSystemV2.borderRadius.lg,
    fontSize: {
      sm: designSystemV2.typography.fontSize.sm,
      md: designSystemV2.typography.fontSize.base,
      lg: designSystemV2.typography.fontSize.lg,
    },
    fontWeight: designSystemV2.typography.fontWeight.medium,
    transition: designSystemV2.transitions.DEFAULT,
    // Hover effect
    hover: {
      transform: "translateY(-1px)",
      shadow: designSystemV2.shadows["primary-md"],
    },
    // Active effect
    active: {
      transform: "translateY(0)",
      shadow: designSystemV2.shadows["primary-sm"],
    },
  },

  // Input design tokens - refined for better interaction
  input: {
    padding: {
      sm: `${designSystemV2.spacing[1.5]} ${designSystemV2.spacing[3]}`,
      md: `${designSystemV2.spacing[2]} ${designSystemV2.spacing[4]}`,
      lg: `${designSystemV2.spacing[2.5]} ${designSystemV2.spacing[5]}`,
    },
    borderRadius: designSystemV2.borderRadius.lg,
    fontSize: {
      sm: designSystemV2.typography.fontSize.sm,
      md: designSystemV2.typography.fontSize.base,
      lg: designSystemV2.typography.fontSize.lg,
    },
    border: `1px solid ${designSystemV2.colors.neutral[300]}`,
    focusBorder: `1px solid ${designSystemV2.colors.primary[500]}`,
    focusRing: `0 0 0 2px ${designSystemV2.colors.primary[100]}`,
    transition: designSystemV2.transitions.DEFAULT,
    // Hover effect
    hover: {
      border: `1px solid ${designSystemV2.colors.neutral[400]}`,
    },
  },

  // Dashboard specific tokens
  dashboard: {
    // Card variants
    cards: {
      primary: {
        background: "white",
        border: `1px solid ${designSystemV2.colors.neutral[200]}`,
        shadow: designSystemV2.shadows.soft,
        borderRadius: designSystemV2.borderRadius["2xl"],
      },
      secondary: {
        background: designSystemV2.colors.neutral[50],
        border: `1px solid ${designSystemV2.colors.neutral[200]}`,
        shadow: "none",
        borderRadius: designSystemV2.borderRadius.xl,
      },
      accent: {
        background: designSystemV2.colors.primary[50],
        border: `1px solid ${designSystemV2.colors.primary[200]}`,
        shadow: designSystemV2.shadows["primary-sm"],
        borderRadius: designSystemV2.borderRadius["2xl"],
      },
      glass: {
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${designSystemV2.colors.neutral[200]}`,
        shadow: designSystemV2.shadows.glass,
        borderRadius: designSystemV2.borderRadius["2xl"],
      },
    },
    // Section spacing
    section: {
      spacing: designSystemV2.spacing[6],
      headerSpacing: designSystemV2.spacing[4],
      contentSpacing: designSystemV2.spacing[4],
    },
    // Data visualization
    dataViz: {
      colors: [
        designSystemV2.colors.primary[500],
        designSystemV2.colors.accent.blue,
        designSystemV2.colors.accent.teal,
        designSystemV2.colors.accent.green,
        designSystemV2.colors.accent.yellow,
        designSystemV2.colors.accent.purple,
      ],
      background: designSystemV2.colors.neutral[50],
      border: `1px solid ${designSystemV2.colors.neutral[200]}`,
      borderRadius: designSystemV2.borderRadius.lg,
      padding: designSystemV2.spacing[4],
    },
  },
}

