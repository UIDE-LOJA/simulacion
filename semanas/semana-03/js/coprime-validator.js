// Algoritmo de Euclides para calcular MCD
function calcularMCD(a, b) {
    const pasos = [];
    let original_a = a;
    let original_b = b;
    
    while (b !== 0) {
        const resto = a % b;
        pasos.push(`${a} = ${Math.floor(a/b)} × ${b} + ${resto}`);
        a = b;
        b = resto;
    }
    
    return { mcd: a, pasos: pasos };
}

// Validador de coprimos
document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validateCoprimosBtn');
    
    if (validateBtn) {
        validateBtn.addEventListener('click', function() {
            const c = parseInt(document.getElementById('coprimoC').value) || 3;
            const m = parseInt(document.getElementById('coprimoM').value) || 16;
            
            const resultado = calcularMCD(c, m);
            const sonCoprimos = resultado.mcd === 1;
            
            // Mostrar resultado
            const resultDiv = document.getElementById('coprimoResult');
            const processDiv = document.getElementById('coprimoProcess');
            const stepsDiv = document.getElementById('coprimoSteps');
            
            if (sonCoprimos) {
                resultDiv.innerHTML = `
                            <i class="fas fa-check-circle" style="font-size: 4rem; color: #4ade80; margin-bottom: 15px;"></i>
                            <h3 style="font-size: 1.3rem; color: #4ade80; margin: 0 0 10px 0;">¡Son Coprimos!</h3>
                            <p style="font-size: 1rem; color: #e2e8f0; margin: 0 0 8px 0;">MCD(${c}, ${m}) = ${resultado.mcd}</p>
                            <div style="background: rgba(74, 222, 128, 0.1); padding: 12px; border-radius: 6px; border-left: 4px solid #4ade80; margin-top: 15px;">
                                <p style="font-size: 0.85rem; margin: 0; color: #cbd5e1; line-height: 1.5;">
                                    <strong>✓ Válido para GCL</strong><br>
                                    Estos parámetros pueden generar un periodo completo
                                </p>
                            </div>
                        `;
            } else {
                resultDiv.innerHTML = `
                            <i class="fas fa-times-circle" style="font-size: 4rem; color: #f87171; margin-bottom: 15px;"></i>
                            <h3 style="font-size: 1.3rem; color: #f87171; margin: 0 0 10px 0;">No son Coprimos</h3>
                            <p style="font-size: 1rem; color: #e2e8f0; margin: 0 0 8px 0;">MCD(${c}, ${m}) = ${resultado.mcd}</p>
                            <div style="background: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border-left: 4px solid #f87171; margin-top: 15px;">
                                <p style="font-size: 0.85rem; margin: 0; color: #cbd5e1; line-height: 1.5;">
                                    <strong>✗ No recomendado</strong><br>
                                    Tienen factor común: ${resultado.mcd}<br>
                                    El periodo será menor que m
                                </p>
                            </div>
                        `;
            }
            
            // Mostrar proceso
            processDiv.style.display = 'block';
            stepsDiv.innerHTML = `
                        <div style="margin-bottom: 8px; color: #e2e8f0;">
                            <strong>Algoritmo de Euclides:</strong>
                        </div>
                        ${resultado.pasos.map(paso => `<div style="margin-left: 10px;">→ ${paso}</div>`).join('')}
                        <div style="margin-top: 8px; padding: 8px; background: rgba(233, 171, 33, 0.1); border-radius: 4px;">
                            <strong style="color: var(--uide-accent);">Resultado: MCD(${c}, ${m}) = ${resultado.mcd}</strong>
                        </div>
                    `;
        });
    }
});