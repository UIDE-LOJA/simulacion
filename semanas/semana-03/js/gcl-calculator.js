// Calculadora GCL Paso a Paso
document.addEventListener('DOMContentLoaded', function() {
    const generateGCLBtn = document.getElementById('generateGCLBtn');
    
    if (generateGCLBtn) {
        generateGCLBtn.addEventListener('click', function() {
            const seed = parseInt(document.getElementById('gclSeed').value) || 7;
            const a = parseInt(document.getElementById('gclA').value) || 5;
            const c = parseInt(document.getElementById('gclC').value) || 3;
            const m = parseInt(document.getElementById('gclM').value) || 16;
            
            generateGCLSequence(seed, a, c, m);
        });
    }
});

function generateGCLSequence(seed, a, c, m) {
    const stepsDiv = document.getElementById('gclSteps');
    stepsDiv.innerHTML = '';
    
    let x = seed;
    const sequence = [x];
    const maxIterations = Math.min(m + 5, 20); // Limitar a 20 iteraciones para visualización
    
    // Encabezado con parámetros
    let html = `<div style="color: #e2e8f0; margin-bottom: 8px; text-align: center;"><strong>Parámetros:</strong> a=${a}, c=${c}, m=${m}, X₀=${seed}</div>`;
    
    // Crear tabla
    html += `<table style="width: 100%; border-collapse: collapse; font-size: 0.7rem; margin-top: 10px;">`;
    html += `<thead>`;
    html += `<tr style="background: rgba(233, 171, 33, 0.2); border-bottom: 2px solid rgba(233, 171, 33, 0.5);">`;
    html += `<th style="padding: 6px; text-align: center; color: #fbbf24; border: 1px solid rgba(255,255,255,0.1);">i</th>`;
    html += `<th style="padding: 6px; text-align: center; color: #4ade80; border: 1px solid rgba(255,255,255,0.1);">X<sub>i</sub></th>`;
    html += `<th style="padding: 6px; text-align: center; color: #94a3b8; border: 1px solid rgba(255,255,255,0.1);">a·X<sub>i</sub></th>`;
    html += `<th style="padding: 6px; text-align: center; color: #94a3b8; border: 1px solid rgba(255,255,255,0.1);">+c</th>`;
    html += `<th style="padding: 6px; text-align: center; color: #fbbf24; border: 1px solid rgba(255,255,255,0.1);">X<sub>i+1</sub></th>`;
    html += `<th style="padding: 6px; text-align: center; color: #60a5fa; border: 1px solid rgba(255,255,255,0.1);">U<sub>i+1</sub></th>`;
    html += `</tr>`;
    html += `</thead>`;
    html += `<tbody>`;
    
    let periodDetected = false;
    
    for (let i = 0; i < maxIterations; i++) {
        const product = a * x;
        const sum = product + c;
        const xNext = sum % m;
        const u = (xNext / m).toFixed(4);
        
        // Alternar colores de fila
        const bgColor = i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)';
        
        html += `<tr style="background: ${bgColor}; border-bottom: 1px solid rgba(255,255,255,0.05);">`;
        html += `<td style="padding: 5px; text-align: center; color: #f472b6; border: 1px solid rgba(255,255,255,0.05);">${i}</td>`;
        html += `<td style="padding: 5px; text-align: center; color: #4ade80; font-weight: 600; border: 1px solid rgba(255,255,255,0.05);">${x}</td>`;
        html += `<td style="padding: 5px; text-align: center; color: #94a3b8; border: 1px solid rgba(255,255,255,0.05);">${product}</td>`;
        html += `<td style="padding: 5px; text-align: center; color: #94a3b8; border: 1px solid rgba(255,255,255,0.05);">${sum}</td>`;
        html += `<td style="padding: 5px; text-align: center; color: #fbbf24; font-weight: 600; border: 1px solid rgba(255,255,255,0.05);">${xNext}</td>`;
        html += `<td style="padding: 5px; text-align: center; color: #60a5fa; border: 1px solid rgba(255,255,255,0.05);">${u}</td>`;
        html += `</tr>`;
        
        x = xNext;
        
        // Detectar si se repite (periodo)
        if (sequence.includes(x)) {
            const periodStart = sequence.indexOf(x);
            const period = i + 1 - periodStart;
            
            html += `</tbody></table>`;
            html += `<div style="color: #f472b6; margin-top: 10px; padding: 8px; background: rgba(244, 114, 182, 0.1); border-radius: 4px; border-left: 3px solid #f472b6; text-align: center;">`;
            html += `<strong>⟳ Periodo detectado: ${period}</strong><br>`;
            html += `<span style="font-size: 0.65rem;">(se repite X<sub>${periodStart}</sub> = ${x})</span>`;
            html += `</div>`;
            
            document.getElementById('gclPeriod').textContent = period;
            periodDetected = true;
            break;
        }
        
        sequence.push(x);
    }
    
    if (!periodDetected) {
        html += `</tbody></table>`;
    }
    
    stepsDiv.innerHTML = html;
    
    // Actualizar estadísticas
    document.getElementById('gclCount').textContent = sequence.length;
    document.getElementById('gclLastU').textContent = (x / m).toFixed(4);
    
    if (sequence.length >= maxIterations) {
        document.getElementById('gclPeriod').textContent = `>${maxIterations}`;
    }
    
    // Auto-scroll al final del contenedor
    const container = document.getElementById('gclStepsContainer');
    if (container) {
        setTimeout(() => {
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
}