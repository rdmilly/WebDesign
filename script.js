// ========================================
// PNWLights.com - Interactive Functionality
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initStickyHeader();
    initFAQAccordion();
    initSmoothScroll();
    initFormTracking();
    initScrollAnimations();
});

// ========================================
// STICKY HEADER
// ========================================

function initStickyHeader() {
    const header = document.querySelector('.sticky-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 10) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// SMOOTH SCROLL TO SECTIONS
// ========================================

function initSmoothScroll() {
    // All links that should smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip empty hrefs
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL TO FORM
// ========================================

function scrollToForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        const headerOffset = 80;
        const elementPosition = form.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Track form view
        trackFormView();
    }
}

// ========================================
// SCROLL TO GALLERY
// ========================================

function scrollToGallery() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        const headerOffset = 80;
        const elementPosition = gallery.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Alternative function for inline onclick (backward compatibility)
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    faqItem.classList.toggle('active');
}

// ========================================
// FORM TRACKING
// ========================================

function initFormTracking() {
    // Track when form comes into view
    const form = document.getElementById('contact-form');

    if (form && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackFormView();
                    observer.unobserve(form); // Only track once
                }
            });
        }, {
            threshold: 0.5 // Form is 50% visible
        });

        observer.observe(form);
    }
}

function trackFormView() {
    // Placeholder for analytics tracking
    // You can add Google Analytics or other tracking here
    console.log('Form viewed');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.gallery-item, .service-column, .comparison-column, .testimonial-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ========================================
// PHONE NUMBER CLICK TRACKING
// ========================================

document.addEventListener('click', function(e) {
    if (e.target.closest('.phone-link')) {
        console.log('Phone number clicked');
        // Add analytics tracking here if needed
    }
});

// ========================================
// EXIT INTENT POPUP (Optional)
// ========================================

function initExitIntent() {
    let exitIntentShown = false;

    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitIntentShown && window.pageYOffset > 500) {
            // User is trying to leave after scrolling
            exitIntentShown = true;
            showExitIntentOffer();
        }
    });
}

function showExitIntentOffer() {
    // This is a placeholder for an exit-intent popup
    // You can implement a modal here if desired
    console.log('Exit intent triggered');
}

// Uncomment the line below to enable exit-intent popup
// initExitIntent();

// ========================================
// MOBILE MENU (if needed in future)
// ========================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images (if real images are added)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ========================================
// JOBBER FORM ENHANCEMENTS
// ========================================

// Monitor Jobber form load
window.addEventListener('load', function() {
    const jobberFormContainer = document.getElementById('5074f8e7-aa1f-489a-9907-cc0a0862f9de-422785');

    if (jobberFormContainer) {
        // Check if form loaded successfully
        const checkFormLoad = setInterval(function() {
            if (jobberFormContainer.children.length > 0) {
                console.log('Jobber form loaded successfully');
                clearInterval(checkFormLoad);
            }
        }, 1000);

        // Stop checking after 10 seconds
        setTimeout(function() {
            clearInterval(checkFormLoad);
        }, 10000);
    }
});

// ========================================
// CONSOLE BRANDING (Optional)
// ========================================

console.log('%cPNWLights.com', 'font-size: 24px; font-weight: bold; color: #2C5530;');
console.log('%cNewberg\'s Premier Holiday Lighting Professionals', 'font-size: 14px; color: #D4AF37;');
console.log('%cWebsite by Claude Code', 'font-size: 12px; color: #666;');
// ========================================
// PROJECT MODAL FUNCTIONALITY
// ========================================

