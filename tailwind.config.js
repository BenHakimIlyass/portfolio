module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './kit/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1180px',
      xl: '1440px',
    },
    colors: {
      slate: {
        100: '#F8FBFC',
        200: '#E1EBF0',
        300: '#C0D6DF',
        400: '#9DBFCD',
        500: '#7BA9BC',
      },
      grey: {
        100: '#809FAD',
        200: '#628898',
        300: '#4F6D7A',
        400: '#3A505A',
        500: '#26353B',
      },
      indigo: {
        100: '#8BA5CB',
        200: '#688ABB',
        300: '#4A6FA5',
        400: '#3A5882',
        500: '#2B405F',
      },
      sapphire: {
        100: '#289DDC',
        200: '#1D7FB4',
        300: '#166088',
        400: '#0F415C',
        500: '#082230',
      },
      red: {
        100: '#D68589',
        200: '#C95D63',
        300: '#B83D44',
        400: '#913036',
        500: '#6B2428',
      },
      orange: {
        100: '#F2A164',
        200: '#EE8434',
        300: '#DD6A13',
        400: '#AE530F',
        500: '#7F3D0B',
      },
    },
    maxWidth: {
      md: 1180,
    },
    fontFamily: {
      freight_text: ['Freight Text'],
      montserrat: ['Montserrat'],
      open_sans: ['Open Sans'],
      playfair_display: ['Playfair Display'],
    },
    fontSize: {
      heading1: '32px',
      heading2: '26px',
      heading3: '20px',
      heading4: '18px',
      heading5: '14px',
      heading6: '16px',
      paragraph: '16px',
      small: '14px',
    },
    fontWeight: {
      regular: 400,
      semibold: 500,
      bold: 700
    },
    extend: {
      spacing: {
        '0':'0px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
        '18': '18px',
        '30': '30px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
        '100': '100px',
        '140': '140px',
      },
      borderRadius: {
        'xl': '84px',
      },
    },
  },
  plugins: [],
}