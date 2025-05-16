/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // ✅ Add this line for 1920px
      },
    },
    extend: {
      screens: {
        '3xl': '1920px', // ✅ Add the new breakpoint
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
}