// Project data with photos and details
const projectData = {
    'betty-lou': {
        title: 'Betty Lou\'s Baked Goods - JOY Display',
        subtitle: 'Commercial Manufacturing Plant - McMinnville, OR',
        type: 'Commercial',
        location: 'McMinnville, OR',
        features: ['Custom JOY Letters', 'Tree Wrapping', 'Ground Lighting', '3-Year Installation (2020-2022)', 'Major Manufacturing Facility'],
        images: [
            './images/Betty Lou/5.jpg',
            './images/Betty Lou/1.jpg',
            './images/Betty Lou/6.jpg',
            './images/Betty Lou/7.jpg',
            './images/Betty Lou/2.jpg',
            './images/Betty Lou/3.jpg'
        ]
    },
    'windsor': {
        title: 'Windward Rental Complex - 30ft Tree',
        subtitle: 'Commercial Multi-Property Installation - Lake Oswego, OR',
        type: 'Commercial',
        location: 'Lake Oswego, OR',
        features: ['30-Foot Tall Tree Wrapping', '18 Trees on Street Side', 'Warm White Lights', 'Commercial Grade LEDs', 'Large-Scale Property Display'],
        images: [
            './images/Windsor/Big1.jpg',
            './images/Windsor/Big 2.jpg',
            './images/Windsor/Tue Nov 20 2018 15_42_25 GMT-0800.jpg',
            './images/Windsor/Tue Nov 20 2018 15_46_39 GMT-0800.jpg',
            './images/Windsor/Tue Nov 20 2018 15_49_17 GMT-0800.jpg',
            './images/Windsor/Tue Nov 20 2018 15_50_28 GMT-0800.jpg'
        ]
    },
    'best-western': {
        title: 'Best Western Hotel Lobby',
        subtitle: 'Commercial Hotel Installation - McMinnville, OR',
        type: 'Commercial',
        location: 'McMinnville, OR',
        features: ['Hotel Lobby Display', '3-Year Installation (2018-2020)', 'Major Hotel Property', 'Elegant Wreath', 'Front Entry Accent'],
        images: [
            './images/Best Western/2.jpg',
            './images/Best Western/1.jpg',
            './images/Best Western/3.jpg',
            './images/Best Western/5.jpg',
            './images/Best Western/6.jpg',
            './images/Best Western/7.jpg'
        ]
    },
    'linda-rankin': {
        title: 'Historic Portland Home',
        subtitle: 'Certified Historic Building - Portland, OR',
        type: 'Historic Residential',
        location: 'Portland, OR',
        features: ['Certified Historic Building', 'Non-Invasive Installation', 'Concrete Chimney Feature', 'No Structural Attachments', 'Special Care Installation'],
        images: [
            './images/Linda Rankin/20201113_182136_HDR.jpg',
            './images/Linda Rankin/20201113_182154_HDR.jpg',
            './images/Linda Rankin/20201113_182223_HDR.jpg',
            './images/Linda Rankin/20201113_182231_HDR.jpg',
            './images/Linda Rankin/20201113_182258_HDR.jpg',
            './images/Linda Rankin/20201113_182308_HDR.jpg'
        ]
    },
    'fairgrounds': {
        title: 'McMinnville Fairgrounds - Historic Outbuilding',
        subtitle: 'Large Commercial Historic Project - McMinnville, OR',
        type: 'Commercial',
        location: 'McMinnville, OR',
        features: ['Historic Outbuilding', '2-Day Complete Building Wrap', 'Lift Equipment Required', 'Full Building Coverage', 'Large-Scale Installation'],
        images: [
            './images/Mcminnville Fairgrounds/20181204_135013.jpg',
            './images/Mcminnville Fairgrounds/20181204_134815_HDR.jpg',
            './images/Mcminnville Fairgrounds/20181204_135006.jpg',
            './images/Mcminnville Fairgrounds/20181204_135110_HDR.jpg',
            './images/Mcminnville Fairgrounds/20181204_135221_HDR.jpg',
            './images/Mcminnville Fairgrounds/20181204_134934_HDR.jpg'
        ]
    },
    'elks-lodge': {
        title: 'Elks Lodge - Christmas Drive-Through',
        subtitle: 'Large-Scale Commercial Event Display',
        type: 'Commercial',
        location: 'Yamhill County, OR',
        features: ['2-Year Installation (2021-2022)', 'Complete Drive-Through Display', '200+ Individual Lit Displays', 'Community Event', 'Large-Scale Property Installation'],
        images: [
            './images/Elks Lodge/1.jpg',
            './images/Elks Lodge/2.jpg',
            './images/Elks Lodge/3.jpg',
            './images/Elks Lodge/5.jpg',
            './images/Elks Lodge/6.jpg',
            './images/Elks Lodge/7.jpg'
        ]
    }
};

let currentProject = null;
let currentImageIndex = 0;

function openProjectModal(projectId) {
    currentProject = projectId;
    currentImageIndex = 0;

    const project = projectData[projectId];
    const modal = document.getElementById('project-modal');

    // Set project details
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-subtitle').textContent = project.subtitle;
    document.getElementById('modal-type').textContent = project.type;
    document.getElementById('modal-location').textContent = project.location;

    // Set features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Load first image
    loadModalImage(0);

    // Show modal with animation
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    // Reset after animation
    setTimeout(() => {
        currentProject = null;
        currentImageIndex = 0;
    }, 600);
}

function loadModalImage(index) {
    if (!currentProject) return;

    const project = projectData[currentProject];
    const images = project.images;

    // Ensure index is within bounds
    currentImageIndex = ((index % images.length) + images.length) % images.length;

    const imgElement = document.getElementById('modal-image');
    const counter = document.getElementById('image-counter');

    // Remove loaded class for transition
    imgElement.classList.remove('loaded');

    // Short delay for smooth transition
    setTimeout(() => {
        imgElement.src = images[currentImageIndex];
        imgElement.onload = () => {
            imgElement.classList.add('loaded');
        };
        counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }, 200);
}

function changeModalImage(direction) {
    loadModalImage(currentImageIndex + direction);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('project-modal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
        changeModalImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeModalImage(1);
    }
});
