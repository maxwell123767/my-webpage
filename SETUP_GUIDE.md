# 🚀 Maxwell Portfolio - Quick Setup Guide

## Step 1: Install Node.js
If you haven't already installed Node.js, download it from: https://nodejs.org/

Make sure to install the LTS (Long Term Support) version.

## Step 2: Open Terminal/Command Prompt
Navigate to your maxwell-portfolio folder:
```bash
cd maxwell-portfolio
```

## Step 3: Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

This will create a `node_modules` folder (this may take a minute or two).

## Step 4: Start the Development Server
Run this command:
```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

## That's It! 🎉

Your portfolio is now running live. Any changes you make to files will automatically refresh in your browser.

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start development server |
| `npm run build` | Create optimized build for deployment |
| `npm run preview` | Preview the production build |

## Troubleshooting

### "npm: command not found"
- Node.js isn't installed correctly
- Try restarting your terminal
- Download and reinstall Node.js

### "Port 3000 is already in use"
- Another application is using port 3000
- Close other applications or use a different port
- Or wait a moment and try again

### "Module not found" errors
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

### Still having issues?
Check that:
1. You're in the correct folder (`maxwell-portfolio`)
2. Node.js is properly installed (`node --version` should show a version)
3. You have internet connection for downloading dependencies

## Next: Customize Your Portfolio

Edit these files to personalize your portfolio:

1. **src/App.jsx** - All the content (text, projects, services)
2. **src/App.css** - Colors, fonts, and styling
3. **index.html** - Browser tab title and meta information

Then restart the server to see your changes.

---

**Happy coding! 💻**
