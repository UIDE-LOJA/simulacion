# PE-1.1: Solucionario - Clasificación de Sistemas de Simulación

## Matriz de Clasificación Completa

| Caso | Sistema | Naturaleza | Comportamiento | Puntaje |
|------|---------|------------|----------------|---------|
| 1 | Clínica Ginecología/Obstetricia | **Discreto** | **Estocástico** | ✓ |
| 2 | Manufactura con Ensamblaje | **Continuo** | **Determinista** | ✓ |
| 3 | Interacciones Tren-Peatón | **Híbrido** | **Estocástico** | ✓ |
| 4 | Sistema Pensión Docentes | **Discreto** | **Determinista** | ✓ |
| 5 | Modelado COVID-19 Argelia | **Continuo** | **Estocástico** | ✓ |
| 6 | Simulación Integral Salud | **Híbrido** | **Estocástico** | ✓ |

---

## Justificaciones Técnicas Detalladas

### Caso 1: Clínica de Ginecología/Obstetricia
**Clasificación: Discreto + Estocástico**

#### Naturaleza: Discreto
**Justificación:**
- Los cambios importantes ocurren en **momentos específicos**: llegada de pacientes, inicio/fin de consultas, asignación de recursos
- Se identifican **eventos puntuales** claramente definidos: registro, consulta, salida
- Las **entidades individuales** (pacientes) son rastreables a través del sistema
- El **tiempo avanza por eventos** (llegada del próximo paciente, finalización de consulta)
- No hay flujos continuos, sino **transiciones discretas** entre estados del sistema

#### Comportamiento: Estocástico
**Justificación:**
- **Variabilidad en tiempos**: Los datos muestran rangos intercuartílicos (Q1-Q3) en lugar de valores fijos
- **Múltiples replicaciones**: El estudio requirió 30 replicaciones independientes para obtener resultados confiables
- **Incertidumbre inherente**: Patrones de llegada de pacientes, duración de consultas, y comportamiento del personal médico incluyen elementos aleatorios
- **Resultados no reproducibles**: Diferentes ejecuciones producen resultados distintos debido a la variabilidad estocástica

---

### Caso 2: Sistemas de Manufactura con Máquinas de Ensamblaje
**Clasificación: Continuo + Determinista**

#### Naturaleza: Continuo
**Justificación:**
- Las **variables principales evolucionan fluidamente**: velocidad de producción, nivel de inventario, flujo de materiales
- **Modelado con ecuaciones diferenciales**: El sistema se representa mediante ecuaciones que describen cambios continuos
- **Enfoque en flujos agregados**: Se modelan flujos de materiales más que entidades individuales
- **Cambios graduales**: Las variables del sistema cambian de forma suave y continua en el tiempo
- **Sin eventos discretos dominantes**: Los cambios no ocurren en puntos específicos sino de manera continua

#### Comportamiento: Determinista
**Justificación:**
- **Parámetros del sistema fijos**: Las características de las máquinas y procesos son conocidas y constantes
- **Ecuaciones matemáticas exactas**: El comportamiento se describe mediante relaciones matemáticas precisas
- **Resultados reproducibles**: Para las mismas condiciones iniciales, se obtienen resultados idénticos
- **Sin elementos aleatorios**: No se mencionan distribuciones de probabilidad o variabilidad estocástica
- **Optimización determinista**: Se buscan soluciones óptimas dentro de parámetros conocidos

---

### Caso 3: Interacciones Tren-Peatón
**Clasificación: Híbrido + Estocástico**

#### Naturaleza: Híbrido
**Justificación:**
- **Componente continuo**: Movimiento de trenes y flujo de peatones a través de las ciudades
- **Componente discreto**: Eventos específicos de intersección (cruces, semáforos, tiempos de espera)
- **Interacción entre componentes**: Los eventos discretos (semáforos, cruces) afectan los flujos continuos (movimiento)
- **Múltiples técnicas requeridas**: El título menciona "combined discrete-continuous simulation model"
- **Diferentes escalas temporales**: Movimiento continuo interrumpido por eventos puntuales

#### Comportamiento: Estocástico
**Justificación:**
- **Variabilidad en patrones**: Los patrones de movimiento de peatones y horarios de trenes incluyen incertidumbre
- **Comportamiento humano**: Las decisiones de los peatones introducen elementos aleatorios
- **Tiempos variables**: Los tiempos de intersección y espera no son fijos
- **Múltiples factores inciertos**: Condiciones climáticas, densidad de tráfico, comportamiento individual
- **Necesidad de análisis estadístico**: Se requiere análisis probabilístico para capturar la variabilidad

---

### Caso 4: Sistema de Pensión para Docentes
**Clasificación: Discreto + Determinista**

