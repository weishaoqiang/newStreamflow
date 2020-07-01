module.exports = {
  plugins: [
    require('autoprefixer')({
      Browserslist: [
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6',
        'ie > 8'
      ]
    }),
  ]
}