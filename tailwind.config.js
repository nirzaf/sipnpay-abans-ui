/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                brand: {
                    black: '#000000',
                    white: '#ffffff',
                },
                // Industrial Dark Theme
                background: {
                    primary: '#0a0a0a',
                    secondary: '#1f1f1f',
                    card: '#1f1f1f',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#b3b3b3',
                },
                border: {
                    DEFAULT: '#333333',
                },
                accent: {
                    primary: '#ffffff',
                    secondary: '#b3b3b3',
                },
            },
        },
    },
    plugins: [],
};