#### Naturaleza: Discreto
**Justificación:**
- **Eventos específicos**: Contribuciones mensuales/anuales, cambios de salario, jubilaciones
- **Períodos definidos**: Los períodos de servicio son intervalos discretos claramente definidos
- **Transiciones puntuales**: Cambios de estado (activo, jubilado) ocurren en momentos específicos
- **Cálculos por períodos**: Las contribuciones y beneficios se calculan por períodos discretos
- **Sin flujos continuos**: No hay variables que cambien de forma continua entre eventos

#### Comportamiento: Determinista
**Justificación:**
- **Parámetros fijos establecidos**: Tasas de contribución, períodos de servicio, y salarios base son valores conocidos
- **Reproducibilidad total**: Para las mismas condiciones iniciales, se obtienen resultados idénticos
- **Sin elementos aleatorios**: El estudio se titula explícitamente "Deterministic Multi-Objective Optimization"
- **Cálculos exactos**: Las fórmulas de pensión son matemáticamente precisas y predecibles
- **Optimización determinista**: Se busca la mejor solución dentro de parámetros completamente conocidos

---

### Caso 5: Modelado de COVID-19 en Argelia
**Clasificación: Continuo + Estocástico**

#### Naturaleza: Continuo
**Justificación:**
- **Variables epidemiológicas continuas**: Tasas de contagio, incubación y recuperación evolucionan continuamente
- **Modelo compartimental**: Los compartimentos (S-I-R) representan poblaciones que cambian fluidamente
- **Ecuaciones diferenciales**: Los modelos epidemiológicos típicamente usan sistemas de ecuaciones diferenciales
- **Dinámicas poblacionales**: Los cambios en la población afectada ocurren de forma continua
- **Sin eventos discretos dominantes**: La propagación es un proceso continuo en el tiempo

#### Comportamiento: Estocástico
**Justificación:**
- **Perturbaciones aleatorias explícitas**: El estudio menciona "ruido blanco" que afecta la propagación
- **Múltiples ejecuciones requeridas**: Se necesitan varias corridas para obtener resultados confiables
- **Incertidumbre epidemiológica**: La variabilidad en tasas de contagio y comportamiento poblacional
- **Comparación determinista vs estocástico**: El título menciona "comparative study of deterministic and stochastic approaches"
- **Resultados variables**: Los resultados varían entre diferentes simulaciones debido a la aleatoriedad

---

### Caso 6: Simulación Integral en Salud
**Clasificación: Híbrido + Estocástico**

#### Naturaleza: Híbrido
**Justificación:**
- **Múltiples técnicas combinadas**: Flujo de pacientes (discreto) + comportamiento individual (agentes) + políticas (continuo)
- **Componente discreto**: Procesos médicos y procedimientos hospitalarios con eventos específicos
- **Componente continuo**: Políticas de salud pública y recursos que evolucionan a largo plazo
- **Integración explícita**: El estudio se titula "Hybrid simulation" indicando combinación de enfoques
- **Diferentes escalas**: Decisiones individuales (discretas) y tendencias poblacionales (continuas)

#### Comportamiento: Estocástico
**Justificación:**
- **Comportamiento individual variable**: Las decisiones de pacientes y personal médico incluyen incertidumbre
- **Múltiples fuentes de variabilidad**: Llegadas de pacientes, tiempos de tratamiento, efectividad de políticas
- **Modelado basado en agentes**: Los agentes toman decisiones con elementos probabilísticos
- **Sistemas de salud complejos**: La naturaleza inherentemente incierta de los sistemas de salud
- **Necesidad de análisis estadístico**: Se requieren múltiples corridas para capturar la variabilidad del sistema

---

## Criterios de Evaluación Aplicados

### Excelente (2.25/2.25)
- **6/6 casos clasificados correctamente** en naturaleza y comportamiento
- **Justificaciones técnicas sólidas** basadas en evidencia del caso
- **Participación activa** en discusión grupal

### Puntos Clave para Justificaciones:

#### Para Naturaleza:
- **Discreto**: Eventos específicos, entidades individuales, cambios puntuales
- **Continuo**: Variables que fluyen, ecuaciones diferenciales, cambios graduales
- **Híbrido**: Combinación explícita de elementos discretos y continuos

#### Para Comportamiento:
- **Determinista**: Parámetros fijos, resultados reproducibles, sin aleatoriedad
- **Estocástico**: Variabilidad, múltiples corridas, distribuciones de probabilidad, incertidumbre

---

## Notas Pedagógicas

1. **Caso 1** es el más detallado en el compendio y sirve como ejemplo guía
2. **Casos 2-6** requieren aplicar los criterios generales aprendidos
3. **Casos híbridos** (3 y 6) son los más desafiantes y requieren identificar ambos componentes
4. **Evidencia textual** es clave: buscar palabras como "ecuaciones diferenciales", "múltiples corridas", "variabilidad", etc.

---

*Solucionario para PE-1.1 - Taller de Clasificación de Sistemas de Simulación*