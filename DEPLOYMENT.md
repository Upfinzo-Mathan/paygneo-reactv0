# Production Deployment Configuration

## Build Commands

### Quick Production Build
```bash
npm run build:prod
```

### Full Production Build with Script
```bash
chmod +x build-prod.sh
./build-prod.sh
```

### Preview Production Build
```bash
npm run preview:prod
```

## Build Output

The production build will be created in the `dist/` directory with the following structure:

```
dist/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/                   # Optimized CSS files
│   ├── js/                    # Minified JavaScript chunks
│   ├── images/                # Optimized images
│   ├── fonts/                 # Font files
│   └── video/                 # Video files
└── public/                    # Static assets
    └── assets/                # Original assets (copied)
```

## Optimization Features

- ✅ **Code Splitting**: Automatic chunk splitting for better caching
- ✅ **Minification**: JavaScript and CSS minification with Terser
- ✅ **Asset Optimization**: Images and videos optimized
- ✅ **Tree Shaking**: Unused code removal
- ✅ **Source Maps**: Disabled for production (faster loading)
- ✅ **Console Removal**: Debug logs removed from production
- ✅ **Hash-based Caching**: File names include content hashes

## Deployment Steps

1. **Build the Application**:
   ```bash
   npm run build:prod
   ```

2. **Test the Build Locally**:
   ```bash
   npm run preview:prod
   ```

3. **Deploy to Server**:
   - Upload the entire `dist/` folder to your web server
   - Configure your server to serve `index.html` for all routes (SPA)
   - Ensure all assets are accessible

## Server Configuration Examples

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Netlify (_redirects)
```
/*    /index.html   200
```

## Performance Optimization

- **Lazy Loading**: Components load on demand
- **Asset Compression**: Gzip/Brotli compression recommended
- **CDN**: Use CDN for static assets
- **Caching**: Implement proper cache headers
- **Monitoring**: Monitor Core Web Vitals

## Environment Variables

Create a `.env.production` file for production-specific variables:

```env
VITE_API_URL=https://api.paygneo.com
VITE_APP_ENV=production
VITE_ANALYTICS_ID=your-analytics-id
```

## Troubleshooting

### Common Issues:
1. **Assets not loading**: Check if public/assets folder is copied to dist/
2. **Routing issues**: Ensure server is configured for SPA routing
3. **Large bundle size**: Check for unused dependencies
4. **Video not playing**: Verify video file paths and formats

### Build Analysis:
```bash
npm run analyze
```
