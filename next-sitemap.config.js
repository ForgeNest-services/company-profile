/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.forgenestservices.com.np",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.8,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/static/*'],
  additionalPaths: async (config) => {
    // Define blog post slugs manually to avoid TypeScript import issues
    const blogSlugs = [
      'digital-transformation-guide',
      'web-development-trends-2024', 
      'mobile-app-development-guide',
      'ui-ux-design-principles',
      'cloud-migration-benefits',
      'top-5-it-services-nepal-2025',
      'professional-website-small-business-nepal',
      'digital-transformation-nepal-businesses',
      'top-10-website-performance-tips-nepal',
      'choose-right-it-partner-nepal'
    ];
    
    const staticPaths = [
      await config.transform(config, '/', {
        priority: 1.0,
        changefreq: 'daily',
        lastmod: new Date().toISOString()
      }),
      await config.transform(config, '/blogs', {
        priority: 0.9,
        changefreq: 'weekly',
        lastmod: new Date().toISOString()
      }),
      await config.transform(config, '/services', {
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: new Date().toISOString()
      }),
      await config.transform(config, '/about', {
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: new Date().toISOString()
      }),
      await config.transform(config, '/contact', {
        priority: 0.6,
        changefreq: 'yearly',
        lastmod: new Date().toISOString()
      })
    ];

    // Add all blog posts
    const blogPaths = await Promise.all(
      blogSlugs.map(async (slug) => 
        await config.transform(config, `/blogs/${slug}`, {
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: new Date().toISOString()
        })
      )
    );

    return [...staticPaths, ...blogPaths];
  },
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
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/'
      }
    ]
  },
  trailingSlash: false,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString()
      };
    }
    
    if (path === '/blogs') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString()
      };
    }
    
    if (path.startsWith('/blogs/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      };
    }
    
    if (path === '/services') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      };
    }
    
    if (path === '/about' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      };
    }
    
    // Default return for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    };
  }
};
