document.addEventListener('DOMContentLoaded', () => {

    /* ==============================
       NAVBAR SCROLL EFFECT
       ============================== */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==============================
       SWIPER INITIALIZATION (CATALOG)
       ============================== */
    const catalogSwiper = new Swiper('.catalog-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        grabCursor: true,
        // Correção de Z-index e foco da seta 
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4.5,
                spaceBetween: 40,
            },
        }
    });

    /* ==============================
       FAQ ACCORDION LOGIC
       ============================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            // Fecha os outros caso queira que apenas um fique aberto
            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove('active');
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('active');
        });
    });

    /* ==============================
       SMOOTH SCROLL LINKS
       ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==============================
       MOBILE MENU ALERT PLACEHOLDER
       ============================== */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        alert("Mobile menu clicked! (Aqui vai a lógica para expandir o sub-menu mobile)");
    });

    /* ==============================
       SCROLL REVEAL (INTERSECTION OBSERVER)
       ============================== */
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    /* ==============================
       MAGNETIC EFFECT (CTA BUTTONS)
       ============================== */
    const magneticBtns = document.querySelectorAll('.btn-cta, .btn-solid');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
    });

});
