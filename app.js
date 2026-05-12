lucide.createIcons();

document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-ivo-dark/95');
        navbar.classList.remove('bg-ivo-dark/90');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-ivo-dark/95');
        navbar.classList.add('bg-ivo-dark/90');
    }
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content > *', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
fadeUpElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

const fadeLeftElements = document.querySelectorAll('.gsap-fade-left');
fadeLeftElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

const fadeRightElements = document.querySelectorAll('.gsap-fade-right');
fadeRightElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

const swipers = document.querySelectorAll('.service-swiper');
swipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
});

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loader"></div> <span>Wird gesendet...</span>';
    submitBtn.disabled = true;
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID'; 

    try {
        if(FORMSPREE_ENDPOINT.includes('REPLACE_WITH_YOUR_ID')) {
            setTimeout(() => {
                formStatus.className = 'mt-4 p-4 rounded-sm text-sm font-medium text-center bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
                formStatus.textContent = 'Demo-Modus: Formular ist aktiv, aber Formspree ID fehlt noch. Siehe setup_guide.md.';
                formStatus.classList.remove('hidden');
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1000);
            return;
        }

        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
            formStatus.className = 'mt-4 p-4 rounded-sm text-sm font-medium text-center bg-green-500/20 text-green-400 border border-green-500/30';
            formStatus.textContent = 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.';
            contactForm.reset();
        } else {
            throw new Error('Netzwerkfehler');
        }
    } catch (error) {
        formStatus.className = 'mt-4 p-4 rounded-sm text-sm font-medium text-center bg-red-500/20 text-red-400 border border-red-500/30';
        formStatus.textContent = 'Oops! Es gab ein Problem beim Senden. Bitte rufen Sie uns stattdessen an.';
    } finally {
        formStatus.classList.remove('hidden');
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 8000);
    }
});
