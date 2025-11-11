// Simulación de Independencia con Scatter Plot
document.addEventListener('DOMContentLoaded', function() {
    const generateIndependenceBtn = document.getElementById('generateIndependenceBtn');
    
    if (generateIndependenceBtn) {
        generateIndependenceBtn.addEventListener('click', function() {
            const count = parseInt(document.getElementById('independenceCount').value) || 200;
            generateIndependencePlot(count);
        });
    }
});

function generateIndependencePlot(count) {
    // Generar números uniformes usando GCL
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31);
    let x = Date.now() % m;
    
    const numbers = [];
    for (let i = 0; i < count + 1; i++) {
        x = (a * x + c) % m;
        numbers.push(x / m);
    }

    // Crear pares (Xi, Xi+1)
    const pairs = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        pairs.push({ x: numbers[i], y: numbers[i + 1] });
    }

    // Calcular correlación
    const correlation = calculateCorrelation(pairs);
    
    // Actualizar estadísticas
    document.getElementById('correlationCoef').textContent = correlation.toFixed(4);
    
    const absCorr = Math.abs(correlation);
    let status = '';
    if (absCorr < 0.1) {
        status = '✓ Excelente independencia';
    } else if (absCorr < 0.3) {
        status = '✓ Buena independencia';
    } else if (absCorr < 0.5) {
        status = '⚠ Correlación moderada';
    } else {
        status = '✗ Alta correlación';
    }
    document.getElementById('correlationStatus').textContent = status;

    // Dibujar scatter plot
    drawScatterPlot(pairs);
}

function calculateCorrelation(pairs) {
    const n = pairs.length;
    const meanX = pairs.reduce((sum, p) => sum + p.x, 0) / n;
    const meanY = pairs.reduce((sum, p) => sum + p.y, 0) / n;
    
    let numerator = 0;
    let denomX = 0;
    let denomY = 0;
    
    pairs.forEach(p => {
        const dx = p.x - meanX;
        const dy = p.y - meanY;
        numerator += dx * dy;
        denomX += dx * dx;
        denomY += dy * dy;
    });
    
    return numerator / Math.sqrt(denomX * denomY);
}

function drawScatterPlot(pairs) {
    const canvas = document.getElementById('independenceScatter');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    
    // Soporte para alta resolución (4K)
    const dpr = window.devicePixelRatio || 1;
    // Usar el tamaño del contenedor directamente
    const width = Math.min(rect.width - 20, container.clientWidth - 20);
    const height = Math.min(rect.height - 20, container.clientHeight - 20);
    
    // Resetear el canvas antes de redimensionar
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.style.display = 'block';
    ctx.scale(dpr, dpr);

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    const padding = 40;
    const plotWidth = width - 2 * padding;
    const plotHeight = height - 2 * padding;

    // Dibujar ejes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Etiquetas de ejes
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('X_i', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('X_{i+1}', 0, 0);
    ctx.restore();

    // Dibujar puntos
    pairs.forEach((pair, index) => {
        const px = padding + pair.x * plotWidth;
        const py = height - padding - pair.y * plotHeight;
        
        ctx.fillStyle = 'rgba(145, 0, 72, 0.6)';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, 2 * Math.PI);
        ctx.fill();
    });

    // Dibujar líneas de referencia (grid)
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const pos = padding + (i / 4) * plotWidth;
        ctx.beginPath();
        ctx.moveTo(pos, padding);
        ctx.lineTo(pos, height - padding);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(padding, padding + (i / 4) * plotHeight);
        ctx.lineTo(width - padding, padding + (i / 4) * plotHeight);
        ctx.stroke();
    }
}