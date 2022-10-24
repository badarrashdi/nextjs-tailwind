
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        lgx: '1140px',
        xl: '1280px',
        mob: {'max': '767px'},
      },
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        body: ['Graphik', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '20px'],
        sm: ['12px', '18px'],
        smm: ['13px', '18px'],
        base: ['14px', '22px'],
        high: ['16px', '22px'],
        lead: ['20px', '24px'],
        md: ['22px', '28px'],
        lgx: ['24px', '28px'],
        lg: ['28px', '32px'],
        xl: ['28px', '32px'],
        xls: ['38px', '42px'],
        xxl: ['40px', '44px'],
      },
      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#361CC1',
        'theme-color-2': '#FE7A7B'
      }
    },
  },
  plugins: [],
}