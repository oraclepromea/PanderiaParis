// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.story-section, .menu-category, .gallery-item, .location-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Gallery item hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 80);
        }, 1000);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add click animation to CTA button
document.querySelector('.cta-button')?.addEventListener('click', function(e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add CSS for ripple effect
const rippleCSS = `
.cta-button {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add the ripple CSS to the document
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Translation system with comprehensive content
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-story': 'Our Story',
        'nav-menu': 'Menu',
        'nav-gallery': 'Gallery',
        'nav-location': 'Location',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Panaderia Paris',
        'hero-top-title': 'Panaderia Paris',
        'hero-top-subtitle': 'Authentic French Bakery in the Heart of the Bolivian Jungle',
        'hero-subtitle': 'Authentic French Bakery in the Heart of the Bolivian Jungle',
        'hero-description': 'Experience the finest French baking tradition in Rurrenabaque, Bolivia',
        'hero-cta': 'Discover Our Story',
        'hero-badge': 'Authentic French',
        'hero-cta-menu': 'View Menu',
        
        // Story Section
        'story-title': 'Meet Master Baker Thierry',
        'story-lead': 'From France to the Bolivian Jungle',
        'story-p1': 'With over 40 years of baking expertise, Thierry brings the authentic taste of France to the heart of Bolivia. Every morning at 2 AM, when the jungle is still sleeping, Thierry begins his craft in our bakery.',
        'story-quote': '"I work at night so the people can enjoy their morning."',
        'story-p2': 'This dedication drives Thierry\'s passion for creating the perfect croissant, pain au chocolat, and artisanal breads that have made Panaderia Paris a beloved destination in Rurrenabaque.',
        'story-p3': 'His journey from the bakeries of France to the Amazon basin is one of passion, tradition, and an unwavering commitment to quality that you can taste in every bite.',
        'experience-years': 'Years Experience',
        'stat-daily-start': 'Daily Start',
        'stat-daily-pastries': 'Daily Pastries',
        'stat-passion': 'Passion',
        'image-overlay-text': 'Watch Thierry at Work',
        
        // Menu Section
        'menu-title': 'Our French Specialties',
        'menu-subtitle': 'Freshly baked every morning with traditional French techniques',
        'menu-breads': 'Breads & Pastries',
        'menu-sweets': 'Sweet Treats',
        'menu-beverages': 'Beverages',
        'badge-fresh': 'Fresh Daily',
        'badge-authentic': 'Authentic',
        'badge-handcrafted': 'Handcrafted',
        'specialty-signature': 'Signature',
        'popular-tag': 'Most Popular',
        'feature-fresh': 'Fresh at 6 AM',
        
        // Menu Items
        'croissants-title': 'Croissants',
        'croissants-desc': 'Buttery, flaky croissants made with traditional French technique',
        'pain-chocolat-title': 'Pain au Chocolat',
        'pain-chocolat-desc': 'Classic French pastry with rich chocolate filling',
        'baguettes-title': 'French Baguettes',
        'baguettes-desc': 'Authentic crusty baguettes, perfect for any meal',
        'pain-campagne-title': 'Pain de Campagne',
        'pain-campagne-desc': 'Traditional country bread with a perfect crust',
        'tarte-fruits-title': 'Tarte aux Fruits',
        'tarte-fruits-desc': 'Seasonal fruit tarts with fresh local ingredients',
        'eclairs-title': 'Éclairs',
        'eclairs-desc': 'Classic French choux pastry with cream filling',
        'macarons-title': 'Macarons',
        'macarons-desc': 'Delicate French macarons in various flavors',
        'mille-feuille-title': 'Mille-feuille',
        'mille-feuille-desc': 'Napoleon cake with layers of pastry and cream',
        'coffee-title': 'French Press Coffee',
        'coffee-desc': 'Premium Bolivian coffee beans, expertly brewed',
        'hot-chocolate-title': 'Hot Chocolate',
        'hot-chocolate-desc': 'Rich hot chocolate made with local cacao',
        'juices-title': 'Fresh Juices',
        'juices-desc': 'Tropical fruit juices from the Amazon region',
        
        // Gallery Section
        'gallery-title': 'A Taste of France in Bolivia',
        
        // Location Section
        'location-title': 'Visit Us in Rurrenabaque',
        'location-subtitle': 'In the Heart of the Amazon',
        'location-description': 'Located in Rurrenabaque, Bolivia, our bakery sits at the gateway to the Bolivian Amazon. Whether you\'re exploring the jungle or simply passing through town, Panaderia Paris is your perfect stop for authentic French baking.',
        'location-address': 'Rurrenabaque, Beni Department, Bolivia',
        'location-hours': 'Mon-Sat: 6:00 AM - 12:30 PM | Closed Sundays',
        'location-phone': 'Visit us in person',
        
        // Contact Section
        'contact-title': 'Connect With Us',
        'contact-facebook': 'Follow us on Facebook',
        'contact-tripadvisor': 'Read our reviews',
        'contact-message': 'Come experience the magic of French baking in the Bolivian jungle. We look forward to welcoming you!',
        
        // Footer
        'footer-copyright': '© 2025 Panaderia Paris - Authentic French Bakery in Rurrenabaque, Bolivia',
        'footer-crafted': 'Crafted with love by Master Baker Thierry',
        'footer-credit': 'Website designed and created with ❤️ by'
    },
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-story': 'Nuestra Historia',
        'nav-menu': 'Menú',
        'nav-gallery': 'Galería',
        'nav-location': 'Ubicación',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Panaderia Paris',
        'hero-top-title': 'Panaderia Paris',
        'hero-top-subtitle': 'Auténtica Panadería Francesa en el Corazón de la Selva Boliviana',
        'hero-subtitle': 'Auténtica Panadería Francesa en el Corazón de la Selva Boliviana',
        'hero-description': 'Experimenta la más fina tradición de panadería francesa en Rurrenabaque, Bolivia',
        'hero-cta': 'Descubre Nuestra Historia',
        'hero-badge': 'Auténtico Francés',
        'hero-cta-menu': 'Ver Menú',
        
        // Story Section
        'story-title': 'Conoce al Maestro Panadero Thierry',
        'story-lead': 'De Francia a la Selva Boliviana',
        'story-p1': 'Con más de 40 años de experiencia en panadería, Thierry trae el auténtico sabor de Francia al corazón de Bolivia. Cada mañana a las 2 AM, cuando la selva aún duerme, Thierry comienza su trabajo en nuestra panadería.',
        'story-quote': '"Trabajo de noche para que la gente pueda disfrutar de la mañana."',
        'story-p2': 'Esta dedicación impulsa la pasión de Thierry por crear el croissant perfecto, pain au chocolat y panes artesanales que han hecho de Panaderia Paris un destino querido en Rurrenabaque.',
        'story-p3': 'Su viaje desde las panaderías de Francia hasta la cuenca amazónica es uno de pasión, tradición y un compromiso inquebrantable con la calidad que puedes saborear en cada bocado.',
        'experience-years': 'Años de Experiencia',
        'stat-daily-start': 'Inicio Diario',
        'stat-daily-pastries': 'Pasteles Diarios',
        'stat-passion': 'Pasión',
        'image-overlay-text': 'Ver a Thierry Trabajando',
        
        // Menu Section
        'menu-title': 'Nuestras Especialidades Francesas',
        'menu-subtitle': 'Horneado fresco cada mañana con técnicas tradicionales francesas',
        'menu-breads': 'Panes y Pasteles',
        'menu-sweets': 'Dulces Especiales',
        'menu-beverages': 'Bebidas',
        'badge-fresh': 'Fresco Diario',
        'badge-authentic': 'Auténtico',
        'badge-handcrafted': 'Hecho a Mano',
        'specialty-signature': 'Especialidad',
        'popular-tag': 'Más Popular',
        'feature-fresh': 'Fresco a las 6 AM',
        
        // Menu Items
        'croissants-title': 'Croissants',
        'croissants-desc': 'Croissants mantecosos y hojaldrados hechos con técnica tradicional francesa',
        'pain-chocolat-title': 'Pain au Chocolat',
        'pain-chocolat-desc': 'Pastel francés clásico con relleno de chocolate rico',
        'baguettes-title': 'Baguettes Francesas',
        'baguettes-desc': 'Baguettes auténticas con corteza crujiente, perfectas para cualquier comida',
        'pain-campagne-title': 'Pain de Campagne',
        'pain-campagne-desc': 'Pan de campo tradicional con corteza perfecta',
        'tarte-fruits-title': 'Tarta de Frutas',
        'tarte-fruits-desc': 'Tartas de frutas de temporada con ingredientes locales frescos',
        'eclairs-title': 'Éclairs',
        'eclairs-desc': 'Pasta choux francesa clásica con relleno de crema',
        'macarons-title': 'Macarons',
        'macarons-desc': 'Macarons franceses delicados en varios sabores',
        'mille-feuille-title': 'Mil Hojas',
        'mille-feuille-desc': 'Pastel Napoleón con capas de masa y crema',
        'coffee-title': 'Café Prensa Francesa',
        'coffee-desc': 'Granos de café bolivianos premium, preparados expertamente',
        'hot-chocolate-title': 'Chocolate Caliente',
        'hot-chocolate-desc': 'Chocolate caliente rico hecho con cacao local',
        'juices-title': 'Jugos Frescos',
        'juices-desc': 'Jugos de frutas tropicales de la región amazónica',
        
        // Gallery Section
        'gallery-title': 'Un Sabor de Francia en Bolivia',
        
        // Location Section
        'location-title': 'Visítanos en Rurrenabaque',
        'location-subtitle': 'En el Corazón del Amazonas',
        'location-description': 'Ubicada en Rurrenabaque, Bolivia, nuestra panadería se sitúa en la puerta de entrada al Amazonas boliviano. Ya sea que estés explorando la selva o simplemente pasando por el pueblo, Panaderia Paris es tu parada perfecta para la auténtica panadería francesa.',
        'location-address': 'Rurrenabaque, Departamento de Beni, Bolivia',
        'location-hours': 'Lun-Sáb: 6:00 AM - 12:30 PM | Cerrado Domingos',
        'location-phone': 'Visítanos en persona',
        
        // Contact Section
        'contact-title': 'Conéctate Con Nosotros',
        'contact-facebook': 'Síguenos en Facebook',
        'contact-tripadvisor': 'Lee nuestras reseñas',
        'contact-message': '¡Ven a experimentar la magia de la panadería francesa en la selva boliviana. Esperamos darte la bienvenida!',
        
        // Footer
        'footer-copyright': '© 2025 Panaderia Paris - Auténtica Panadería Francesa en Rurrenabaque, Bolivia',
        'footer-crafted': 'Creado con amor por el Maestro Panadero Thierry',
        'footer-credit': 'Sitio web diseñado y creado con ❤️ por'
    }
};

// Enhanced language switching functionality
function switchLanguage(lang) {
    // Store current language in localStorage
    localStorage.setItem('preferred-language', lang);
    
    // Translate all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update page title based on language
    const titleTranslations = {
        en: 'Panaderia Paris - Authentic French Bakery in the Heart of Bolivia',
        es: 'Panaderia Paris - Auténtica Panadería Francesa en el Corazón de Bolivia'
    };
    document.title = titleTranslations[lang] || titleTranslations.en;
    
    // Trigger custom event for language change
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
    
    console.log(`Language switched to: ${lang}`);
}

// Initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    
    // Check for browser language if no saved preference
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    
    // Use saved language, browser language, or default to English
    const defaultLang = savedLang || browserLang;
    
    // Apply the language
    switchLanguage(defaultLang);
}

// Enhanced language toggle event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initializeLanguage();
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Switch language
            switchLanguage(lang);
        });
    });
    
    // Add keyboard support for language switching
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + L to toggle language
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            const currentLang = document.documentElement.lang || 'en';
            const newLang = currentLang === 'en' ? 'es' : 'en';
            switchLanguage(newLang);
        }
    });
});

// Language change event listener for any additional functionality
document.addEventListener('languageChanged', function(e) {
    const lang = e.detail.language;
    
    // Update any dynamic content that might need special handling
    updateDynamicContent(lang);
    
    // Restart typing animation with new language content
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const newText = translations[lang]['hero-subtitle'];
        if (newText) {
            setTimeout(() => {
                typeWriter(heroSubtitle, newText, 80);
            }, 500);
        }
    }
});

// Function to handle dynamic content updates
function updateDynamicContent(lang) {
    // Update any content that's not handled by data-translate attributes
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            en: 'Experience authentic French baking in Rurrenabaque, Bolivia. Master baker Thierry brings 40+ years of French baking tradition to the Bolivian jungle.',
            es: 'Experimenta la auténtica panadería francesa en Rurrenabaque, Bolivia. El maestro panadero Thierry trae más de 40 años de tradición panadera francesa a la selva boliviana.'
        };
        metaDescription.setAttribute('content', descriptions[lang] || descriptions.en);
    }
}

// Image optimization and lazy loading
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading attribute if not present
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add optimized-image class for CSS optimization
        img.classList.add('optimized-image');
        
        // Handle image load events
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                console.warn('Image failed to load:', this.src);
                // You could add a placeholder image here
            });
        }
    });
}

// Optimize hero background image loading
function optimizeHeroImage() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const bgImage = hero.style.backgroundImage;
        if (bgImage) {
            const imageUrl = bgImage.slice(4, -1).replace(/["']/g, "");
            
            // Preload hero image for better performance
            const img = new Image();
            img.onload = function() {
                hero.classList.add('bg-loaded');
            };
            img.src = imageUrl;
        }
    }
}

// Image intersection observer for better lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Load the image
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            
            // Stop observing this image
            observer.unobserve(img);
            
            // Add loaded class for animations
            img.addEventListener('load', () => {
                img.classList.add('fade-in');
            });
        }
    });
}, {
    rootMargin: '50px'
});

// Initialize image optimization on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...
    
    // Initialize image optimizations
    optimizeImages();
    optimizeHeroImage();
    
    // Observe images with data-src for lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});

// Add CSS for image loading animations
const imageOptimizationCSS = `
.optimized-image {
    transition: opacity 0.3s ease;
}

.optimized-image:not(.loaded) {
    opacity: 0.8;
}

.hero.bg-loaded {
    animation: heroFadeIn 1s ease-out;
}

@keyframes heroFadeIn {
    from { opacity: 0.8; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeInImage 0.5s ease-out;
}

@keyframes fadeInImage {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Improve image rendering */
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: optimizeQuality;
}

/* Responsive image optimization */
@media (max-width: 768px) {
    .hero {
        background-attachment: scroll; /* Better mobile performance */
    }
}
`;

// Add image optimization CSS to the document
const imageStyle = document.createElement('style');
imageStyle.textContent = imageOptimizationCSS;
document.head.appendChild(imageStyle);