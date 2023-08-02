/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/src/assets/heroMobileBackground.jpg')",
        'hero-desktop': "url('src/assets/heroDesktopBackground.jpg')",
        'learning-mobile': "url('/src/assets/learningMobileBackground.jpg')",
        'learning-desktop': "url('src/assets/learningDesktopBackground.jpg')",
        'about-mobile': "url('/src/assets/aboutMobileBackground.jpg')",
        'about-desktop': "url('src/assets/aboutDesktopBackground.jpg')",
      },
      fontFamily: {
        rachelya: ['rachelya'],
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}