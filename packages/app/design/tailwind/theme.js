// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-
  extend: {
    fontFamily: {
      'inter-normal': ['Inter-Regular'],
      'inter-medium': ['Inter-Medium'],
      'inter-semibold': ['Inter-SemiBold'],
      'inter-bold': ['Inter-Bold'],
      'inter-black': ['Inter-Black'],
    },
    colors: {
      primary: '#27AE60',
      light: '#FFFFFF',
      black: '#000000',
      lightText: '#838383',
    },
  },
}

module.exports = {
  theme,
}
