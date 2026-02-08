# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a sleek design with dark/light theme toggle, smooth animations, and an intuitive user interface.

## 🌐 Live Demo

**[View Live Demo →](https://vtomar-portfolio.vercel.app/)

> 📝 **Note:** Update the link above with your actual deployment URL

## ✨ Features

### 🎨 Design & UI
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Theme** - Toggle between dark and light modes with persistent preference
- **Smooth Animations** - Fade-in effects, parallax scrolling, and hover interactions
- **Modern Aesthetics** - Clean, professional design with gradient accents

### 🚀 Functionality
- **Mobile Navigation** - Hamburger menu for seamless mobile experience
- **Smooth Scrolling** - Anchor links with smooth scroll behavior
- **Intersection Observer** - Content animates into view as you scroll
- **Parallax Effect** - Dynamic hero section with scroll-based parallax
- **Dynamic Year Update** - Footer automatically updates with current year

### 💻 Technical Features
- Pure vanilla JavaScript (no dependencies)
- CSS custom properties for theming
- LocalStorage for theme persistence
- Optimized performance with throttled scroll events
- Cross-browser compatible

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid, animations, and transitions
- **JavaScript (ES6+)** - Interactive features and DOM manipulation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vinaytomar-xm/portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server (VS Code extension)

### Live Server (Recommended)
If using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌍 Deployment

Deploy your portfolio to the web for free using one of these platforms:

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch (usually `main`) and root folder
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site is live instantly with a custom URL
4. Optional: Connect to GitHub for automatic deployments

### Vercel
1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with zero configuration
4. Automatic deployments on every push

### Other Options
- **Cloudflare Pages** - Fast, global CDN
- **Firebase Hosting** - Google's hosting solution
- **Surge.sh** - Quick command-line deployment
- **Render** - Free static site hosting

## 🎯 Key Components

### Theme Toggle
```javascript
// Switches between light and dark modes
// Saves preference to localStorage
themeToggle.addEventListener('click', () => { ... });
```

### Mobile Menu
```javascript
// Responsive hamburger menu
// Closes on link click or outside click
menuToggle.addEventListener('click', () => { ... });
```

### Scroll Animations
```javascript
// Intersection Observer for fade-in effects
// Parallax scrolling on hero section
const observer = new IntersectionObserver(...);
```

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root[data-theme="light"] {
    --primary-color: #00D9FF;
    --secondary-color: #0A192F;
    /* ... more variables */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `styles.css`
3. Add interactions in `script.js` if needed

### Modifying Animations
Adjust timing and effects in `styles.css`:
```css
.fade-in {
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ⚡ Performance Optimizations

- Minimal external dependencies
- Optimized images (use WebP format where possible)
- CSS animations using `transform` and `opacity`
- Efficient event listeners with proper cleanup
- Intersection Observer for scroll-based animations

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Add project filtering by technology
- [ ] Implement contact form with backend
- [ ] Add blog section
- [ ] Integrate with GitHub API for dynamic projects
- [ ] Add loading animations
- [ ] Implement PWA features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vinay Singh Tomar**

- GitHub: (https://github.com/Vinaytomar-xm)
- Portfolio:(https://vtomar-portfolio.vercel.app/)
- LinkedIn: [https://linkedin.com/in/vinay-singh-tomar-5b65b9377]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Vinaytomar-xm/portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons and emojis from Unicode standard
- Inspiration from various portfolio designs
- Community feedback and support

## 📞 Contact

For any questions or feedback, feel free to reach out through:
- GitHub Issues
- Email: [Tomarvinaysingh70@gmail.com]
- LinkedIn: [https://linkedin.com/in/vinay-singh-tomar-5b65b9377]

---

<div align="center">
  
### ⭐ Star this repo if you find it helpful!

Made with ❤️ by Vinay Singh Tomar

</div>
