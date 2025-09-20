// SIUPAY Website JavaScript

// Launch App Functionality
function launchApp() {
    // 여기에 실제 앱 연결 로직을 구현하세요
    // 예: 앱 다운로드 링크, 웹앱 리다이렉션, 또는 딥링크
    
    // 임시로 알림 표시 (실제 구현 시 제거)
    const isConfirmed = confirm('SIUPAY 앱을 실행하시겠습니까?\n\n실제 서비스에서는 앱이나 웹사이트로 연결됩니다.');
    
    if (isConfirmed) {
        // 실제 구현 예시들:
        
        // 1. 웹앱으로 리다이렉션하는 경우
        // window.open('https://app.siupay.com', '_blank');
        
        // 2. 앱 스토어로 리다이렉션하는 경우
        // const userAgent = navigator.userAgent;
        // if (/android/i.test(userAgent)) {
        //     window.open('https://play.google.com/store/apps/details?id=com.siupay.app', '_blank');
        // } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        //     window.open('https://apps.apple.com/app/siupay/id123456789', '_blank');
        // } else {
        //     window.open('https://app.siupay.com', '_blank');
        // }
        
        // 3. 딥링크를 사용하는 경우
        // window.location.href = 'siupay://launch';
        
        // 임시 데모용 - 새 탭에서 현재 사이트 열기
        window.open(window.location.href, '_blank');
    }
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Secondary button smooth scroll to features
    const secondaryButtons = document.querySelectorAll('.btn-secondary');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                const offsetTop = featuresSection.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Counter Animation for Statistics
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        if (element.textContent.includes('%')) {
            element.textContent = (progress * (end - start) + start).toFixed(1) + '%';
        } else if (element.textContent.includes('s')) {
            element.textContent = (progress * (end - start) + start).toFixed(1) + 's';
        } else if (element.textContent.includes('/')) {
            element.textContent = '24/7';
        } else {
            const value = Math.floor(progress * (end - start) + start);
            if (value >= 1000000) {
                element.textContent = (value / 1000000).toFixed(1) + 'M+';
            } else if (value >= 1000) {
                element.textContent = (value / 1000).toFixed(0) + 'K+';
            } else {
                element.textContent = value.toLocaleString();
            }
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counter animations when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((statNumber, index) => {
                const text = statNumber.textContent;
                
                if (text.includes('M+')) {
                    animateCounter(statNumber, 0, 1, 2000);
                } else if (text.includes('s')) {
                    animateCounter(statNumber, 0, 0.5, 2000);
                } else if (text.includes('%')) {
                    animateCounter(statNumber, 0, 99.9, 2000);
                } else if (text.includes('/')) {
                    statNumber.textContent = '24/7';
                }
            });
            
            // Only animate once
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Mobile Menu Toggle (if needed for mobile navigation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Floating Cards Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add random slight rotation and movement
        const randomRotation = (Math.random() - 0.5) * 10; // -5 to 5 degrees
        const randomX = (Math.random() - 0.5) * 20; // -10 to 10px
        const randomY = (Math.random() - 0.5) * 20; // -10 to 10px
        
        card.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`;
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = `rotate(0deg) translate(0px, -10px) scale(1.05)`;
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px) scale(1)`;
        });
    });
});

// Gradient Orbs Interactive Movement
document.addEventListener('mousemove', function(e) {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Button Ripple Effect
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
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
    });
});

// Add ripple effect styles
const rippleStyles = `
.btn-primary, .btn-secondary {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);

// Contact Form Handler (if you add a contact form later)
function handleContactForm(event) {
    event.preventDefault();
    
    // 여기에 실제 폼 제출 로직을 구현하세요
    // 예: API 호출, 이메일 서비스 연동 등
    
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
}

// Performance optimization: Debounced scroll handler
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

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Loading animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = `
body {
    opacity: 0;
    transition: opacity 0.3s ease;
}

body.loaded {
    opacity: 1;
}
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);
