// HCI Presentation Controller - Simple and Efficient
class PresentationController {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;
        
        // Cache DOM elements
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlideEl = document.getElementById('currentSlide');
        this.totalSlidesEl = document.getElementById('totalSlides');
        this.progressBar = document.getElementById('progressBar');
        
        this.init();
    }

    init() {
        // Set total slides
        if (this.totalSlidesEl) {
            this.totalSlidesEl.textContent = this.totalSlides;
        }
        
        // Bind events
        this.bindEvents();
        
        // Show first slide
        this.goToSlide(0);
        
        console.log('✅ HCI Presentation initialized with', this.totalSlides, 'slides');
    }

    bindEvents() {
        // Button navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isTransitioning) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
            }
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.previousSlide();
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || this.isTransitioning) {
            return;
        }
        
        this.isTransitioning = true;
        
        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });
        
        // Show target slide
        this.slides[index].classList.add('active');
        this.slides[index].style.display = 'flex';
        
        this.currentSlide = index;
        
        // Update UI
        this.updateUI();
        
        // Allow transitions again
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
    }

    updateUI() {
        // Update slide counter
        if (this.currentSlideEl) {
            this.currentSlideEl.textContent = this.currentSlide + 1;
        }
        
        // Update progress bar
        if (this.progressBar) {
            const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
        
        // Update button states
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
    initMonteCarlo();
    initCoinFlip();
});

console.log('🚀 HCI Presentation system loaded');

// Monte Carlo Pi Simulation
function initMonteCarlo() {
    const canvas = document.getElementById('piCanvas');
    if (!canvas) return; // Canvas no existe en esta página

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Variables de estado
    let isRunning = false;
    let pointsInside = 0;
    let pointsOutside = 0;
    let totalPoints = 0;
    let animationId = null;

    // Radio del círculo (mitad del canvas)
    const radius = width / 2;
    const centerX = width / 2;
    const centerY = height / 2;

    // Elementos del DOM
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
    const insideCountEl = document.getElementById('insideCount');
    const outsideCountEl = document.getElementById('outsideCount');
    const totalCountEl = document.getElementById('totalCount');
    const piValueEl = document.getElementById('piValue');

    // Dibujar el círculo inicial
    function drawCircle() {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Resetear el canvas
    function reset() {
        isRunning = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        pointsInside = 0;
        pointsOutside = 0;
        totalPoints = 0;

        // Limpiar canvas
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);

        // Redibujar círculo
        drawCircle();

        // Actualizar UI
        updateDisplay();
    }

    // Actualizar los valores mostrados
    function updateDisplay() {
        insideCountEl.textContent = pointsInside;
        outsideCountEl.textContent = pointsOutside;
        totalCountEl.textContent = totalPoints;

        if (totalPoints > 0) {
            const piEstimate = 4 * (pointsInside / totalPoints);
            piValueEl.textContent = piEstimate.toFixed(5);
        } else {
            piValueEl.textContent = '0';
        }
    }

    // Generar y dibujar puntos
    function generatePoints() {
        // Generar 100 puntos por frame para animación más rápida
        for (let i = 0; i < 100; i++) {
            // Generar coordenadas aleatorias
            const x = Math.random() * width;
            const y = Math.random() * height;

            // Calcular distancia al centro
            const distance = Math.sqrt(
                Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );

            // Verificar si está dentro del círculo
            if (distance <= radius) {
                pointsInside++;
                ctx.fillStyle = 'green';
            } else {
                pointsOutside++;
                ctx.fillStyle = 'red';
            }

            totalPoints++;

            // Dibujar punto (más pequeño para mejor visualización)
            ctx.fillRect(x, y, 1, 1);
        }

        // Actualizar display
        updateDisplay();

        // Continuar si está corriendo
        if (isRunning) {
            animationId = requestAnimationFrame(generatePoints);
        }
    }

    // Event listeners
    startBtn.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = true;
            generatePoints();
        }
    });

    stopBtn.addEventListener('click', () => {
        isRunning = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });

    resetBtn.addEventListener('click', () => {
        reset();
    });

    // Inicializar
    reset();

    console.log('✅ Monte Carlo simulation initialized');
}

// Coin Flip Simulation
function initCoinFlip() {
    const coin = document.getElementById('coin');
    const flipBtn = document.getElementById('coin-flip-button');
    const resetBtn = document.getElementById('coin-reset-button');
    const flipsInput = document.getElementById('coin-flips-input');
    const headsCountEl = document.getElementById('coin-heads-count');
    const tailsCountEl = document.getElementById('coin-tails-count');
    const percentageEl = document.getElementById('coin-percentage');

    if (!coin || !flipBtn) return; // Elementos no existen

    let heads = 0;
    let tails = 0;
    let isRunning = false;

    function updateStats() {
        headsCountEl.textContent = heads;
        tailsCountEl.textContent = tails;

        const total = heads + tails;
        if (total > 0) {
            const percentage = ((heads / total) * 100).toFixed(2);
            percentageEl.textContent = percentage + '%';
        } else {
            percentageEl.textContent = '0%';
        }
    }

    async function flipCoinOnce() {
        const i = Math.floor(Math.random() * 2);

        // Remover animaciones previas
        coin.classList.remove('spinning-heads', 'spinning-tails');

        // Forzar reflow para reiniciar animación
        void coin.offsetWidth;

        if (i) {
            // Caras
            coin.classList.add('spinning-heads');
            heads++;
        } else {
            // Sello
            coin.classList.add('spinning-tails');
            tails++;
        }

        // Esperar a que termine la animación (3 segundos)
        await sleep(3000);
    }

    // Función para ejecutar múltiples lanzamientos
    async function performFlips(count) {
        if (isRunning) return;

        isRunning = true;
        flipBtn.disabled = true;
        resetBtn.disabled = true;
        if (flipsInput) flipsInput.disabled = true;

        // Resetear contadores
        coin.classList.remove('spinning-heads', 'spinning-tails');
        heads = 0;
        tails = 0;
        updateStats();

        // Esperar un momento antes de comenzar
        await sleep(500);

        // Realizar lanzamientos
        for (let i = 0; i < count; i++) {
            await flipCoinOnce();
            updateStats();

            // Pequeña pausa adicional para ver el resultado
            await sleep(800);
        }

        isRunning = false;
        flipBtn.disabled = false;
        resetBtn.disabled = false;
        if (flipsInput) flipsInput.disabled = false;

        console.log(`✅ Completados ${count} lanzamientos: ${heads} caras (${((heads/count)*100).toFixed(2)}%)`);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    flipBtn.addEventListener('click', () => {
        if (isRunning) return;

        const count = parseInt(flipsInput.value) || 10;

        // Validar el rango
        if (count < 1) {
            alert('El número de lanzamientos debe ser al menos 1');
            return;
        }
        if (count > 100000) {
            alert('El número máximo de lanzamientos es 100,000');
            return;
        }

        performFlips(count);
    });

    resetBtn.addEventListener('click', () => {
        if (isRunning) return;

        coin.classList.remove('spinning-heads', 'spinning-tails');
        heads = 0;
        tails = 0;
        updateStats();
    });

    console.log('✅ Coin flip simulation initialized');
}
