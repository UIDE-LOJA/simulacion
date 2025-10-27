# PE-1.1: Taller de Clasificación de Sistemas de Simulación

## Información General

**Actividad:** PE-1.1 - Taller de Clasificación de Sistemas  
**Puntaje:** 2.25 puntos  
**Modalidad:** Taller en clase con discusión grupal  
**Objetivo:** Clasificar 6 casos reales según naturaleza (discreto/continuo/híbrido) y comportamiento (determinista/estocástico)

## Rúbrica de Evaluación

### Criterio 1: Matriz de Clasificación Completa (1.25 puntos)
- **Excelente (1.25 pts):** Clasifica correctamente los 6 casos en naturaleza y comportamiento
- **Bueno (0.8 pts):** Clasifica correctamente 4-5 casos
- **Insuficiente (0 pts):** Clasifica correctamente menos de 4 casos

### Criterio 2: Justificación Técnica y Participación (1.0 punto)
- **Excelente (1.0 pt):** Justificaciones técnicas sólidas y participación activa en grupo
- **Bueno (0.6 pts):** Justificaciones parciales y participación moderada
- **Insuficiente (0 pts):** Justificaciones débiles o sin participación

## Criterios de Clasificación

### Por Naturaleza del Sistema

#### Discreto
- **Características:** Cambios en puntos específicos del tiempo
- **Preguntas guía:**
  - ¿Los cambios ocurren en momentos puntuales?
  - ¿Puedo identificar eventos específicos?
  - ¿Las variables tienen saltos?
  - ¿El tiempo avanza por eventos?
  - ¿Se identifican entidades individuales?

#### Continuo
- **Características:** Variables cambian de forma fluida
- **Preguntas guía:**
  - ¿Las variables fluyen suavemente?
  - ¿El tiempo avanza continuamente?
  - ¿Se modelan flujos agregados?

#### Híbrido
- **Características:** Combina elementos discretos y continuos
- **Preguntas guía:**
  - ¿El sistema tiene eventos puntuales Y procesos continuos?
  - ¿Los componentes discretos afectan los flujos continuos?
  - ¿Se requieren diferentes técnicas de simulación?

### Por Comportamiento del Sistema

#### Determinista
- **Características:** Resultados predecibles, sin elementos aleatorios
- **Preguntas guía:**
  - ¿Los resultados son siempre los mismos?
  - ¿Los tiempos son fijos?
  - ¿No hay elementos de azar?

#### Estocástico
- **Características:** Incluye incertidumbre, variables aleatorias
- **Preguntas guía:**
  - ¿Hay elementos de azar o incertidumbre?
  - ¿Se utilizan distribuciones de probabilidad?
  - ¿Los tiempos son variables?
  - ¿Se requieren múltiples corridas?

---

## CASOS DE ESTUDIO PARA CLASIFICACIÓN

### Caso 1: Clínica de Ginecología/Obstetricia

**Descripción:** Estudio de simulación en una clínica de ginecología/obstetricia con sistema dual (público/privado) en Malasia para reducir tiempos de espera y aglomeraciones.

#### Características del Sistema
- **Entidades:** Pacientes públicos, pacientes privados, médicos y especialistas
- **Procesos:** Registro de pacientes, consulta médica, programación de citas
- **Recursos:** 10 consultorios, personal médico, salas de espera
- **Flujo Principal:** Llegada → Registro → Consulta → Salida

#### Análisis de Naturaleza
**Preguntas clave:**
- ¿Cuándo ocurren los cambios importantes en este sistema?
- ¿Cómo se comporta el flujo de pacientes?
- ¿Qué sucede entre la llegada de un paciente y el siguiente?

#### Análisis de Comportamiento
**Preguntas clave:**
- ¿Los tiempos de llegada y consulta son predecibles?
- ¿Los resultados serían idénticos en múltiples ejecuciones?
- ¿Hay elementos de incertidumbre en el sistema?

