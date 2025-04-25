// Header scroll effect
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu mobile
const menuButton = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-desktop').cloneNode(true);

menuButton.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu') || createMobileMenu();
    mobileMenu.classList.toggle('active');
});

function createMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.appendChild(navLinks);
    document.body.appendChild(mobileMenu);
    return mobileMenu;
}

// Animações de fade
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio do formulário
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Aqui você adicionaria a lógica real de envio
        console.log('Dados do formulário:', data);
        
        // Simular sucesso
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
}

// Galeria com lightbox
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = createLightbox(img.src);
        document.body.appendChild(lightbox);
    });
});

function createLightbox(imgSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain;';
    
    lightbox.appendChild(img);
    lightbox.addEventListener('click', () => lightbox.remove());
    
    return lightbox;
}

// Event Listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    document.querySelector('.hero h1').classList.add('visible');
    setTimeout(() => {
        document.querySelector('.hero p').classList.add('visible');
    }, 300);
});
