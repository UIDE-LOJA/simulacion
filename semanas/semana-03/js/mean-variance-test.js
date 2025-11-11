// Pruebas de Medias y Varianzas con Gauges
document.addEventListener('DOMContentLoaded', function() {
    const generateMeanVarBtn = document.getElementById('generateMeanVarBtn');
    
    if (generateMeanVarBtn) {
        generateMeanVarBtn.addEventListener('click', function() {
            const n = parseInt(document.getElementById('meanVarCount').value) || 100;
            performMeanVarianceTest(n);
        });
    }
});

function performMeanVarianceTest(n) {
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
    
    // Calcular media
    const mean = numbers.reduce((sum, num) => sum + num, 0) / n;
    
    // Calcular varianza
    const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / n;
    
    // Actualizar valores
    document.getElementById('meanValue').textContent = mean.toFixed(4);
    document.getElementById('varianceValue').textContent = variance.toFixed(4);
    
    // Dibujar gauges
    drawGauge('meanGauge', mean, 0.5, 0.3, 0.7, '#4ade80');
    drawGauge('varianceGauge', variance, 0.0833, 0.05, 0.12, '#60a5fa');
}

function drawGauge(canvasId, value, target, min, max, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height - 20;
    const radius = 100;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar arco de fondo
    const startAngle = Math.PI;
    const endAngle = 2 * Math.PI;
    
    // Zona roja (fuera de rango)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'rgba(248, 113, 113, 0.3)';
    ctx.stroke();
    
    // Zona verde (rango aceptable: ±10% del target)
    const greenMin = target * 0.9;
    const greenMax = target * 1.1;
    const greenStartAngle = startAngle + ((greenMin - min) / (max - min)) * Math.PI;
    const greenEndAngle = startAngle + ((greenMax - min) / (max - min)) * Math.PI;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, greenStartAngle, greenEndAngle);
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'rgba(74, 222, 128, 0.5)';
    ctx.stroke();
    
    // Línea del valor objetivo
    const targetAngle = startAngle + ((target - min) / (max - min)) * Math.PI;
    const targetX = centerX + radius * Math.cos(targetAngle);
    const targetY = centerY + radius * Math.sin(targetAngle);
    
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
    
    // Aguja del valor actual
    const clampedValue = Math.max(min, Math.min(max, value));
    const valueAngle = startAngle + ((clampedValue - min) / (max - min)) * Math.PI;
    const needleLength = radius - 10;
    const needleX = centerX + needleLength * Math.cos(valueAngle);
    const needleY = centerY + needleLength * Math.sin(valueAngle);
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(needleX, needleY);
    ctx.stroke();
    
    // Círculo central
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Etiquetas de escala
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    // Min
    ctx.fillText(min.toFixed(2), centerX - radius - 10, centerY + 5);
    // Max
    ctx.fillText(max.toFixed(2), centerX + radius + 10, centerY + 5);
    // Target
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(target.toFixed(4), centerX, centerY + 25);
}