**Evidencia metodológica:** El estudio requirió múltiples replicaciones para obtener resultados confiables, los datos muestran rangos (Q1-Q3) en lugar de valores fijos.

**Referencia:** Estudio de flujo de pacientes en clínica especializada de Malasia.

---

### Caso 2: Sistemas de Manufactura con Máquinas de Ensamblaje

**Descripción:** Estudio de sistemas de manufactura con máquinas de ensamblaje/desensamblaje, múltiples bucles y diseño general. Se evalúa el desempeño de producción mediante variables como velocidad de producción, nivel de inventario y flujo de materiales.

#### Características del Sistema
- **Variables principales:** Velocidad de producción, nivel de inventario, flujo de materiales
- **Comportamiento temporal:** Las variables evolucionan a lo largo del tiempo
- **Modelado matemático:** Utiliza ecuaciones diferenciales para representar el sistema
- **Enfoque:** Se centra en flujos agregados más que en entidades individuales

#### Preguntas para Análisis
**Naturaleza:**
- ¿Las variables cambian de forma continua o en saltos?
- ¿Se modelan flujos o entidades individuales?
- ¿Qué tipo de ecuaciones se utilizan?

**Comportamiento:**
- ¿Los parámetros del sistema son fijos o variables?
- ¿Hay elementos aleatorios en el proceso?

**Referencia:** Scrivano, S. (2023). Continuous-flow simulation of manufacturing systems with assembly/disassembly machines, multiple loops and general layout. *Journal of Manufacturing Systems*.

---

### Caso 3: Interacciones Tren-Peatón

**Descripción:** Análisis de interacciones entre trenes de mercancías y peatones en dos pequeñas ciudades de Alberta, Canadá. El estudio examina tanto el movimiento de trenes y peatones como los eventos específicos de intersección.

#### Características del Sistema
- **Movimiento de trenes:** Desplazamiento a través de las ciudades
- **Flujo de peatones:** Circulación en áreas urbanas
- **Eventos de intersección:** Cruces, semáforos, tiempos de espera
- **Interacciones:** Los eventos puntuales afectan los patrones de movimiento

#### Preguntas para Análisis
**Naturaleza:**
- ¿Qué tipo de movimiento predomina: continuo o por eventos?
- ¿Los eventos de intersección son puntuales o continuos?
- ¿Cómo interactúan los componentes discretos y continuos?

**Comportamiento:**
- ¿Los patrones de movimiento son predecibles?
- ¿Hay variabilidad en los tiempos de intersección?

**Referencia:** Ekyalimpa, R., et al. (2016). A combined discrete-continuous simulation model for analysing train-pedestrian interactions. *Proceedings of the Winter Simulation Conference*.

---

### Caso 4: Sistema de Pensión para Docentes

**Descripción:** Modelo de optimización para un sistema de pensión de contribución definida para docentes. Se optimizan las contribuciones considerando tasas fijas, períodos de servicio y salarios base establecidos.

#### Características del Sistema
- **Variables controladas:** Tasas de contribución, períodos de servicio, salarios base
- **Parámetros fijos:** Todas las variables tienen valores establecidos
- **Reproducibilidad:** Para las mismas condiciones iniciales, se obtienen resultados idénticos
- **Optimización:** Búsqueda de la mejor solución dentro de parámetros conocidos

#### Preguntas para Análisis
**Naturaleza:**
- ¿Cómo evolucionan las variables del sistema?
- ¿Hay eventos específicos o cambios continuos?

**Comportamiento:**
- ¿Los resultados son reproducibles?
- ¿Hay elementos de incertidumbre?
- ¿Se requieren múltiples corridas?

**Referencia:** Montufar-Benítez, M. A., et al. (2025). An Actual Case Study of a Deterministic Multi-Objective Optimization Model in a Defined Contribution Faculty Pension System. *Computation*.

---

### Caso 5: Modelado de COVID-19 en Argelia

