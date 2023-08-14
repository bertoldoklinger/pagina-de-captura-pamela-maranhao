/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/heroMobileBackground.jpg')",
        'hero-desktop': "url('/heroDesktopBackground.jpg')",
        'learning-mobile': "url('/learningMobileBackground.jpg')",
        'learning-desktop': "url('/learningDesktopBackground.jpg')",
        'about-mobile': "url('/aboutMobileBackground.jpg')",
        'about-desktop': "url('/aboutDesktopBackground.jpg')",
        'contact-desktop': "url('/contactDesktopBackground.jpg')",
        'contact-mobile': "url('/contactMobileBackground.jpg')",
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
        'contact-bg': '#E5CAB7'
      },
      fontSize: {
        'hero-title': '',
        'hero-subtitle': '1.5rem',
        'hero-paragraph': '8px',
        'hero-button': '1.125rem',
      },
      screens: {
        'celularP': '320px',
        'celularM': '375px',
        'iphone12pro': '390px',
        'iphonexr': '414px',
        'celularG': '425px',
        'buttonwidth': '546px',
        'tablet': '768px',
        'redminote8': '1080px',
        'iphone14promax': '1290px',
        'notebook': '1366px',
        'opera': '1850px',
        'fullhd': '1920px'
      },

    },
    plugins: [],
  }
}