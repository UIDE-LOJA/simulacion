// Prueba de Chi-Cuadrado
document.addEventListener('DOMContentLoaded', function() {
    const generateChiBtn = document.getElementById('generateChiBtn');
    
    if (generateChiBtn) {
        generateChiBtn.addEventListener('click', function() {
            const n = parseInt(document.getElementById('chiCount').value) || 100;
            const k = parseInt(document.getElementById('chiClasses').value) || 10;
            performChiSquareTest(n, k);
        });
    }
});

function performChiSquareTest(n, k) {
    // Generar números uniformes
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31);
    let x = Date.now() % m;
    
    const numbers = [];
    for (let i = 0; i < n; i++) {
        x = (a * x + c) % m;
        numbers.push(x / m);
    }
    
    // Agrupar en K clases
    const observed = new Array(k).fill(0);
    numbers.forEach(num => {
        const classIndex = Math.min(Math.floor(num * k), k - 1);
        observed[classIndex]++;
    });
    
    // Frecuencia esperada (uniforme)
    const expected = n / k;
    
    // Calcular estadístico Chi-Cuadrado
    let chiSquare = 0;
    observed.forEach(fo => {
        chiSquare += Math.pow(fo - expected, 2) / expected;
    });
    
    // Valor crítico aproximado para α = 0.05 y gl = k-1
    // Usando aproximación simple
    const df = k - 1;
    const critical = getChiSquareCritical(df, 0.05);
    
    // Actualizar resultados
    document.getElementById('chiSquare').textContent = chiSquare.toFixed(3);
    document.getElementById('chiCritical').textContent = critical.toFixed(3);
    
    const passed = chiSquare <= critical;
    document.getElementById('chiResult').innerHTML = passed 
        ? '<span style="color: #4ade80;">✓ Pasa</span>' 
        : '<span style="color: #f87171;">✗ Falla</span>';
    
    // Dibujar gráfico
    drawChiSquarePlot(observed, expected, k, passed);
}

function getChiSquareCritical(df, alpha) {
    // Valores críticos aproximados para α = 0.05
    const criticalValues = {
        4: 9.488, 5: 11.070, 6: 12.592, 7: 14.067, 8: 15.507,
        9: 16.919, 10: 18.307, 11: 19.675, 12: 21.026, 13: 22.362,
        14: 23.685, 15: 24.996, 16: 26.296, 17: 27.587, 18: 28.869, 19: 30.144
    };
    return criticalValues[df] || 18.307;
}

function drawChiSquarePlot(observed, expected, k, passed) {
    const canvas = document.getElementById('chiCanvas');
    if (!canvas) return;
    
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    canvas.width = Math.max(rect.width - 20, 300);
    canvas.height = Math.max(rect.height - 20, 300);
    
    const ctx = canvas.getContext('2d');
    const padding = 40;
    const plotWidth = canvas.width - 2 * padding;
    const plotHeight = canvas.height - 2 * padding;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar ejes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Etiquetas de ejes
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Clases', canvas.width / 2, canvas.height - 10);
    
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Frecuencia', 0, 0);
    ctx.restore();
    
    // Encontrar máximo para escala
    const maxFreq = Math.max(...observed, expected);
    const barWidth = plotWidth / k;
    const heightScale = plotHeight / (maxFreq * 1.1);
    
    // Dibujar barras
    observed.forEach((fo, i) => {
        const x = padding + i * barWidth;
        const barW = barWidth * 0.8;
        
        // Barra de frecuencia esperada (fondo, transparente)
        const expectedHeight = expected * heightScale;
        const expectedY = canvas.height - padding - expectedHeight;
        ctx.fillStyle = 'rgba(96, 165, 250, 0.3)';
        ctx.fillRect(x + barW * 0.1, expectedY, barW * 0.8, expectedHeight);
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + barW * 0.1, expectedY, barW * 0.8, expectedHeight);
        
        // Barra de frecuencia observada (frente)
        const observedHeight = fo * heightScale;
        const observedY = canvas.height - padding - observedHeight;
        ctx.fillStyle = passed ? 'rgba(74, 222, 128, 0.7)' : 'rgba(248, 113, 113, 0.7)';
        ctx.fillRect(x + barW * 0.2, observedY, barW * 0.6, observedHeight);
        ctx.strokeStyle = passed ? '#4ade80' : '#f87171';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + barW * 0.2, observedY, barW * 0.6, observedHeight);
        
        // Etiqueta de frecuencia observada
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(fo, x + barW / 2, observedY - 5);
        
        // Etiqueta de clase
        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px Arial';
        ctx.fillText(i + 1, x + barW / 2, canvas.height - padding + 15);
    });
    
    // Leyenda
    ctx.fillStyle = '#60a5fa';
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Fe (esperada)', padding + 10, padding + 15);
    
    ctx.fillStyle = passed ? '#4ade80' : '#f87171';
    ctx.fillText('Fo (observada)', padding + 10, padding + 30);
}
