// Simulación de Generador Congruencial Lineal simple
function simpleRNG(seed, count = 10) {
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31);
    
    let x = seed;
    const sequence = [];
    
    for (let i = 0; i < count; i++) {
        x = (a * x + c) % m;
        const r = (x / m).toFixed(4);
        sequence.push(r);
    }
    
    return sequence;
}

// Función para animar la generación de números
function animateSequence(elementId, sequence, color) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    sequence.forEach((num, index) => {
        setTimeout(() => {
            const numSpan = document.createElement('span');
            numSpan.textContent = num;
            numSpan.style.display = 'inline-block';
            numSpan.style.margin = '4px';
            numSpan.style.padding = '6px 10px';
            numSpan.style.background = 'rgba(255,255,255,0.1)';
            numSpan.style.borderRadius = '5px';
            numSpan.style.opacity = '0';
            numSpan.style.transform = 'translateY(-10px)';
            numSpan.style.transition = 'all 0.3s ease';
            
            element.appendChild(numSpan);
            
            setTimeout(() => {
                numSpan.style.opacity = '1';
                numSpan.style.transform = 'translateY(0)';
            }, 10);
        }, index * 150);
    });
}

// Event listener para el botón
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const seed1 = parseInt(document.getElementById('seed1').value) || 42;
            const seed2 = parseInt(document.getElementById('seed2').value) || 42;
            
            const seq1 = simpleRNG(seed1, 10);
            const seq2 = simpleRNG(seed2, 10);
            
            animateSequence('sequence1', seq1, '#4ade80');
            animateSequence('sequence2', seq2, '#f472b6');
            
            // Comparar secuencias
            setTimeout(() => {
                const resultDiv = document.getElementById('comparisonResult');
                const areEqual = JSON.stringify(seq1) === JSON.stringify(seq2);
                
                if (areEqual) {
                    resultDiv.innerHTML = '<span style="color: #4ade80;"><i class="fas fa-check-circle"></i> ¡Secuencias IDÉNTICAS! Misma semilla → Misma secuencia</span>';
                } else {
                    resultDiv.innerHTML = '<span style="color: #f472b6;"><i class="fas fa-times-circle"></i> Secuencias DIFERENTES - Semillas distintas generan secuencias distintas</span>';
                }
            }, 1600);
        });
    }
});