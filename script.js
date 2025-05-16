// Sample video data - Replace with actual YouTube video IDs and titles
const videos = [
    { 
        id: 'ezf1Q5LljgI', 
        title: 'My First Vlog',
        description: 'Join me on my journey as I share my first vlog with you!'
    },
    { 
        id: 'lU3nerJM9jM', 
        title: 'Exploring New Adventures',
        description: 'Come along as I explore and share exciting new experiences!'
    },
    { 
        id: 'UQACBkD5ZNg', 
        title: 'Journey Through Life',
        description: 'Experience the beauty of life through my lens and stories!'
    }
];

// Sample gallery images - Replace with actual image paths
const galleryImages = [
    'assets/gallery1.jpg',
    'assets/gallery2.jpg',
    'assets/gallery3.jpg',
    'assets/gallery4.jpg',
    'assets/gallery5.jpg',
    'assets/gallery6.jpg'
];

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;
    });
});

// Populate latest vlogs section
const vlogsGrid = document.querySelector('.vlogs-grid');

videos.forEach((video, index) => {
    const vlogCard = document.createElement('div');
    vlogCard.className = 'vlog-card';
    vlogCard.style.setProperty('--i', index);
    vlogCard.innerHTML = `
        <div class="vlog-thumbnail">
            <iframe
                src="https://www.youtube.com/embed/${video.id}"
                title="${video.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
            ></iframe>
        </div>
        <div class="vlog-info">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        </div>
    `;
    vlogsGrid.appendChild(vlogCard);
});

// Populate gallery section
const galleryContainer = document.querySelector('.gallery-container');

galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${image}" alt="Travel moment" loading="lazy">`;
    galleryContainer.appendChild(galleryItem);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const thankYouPopup = document.getElementById('thankYouPopup');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For now, we'll just show the thank you popup
    thankYouPopup.classList.add('active');
    contactForm.reset();
});

// Close thank you popup
const closePopupBtn = document.querySelector('.close-popup');
closePopupBtn.addEventListener('click', () => {
    thankYouPopup.classList.remove('active');
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for anchor links
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

// Add animation delay to social links
document.querySelectorAll('.social-links a').forEach((link, index) => {
    link.style.setProperty('--i', index);
});

// Add animation delay to form groups
document.querySelectorAll('.form-group').forEach((group, index) => {
    group.style.setProperty('--i', index);
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize animations
window.addEventListener('load', () => {
    reveal(); // Initial check
    // Add active class to hero section immediately
    document.querySelector('.hero').classList.add('active');
});

window.addEventListener('scroll', reveal);