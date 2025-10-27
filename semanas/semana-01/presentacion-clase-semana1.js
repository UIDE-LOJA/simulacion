// Reveal.js initialization
Reveal.initialize({
    hash: true,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',

    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],

    // Configuración para presentación en clase
    controls: true,
    progress: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    navigationMode: 'default',
    shuffle: false,
    fragments: true,
    fragmentInURL: false,
    embedded: false,
    help: true,
    showNotes: false,
    autoPlayMedia: null,
    preloadIframes: null,
    autoSlide: 0,
    autoSlideStoppable: true,
    mouseWheel: false,
    hideInactiveCursor: true,
    hideCursorTime: 5000,
    previewLinks: false,
    focusBodyOnPageVisibilityChange: true,

    // Configuración de temas
    theme: 'white',

    // Configuración de plugins
    markdown: {
        smartypants: true
    },

    highlight: {
        highlightOnLoad: true
    }
});

// Timer functionality for activities
let timerInterval;

function startTimer(minutes, elementId) {
    let timeLeft = minutes * 60;
    const timerElement = document.getElementById(elementId);

    // Reset classes
    timerElement.className = 'countdown-display';

    timerInterval = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;

        if (timerElement) {
            timerElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

            // Add visual effects based on time remaining
            if (timeLeft <= 10) {
                timerElement.className = 'countdown-display danger';
            } else if (timeLeft <= 30) {
                timerElement.className = 'countdown-display warning';
            }
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (timerElement) {
                timerElement.textContent = "🎉 ¡TIEMPO!";
                timerElement.className = 'countdown-display finished';

                // Play sound effect
                playFinishSound();

                // Show celebration effect
                showCelebration();
            }
        }

        timeLeft--;
    }, 1000);
}

function playFinishSound() {
    // Create audio context for sound generation
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Play a celebratory sound sequence
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C (major chord)

    frequencies.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }, index * 150);
    });
}

function showCelebration() {
    // Create confetti effect
    const timerElement = document.getElementById('event-timer');
    const container = timerElement.parentElement;

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '🎊', '✨', '🌟'][Math.floor(Math.random() * 4)];
            confetti.style.position = 'absolute';
            confetti.style.fontSize = '1.5em';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '0';
            confetti.style.animation = 'fall 2s linear forwards';
            confetti.style.zIndex = '1000';

            container.style.position = 'relative';
            container.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 2000);
        }, i * 100);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}