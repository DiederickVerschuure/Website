/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            spacing: {
                'column-1': 'clamp(1.5rem, -1.404rem + 11.17vw, 12rem)',
                'column-2': 'clamp(1.5rem, -3.102rem + 20.918vw, 22rem)',
            },
            colors: {
                primary: {
                    50: '#E6EFF9',
                    100: '#D1E1F5',
                    200: '#A8C6EB',
                    300: '#7EABE2',
                    400: '#5590D8',
                    500: '#2E75CC',
                    600: '#255DA2',
                    700: '#1B4579',
                    800: '#122D4F',
                    900: '#081625',
                    950: '#040A11',
                },
                neutral: {
                    50: '#EDECEE',
                    100: '#DFDFE2',
                    200: '#C5C5C9',
                    300: '#AAABB1',
                    400: '#909198',
                    500: '#76777F',
                    600: '#5D5F65',
                    700: '#45464A',
                    800: '#2C2D30',
                    900: '#141415',
                    950: '#070808',
                },
            },
        },
    },
    plugins: [],
};
