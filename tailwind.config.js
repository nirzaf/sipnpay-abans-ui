/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                // Global Brand Accents (consistent across both modes)
                brand: {
                    red: '#FF2A2A',      // Alert Red - 5-10% usage
                    grey: '#E5E7EB',     // Pastel Silver - 5-10% usage
                    black: '#000000',    // Pitch Black
                    white: '#FFFFFF',    // Pure White
                },

                // Light Mode Colors
                light: {
                    bg: {
                        main: '#FFFFFF',      // Pure White - page canvas
                        surface: '#FAFAFA',   // Off-White - cards/forms
                    },
                    text: {
                        primary: '#000000',   // Pitch Black - headings/body
                        secondary: '#4B5563', // Darker grey for readability
                    },
                    border: '#E5E7EB',        // Pastel Grey - structure
                },

                // Dark Mode Colors
                dark: {
                    bg: {
                        main: '#000000',      // Pitch Black - page canvas
                        surface: '#121212',   // Dark Grey - cards/modals
                    },
                    text: {
                        primary: '#FFFFFF',   // Pure White - headings
                        secondary: '#E5E7EB', // Pastel Grey - body/meta
                    },
                    border: '#333333',        // Darkened border
                },

                // Semantic theme colors (using CSS variables)
                theme: {
                    bg: {
                        main: 'var(--bg-main)',
                        surface: 'var(--bg-surface)',
                    },
                    text: {
                        primary: 'var(--text-primary)',
                        secondary: 'var(--text-secondary)',
                    },
                    border: 'var(--border-color)',
                    button: {
                        bg: 'var(--btn-bg)',
                        text: 'var(--btn-text)',
                    },
                },
            },
        },
    },
    plugins: [],
};
