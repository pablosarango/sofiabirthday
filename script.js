// ============================================
// Magic Sparkles Canvas Animation
// ============================================
const canvas = document.getElementById('sparkles-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const sparkles = [];
    const maxSparkles = 50;

    class Sparkle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.life = 100;
            this.decay = Math.random() * 2 + 1;
            this.color = this.getRandomColor();
        }

        getRandomColor() {
            const colors = [
                'rgba(255, 215, 0, ',      // Gold
                'rgba(255, 105, 180, ',    // Pink
                'rgba(147, 112, 219, ',    // Purple
                'rgba(255, 255, 255, '     // White
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.life / 100;
            ctx.fillStyle = this.color + (this.life / 100) + ')';
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color + '0.8)';
            
            // Draw sparkle as a star
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                const x = this.x + Math.cos(angle) * this.size;
                const y = this.y + Math.sin(angle) * this.size;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    function createSparkle(x, y) {
        if (sparkles.length < maxSparkles) {
            for (let i = 0; i < 3; i++) {
                sparkles.push(new Sparkle(x, y));
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = sparkles.length - 1; i >= 0; i--) {
            sparkles[i].update();
            sparkles[i].draw();
            
            if (sparkles[i].life <= 0) {
                sparkles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }

    // Create sparkles on mouse move
    let lastSparkleTime = 0;
    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastSparkleTime > 50) { // Throttle sparkle creation
            createSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    });

    // Create random sparkles periodically
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        createSparkle(x, y);
    }, 500);

    animate();

    // Resize canvas on window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// Video handling con autoplay y unmute
// ============================================
const video = document.getElementById('invitation-video');
const unmuteBtn = document.getElementById('unmute-btn');

// Función para intentar reproducir el video
function playVideo() {
    if (video) {
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
}

// Intenta reproducir cuando la página carga
if (video) {
    // Asegurarse de que el video se reproduce en móvil
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    
    // Intenta reproducir automáticamente
    playVideo();
    
    // Si el usuario interactúa con la página, reproduce el video
    document.addEventListener('touchstart', playVideo, { once: true });
    document.addEventListener('click', playVideo, { once: true });
}

// Botón para activar/desactivar sonido
if (unmuteBtn && video) {
    unmuteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (video.muted) {
            video.muted = false;
            unmuteBtn.querySelector('.mute-icon').textContent = '🔊';
            unmuteBtn.querySelector('.unmute-text').textContent = 'Sonido activado';
            
            // Crear efecto de sparkles
            if (canvas && ctx) {
                const rect = unmuteBtn.getBoundingClientRect();
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const x = rect.left + Math.random() * rect.width;
                        const y = rect.top + Math.random() * rect.height;
                        createSparkle(x, y);
                    }, i * 20);
                }
            }
            
            // Ocultar botón después de 3 segundos
            setTimeout(() => {
                unmuteBtn.style.opacity = '0';
                setTimeout(() => {
                    unmuteBtn.style.display = 'none';
                }, 300);
            }, 3000);
        } else {
            video.muted = true;
            unmuteBtn.querySelector('.mute-icon').textContent = '🔇';
            unmuteBtn.querySelector('.unmute-text').textContent = 'Toca para escuchar';
        }
    });
    
    // Mostrar botón al pasar mouse sobre el video en desktop
    if (video) {
        video.addEventListener('mouseenter', function() {
            if (unmuteBtn.style.display === 'none') {
                unmuteBtn.style.display = 'flex';
                unmuteBtn.style.opacity = '1';
            }
        });
    }
}

// ============================================
// Location button
// ============================================
const locationBtn = document.getElementById('location-btn');
if (locationBtn) {
    locationBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 🏰 ACTUALIZA ESTA URL CON LA UBICACIÓN DE TU EVENTO
        // Formato: https://www.google.com/maps?q=LATITUD,LONGITUD
        // O usa una URL de Google Maps Place directamente
        const locationUrl = 'https://www.google.com/maps?q=-3.9819770042541065, -79.19527422199289'; // Ejemplo: Bogotá
        
        // Abre en nueva pestaña
        window.open(locationUrl, '_blank');
        
        // Efecto visual de click
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Crear efecto de sparkles en el botón
        if (canvas && ctx) {
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 20; i++) {
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createSparkle(x, y);
            }
        }
    });
}

// Formulario RSVP eliminado - Ya no es necesario

// ============================================
// Smooth scroll for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// Scroll animations with Intersection Observer
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Crear sparkles cuando el elemento aparece
            if (canvas && ctx && entry.target.classList.contains('detail-card')) {
                const rect = entry.target.getBoundingClientRect();
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        const x = rect.left + Math.random() * rect.width;
                        const y = rect.top + Math.random() * rect.height;
                        createSparkle(x, y);
                    }, i * 100);
                }
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.detail-card, .btn, .book-quote').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// ============================================
// Enchanted Rose animation enhancement
// ============================================
const enchantedRose = document.querySelector('.enchanted-rose');
if (enchantedRose) {
    enchantedRose.addEventListener('mouseenter', function() {
        if (canvas && ctx) {
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100;
                    const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 100;
                    createSparkle(x, y);
                }, i * 30);
            }
        }
    });
}

// ============================================
// Add magical hover effects to buttons
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (canvas && ctx) {
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 15; i++) {
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createSparkle(x, y);
            }
        }
    });
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🌹 Bella y la Bestia 🏰', 
    'font-size: 24px; font-weight: bold; color: #FFD700; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%c✨ Un cuento mágico te espera ✨', 
    'font-size: 16px; color: #FF69B4; font-style: italic;');
console.log('%cDesarrollado con 💛 y un toque de magia', 
    'font-size: 12px; color: #FFF8DC;');
