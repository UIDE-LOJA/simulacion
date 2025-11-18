# Simulación (FT-06-SIM)

**Carrera:** Ingeniería en Tecnologías de la Información  
**Periodo:** Octubre 2025 – Febrero 2026  
**Horario:** Lunes 15:00 – 18:00  
**Prerrequisitos:** Investigación de Operaciones  

## Descripción
Esta asignatura proporciona las herramientas teóricas y prácticas para modelar, analizar y optimizar sistemas complejos mediante técnicas computacionales. Permite representar virtualmente procesos y sistemas reales para evaluarlos sin necesidad de implementarlos físicamente, facilitando la toma de decisiones basadas en evidencia.

### Objetivos de Aprendizaje
1.  **Modelado:** Desarrollar modelos de simulación que representen adecuadamente sistemas reales.
2.  **Variables Aleatorias:** Implementar técnicas de generación de variables aleatorias y métodos de Monte Carlo.
3.  **Validación:** Aplicar metodologías de verificación y validación para garantizar la confiabilidad de los modelos.
4.  **Experimentación:** Diseñar y ejecutar experimentos de simulación (colas, inventarios, logística).
5.  **Herramientas:** Utilizar software comercial y lenguajes de programación (SimPy, AnyLogic, Excel) para resolver problemas reales.

---

## Información del Docente
**Profesor:** Charlie Alexander Cárdenas Toledo (M.Sc.)  
**Email:** [chcardenasto@uide.edu.ec](mailto:chcardenasto@uide.edu.ec)  
**Tutorías:** Lunes 10:00 – 12:00; Viernes 08:00 – 09:00

---

## Contenido del Curso

