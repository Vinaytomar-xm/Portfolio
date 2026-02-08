
        // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
        });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
            }
        });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
            } else {
        navbar.classList.remove('scrolled');
            }
        });

    // Refresh Button Functionality
    const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.addEventListener('click', () => {
        // Add rotation animation
        refreshBtn.style.transform = 'rotate(360deg) scale(0.9)';

            // Reload page after animation
            setTimeout(() => {
        location.reload();
            }, 300);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
        });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - (scrolled / 700);
            }
        });

    // Dynamic year update
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML =
    `© ${currentYear} Vinay Singh Tomar • Built with passion & code ❤️`;

        // Add hover effect to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
            });
        });

    // Project cards stagger animation
    const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        });

    // Console Easter egg
    console.log('%c👨‍💻 Welcome to my portfolio!', 'color: #00D9FF; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8892B0; font-size: 14px;');
    console.log('%cInterested in the code? Check out my GitHub: github.com/Vinaytomar-xm', 'color: #00D9FF; font-size: 14px;');
