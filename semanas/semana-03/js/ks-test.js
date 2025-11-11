// Prueba de Kolmogorov-Smirnov
document.addEventListener('DOMContentLoaded', function() {
    const generateKSBtn = document.getElementById('generateKSBtn');
    
    if (generateKSBtn) {
        generateKSBtn.addEventListener('click', function() {
            const n = parseInt(document.getElementById('ksCount').value) || 50;
            performKSTest(n);
        });
    }
});

function performKSTest(n) {
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
    
    // Ordenar números
    const sorted = [...numbers].sort((a, b) => a - b);
    
    // Calcular función empírica y desviaciones
    const empirical = sorted.map((val, i) => ({ x: val, y: (i + 1) / n }));
    
    // Calcular estadístico D (máxima desviación)
    let maxD = 0;
    let maxPoint = null;
    
    empirical.forEach((point, i) => {
        const theoretical = point.x; // Para U(0,1), F(x) = x
        const d1 = Math.abs(point.y - theoretical);
        const d2 = Math.abs((i / n) - theoretical);
        
        if (d1 > maxD) {
            maxD = d1;
            maxPoint = { x: point.x, y: point.y, theoretical: theoretical };
        }
        if (d2 > maxD) {
            maxD = d2;
            maxPoint = { x: point.x, y: i / n, theoretical: theoretical };
        }
    });
    
    // Valor crítico (aproximación para α=0.05)
    const criticalValue = 1.36 / Math.sqrt(n);
    
    // Actualizar resultados
    document.getElementById('ksD').textContent = maxD.toFixed(4);
    document.getElementById('ksCritical').textContent = criticalValue.toFixed(4);
    
    const resultDiv = document.getElementById('ksResult');
    if (maxD > criticalValue) {
        resultDiv.textContent = 'Rechazar H₀';
        resultDiv.style.color = '#f87171';
    } else {
        resultDiv.textContent = 'No Rechazar H₀';
        resultDiv.style.color = '#4ade80';
    }
    
    // Dibujar gráfico
    drawKSChart(empirical, maxD, maxPoint);
}

function drawKSChart(empirical, maxD, maxPoint) {
    const canvas = document.getElementById('ksCanvas');
    if (!canvas) return;
    
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width - 20;
    const height = rect.height - 20;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    const padding = 30;
    const plotWidth = width - 2 * padding;
    const plotHeight = height - 2 * padding;
    
    ctx.clearRect(0, 0, width, height);
    
    // Ejes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Función teórica (línea recta)
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, padding);
    ctx.stroke();
    
    // Función empírica (escalones)
    ctx.strokeStyle = '#E9AB21';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    
    empirical.forEach((point, i) => {
        const prevX = i > 0 ? padding + empirical[i-1].x * plotWidth : padding;
        const currentY = height - padding - point.y * plotHeight;
        ctx.lineTo(prevX, currentY);
        
        const currentX = padding + point.x * plotWidth;
        ctx.lineTo(currentX, currentY);
    });
    ctx.stroke();
    
    // Resaltar máxima desviación
    if (maxPoint) {
        const x = padding + maxPoint.x * plotWidth;
        const y1 = height - padding - maxPoint.y * plotHeight;
        const y2 = height - padding - maxPoint.theoretical * plotHeight;
        
        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = '#f472b6';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`D = ${maxD.toFixed(3)}`, x, (y1 + y2) / 2 - 5);
    }
}