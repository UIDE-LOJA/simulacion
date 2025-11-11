// Simulación de Uniformidad con Histograma
document.addEventListener('DOMContentLoaded', function() {
    const generateUniformBtn = document.getElementById('generateUniformBtn');
    
    if (generateUniformBtn) {
        generateUniformBtn.addEventListener('click', function() {
            const count = parseInt(document.getElementById('uniformCount').value) || 100;
            generateUniformDistribution(count);
        });
    }
});

function generateUniformDistribution(count) {
    // Generar números uniformes usando GCL
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31);
    let x = Date.now() % m; // Semilla basada en tiempo
    
    const numbers = [];
    for (let i = 0; i < count; i++) {
        x = (a * x + c) % m;
        numbers.push(x / m);
    }

    // Calcular estadísticas
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;

    // Actualizar estadísticas
    document.getElementById('uniformMean').textContent = mean.toFixed(4);
    document.getElementById('uniformVariance').textContent = variance.toFixed(4);
    document.getElementById('uniformCount2').textContent = count;

    // Crear histograma
    drawHistogram(numbers);
}

function drawHistogram(numbers) {
    const canvas = document.getElementById('uniformHistogram');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();
    
    // Soporte para alta resolución (4K)
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width - 20;
    const height = rect.height - 20;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    const bins = 10;
    const binCounts = new Array(bins).fill(0);
    
    // Contar frecuencias
    numbers.forEach(num => {
        const binIndex = Math.min(Math.floor(num * bins), bins - 1);
        binCounts[binIndex]++;
    });

    const maxCount = Math.max(...binCounts);
    const barWidth = width / bins;
    const heightScale = (height - 40) / maxCount;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Dibujar barras con animación
    binCounts.forEach((count, i) => {
        const barHeight = count * heightScale;
        const x = i * barWidth;
        const y = height - barHeight - 20;

        // Barra
        ctx.fillStyle = 'rgba(233, 171, 33, 0.7)';
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight);

        // Borde
        ctx.strokeStyle = 'rgba(233, 171, 33, 1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 2, y, barWidth - 4, barHeight);

        // Etiqueta de frecuencia
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(count, x + barWidth / 2, y - 5);

        // Etiqueta del bin
        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px Arial';
        const binLabel = ((i / bins).toFixed(1));
        ctx.fillText(binLabel, x + barWidth / 2, height - 5);
    });

    // Línea de referencia (frecuencia esperada)
    const expectedFreq = numbers.length / bins;
    const expectedY = height - (expectedFreq * heightScale) - 20;
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, expectedY);
    ctx.lineTo(width, expectedY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Leyenda
    ctx.fillStyle = '#f472b6';
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Frecuencia esperada', 10, 15);
}