# Maxwell Mwendwa - Professional Portfolio Website

A modern, responsive portfolio website for Maxwell Mwendwa, a BBIT student and full-stack developer specializing in building practical software solutions.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Navigate to your project folder:**
   ```bash
   cd maxwell-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The website will automatically open in your browser at `http://localhost:3000`

### Building for Production

To create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

## 📋 Project Structure

```
maxwell-portfolio/
├── src/
│   ├── App.jsx          # Main React component with all sections
│   ├── App.css          # Complete styling and animations
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Multiple Sections**:
  - Hero section with call-to-action buttons
  - About me with highlights
  - Skills & expertise overview
  - Featured projects (NotifyHub, AttendIQ, FEM Leadership)
  - Services offered
  - Contact section
  - Footer with copyright

- **Interactive Navigation** - Smooth scrolling between sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Social Links** - Connect with GitHub, LinkedIn, Twitter, and Email
- **Professional Content** - Comprehensive descriptions of all projects and services

## 🛠 Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with animations and gradients
- **Lucide React** - Icon library

### Development
- **Node.js & npm** - Package management

## 📝 Customization

### Update Contact Information
Edit the contact section in `src/App.jsx`:
- Replace email address with Maxwell's actual email
- Update LinkedIn and GitHub profile links
- Add Twitter profile if available

### Add Your Photo
The hero section has a placeholder circle. Replace it with:
1. Add an image to the `public` folder
2. Update the CSS background or add an `<img>` tag in the hero-image div

### Modify Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #0ea5e9;        /* Main brand color */
  --primary-dark: #0284c7;
  --accent: #06b6d4;
  --dark-bg: #0f172a;        /* Background */
  --dark-card: #1e293b;
  /* ... more colors ... */
}
```

### Update Project Links
In `src/App.jsx`, find the projects section and update the `href="#"` attributes to point to actual project URLs.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server

## 📞 Support & Customization

For any changes or customizations:
1. Edit the content in `src/App.jsx`
2. Update styles in `src/App.css`
3. Run `npm start` to see changes in real-time

## 📄 License

This portfolio is created for Maxwell Mwendwa. All rights reserved.

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start development: `npm start`
3. 📧 Update contact information with real details
4. 🖼️ Add Maxwell's professional photo
5. 🔗 Update project and social media links
6. 🚀 Deploy to a hosting platform

---

**Created with passion for innovation and excellence** ✨
