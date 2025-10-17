# Blog Images Reference

## Updated Blog Post Images

All blog images have been updated to use high-quality images from Unsplash that are relevant to each blog topic:

### 1. Digital Transformation Guide
- **Image URL**: https://images.unsplash.com/photo-1551434678-e076c223a692
- **Description**: Modern office with digital technology and analytics
- **Photographer**: Unsplash

### 2. Web Development Trends 2024
- **Image URL**: https://images.unsplash.com/photo-1633356122544-f134324a6cee
- **Description**: Developer working on multiple screens with code
- **Photographer**: Unsplash

### 3. Mobile App Development Guide
- **Image URL**: https://images.unsplash.com/photo-1555774698-0b77e0d5fac6
- **Description**: Smartphone app development mockups and wireframes
- **Photographer**: Unsplash

### 4. UI/UX Design Principles
- **Image URL**: https://images.unsplash.com/photo-1561070791-2526d30994b5
- **Description**: Design process with sketches, wireframes, and color palettes
- **Photographer**: Unsplash

### 5. Cloud Migration Benefits
- **Image URL**: https://images.unsplash.com/photo-1451187580459-43490279c0fa
- **Description**: Cloud computing visualization with network connections
- **Photographer**: Unsplash

### 6. Top 5 IT Services Nepal 2025
- **Image URL**: https://images.unsplash.com/photo-1560472354-b33ff0c44a43
- **Description**: Modern office workspace with technology and teamwork
- **Photographer**: Unsplash

### 7. Professional Website Small Business Nepal
- **Image URL**: https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3
- **Description**: Laptop showing website design and development process
- **Photographer**: Unsplash

### 8. Digital Transformation Nepal Businesses
- **Image URL**: https://images.unsplash.com/photo-1518186285589-2f7649de83e0
- **Description**: Digital business transformation with data analytics
- **Photographer**: Unsplash

### 9. Website Performance Tips Nepal
- **Image URL**: https://images.unsplash.com/photo-1460925895917-afdab827c52f
- **Description**: Performance monitoring dashboard with metrics and graphs
- **Photographer**: Unsplash

### 10. Choose Right IT Partner Nepal
- **Image URL**: https://images.unsplash.com/photo-1521737711867-e3b97375f902
- **Description**: Business partnership handshake with technology background
- **Photographer**: Unsplash

### Website Image (Local)
- **Image Path**: /blogs/website.png
- **Description**: Banner image for "Why Every Business Needs a Website" — suitable for small-business website guide.
- **Usage**: Used by the blog post "Why Every Business Needs a Website"
- **Location**: Place the image file at d:\FORGENEST\company_profile\public\blogs\website.png (served as /blogs/website.png)

## Next.js Image Configuration

The following remote patterns have been added to `next.config.ts` to support these image sources:

```javascript
domains: ["images.pexels.com", "images.unsplash.com", "res.cloudinary.com", "via.placeholder.com"],
remotePatterns: [
  {
    protocol: "https",
    hostname: "images.pexels.com",
    port: "",
    pathname: "/photos/**",
  },
  {
    protocol: "https",
    hostname: "images.unsplash.com",
    port: "",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "unsplash.com",
    port: "",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "res.cloudinary.com",
    port: "",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "via.placeholder.com",
    port: "",
    pathname: "/**",
  },
]
```

## Image Optimization

All images are optimized through Next.js Image component which provides:
- Automatic WebP/AVIF format conversion
- Responsive image sizing
- Lazy loading by default
- Proper alt text for accessibility
- Cache optimization for better performance

## License Information

All images are from Unsplash and are free to use under the Unsplash License:
- Free for commercial and personal use
- No permission needed
- Attribution appreciated but not required

## Performance Benefits

- **Faster Loading**: Optimized images load faster than the previous placeholder images
- **Better SEO**: Relevant, high-quality images improve search engine rankings
- **Enhanced User Experience**: Professional images increase engagement and trust
- **Mobile Optimized**: Responsive images work perfectly on all device sizes