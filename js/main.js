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
// Galeria com lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryImages = [];  // Para armazenar as imagens

galleryItems.forEach(item => {
    const img = item.querySelector('img');
    galleryImages.push(img.src);  // Adiciona a imagem ao array
    item.addEventListener('click', function() {
        openLightbox(img.src);
    });
});

// Função para abrir o lightbox
let currentIndex = 0; // Índice da imagem atual

function openLightbox(imgSrc) {
    currentIndex = galleryImages.indexOf(imgSrc); // Definir o índice da imagem que foi clicada
    const lightbox = createLightbox(imgSrc);
    document.body.appendChild(lightbox);
    
    // Adicionar evento para navegação com as teclas
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Função para criar o lightbox
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

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: transparent;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
    `;
    closeButton.addEventListener('click', () => closeLightbox(lightbox)); // Fecha o lightbox ao clicar

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '←';
    prevButton.style.cssText = `
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
    `;
    prevButton.addEventListener('click', () => navigateImage(-1)); // Navegar para a imagem anterior

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '→';
    nextButton.style.cssText = `
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        font-size: 30px;
        color: white;
        cursor: pointer;
    `;
    nextButton.addEventListener('click', () => navigateImage(1)); // Navegar para a próxima imagem

    lightbox.appendChild(img);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox(lightbox); // Fecha o lightbox se clicar fora da imagem
        }
    });

    return lightbox;
}

// Função para navegar entre as imagens
function navigateImage(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length; // Garante que o índice seja cíclico
    const newImageSrc = galleryImages[currentIndex];
    document.querySelector('.lightbox img').src = newImageSrc; // Atualiza a imagem no lightbox
}

// Função para fechar o lightbox
function closeLightbox(lightbox) {
    lightbox.remove();
    document.removeEventListener('keydown', handleKeyboardNavigation); // Remover o ouvinte de teclado quando o lightbox for fechado
}

// Função para controlar a navegação do teclado
function handleKeyboardNavigation(e) {
    // Tecla "Esc" para fechar
    if (e.key === 'Escape') {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            closeLightbox(lightbox);
        }
    }
    // Tecla "ArrowLeft" (←) para imagem anterior
    else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
    }
    // Tecla "ArrowRight" (→) para imagem seguinte
    else if (e.key === 'ArrowRight') {
        navigateImage(1);
    }
}


// Event Listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    document.querySelector('.hero h1').classList.add('visible');
    setTimeout(() => {
        document.querySelector('.hero p').classList.add('visible');
    }, 300);
});
