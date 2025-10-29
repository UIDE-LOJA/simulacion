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