module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
