// Custom JavaScript for Semana 2 - Paradigmas de Simulación

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Presentación Semana 2 - Paradigmas de Simulación cargada');
    
    // Add interactive behaviors
    initializeInteractiveElements();
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
    
    // Initialize timers for activities
    initializeTimers();
});

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to concept boxes
    const conceptBoxes = document.querySelectorAll('.concept-box');
    conceptBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click effects to interactive boxes
    const interactiveBoxes = document.querySelectorAll('.interactive-box');
    interactiveBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.background = 'rgba(233, 171, 33, 0.3)';
            setTimeout(() => {
                this.style.background = 'rgba(233, 171, 33, 0.2)';
            }, 200);
        });
    });
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Press 'h' to show help
        if (event.key === 'h' || event.key === 'H') {
            showHelp();
        }
        
        // Press 't' to toggle timer
        if (event.key === 't' || event.key === 'T') {
            toggleTimer();
        }
        
        // Press 'c' to show classification cheat sheet
        if (event.key === 'c' || event.key === 'C') {
            showClassificationCheatSheet();
        }
    });
}

// Show help overlay
function showHelp() {
    const helpContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="helpOverlay">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px;">
                <h3>Atajos de Teclado</h3>
                <ul style="text-align: left;">
                    <li><strong>H:</strong> Mostrar esta ayuda</li>
                    <li><strong>T:</strong> Activar/desactivar temporizador</li>
                    <li><strong>C:</strong> Mostrar guía de clasificación</li>
                    <li><strong>ESC:</strong> Cerrar overlays</li>
                    <li><strong>Espacio:</strong> Siguiente slide</li>
                    <li><strong>Shift + Espacio:</strong> Slide anterior</li>
                </ul>
                <button onclick="closeOverlay('helpOverlay')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #28a745; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', helpContent);
    
    // Close on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeOverlay('helpOverlay');
        }
    });
}

// Show classification cheat sheet
function showClassificationCheatSheet() {
    const cheatSheetContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="cheatSheetOverlay">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 600px;">
                <h3>Guía Rápida de Clasificación</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: left;">
                    <div>
                        <h4 style="color: #28a745;">Temporal</h4>
                        <p><strong>Discreto:</strong> Cambios instantáneos en puntos específicos</p>
                        <p><strong>Continuo:</strong> Cambios graduales y constantes</p>
                    </div>
                    <div>
                        <h4 style="color: #910048;">Aleatoriedad</h4>
                        <p><strong>Determinístico:</strong> Mismas entradas = mismas salidas</p>
                        <p><strong>Estocástico:</strong> Interviene el azar</p>
                    </div>
                </div>
                <button onclick="closeOverlay('cheatSheetOverlay')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #910048; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', cheatSheetContent);
}

// Close overlay function
function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.remove();
    }
}

// Timer functionality
let timerInterval;
let timerActive = false;
let timeRemaining = 300; // 5 minutes default

function initializeTimers() {
    // Look for timer boxes and add functionality
    const timerBoxes = document.querySelectorAll('.timer-box');
    timerBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const timeText = this.textContent;
            const minutes = parseInt(timeText.match(/(\d+)\s*minutos?/)?.[1] || '5');
            startTimer(minutes * 60);
        });
    });
}

function toggleTimer() {
    if (timerActive) {
        stopTimer();
    } else {
        startTimer(300); // 5 minutes default
    }
}