**Descripción:** Estudio comparativo de enfoques de modelado computacional para analizar la difusión de COVID-19 en Argelia. Utiliza un modelo compartimental con perturbaciones aleatorias (ruido blanco) para capturar la incertidumbre epidemiológica.

#### Características del Sistema
- **Tasas variables:** Contagio, incubación y recuperación con variabilidad
- **Perturbaciones aleatorias:** Ruido blanco que afecta la propagación
- **Múltiples ejecuciones:** Se requieren varias corridas para obtener resultados confiables
- **Incertidumbre:** Los resultados varían entre diferentes simulaciones

#### Preguntas para Análisis
**Naturaleza:**
- ¿Cómo cambian las variables epidemiológicas?
- ¿Los cambios son graduales o por eventos?

**Comportamiento:**
- ¿Qué papel juegan las perturbaciones aleatorias?
- ¿Los resultados son reproducibles?
- ¿Se requieren múltiples simulaciones?

**Referencia:** Kadri, A., et al. (2025). A comparative study of deterministic and stochastic computational modeling approaches for analyzing and optimizing COVID-19 control. *Scientific Reports*.

---

### Caso 6: Simulación Integral en Salud

**Descripción:** Exploración sistemática que combina múltiples técnicas de simulación aplicadas al sector salud: flujo de pacientes, modelado basado en agentes para comportamiento individual, y dinámica de sistemas para políticas de salud pública a largo plazo.

#### Características del Sistema
- **Flujo de pacientes:** Procesos médicos y procedimientos hospitalarios
- **Comportamiento individual:** Decisiones de pacientes y personal médico
- **Políticas de salud:** Recursos y estrategias a largo plazo
- **Integración:** Cada técnica aporta perspectivas complementarias al análisis

#### Preguntas para Análisis
**Naturaleza:**
- ¿Qué tipos de procesos se modelan?
- ¿Cómo interactúan los diferentes componentes?
- ¿Se requieren múltiples técnicas de simulación?

**Comportamiento:**
- ¿Qué elementos introducen variabilidad?
- ¿Cómo se maneja la incertidumbre en cada técnica?

**Referencia:** Kar, E., et al. (2025). Hybrid simulation in healthcare: a systematic exploration of models, applications and emerging trends. *Journal of Simulation*.

---

## Matriz de Clasificación

| Caso | Sistema | Naturaleza | Comportamiento | Justificación |
|------|---------|------------|----------------|---------------|
| 1 | Clínica Ginecología/Obstetricia | | | |
| 2 | Manufactura con Ensamblaje | | | |
| 3 | Interacciones Tren-Peatón | | | |
| 4 | Sistema Pensión Docentes | | | |
| 5 | Modelado COVID-19 Argelia | | | |
| 6 | Simulación Integral Salud | | | |

## Instrucciones para el Taller

1. **Análisis Individual (10 minutos):** Revisa cada caso y realiza una clasificación preliminar
2. **Discusión Grupal (20 minutos):** Comparte tu análisis con el grupo y lleguen a consensos
3. **Justificación Técnica (15 minutos):** Preparen argumentos sólidos para cada clasificación
4. **Presentación (15 minutos):** Presenten sus resultados al resto de la clase

## Tabla Comparativa de Técnicas de Modelado

| Dimensión | Tipo | Características Clave | Técnicas de Modelado |
|-----------|------|----------------------|---------------------|
| **Naturaleza** | Discreto | Cambios en puntos específicos del tiempo | Listas de eventos, colas |
| | Continuo | Variables cambian fluidamente | Ecuaciones diferenciales |
| | Híbrido | Combina elementos discretos y continuos | DES + System Dynamics |
| **Comportamiento** | Determinista | Resultados predecibles, sin azar | Modelos matemáticos exactos |
| | Estocástico | Incluye incertidumbre y variabilidad | Monte Carlo, muestreo aleatorio |

---

*Documento generado para PE-1.1 - Taller de Clasificación de Sistemas de Simulación*