// serves files from a relative path when building for production
// this is specifically configured to run from a flash drive
// if deploying for production from a server this will need to be changed
// see: https://cli.vuejs.org/config/#publicpath

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  assetsDir: 'config/assets'
}
