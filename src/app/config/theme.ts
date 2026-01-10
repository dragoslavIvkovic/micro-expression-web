/**
 * Theme Configuration
 * 
 * ⚡ TEMPLATE: Update these colors and typography to match your brand
 * All colors are defined here for easy customization
 */

export const COLORS = {
    // ===== PRIMARY PALETTE =====
    primary: {
        main: '#1a1a4e',       // Main brand color (dark navy from logo)
        dark: '#12123a',       // Darker shade for gradients/hover
        light: '#2a2a6e',      // Lighter shade
    },
    
    // ===== SECONDARY/ACCENT =====
    accent: {
        main: '#a8b4f0',       // Lavender accent from logo
        highlight: '#c4ccf8',  // Lighter lavender
    },
    
    // ===== BACKGROUNDS =====
    background: {
        primary: '#f5f6fa',    // Main page background (light gray from logo)
        secondary: '#FFFFFF',   // White sections
        dark: '#1a1a4e',       // Dark sections (footer, nav)
    },
    
    // ===== TEXT COLORS =====
    text: {
        primary: '#1a1a4e',     // Main text (matches primary)
        secondary: '#4a5568',   // Muted text
        light: '#FFFFFF',       // Text on dark backgrounds
        muted: '#9ca3af',       // Gray text (gray-400 equivalent)
    },
    
    // ===== BORDERS =====
    border: {
        light: 'rgba(255, 255, 255, 0.2)',  // white/20
        lighter: 'rgba(255, 255, 255, 0.1)', // white/10
    },
    
    // ===== STATUS COLORS =====
    status: {
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
    }
} as const;

/**
 * Typography Configuration
 */
export const TYPOGRAPHY = {
    // Google Font name
    fontFamily: 'Poppins',
    
    // Font weights used
    fontWeights: ['400', '500', '600', '700'],
    
    // Font subsets
    subsets: ['latin'],
} as const;

/**
 * Tailwind CSS class mappings for easy reference
 * Use these in your components
 */
export const THEME_CLASSES = {
    // Backgrounds
    bgPrimary: 'bg-[#f5f6fa]',
    bgDark: 'bg-[#1a1a4e]',
    bgDarkGradient: 'bg-linear-to-b from-[#1a1a4e] to-[#12123a]',
    bgLightGradient: 'bg-linear-to-br from-[#f5f6fa] to-white',
    
    // Text
    textDark: 'text-[#1a1a4e]',
    textLight: 'text-white',
    textMuted: 'text-gray-300',
    
    // Hover states
    hoverAccent: 'hover:text-[#a8b4f0]',
    hoverBg: 'hover:bg-white/10',
    
    // Borders
    borderLight: 'border-white/20',
    borderLighter: 'border-white/10',
} as const;