function startTimer(seconds) {
    timeRemaining = seconds;
    timerActive = true;
    
    // Create timer display
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timerDisplay';
    timerDisplay.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #910048;
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-weight: bold;
        z-index: 1000;
        font-size: 1.2em;
    `;
    document.body.appendChild(timerDisplay);
    
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            stopTimer();
            alert('¡Tiempo terminado!');
        }
        
        timeRemaining--;
    }, 1000);
}

function stopTimer() {
    timerActive = false;
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.remove();
    }
}

// Add slide-specific behaviors
Reveal.addEventListener('slidechanged', function(event) {
    const currentSlide = event.currentSlide;
    
    // Auto-start timers on activity slides
    if (currentSlide.querySelector('.timer-box')) {
        console.log('Slide con actividad detectado');
    }
    
    // Add special effects for paradigm slides
    if (currentSlide.querySelector('.paradigm-comparison')) {
        animateParadigmCards();
    }
});

// Animate paradigm cards
function animateParadigmCards() {
    const cards = document.querySelectorAll('.paradigm-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 300);
        }, index * 200);
    });
}

// Add classification helper
function classifySystem(system, temporal, randomness) {
    return {
        system: system,
        temporal: temporal, // 'discrete' or 'continuous'
        randomness: randomness, // 'deterministic' or 'stochastic'
        description: `${system} es ${temporal} y ${randomness}`
    };
}

// Example classifications for reference
const exampleClassifications = [
    classifySystem('Cajero automático', 'discreto', 'estocástico'),
    classifySystem('Llenado de tanque', 'continuo', 'determinístico'),
    classifySystem('Llegada de clientes', 'discreto', 'estocástico'),
    classifySystem('Crecimiento poblacional', 'continuo', 'estocástico'),
    classifySystem('Cálculo de interés', 'discreto', 'determinístico')
];

console.log('Ejemplos de clasificación cargados:', exampleClassifications);

// Interactive Classification System
function initializeClassificationSystem() {
    // Add click handlers for classification cards
    const classificationItems = document.querySelectorAll('[onclick*="borderColor"]');
    classificationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle selection
            if (this.style.borderColor === 'rgb(40, 167, 69)') {
                this.style.borderColor = '#ddd';
                this.style.background = 'rgba(255, 255, 255, 0.9)';
            } else {
                this.style.borderColor = '#28a745';
                this.style.background = 'rgba(40, 167, 69, 0.1)';
            }
        });
    });
}

// Classification Helper Function
function showClassificationHint(systemName) {
    const hints = {
        'cajero': 'Pista: ¿El saldo cambia gradualmente o de golpe cuando retiras dinero?',
        'piscina': 'Pista: ¿El agua sube de manera constante o a saltos?',
        'produccion': 'Pista: ¿Los autos se completan uno por uno o gradualmente?',
        'bacteria': 'Pista: ¿Las bacterias se reproducen constantemente o en momentos específicos?',
        'semaforos': 'Pista: ¿Las luces cambian gradualmente o instantáneamente?'
    };
    
    const hint = hints[systemName.toLowerCase()];
    if (hint) {
        alert(hint);
    }
}

// Enhanced slide navigation with progress tracking
let slideProgress = {
    temporal: false,
    aleatoriedad: false,
    agentes: false,
    actividades: false
};

function updateProgress(section) {
    slideProgress[section] = true;
    updateProgressIndicator();
}

function updateProgressIndicator() {
    const completed = Object.values(slideProgress).filter(Boolean).length;
    const total = Object.keys(slideProgress).length;
    const percentage = (completed / total) * 100;
    
    // Update any progress indicators on the page
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = percentage + '%';
    });
}

// Gallery interaction functions
function initializeGalleries() {
    // Add click handlers for gallery items
    const galleryItems = document.querySelectorAll('[style*="transform: scale"]');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle flash effect when clicked
            const originalBg = this.style.background;
            this.style.background = 'rgba(233, 171, 33, 0.2)';
            setTimeout(() => {
                this.style.background = originalBg;
            }, 300);
            
            // Show additional info if available
            const title = this.querySelector('h6');
            if (title) {
                showGalleryInfo(title.textContent);
            }
        });
    });
}

function showGalleryInfo(title) {
    const info = {
        'Sistema de Colas': 'Los clientes llegan y son atendidos en momentos específicos. El número en cola cambia instantáneamente.',
        'Cajero Automático': 'Las transacciones ocurren en eventos discretos. El saldo se actualiza inmediatamente.',
        'Línea de Producción': 'Los productos se completan uno por uno en momentos determinados del proceso.',
        'Flujo de Líquido': 'El caudal varía continuamente según la presión y las condiciones del sistema.',
        'Transferencia de Calor': 'La temperatura cambia gradualmente siguiendo las leyes de la termodinámica.',
        'Crecimiento Poblacional': 'La población aumenta de forma continua según tasas de natalidad y mortalidad.',
        'Posición de Partícula': 'La trayectoria se calcula exactamente usando ecuaciones de movimiento.',
        'Cálculo de Interés': 'El resultado es predecible usando fórmulas matemáticas establecidas.',
        'Cantidad Económica (CEP)': 'La cantidad óptima se determina mediante optimización matemática.',
        'Llegada de Clientes': 'Los tiempos de llegada siguen distribuciones probabilísticas.',
        'Fallas de Equipos': 'Las fallas ocurren según patrones probabilísticos impredecibles.',
        'Fluctuaciones del Mercado': 'Los precios varían según factores aleatorios múltiples.',
        'Sistema Aeroportuario': 'Combina llegadas discretas de aviones con flujo continuo de combustible.',
        'Sistema Hospitalario': 'Mezcla llegadas discretas de pacientes con uso continuo de recursos.',
        'Planta Manufacturera': 'Integra órdenes discretas con flujos continuos de materiales.'
    };
    
    const description = info[title];
    if (description) {
        // Create a tooltip or small popup
        const tooltip = document.createElement('div');
        tooltip.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            max-width: 300px;
            z-index: 10000;
            font-size: 0.9em;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        tooltip.innerHTML = `
            <h6 style="margin: 0 0 0.5rem 0; color: #E9AB21;">${title}</h6>
            <p style="margin: 0; line-height: 1.4;">${description}</p>
            <button onclick="this.parentElement.remove()" 
                    style="margin-top: 0.8rem; padding: 0.3rem 0.8rem; 
                           background: #E9AB21; color: black; border: none; 
                           border-radius: 4px; cursor: pointer; font-size: 0.8em;">
                Cerrar
            </button>
        `;
        
        document.body.appendChild(tooltip);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (tooltip.parentElement) {
                tooltip.remove();
            }
        }, 8000);
    }
}

// Enhanced image loading with fallbacks
function handleImageError(img) {
    // Fallback to a placeholder if Unsplash image fails
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
    img.alt = 'Imagen no disponible';
}

// Initialize enhanced features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeClassificationSystem();
    initializeGalleries();
    
    // Add error handling to all images
    const images = document.querySelectorAll('img[src*="unsplash"]');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
    
    // Add progress tracking to slides
    Reveal.addEventListener('slidechanged', function(event) {
        const slide = event.currentSlide;
        
        // Track progress based on slide content
        if (slide.querySelector('h2').textContent.includes('Temporal')) {
            updateProgress('temporal');
        } else if (slide.querySelector('h2').textContent.includes('Aleatoriedad')) {
            updateProgress('aleatoriedad');
        } else if (slide.querySelector('h2').textContent.includes('Agentes')) {
            updateProgress('agentes');
        } else if (slide.querySelector('h2').textContent.includes('Actividades')) {
            updateProgress('actividades');
        }
    });
});

// Interactive Timer Functions for Activities
let timers = {};

function startTimer(timerId, seconds) {
    // Stop any existing timer for this ID
    if (timers[timerId]) {
        clearInterval(timers[timerId].interval);
    }
    
    // Initialize timer object
    timers[timerId] = {
        timeRemaining: seconds,
        originalTime: seconds,
        interval: null,
        isRunning: true
    };
    
    // Start the countdown
    timers[timerId].interval = setInterval(() => {
        const timer = timers[timerId];
        const minutes = Math.floor(timer.timeRemaining / 60);
        const secs = timer.timeRemaining % 60;
        
        // Update display
        const display = document.getElementById(timerId + '-display');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            
            // Change color when time is running low
            if (timer.timeRemaining <= 60) {
                display.style.color = '#dc3545'; // Red
            } else if (timer.timeRemaining <= 120) {
                display.style.color = '#ffc107'; // Yellow
            } else {
                display.style.color = 'var(--uide-primary)'; // Normal
            }
        }
        
        // Check if time is up
        if (timer.timeRemaining <= 0) {
            clearInterval(timer.interval);
            timer.isRunning = false;
            
            // Flash the timer and show alert
            if (display) {
                display.style.animation = 'flash 1s infinite';
                display.textContent = '00:00';
            }
            
            // Show notification
            showTimerNotification(timerId);
        }
        
        timer.timeRemaining--;
    }, 1000);
}

function pauseTimer(timerId) {
    if (timers[timerId] && timers[timerId].interval) {
        clearInterval(timers[timerId].interval);
        timers[timerId].isRunning = false;
        
        // Update display to show paused state
        const display = document.getElementById(timerId + '-display');
        if (display) {
            display.style.opacity = '0.6';
        }
    }
}

function resetTimer(timerId, seconds) {
    // Clear existing timer
    if (timers[timerId]) {
        clearInterval(timers[timerId].interval);
    }
    
    // Reset display
    const display = document.getElementById(timerId + '-display');
    if (display) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        display.style.color = 'var(--uide-primary)';
        display.style.opacity = '1';
        display.style.animation = 'none';
    }
    
    // Reset timer object
    timers[timerId] = {
        timeRemaining: seconds,
        originalTime: seconds,
        interval: null,
        isRunning: false
    };
}

function showTimerNotification(timerId) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #dc3545;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 1.5em;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: pulse 0.5s ease-in-out;
    `;
    notification.innerHTML = `
        <i class="fas fa-clock"></i> ¡Tiempo terminado!
        <div style="font-size: 0.7em; margin-top: 10px;">
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: white; color: #dc3545; border: none; 
                           padding: 5px 15px; border-radius: 5px; cursor: pointer;">
                Cerrar
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    // Play sound if available
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.play().catch(() => {
            // Ignore audio errors
        });
    } catch (e) {
        // Ignore audio errors
    }
}