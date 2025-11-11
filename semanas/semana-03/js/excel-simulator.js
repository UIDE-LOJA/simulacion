// Simulación de Excel
document.addEventListener('DOMContentLoaded', function() {
    const generateExcelBtn = document.getElementById('generateExcelBtn');
    
    if (generateExcelBtn) {
        generateExcelBtn.addEventListener('click', function() {
            const rows = parseInt(document.getElementById('excelRows').value) || 10;
            simulateExcel(rows);
        });
    }
});

function simulateExcel(rows) {
    const a = 5;
    const c = 3;
    const m = 16;
    let x = 7; // Semilla
    
    const tbody = document.getElementById('excelTableBody');
    tbody.innerHTML = '';
    
    const numbers = [];
    
    // Fila 1: Encabezados
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #f0f0f0; color: #000; font-weight: 600;">1</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #000; font-weight: 600;">i</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #000; font-weight: 600;">X<sub>i</sub></td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #000; font-weight: 600;">Fórmula GCL</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #000; font-weight: 600;">R<sub>i</sub></td>
    `;
    tbody.appendChild(tr);
    
    // Fila 2: Parámetros
    tr = document.createElement('tr');
    tr.innerHTML = `
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #f0f0f0; color: #000; font-weight: 600;">2</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff9e6; color: #000;">Params</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff9e6; color: #000;">a=${a}, c=${c}, m=${m}</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff9e6; color: #000;">Semilla</td>
        <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff9e6; color: #000; font-weight: 600;">${x}</td>
    `;
    tbody.appendChild(tr);
    
    // Generar filas con animación
    let currentRow = 0;
    const startRow = 3;
    
    const interval = setInterval(() => {
        if (currentRow >= rows) {
            clearInterval(interval);
            drawMiniHistogram(numbers);
            return;
        }
        
        const xNext = (a * x + c) % m;
        const r = (xNext / m).toFixed(4);
        numbers.push(parseFloat(r));
        
        const excelRow = startRow + currentRow;
        const prevRow = excelRow - 1;
        const formula = `=(${a}*B${prevRow}+${c}) MOD ${m}`;
        
        tr = document.createElement('tr');
        tr.style.opacity = '0';
        tr.style.transition = 'opacity 0.3s';
        
        tr.innerHTML = `
            <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #f0f0f0; color: #000; font-weight: 600;">${excelRow}</td>
            <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #000;">${currentRow}</td>
            <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #217346; font-weight: 600;">${xNext}</td>
            <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: left; background: #fff; color: #000; font-size: 0.7rem;">${formula}</td>
            <td style="border: 1px solid #d0d0d0; padding: 4px 8px; text-align: center; background: #fff; color: #0066cc; font-weight: 600;">${r}</td>
        `;
        
        tbody.appendChild(tr);
        setTimeout(() => tr.style.opacity = '1', 10);
        
        x = xNext;
        currentRow++;
    }, 200);
}

function drawMiniHistogram(numbers) {
    const canvas = document.getElementById('excelMiniHistogram');
    if (!canvas) return;
    
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 10;
    canvas.height = rect.height - 10;
    
    const ctx = canvas.getContext('2d');
    const bins = 10;
    const binCounts = new Array(bins).fill(0);
    
    numbers.forEach(num => {
        const binIndex = Math.min(Math.floor(num * bins), bins - 1);
        binCounts[binIndex]++;
    });
    
    const maxCount = Math.max(...binCounts);
    const barWidth = canvas.width / bins;
    const heightScale = (canvas.height - 10) / maxCount;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    binCounts.forEach((count, i) => {
        const barHeight = count * heightScale;
        const x = i * barWidth;
        const y = canvas.height - barHeight;
        
        ctx.fillStyle = 'rgba(33, 115, 70, 0.7)';
        ctx.fillRect(x + 1, y, barWidth - 2, barHeight);
        
        ctx.strokeStyle = '#217346';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 1, y, barWidth - 2, barHeight);
    });
}
