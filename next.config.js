/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sobre',
        permanent: true
      }
    ]
  }
}
