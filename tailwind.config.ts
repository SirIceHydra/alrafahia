import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
   theme: {
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 30s linear infinite',
        },
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               sm: "2rem",
               lg: "4rem",
               xl: "5rem",
               "2xl": "6rem",
            },
         },
         fontFamily: {
            // Font families - change these to update fonts site-wide
            heading: ["var(--font-lexendZetta)", "system-ui", "sans-serif"], // For ALL headings (H1-H6)
            body: ["var(--font-satoshi)", "system-ui", "sans-serif"], // For all body text and paragraphs
            display: ["var(--font-lexendZetta)", "system-ui", "sans-serif"], // For display text (also LexendZetta)
            // Aliases to match existing classnames in code
            satoshi: ["var(--font-satoshi)", "system-ui", "sans-serif"],
            integralCF: ["var(--font-integralCF)", "system-ui", "sans-serif"],
         },
         
         // Standardized Typography System
         fontSize: {
            // HEADINGS - All use heading font family
            h1: ["4rem", { lineHeight: "1.2", fontWeight: "400" }], // 48px - Main page titles
            "h1-sm": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }], // 36px - H1 mobile

            h2: ["2.5rem", { lineHeight: "1.3", fontWeight: "400" }], // 36px - Section headings
            "h2-sm": ["1.875rem", { lineHeight: "1.3", fontWeight: "700" }], // 30px - H2 mobile

            h3: ["1.875rem", { lineHeight: "1.4", fontWeight: "400" }], // 30px - Subsection headings
            "h3-sm": ["1.5rem", { lineHeight: "1.4", fontWeight: "700" }], // 24px - H3 mobile

            h4: ["1.5rem", { lineHeight: "1.5", fontWeight: "400" }], // 24px - Minor headings
            "h4-sm": ["1.25rem", { lineHeight: "1.5", fontWeight: "700" }], // 20px - H4 mobile

            h5: ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }], // 20px - Small headings
            "h5-sm": ["1.125rem", { lineHeight: "1.5", fontWeight: "600" }], // 18px - H5 mobile

            h6: ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px - Smallest headings
            "h6-sm": ["1rem", { lineHeight: "1.6", fontWeight: "600" }], // 16px - H6 mobile

            // PARAGRAPHS - All use body font family
            p: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 16px - Standard paragraphs
            "p-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 14px - Small paragraphs
            "p-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }], // 18px - Large paragraphs

            // SPECIAL TEXT SIZES
            small: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }], // 12px - Fine print, captions
            
            // DISPLAY TEXT - Large headings for hero sections
            display: ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }], // 72px - Large display headings
            "display-sm": ["3rem", { lineHeight: "1.1", fontWeight: "700" }], // 48px - Display mobile

            // HERO TEXT - Same as display but with different naming
            hero: ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }], // 72px - Hero titles
            "hero-sm": ["3rem", { lineHeight: "1.2", fontWeight: "700" }], // 48px - Hero mobile

            // LEGACY SUPPORT - keeping old sizes for backward compatibility
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1.2" }],
            "6xl": ["3.75rem", { lineHeight: "1.1" }],
            "7xl": ["4.5rem", { lineHeight: "1.1" }],
         },
         fontWeight: {
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
         },
         colors: {
            // Custom color palette
            primary: "white",
            secondary: "#2d2d39",
            tertiary: "#EDE8D0",
            support: "#856A00",
            
            // Existing colors
            dark: "black",
            light: "white",
            grey: {
               50: "#F2F0F1",
               100: "#F0F0F0",
            },
            discount: "rgb(255, 51, 51)", // Red
         },
         width: { productCard: "var(--productCard)" },
         height: { productCard: "var(--productCard)" },
         size: { productCard: "var(--productCard)" },

         borderRadius: {
            20: "20px",
         },
      },
   },
   plugins: [],
};
export default config;
