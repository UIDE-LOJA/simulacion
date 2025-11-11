# Extracción de JavaScript - Semana 3

## Resumen del Trabajo Realizado

Se ha completado la extracción y organización de todo el código JavaScript del archivo `presentacion.html` en la carpeta **`js/`** del proyecto **01 FT-06-SIM Simulación-MC**.

## Estructura de Archivos Creados

```
semana-03/
├── js/
│   ├── chi-square-test.js           (Prueba de Chi-Cuadrado)
│   ├── coprime-validator.js         (Validador de Coprimos)
│   ├── excel-simulator.js           (Simulador de Excel)
│   ├── gcl-calculator.js            (Calculadora GCL)
│   ├── independence-demo.js         (Demostración de Independencia)
│   ├── ks-test.js                   (Prueba de Kolmogorov-Smirnov)
│   ├── mean-variance-test.js        (Prueba de Medias y Varianzas)
│   ├── mermaid-config.js            (Configuración de Mermaid)
│   ├── period-visualizer.js         (Visualizador de Periodo)
│   ├── reproducibility-demo.js      (Demostración de Reproducibilidad)
│   ├── uniformity-demo.js           (Demostración de Uniformidad)
│   └── .gitkeep
├── presentacion.html                (HTML actualizado con referencias JS)
└── ...otros archivos
```

## Cambios Realizados en presentacion.html

### Antes
El archivo HTML contenía múltiples bloques `<script>` embebidos con código JavaScript:
```html
<script>
    // Código JavaScript embebido
    function performChiSquareTest(n, k) {
        // ... cientos de líneas de código
    }
    // ... más funciones
</script>
```

### Después
Ahora el HTML referencia archivos JavaScript externos:
```html
<script src="js/chi-square-test.js"></script>
<script src="js/mean-variance-test.js"></script>
<script src="js/excel-simulator.js"></script>
```

## Beneficios de esta Organización

✅ **Mantenimiento Mejorado**: Cada funcionalidad está en su propio archivo
✅ **Reutilización**: Los archivos JS pueden usarse en otros HTML
✅ **Caché del Navegador**: Los scripts se cachean por separado
✅ **Legibilidad**: Código más limpio y organizado
✅ **Escalabilidad**: Fácil de expandir o modificar funcionalidades
✅ **Separación de Responsabilidades**: HTML para estructura, JS para lógica

## Archivos JavaScript Creados

1. **chi-square-test.js** (5.6 KB)
   - Implementación de la Prueba Chi-Cuadrado
   - Funciones: performChiSquareTest, drawChiSquarePlot

2. **mean-variance-test.js** (4.0 KB)
   - Pruebas de Medias y Varianzas con Gauges
   - Funciones: performMeanVarianceTest, drawGauge

3. **excel-simulator.js** (5.3 KB)
   - Simulación de hoja de cálculo Excel
   - Funciones: simulateExcel, drawMiniHistogram

4. **gcl-calculator.js** (5.2 KB)
   - Calculadora paso a paso del Generador Congruencial Lineal
   - Funciones disponibles en el archivo

5. **independence-demo.js** (4.6 KB)
   - Demostración visual de independencia estadística
   - Gráficos de dispersión interactivos

6. **ks-test.js** (4.5 KB)
   - Implementación de la Prueba de Kolmogorov-Smirnov
   - Análisis de distribuciones

7. **uniformity-demo.js** (3.7 KB)
   - Visualización de uniformidad en histogramas
   - Controles interactivos para generar datos

8. **reproducibility-demo.js** (2.8 KB)
   - Demostración de reproducibilidad de números pseudoaleatorios
   - Generadores con semillas

9. **period-visualizer.js** (5.3 KB)
   - Visualización circular del periodo de generadores
   - Aplicación del Teorema de Hull-Dobell

10. **coprime-validator.js** (3.9 KB)
    - Validador de números coprimos
    - Cálculo del MCD

11. **mermaid-config.js** (596 B)
    - Configuración para diagramas Mermaid
    - Settings globales

## Cómo Usar

El archivo `presentacion.html` automáticamente carga todos los scripts necesarios. No se requiere cambio alguno en el HTML para que funcione la presentación.

### Para agregar nuevos scripts:
1. Crea un nuevo archivo `.js` en la carpeta `js/`
2. Agrega la referencia en el HTML:
   ```html
   <script src="js/nuevo-archivo.js"></script>
   ```

## Notas Técnicas

- Todos los scripts usan `document.addEventListener('DOMContentLoaded', ...)` para esperar a que el DOM esté listo
- Los scripts son modulares y no interfieren unos con otros
- Se mantiene la compatibilidad con navegadores modernos
- Los eventos están correctamente asociados mediante IDs de elementos

## Verificación

✅ Todos los archivos JavaScript han sido creados exitosamente
✅ El HTML ha sido actualizado correctamente
✅ No hay código JavaScript embebido en el HTML
✅ Todos los scripts están vinculados correctamente
✅ La estructura de carpetas está organizada

---

**Fecha**: 11 de Noviembre de 2025
**Proyecto**: 01 FT-06-SIM Simulación-MC
**Carpeta**: semana-03
