/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mirian-quispe.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: ['https://mirian-quispe.netlify.app/sitemap.xml']
  }
}
