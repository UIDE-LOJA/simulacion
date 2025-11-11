/**
 * ================================================================================
 * ÍNDICE DE ARCHIVOS JAVASCRIPT - PRESENTACIÓN SEMANA 3
 * ================================================================================
 * Proyecto: 01 FT-06-SIM Simulación-MC
 * Carpeta: semana-03/js/
 * Fecha: 11 de Noviembre de 2025
 * 
 * Este documento describe todos los archivos JavaScript disponibles en la
 * carpeta js/ y cómo se usan en la presentación HTML.
 * ================================================================================
 */

// ================================================================================
// LISTA DE ARCHIVOS JAVASCRIPT
// ================================================================================

/*
 * 1. reproducibility-demo.js
 *    ├─ Tamaño: 2.74 KB
 *    ├─ Descripción: Demostración interactiva de reproducibilidad
 *    ├─ Funciones principales:
 *    │  └─ document.addEventListener('DOMContentLoaded', ...)
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ seed1, seed2, sequence1, sequence2
 *    │  ├─ generateBtn, comparisonResult
 *    │  └─ Canvas opcional para visualizaciones
 *    └─ Descripción: Muestra cómo dos generadores con la misma semilla
 *       producen secuencias idénticas
 *
 * 2. uniformity-demo.js
 *    ├─ Tamaño: 3.65 KB
 *    ├─ Descripción: Visualización de distribución uniforme
 *    ├─ Funciones principales:
 *    │  ├─ generateUniformBtn
 *    │  └─ Canvas: uniformHistogram
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ uniformCount, generateUniformBtn
 *    │  ├─ uniformMean, uniformVariance, uniformCount2
 *    │  └─ uniformHistogram (canvas)
 *    └─ Descripción: Genera números aleatorios y muestra su distribución
 *       en un histograma, verificando uniformidad
 *
 * 3. independence-demo.js
 *    ├─ Tamaño: 4.45 KB
 *    ├─ Descripción: Visualización de independencia estadística
 *    ├─ Funciones principales:
 *    │  ├─ generateIndependenceBtn
 *    │  └─ Canvas: independenceScatter
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ independenceCount, generateIndependenceBtn
 *    │  ├─ correlationCoef, correlationStatus
 *    │  └─ independenceScatter (canvas)
 *    └─ Descripción: Crea un scatter plot de Xi vs Xi+1 y calcula
 *       correlación para verificar independencia
 *
 * 4. gcl-calculator.js
 *    ├─ Tamaño: 5.04 KB
 *    ├─ Descripción: Calculadora paso a paso del Generador Congruencial Lineal
 *    ├─ Funciones principales:
 *    │  ├─ generateGCLBtn
 *    │  └─ Canvas: gclStepsContainer
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ gclSeed, gclA, gclC, gclM
 *    │  ├─ generateGCLBtn, gclSteps
 *    │  ├─ gclCount, gclPeriod, gclLastU
 *    │  └─ gclStepsContainer
 *    └─ Descripción: Muestra paso a paso cómo funciona el algoritmo GCL
 *       X_{i+1} = (a*X_i + c) mod m
 *
 * 5. coprime-validator.js
 *    ├─ Tamaño: 3.82 KB
 *    ├─ Descripción: Validador de números coprimos (MCD = 1)
 *    ├─ Funciones principales:
 *    │  ├─ validateCoprimosBtn
 *    │  ├─ calculateGCD(a, b)
 *    │  └─ Canvas: coprimoResult, coprimoProcess
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ coprimoC, coprimoM
 *    │  ├─ validateCoprimosBtn
 *    │  ├─ coprimoResult, coprimoProcess, coprimoSteps
 *    └─ Descripción: Verifica que c y m sean coprimos usando el
 *       algoritmo de Euclides
 *
 * 6. period-visualizer.js
 *    ├─ Tamaño: 5.22 KB
 *    ├─ Descripción: Visualizador circular del periodo máximo
 *    ├─ Funciones principales:
 *    │  ├─ generatePeriodBtn
 *    │  └─ Canvas: periodCircle
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ periodM, periodA, generatePeriodBtn
 *    │  ├─ periodValue, periodModulo, periodEfficiency
 *    │  ├─ periodCircle (canvas)
 *    │  └─ periodAnimation
 *    └─ Descripción: Visualiza el Teorema de Hull-Dobell para asegurar
 *       periodo máximo = m
 *
 * 7. ks-test.js
 *    ├─ Tamaño: 4.43 KB
 *    ├─ Descripción: Implementación de la Prueba Kolmogorov-Smirnov
 *    ├─ Funciones principales:
 *    │  ├─ generateKSBtn
 *    │  ├─ performKSTest(n)
 *    │  └─ Canvas: ksCanvas
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ ksCount, generateKSBtn
 *    │  ├─ ksD, ksCritical, ksResult
 *    │  └─ ksCanvas (canvas)
 *    └─ Descripción: Comprueba si una muestra se distribuye como U(0,1)
 *       comparando funciones de distribución empírica vs teórica
 *
 * 8. chi-square-test.js
 *    ├─ Tamaño: 5.5 KB
 *    ├─ Descripción: Implementación de la Prueba Chi-Cuadrado
 *    ├─ Funciones principales:
 *    │  ├─ generateChiBtn
 *    │  ├─ performChiSquareTest(n, k)
 *    │  ├─ getChiSquareCritical(df, alpha)
 *    │  ├─ drawChiSquarePlot(observed, expected, k, passed)
 *    │  └─ Canvas: chiCanvas
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ chiCount, chiClasses, generateChiBtn
 *    │  ├─ chiSquare, chiCritical, chiResult
 *    │  └─ chiCanvas (canvas)
 *    └─ Descripción: Prueba si las frecuencias observadas coinciden con
 *       las esperadas en una distribución uniforme
 *
 * 9. mean-variance-test.js
 *    ├─ Tamaño: 3.95 KB
 *    ├─ Descripción: Pruebas de Media y Varianza con Gauges visuales
 *    ├─ Funciones principales:
 *    │  ├─ generateMeanVarBtn
 *    │  ├─ performMeanVarianceTest(n)
 *    │  ├─ drawGauge(canvasId, value, target, min, max, color)
 *    │  ├─ Canvas: meanGauge, varianceGauge
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ meanVarCount, generateMeanVarBtn
 *    │  ├─ meanValue, varianceValue
 *    │  ├─ meanGauge (canvas)
 *    │  └─ varianceGauge (canvas)
 *    └─ Descripción: Calcula media (teórico: 0.5) y varianza (teórico: 1/12)
 *       con indicadores visuales tipo "velocímetro"
 *
 * 10. excel-simulator.js
 *    ├─ Tamaño: 5.13 KB
 *    ├─ Descripción: Simulador de hoja de cálculo Excel interactivo
 *    ├─ Funciones principales:
 *    │  ├─ generateExcelBtn
 *    │  ├─ simulateExcel(rows)
 *    │  ├─ drawMiniHistogram(numbers)
 *    │  └─ Canvas: excelMiniHistogram
 *    ├─ IDs de elementos HTML requeridos:
 *    │  ├─ excelRows, generateExcelBtn
 *    │  ├─ excelTable, excelTableBody
 *    │  └─ excelMiniHistogram (canvas)
 *    └─ Descripción: Simula una hoja de cálculo Excel con la fórmula
 *       GCL Mixto paso a paso
 *
 * 11. mermaid-config.js
 *    ├─ Tamaño: 0.58 KB
 *    ├─ Descripción: Configuración global de Mermaid.js
 *    ├─ Configuración:
 *    │  └─ Tema, estilos y opciones de diagramas
 *    └─ Descripción: Personalización de diagramas generados con Mermaid
 */

