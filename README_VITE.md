# SM English High School - React + Vite ⚡

A modern, high-performance website built with **React 19** and **Vite**, featuring image optimization and advanced performance enhancements.

## 🚀 Performance Features

- **⚡ Vite Build Tool**: Lightning-fast build times and HMR (Hot Module Replacement)
- **🖼️ Image Optimization**: Automatic compression of JPEG, PNG, WebP, and GIF images
- **📦 Code Splitting**: Intelligent chunk splitting for vendors, router, and icons
- **🗜️ Tree Shaking**: Automatic removal of unused code
- **📈 Source Maps**: Disabled in production for smaller bundle sizes
- **🎯 CSS Minification**: Optimized stylesheet delivery
- **📱 Responsive Design**: Mobile-first architecture

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn package manager

## 🏗️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Development Server

```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:5173` with hot module replacement enabled.

### 3. Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── HeroSlider.jsx
│   ├── WhoWeAre.jsx
│   ├── AboutPrincipal.jsx
│   ├── WhyChooseUs.jsx
│   ├── Faculty.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   ├── Curriculum.jsx
│   └── Footer.jsx
├── styles/             # Component-specific styles
├── assets/             # Images and media
├── App.jsx             # Main App component
├── index.jsx           # React entry point
└── index.css           # Global styles
public/               # Static assets
index.html            # HTML entry point
vite.config.js        # Vite configuration
package.json          # Dependencies and scripts
```

## 🎯 Performance Optimizations Implemented

### Build Optimizations
- **Terser Minification**: Aggressive code minification with console removal
- **CSS Minification**: Optimized stylesheets
- **Asset Inline Limit**: Small assets (< 4KB) inlined for fewer HTTP requests
- **Code Splitting**:
  - `react-vendor.js`: React and React-DOM
  - `router.js`: React Router
  - `icons.js`: React Icons

### Image Optimization
Images are automatically optimized:
- **JPEG**: Quality 75%, progressive compression
- **PNG**: Optimized with pngquant (quality 60-80%)
- **WebP**: Modern format with quality 75%
- **GIF**: Optimized with gifsicle
- **SVG**: Minified with SVGO

### Network Optimization
- Gzip compression ready
- Small chunk sizes for better caching
- Excluded source maps from production
- Asset tree-shaking

## 🔧 Configuration Files

### vite.config.js
Main Vite configuration with:
- React plugin integration
- Image minification plugin
- Build optimization settings
- DevServer configuration
- Environment variables

### package.json
Updated scripts:
- `dev`: Start development server
- `build`: Production build
- `preview`: Preview production build
- `lint`: Run ESLint (optional)

## 📊 Build Output

After running `npm run build`, expected output:
```
dist/
├── index.html
├── manifest.json
├── robots.txt
├── _redirects          # For Netlify routing
└── assets/
    ├── css/
    │   └── [name].[hash].css
    └── js/
        ├── react-vendor.[hash].js
        ├── router.[hash].js
        ├── icons.[hash].js
        └── main.[hash].js
```

## 🌐 Deployment

### Netlify
The `_redirects` file is included for SPA routing. Simply deploy the `dist/` folder.

### Vercel
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Traditional Hosting
Copy contents of `dist/` folder to your web server.

## 🐛 Environment Variables

Create a `.env.local` file in the root:
```
VITE_APP_TITLE=SM English High School & Junior College
```

Access in code:
```javascript
console.log(import.meta.env.VITE_APP_TITLE)
```

## 📈 Performance Metrics

Expected improvements:
- **Build Time**: 5-10x faster than Create React App
- **Initial Load**: 30-50% faster
- **Bundle Size**: 20-30% smaller with code splitting
- **HMR**: <100ms hot updates during development

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest 2 versions)
- Edge (latest)

## 🔗 Useful Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vite Plugin Library](https://github.com/vitejs/awesome-vite)
- [Image Optimization Plugin](https://github.com/anncwb/vite-plugin-imagemin)

## 📝 License

Private - SM English High School

## 💪 Performance Tips

1. **Use Image Optimization**: Always optimize images through the build system
2. **Code Splitting**: Leverage dynamic imports for route-based splitting
3. **Lazy Loading**: Use React.lazy() for component code splitting
4. **CSS Modules**: Consider CSS modules for scoped styling
5. **Production Builds**: Always test with `npm run build && npm run preview`

---

**Built with ⚡ Vite for Maximum Performance**
