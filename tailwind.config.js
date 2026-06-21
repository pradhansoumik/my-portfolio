module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['var(--font-heading)', 'sans-serif'],
                body: ['var(--font-body)', 'sans-serif'],
            },
            colors: {
                sunset: {
                    light: '#FFB347',
                    DEFAULT: '#FF5E62',
                    dark: '#2C3E50'
                }
            }
        }
    },
    plugins: []
}
