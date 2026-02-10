document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact Form Handling (Demo only)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, this would send data to a backend
            alert('Thank you for your message! Use our demo: We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-xl', 'bg-opacity-95');
        } else {
            // Keep background visible but maybe less shadow at top? 
            // Actually our design uses a fixed dark nav, so maybe just shadow toggle
            // For now, it's always dark, so just transitions if we wanted transparency.
        }
    });
});
