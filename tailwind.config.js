module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'xs': '719.9px', // tiny
      'sm': '1023.9px', // small
      'md': '1365.9px', // normal
      'lg': '1919.9px', // large
      'xl': '2499.9px', // big
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#9d6fff',
        500: '#2a69b2',
        900: '#2a13a6',
        '0.04': '#2a69b20a',
        '0.08': '#2a69b214',
        'hover': '#2a69b214',
        'focus': '#2a69b214',
        '0.12': '#2a69b21f',
        '0.2': '#2a69b233',
        'pressed': '#2a69b233',
      },
      warn: {
        100: '#fc5f52',
        500: '#c32929',
        900: '#8b0000',
      },
      accent: {
        100: '#7fc87c',
        500: '#4f974f',
        900: '#1c6824',
      },
      black: {
        500: '#000000',
        '0.04': '#0000000a',
        '0.08': '#00000014',
        'hover': '#00000014',
        'focus': '#00000014',
        '0.12': '#0000001f',
        '0.20': '#00000033',
        'pressed': '#00000033',
        '0.26': '#00000042',
      },
      white: '#ffffff',
      yellow: {
        100: '#ffff78',
        500: '#f7d046',
        900: '#c19f01',
      },
      dark: {
        100: '#f2f2f2',
        300: '#e2e2e2',
        500: '#a7a7a7',
        700: '#555555',
        900: '#212121',
      },
    },
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      width: {
        screenScrollCompensation: 'calc(100vw - 1rem - 1px)',
      },
      margin: {
        '0-auto': '0 auto',
      },
    },
  },
  plugins: [],
};