| Semana | Unidad | Tema | Actividades Clave |
| :---: | --- | --- | --- |
| 1 | Unidad 1. Fundamentos y Paradigmas de Simulación | Definición e importancia; tipos de sistemas y modelos; ventajas y limitaciones. | PE-1.1: Taller: clasificar 6 casos (2.25) TA-1.1: Ficha de lectura (1 pág.) con mapa de conceptos (2.25) |
| 2 | Unidad 1. Fundamentos y Paradigmas de Simulación | Discretos vs continuos; determinística vs estocástica; introducción a agentes; identificación de paradigmas (consolidado). | PE-1.2: Laboratorio: etiquetar procesos (D/C; Det/Est) y justificar (2.25) TA-1.2: Resumen crítico caso de agentes (1 pág.) (2.25) |
| 3 | Unidad 2: Generación de Variables Aleatorias | Generadores congruenciales (mixto); números uniformes; pruebas básicas de uniformidad; implementación básica en Excel y R. | PE-1.3: Implementar LCG simple y generar 10k u’s; histograma y rachas (2.25) TA-1.3: Bitácora de pruebas de uniformidad (runs/frecuencias) (2.25) |
| 4 | Unidad 2: Generación de Variables Aleatorias | Fundamentos de MonteCarlo; estimación de áreas/volúmenes; integración numérica simple; ejemplos aplicados. | PE-1.4: Laboratorio: estimar π y área bajo curva por MC (2.25) TA-1.4: Mini–reporte (1 pág.) con error y convergencia (2.25) |
| 5 | Evaluación | Evaluación Diagnóstica | GA-1.3: Evaluación Teórica (2) GA-1.4: Evaluación Práctica (4) GA-1.5: Proyecto Fase I (5) |
| 6 | Unidad 4: Técnicas Avanzadas de Simulación | Conceptos de probabilidad necesarios; transformada inversa; generación: Bernoulli, Binomial, Poisson. | GA-2.1: Master class: The Contradictions of Nuclear Power (Feb. 21, 2024) (1) PE-2.1: Generar Bernoulli, Binomial(n,p), Poisson(λ) y comparar medias/var (2.25) TA-2.1: Problemas cortos de selección de distribución (2.25) |
| 7 | Unidad 4: Técnicas Avanzadas de Simulación | Generación: Uniforme, Exponencial, Normal; chequeos rápidos/visualización | PE-2.2: Generar U, Exp(λ), N(μ,σ) y QQ-plots/histogramas (2.25) TA-2.2: Nota técnica (1 pág.) sobre cuándo usar cada una (2.25) |
| 8 | Unidad 4: Técnicas Avanzadas de Simulación | Conceptos básicos; depuración; trazas; verificación de componentes; consistencia dimensional. | PE-2.3: Activar traza, verificar unidades y balance de flujo (2.25) TA-2.3: Checklist de verificación del propio código (2.25) |
| 9 | Unidad 4: Técnicas Avanzadas de Simulación | Pruebas de bondad de ajuste (Kolmogorov-Smirnov, Chi-cuadrado a nivel básico); validación conceptual y operacional; sensibilidad simple; casos prácticos | PE-2.4: Ajustar dist. a datos, aplicar KS/χ²; variar 1 parámetro (±10%) (2.25) TA-2.4: Reporte corto con recomendación de ajuste (2.25) |
| 10 | Evaluación | Evaluación Formativa | GA-2.2: Evaluación Teórica (2) GA-2.3: Evaluación Práctica (4) GA-2.4: Proyecto Fase II (5) |
| 11 | Unidad 6: Aplicaciones Prácticas de Simulación | Componentes; llegadas/servicio; métricas de desempeño; modelado simple con herramientas. | PE-3.1: Simular cola M/M/1 básica; estimar L y W (2.4) TA-3.1: Comparar sim vs fórmulas de teoría de colas (2.4) |
| 12 | Unidad 6: Aplicaciones Prácticas de Simulación | Componentes; políticas básicas; EOQ; simulación de políticas. | PE-3.2: Simular dos políticas (p.ej., (s,Q) vs EOQ) en horizonte corto (2.4) TA-3.2: Informe 1 pág.: costo total promedio y recomendación (2.4) |
| 13 | Unidad 6: Aplicaciones Prácticas de Simulación | Panorama de simuladores; componentes de un simulador; construcción de modelos simples; análisis de resultados. | PE-3.3: Construir modelo simple en herramienta elegida (p.ej., SimPy/AnyLogic/Excel) (2.4) TA-3.3: Diario técnico: decisiones de modelado (2.4) |
| 14 | Unidad 6: Aplicaciones Prácticas de Simulación | Manufactura, servicios, logística; diseño de experimentos básico para simulación. | PE-3.4: Correr experimento 2^k (o fraccional); analizar efectos (2.4) TA-3.4: Memo 1 pág. con conclusiones y próxima iteración (2.4) |
| 15 | Unidad 7: Aplicaciones Prácticas de Simulación | Objetivos y alcance; recolección/análisis de datos; plan de experimentos; interpretación y presentación de resultados. | PE-3.5: Prueba de corrida y recolección de datos piloto (2.4) TA-3.5: Borrador de resultados y visualizaciones (2.4) |
| 16 | Evaluación | Evaluación Sumativa | GA-3.1: Quiz sobre simuladores comerciales: 2% GA-3.2: Docente por un día - Técnicas avanzadas de simulación: 2% GA-3.3: Evaluación teórica final: 6% GA-3.4: Presentación y defensa del proyecto final: 6% |

---

## Esquema de Evaluación

| Componente | Peso | Detalles |
| --- | :---: | --- |
| **Evaluación Diagnóstica (Semana 5)** | 30% | Teórica, Práctica, Proyecto Fase I, Talleres, Labs. |
| **Evaluación Formativa (Semana 10)** | 30% | Teórica, Práctica, Proyecto Fase II, Ejercicios de generación y validación. |
| **Evaluación Sumativa (Semana 16)** | 40% | Proyecto Final (Defensa), Examen Final, Simulaciones aplicadas. |

---

## Bibliografía

### Básica
*   Main Yaque, P. et al. (2019). *Simulación con ejercicios en R*. UNED.
*   Jiménez Avello, A. et al. (2015). *Simulación de procesos y aplicaciones*. Dextra Editorial.

### Complementaria
*   Agud, L; Pla Ferrando, M. (2015). *Matlab para matemáticas en ingenierías*.
*   Makinia, J., Zaborowska, E. (2020). *Mathematical modelling and computer simulation*.
*   Lie, K. A. (2019). *An introduction to reservoir simulation using MATLAB/GNU Octave*.

### Recursos ASU
*   Master Class: The Contradictions of Nuclear Power (Feb 2024).