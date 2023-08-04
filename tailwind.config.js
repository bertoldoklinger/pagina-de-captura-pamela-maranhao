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
        poppinsbold: ['poppinsbold', 'sans-serif']
      },
      colors: {
        'button-bg': '#FFC092',
        'p-text': '#FDC39C',
        'about-text': '#744127',
      },
      fontSize: {
        'hero-title': '',
        'hero-subtitle': '1.5rem',
        'hero-paragraph': '8px',
        'hero-button': '1.125rem',
      },
      screens: {
        'iphonexr': '414px',
        'iphone12pro': '390px',
        'iphonese': '375px',
        'pc': '1024px',
      },
    },
    plugins: [],
  }
}