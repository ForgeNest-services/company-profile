#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ensure both sitemap.xml and sitemap-0.xml have the same content
const publicDir = path.join(__dirname, 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const sitemap0Path = path.join(publicDir, 'sitemap-0.xml');

try {
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    fs.writeFileSync(sitemap0Path, sitemapContent);
    console.log('✅ Synchronized sitemap-0.xml with sitemap.xml');
  } else {
    console.log('⚠️  sitemap.xml not found');
  }
} catch (error) {
  console.error('❌ Error synchronizing sitemaps:', error.message);
}