// Visualización del Periodo Circular
document.addEventListener('DOMContentLoaded', function() {
    const generatePeriodBtn = document.getElementById('generatePeriodBtn');
    
    if (generatePeriodBtn) {
        generatePeriodBtn.addEventListener('click', function() {
            const m = parseInt(document.getElementById('periodM').value) || 16;
            const a = parseInt(document.getElementById('periodA').value) || 5;
            visualizePeriod(m, a);
        });
    }
});

function visualizePeriod(m, a) {
    const c = 1; // Incremento fijo para simplicidad
    const seed = 1;
    
    // Generar secuencia hasta encontrar repetición
    let x = seed;
    const sequence = [x];
    let period = 0;
    
    for (let i = 0; i < m * 2; i++) {
        x = (a * x + c) % m;
        if (sequence.includes(x)) {
            period = sequence.length;
            break;
        }
        sequence.push(x);
    }
    
    // Actualizar estadísticas
    document.getElementById('periodValue').textContent = period;
    document.getElementById('periodModulo').textContent = m;
    const efficiency = ((period / m) * 100).toFixed(1) + '%';
    document.getElementById('periodEfficiency').textContent = efficiency;
    
    // Dibujar visualización circular
    drawPeriodCircle(sequence, m, period);
}

function drawPeriodCircle(sequence, m, period) {
    const canvas = document.getElementById('periodCircle');
    if (!canvas) return;
    
    const container = canvas.parentElement;
    const size = Math.min(container.clientWidth, container.clientHeight) - 40;
    
    // Soporte para alta resolución (4K)
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, size, size);
    
    // Dibujar círculo base
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Dibujar puntos y conexiones animadas
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
        if (currentIndex >= sequence.length) {
            clearInterval(animationInterval);
            
            // Dibujar línea de cierre si hay repetición
            if (period < m) {
                const lastAngle = (2 * Math.PI * sequence[sequence.length - 1]) / m - Math.PI / 2;
                const firstAngle = (2 * Math.PI * sequence[0]) / m - Math.PI / 2;
                
                ctx.strokeStyle = '#f472b6';
                ctx.lineWidth = 3;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(centerX + radius * Math.cos(lastAngle), centerY + radius * Math.sin(lastAngle));
                ctx.lineTo(centerX + radius * Math.cos(firstAngle), centerY + radius * Math.sin(firstAngle));
                ctx.stroke();
                ctx.setLineDash([]);
                
                document.getElementById('periodAnimation').innerHTML = 
                    `<div style="background: rgba(244, 114, 182, 0.2); padding: 10px; border-radius: 8px; border: 2px solid #f472b6;">
                                <strong>⟳ Ciclo detectado</strong><br>
                                <span style="font-size: 0.8rem;">Periodo: ${period} / ${m}</span>
                            </div>`;
            } else {
                document.getElementById('periodAnimation').innerHTML = 
                    `<div style="background: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 8px; border: 2px solid #4ade80;">
                                <strong>✓ Periodo completo</strong><br>
                                <span style="font-size: 0.8rem;">p = m = ${m}</span>
                            </div>`;
            }
            return;
        }
        
        const value = sequence[currentIndex];
        const angle = (2 * Math.PI * value) / m - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Dibujar línea de conexión
        if (currentIndex > 0) {
            const prevValue = sequence[currentIndex - 1];
            const prevAngle = (2 * Math.PI * prevValue) / m - Math.PI / 2;
            const prevX = centerX + radius * Math.cos(prevAngle);
            const prevY = centerY + radius * Math.sin(prevAngle);
            
            ctx.strokeStyle = 'rgba(233, 171, 33, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        // Dibujar punto
        ctx.fillStyle = currentIndex === 0 ? '#4ade80' : '#E9AB21';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        
        // Etiqueta del valor
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x, y - 10);
        
        currentIndex++;
    }, 300); // 300ms entre cada punto
}