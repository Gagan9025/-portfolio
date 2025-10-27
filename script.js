// Initialize AOS library
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Add hover effects to timeline cards
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) translateZ(30px) rotateX(5deg)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) translateZ(0px)';
            this.style.boxShadow = 'var(--glass-shadow)';
        });
    });
    
    // Add hover effects to achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) translateZ(30px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) translateZ(0px)';
            this.style.boxShadow = 'var(--glass-shadow)';
        });
    });
    
    // Add interactive effects to tech items
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) translateZ(10px)';
            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) translateZ(0px)';
            this.style.background = 'rgba(138, 43, 226, 0.2)';
            this.style.color = 'var(--primary-color)';
        });
    });
    
    // Add interactive effects to project tech tags
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) translateZ(10px)';
            this.style.background = 'var(--gradient-primary)';
            this.style.color = 'white';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) translateZ(0px)';
            this.style.background = 'rgba(138, 43, 226, 0.2)';
            this.style.color = 'var(--primary-color)';
        });
    });
    
    // Add scroll-based animations for background elements
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const elements = document.querySelectorAll('.element');
        
        elements.forEach((el, index) => {
            const speed = 0.1 * (index + 1);
            const depth = index * 20; // Different Z-depth for each element
            el.style.transform = `translateY(${scrollPosition * speed}px) translateZ(${depth}px)`;
        });
    });
    
    // Add animation to timeline marker on hover
    const timelineMarkers = document.querySelectorAll('.marker-content');
    
    timelineMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(10deg) translateZ(20px)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg) translateZ(0px)';
        });
    });
    
    // Add 3D tilt effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) translateZ(30px) rotateY(5deg)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) translateZ(0px)';
            this.style.boxShadow = 'var(--glass-shadow)';
        });
    });
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const closeMenu = document.querySelector('.close-menu');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.add('active');
            mobileMenuToggle.classList.add('active');
        });
    }
    
    if (closeMenu && nav) {
        closeMenu.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav) {
                nav.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav && mobileMenuToggle) {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Enhanced 3D tilt effect for multilingual welcome
    const welcomeContainer = document.querySelector('.multilingual-welcome');
    if (welcomeContainer) {
        welcomeContainer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 15; // Max 15 degrees
            const rotateX = -((y - centerY) / centerY) * 15; // Max 15 degrees
            
            this.style.transform = `perspective(1500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            
            // Add shine effect to active message
            const activeMessage = this.querySelector('.welcome-message.active');
            if (activeMessage) {
                const shine = activeMessage.querySelector('.welcome-text::before');
                if (shine) {
                    shine.style.left = `${(x / rect.width) * 100}%`;
                }
            }
        });
        
        welcomeContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1500px) rotateY(0) rotateX(0)';
        });
    }
    
    // Add advanced animation sequence for language switching
    function animateLanguageSwitch(oldIndex, newIndex) {
        const messages = document.querySelectorAll('.welcome-message');
        const dots = document.querySelectorAll('.indicator-dot');
        
        // Animate out the old message
        if (messages[oldIndex]) {
            messages[oldIndex].style.transform = 'translateZ(-100px) rotateX(-90deg) rotateY(-5deg) scale(0.8)';
            messages[oldIndex].style.opacity = '0';
        }
        
        // Animate in the new message after a slight delay
        setTimeout(() => {
            if (messages[newIndex]) {
                messages[newIndex].style.transform = 'translateZ(0) rotateX(0) rotateY(0) scale(1)';
                messages[newIndex].style.opacity = '1';
            }
        }, 150);
    }
    
    // Enhanced multilingual welcome rotation
    const welcomeMessages = document.querySelectorAll('.welcome-message');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    let currentIndex = 0;
    
    function rotateWelcomeMessage() {
        // Remove active class from current message and dot
        welcomeMessages[currentIndex].classList.remove('active');
        indicatorDots[currentIndex].classList.remove('active');
        
        // Move to next message
        const oldIndex = currentIndex;
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
        
        // Add active class to new message and dot
        welcomeMessages[currentIndex].classList.add('active');
        indicatorDots[currentIndex].classList.add('active');
        
        // Animate the transition
        animateLanguageSwitch(oldIndex, currentIndex);
    }
    
    // Start rotation (but only if there are multiple messages)
    if (welcomeMessages.length > 1) {
        setInterval(rotateWelcomeMessage, 4000);
    }
    
    // Add click functionality to indicator dots with animation
    indicatorDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Don't do anything if clicking the active dot
            if (index === currentIndex) return;
            
            // Remove active class from current message and dot
            welcomeMessages[currentIndex].classList.remove('active');
            indicatorDots[currentIndex].classList.remove('active');
            
            // Store old index for animation
            const oldIndex = currentIndex;
            
            // Set new index
            currentIndex = index;
            
            // Add active class to new message and dot
            welcomeMessages[currentIndex].classList.add('active');
            indicatorDots[currentIndex].classList.add('active');
            
            // Animate the transition
            animateLanguageSwitch(oldIndex, currentIndex);
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact form (if exists)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // If validation passes, show success message
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    document.getElementById('contactForm').reset();
    return false; // Prevent actual form submission for demo purposes
}

// Add dynamic background effects with 3D parallax
document.addEventListener('mousemove', function(e) {
    const elements = document.querySelectorAll('.element');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    elements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        const depth = index * 30; // Different Z-depth for each element
        el.style.transform = `translate(${x * speed * 50}px, ${y * speed * 50}px) translateZ(${depth}px)`;
    });
});

// Add 3D tilt effect to cards
function add3DTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .language-item, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateY = (mouseX / cardRect.width) * 10; // Max 10 degrees
            const rotateX = -(mouseY / cardRect.height) * 10; // Max 10 degrees
            
            this.style.transform = `translateZ(30px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateZ(0px)';
        });
    });
}

// Initialize 3D tilt effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    add3DTiltEffect();
});