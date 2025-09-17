/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.forgenestservices.com.np",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/', {
      priority: 1.0,
      changefreq: 'daily'
    }),
    await config.transform(config, '/blogs', {
      priority: 0.9,
      changefreq: 'weekly'
    }),
    await config.transform(config, '/services', {
      priority: 0.8,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/about', {
      priority: 0.7,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/contact', {
      priority: 0.6,
      changefreq: 'yearly'
    }),
    // Blog posts (will be added dynamically)
    await config.transform(config, '/blogs/digital-transformation-guide', {
      priority: 0.8,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/blogs/web-development-trends-2024', {
      priority: 0.8,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/blogs/mobile-app-development-guide', {
      priority: 0.8,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/blogs/ui-ux-design-principles', {
      priority: 0.8,
      changefreq: 'monthly'
    }),
    await config.transform(config, '/blogs/cloud-migration-benefits', {
      priority: 0.8,
      changefreq: 'monthly'
    })
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/'
      }
    ],
    additionalSitemaps: [
      'https://www.forgenestservices.com.np/sitemap.xml',
    ],
  },
  trailingSlash: false,
  generateIndexSitemap: true,
};