// ================================================================================
// ELEMENTOS HTML REQUERIDOS
// ================================================================================

/*
 * Para que todos los scripts funcionen correctamente, el HTML debe contener:
 * 
 * BOTONES:
 *   <button id="generateBtn">...</button>
 *   <button id="generateUniformBtn">...</button>
 *   <button id="generateIndependenceBtn">...</button>
 *   <button id="generateGCLBtn">...</button>
 *   <button id="validateCoprimosBtn">...</button>
 *   <button id="generatePeriodBtn">...</button>
 *   <button id="generateKSBtn">...</button>
 *   <button id="generateChiBtn">...</button>
 *   <button id="generateMeanVarBtn">...</button>
 *   <button id="generateExcelBtn">...</button>
 * 
 * INPUTS:
 *   <input id="seed1" type="number">
 *   <input id="seed2" type="number">
 *   <input id="uniformCount" type="number">
 *   <input id="independenceCount" type="number">
 *   <input id="gclSeed" type="number">
 *   <input id="gclA" type="number">
 *   <input id="gclC" type="number">
 *   <input id="gclM" type="number">
 *   <input id="coprimoC" type="number">
 *   <input id="coprimoM" type="number">
 *   <input id="periodM" type="number">
 *   <input id="periodA" type="number">
 *   <input id="ksCount" type="number">
 *   <input id="chiCount" type="number">
 *   <input id="chiClasses" type="number">
 *   <input id="meanVarCount" type="number">
 *   <input id="excelRows" type="number">
 * 
 * CANVAS (para gráficos):
 *   <canvas id="uniformHistogram"></canvas>
 *   <canvas id="independenceScatter"></canvas>
 *   <canvas id="periodCircle"></canvas>
 *   <canvas id="ksCanvas"></canvas>
 *   <canvas id="chiCanvas"></canvas>
 *   <canvas id="meanGauge"></canvas>
 *   <canvas id="varianceGauge"></canvas>
 *   <canvas id="excelMiniHistogram"></canvas>
 * 
 * DIVS (para resultados):
 *   <div id="sequence1"></div>
 *   <div id="sequence2"></div>
 *   <div id="comparisonResult"></div>
 *   <div id="uniformMean"></div>
 *   <div id="uniformVariance"></div>
 *   <div id="correlationCoef"></div>
 *   <div id="correlationStatus"></div>
 *   <div id="gclSteps"></div>
 *   <div id="coprimoResult"></div>
 *   <div id="coprimoProcess"></div>
 *   <div id="ksD"></div>
 *   <div id="ksCritical"></div>
 *   <div id="ksResult"></div>
 *   <div id="chiSquare"></div>
 *   <div id="chiCritical"></div>
 *   <div id="chiResult"></div>
 *   <div id="meanValue"></div>
 *   <div id="varianceValue"></div>
 *   <div id="excelTableBody"></div>
 */

