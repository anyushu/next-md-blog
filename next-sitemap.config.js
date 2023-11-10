/** @type {import('next-sitemap').IConfig} */
const siteMapConfig = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true
}

module.exports = siteMapConfig