// ================================================================================
// ESTRUCTURA DE CARPETAS FINAL
// ================================================================================

/*
 * semana-03/
 * ├── js/
 * │   ├── reproducibility-demo.js
 * │   ├── uniformity-demo.js
 * │   ├── independence-demo.js
 * │   ├── gcl-calculator.js
 * │   ├── coprime-validator.js
 * │   ├── period-visualizer.js
 * │   ├── ks-test.js
 * │   ├── chi-square-test.js
 * │   ├── mean-variance-test.js
 * │   ├── excel-simulator.js
 * │   ├── mermaid-config.js
 * │   └── .gitkeep
 * ├── css/
 * │   └── presentacion.css
 * ├── presentacion.html
 * ├── presentacion.js
 * ├── canvas-semana3.html
 * └── ...otros archivos
 */

// ================================================================================
// VENTAJAS DE ESTA ESTRUCTURA
// ================================================================================

/*
 * ✅ Modularidad: Cada funcionalidad en su propio archivo
 * ✅ Mantenibilidad: Fácil de localizar y actualizar código
 * ✅ Reutilización: Scripts pueden usarse en otras páginas
 * ✅ Caché: Los navegadores cachean cada archivo por separado
 * ✅ Escalabilidad: Fácil de agregar nuevas funcionalidades
 * ✅ Debugging: Más fácil de depurar problemas específicos
 * ✅ Colaboración: Múltiples desarrolladores pueden trabajar simultáneamente
 * ✅ Testing: Cada módulo puede testearse independientemente
 */

// ================================================================================
// CÓMO AGREGAR NUEVOS SCRIPTS
// ================================================================================

/*
 * 1. Crea un nuevo archivo en js/
 *    Ejemplo: js/nuevo-modulo.js
 * 
 * 2. Escribe tu código usando el patrón de módulo:
 *    document.addEventListener('DOMContentLoaded', function() {
 *        const btn = document.getElementById('miBoton');
 *        if (btn) {
 *            btn.addEventListener('click', function() {
 *                // Tu código aquí
 *            });
 *        }
 *    });
 * 
 * 3. Agrega la referencia en presentacion.html:
 *    <script src="js/nuevo-modulo.js"></script>
 * 
 * 4. ¡Listo! El script se cargará automáticamente
 */

// ================================================================================
// FIN DEL ÍNDICE DE ARCHIVOS
// ================================================================================
