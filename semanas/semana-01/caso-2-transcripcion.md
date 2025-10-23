# Caso 2: Simulación de Flujo Continuo de Sistemas de Manufactura con Máquinas de Ensamblaje/Desensamblaje, Múltiples Bucles y Diseño General

## Información del Artículo

**Título:** Continuous-flow simulation of manufacturing systems with assembly/disassembly machines, multiple loops and general layout

**Fuente:** Journal of Manufacturing Systems, 2023  
**Volumen:** 69, páginas 103-118  
**DOI:** https://doi.org/10.1016/j.jmsy.2023.05.028  
**Fecha de Publicación:** 17 de junio de 2023  

## Autores

- **Salvatore Scrivano** - Department of Mechanical Engineering, Politecnico di Milano, Milan, Italy
- **Barış Tan** - College of Administrative Sciences and Economics, College of Engineering, Koç University, Istanbul, Turkey  
- **Tullio Tolio** - Department of Mechanical Engineering, Politecnico di Milano, Milan, Italy

## Resumen

### Problema
Los métodos de evaluación de rendimiento son importantes para diseñar y controlar sistemas de manufactura. Los métodos analíticos aproximados son rápidos, pero pueden estar limitados por las suposiciones restrictivas sobre el sistema. Por el contrario, la simulación no tiene limitaciones específicas en su aplicabilidad, pero el tiempo para modelar y analizar un sistema de manufactura puede aumentar a medida que aumenta el nivel de detalle abordado por el modelo.

### Contribución Principal
Este estudio presenta una metodología computacionalmente eficiente para simular sistemas de manufactura de flujo continuo de una sola pieza con:
- Máquinas de ensamblaje/desensamblaje
- Múltiples bucles
- Diseño general
- Distribuciones generales de tiempo entre eventos

### Metodología
Utilizando la teoría de grafos, se presenta un nuevo método para identificar las máquinas que causan:
- Ralentización (slowdown)
- Bloqueo (blocking)  
- Privación de material (starvation)

En un diseño general y determinar el tiempo antes de la ocurrencia de una transición de estado para cada máquina y el tiempo antes del llenado o agotamiento de cada buffer.

### Resultados Principales

**Eficiencia Computacional:**
- **15 veces más rápido** en promedio que los métodos DES en el análisis de sistemas de flujo discreto
- **110 veces más rápido** en promedio en el análisis de sistemas de flujo continuo

**Beneficios:**
- El bajo tiempo computacional del método propuesto permite simular sistemas bajo suposiciones generales en muy poco tiempo
- Avanzando el reloj de tiempo al siguiente tiempo de evento, se disminuye el número de eventos discretos necesarios para ser simulados

## Introducción

### Contexto de la Industria Manufacturera

En la industria manufacturera, usar métodos rápidos y confiables para la evaluación de sistemas de producción es fundamental para apoyar la toma de decisiones. El rendimiento de los sistemas existentes se evalúa analizando los datos recopilados en la planta de producción.

Sin embargo, el rendimiento de producción de sistemas durante:
- La fase de diseño
- La fase de reconfiguración
- Como resultado de cambios en las políticas de control del sistema

Puede evaluarse utilizando herramientas de evaluación de rendimiento como simulación y métodos analíticos.

### Desafíos en la Fase de Diseño

Durante la fase de diseño, varias configuraciones deben evaluarse antes de la selección e implementación de la solución final. Por ejemplo:

**Selección de Máquinas:**
- Evaluar múltiples soluciones potenciales que varían en términos de costo, flexibilidad y capacidad de producción

**Asignación de Capacidad de Buffer:**
- Afecta directamente el rendimiento general del sistema de manufactura
- Puede plantear un problema desafiante debido a las limitaciones de espacio usualmente enfrentadas por las instalaciones de producción

**Fase Operacional:**
- El vasto conjunto de mejoras que pueden introducirse en una planta debe evaluarse
- Los recursos limitados de una empresa en términos de tiempo e inversión pueden dirigirse a la implementación de las acciones más rentables

## Revisión de Literatura

### Métodos Analíticos

Los métodos analíticos aproximados se proponen como enfoques rápidos e intuitivos. Pueden clasificarse en:

#### Métodos de Flujo Discreto
- Representan el movimiento de partes discretas
- Modelo de evaluación de línea de transferencia de flujo discreto con dos máquinas no confiables y buffer de almacenamiento finito
- Cuando el sistema tiene buffers finitos y más de dos máquinas, se han desarrollado técnicas de descomposición

#### Métodos de Flujo Continuo
- Modelos analíticos basados en aproximación continua del flujo discreto de partes
- Empleados extensivamente para el análisis de sistemas con máquinas asíncronas caracterizadas por tiempos de procesamiento determinísticos y fallas y reparaciones estocásticas
- Trabajos más tempranos para la evaluación de sistemas de dos estaciones no confiables con buffer intermedio finito

**Limitaciones:**
- La complejidad matemática que puede surgir en el modelado analítico de sistemas reales complejos a menudo requiere simplificación significativa del problema
- Estas simplificaciones pueden limitar la aplicabilidad de modelos analíticos para analizar un sistema de manufactura dado

### Métodos de Simulación

Cuando no hay modelos analíticos disponibles en la literatura para analizar el sistema de interés, se utilizan técnicas de simulación.

#### Desafíos en la Definición del Modelo de Simulación
- Seleccionar el nivel de abstracción
- Nivel de detalle a incluir en un modelo para asegurar precisión en su aplicación

#### Técnicas de Simulación

**Simulación de Eventos Discretos (DES):**
- Opera generalmente a bajo nivel de abstracción (alto nivel de detalle)
- Se usa para la simulación de un sistema dado a nivel operacional

**Dinámica de Sistemas (SD):**
- Opera generalmente a alto nivel de abstracción
- Se usa para simular temas estratégicos

#### Simulación de Sistemas de Flujo Discreto

**Limitaciones de DES:**
- Puede enfrentar limitaciones significativas debido a la complejidad y el tiempo computacional para simularlo
- En modelos DES con flujo discreto de partes, cada aumento y disminución unitaria de los niveles de buffer se modela como un evento discreto
- Al aumentar el tiempo de simulación o el tamaño del sistema simulado, el número de eventos puede crecer dramáticamente causando largos tiempos computacionales

**Aplicaciones:**
- Diseño de línea de producción contra criterios de múltiples usuarios
- Evaluación de eficiencia de producción y confiabilidad de sistemas de manufactura con operadores humanos o robots industriales

#### Simulación de Sistemas de Flujo Continuo

**Problema de Tiempos Computacionales:**
- El problema de largos tiempos computacionales de DES con entidades discretas se vuelve más crítico cuando el sistema a simular es un sistema de flujo continuo

**Aproximaciones con Flujos Continuos:**
- Los flujos de material continuo pueden aproximarse con flujos discretos de entidades en enfoques DES
- Mientras menor sea la cantidad de material representada por una entidad discreta, más cercana es la dinámica del sistema de flujo discreto a la dinámica del sistema de flujo continuo
- Sin embargo, al reducir la cantidad de material representada por una entidad discreta, el número de eventos en el sistema simulado aumenta

**Dinámica de Sistemas (SD):**
- Considerado un enfoque apropiado para analizar sistemas de flujo continuo
- En modelos SD, entidades individuales no se modelan específicamente; más bien, se representan como una cantidad continua en un stock
- Las ecuaciones diferenciales ordinarias que representan cambios continuos de los stocks a lo largo del tiempo se aproximan mediante cálculos realizados en pasos de tiempo fijos, llamados Delta Time (DT)

**Factor Clave en Modelos SD:**
- La definición del intervalo de tiempo DT entre cálculos
- Mientras DT se hace más pequeño, la solución general de las ecuaciones se vuelve más precisa
- Por otro lado, un DT pequeño aumenta el número de cálculos realizados durante una corrida de simulación

### Progreso Más Allá del Estado Actual del Arte

A partir de los trabajos existentes, en este documento se presenta un nuevo y rápido método de simulación de eventos discretos de flujo continuo. Se introduce una nueva metodología basada en la teoría de grafos en el método de simulación, que extiende los resultados dados para analizar sistemas con:
- Diseño general
- Máquinas de ensamblaje/desensamblaje
- Múltiples bucles

**Diferencias con Enfoques Existentes:**

**A diferencia de enfoques SD:**
- La precisión del método de simulación de flujo continuo presentado no se ve afectada por la aproximación de los cambios continuos de las variables del sistema en pasos discretos fijos

**A diferencia de métodos DES:**
- En el método de simulación de flujo continuo propuesto, cada aumento o disminución unitaria del nivel de cualquier buffer en el sistema no genera un evento discreto en la simulación
- Como consecuencia principal, el método de simulación de flujo continuo propuesto proporciona una mejora significativa en la velocidad de análisis tanto para sistemas de flujo discreto como continuo

## Notación General y Dinámicas del Sistema

### Representación del Sistema
El sistema de manufactura de interés es una red general con:
- **M** máquinas no confiables
- **B** buffers finitos

### Parámetros de Máquinas

**Notación:** Cada máquina se representa por M{m}, con m = 1,...,M

**Estados:** El comportamiento de cada máquina en aislamiento puede describirse por el conjunto de estados:
S{m} = {S₁{m}, ..., S_{I{m}}{m}}, con tamaño I{m}

**Estado Actual:** En un tiempo de evento general t_k en la simulación, el estado actual de una máquina M{m} se representa por el vector columna s(m, t_k), con tamaño I{m}

**Definición de Entrada:**
```
s_i(m, t_k) = {1, si M{m} está en el estado S_i{m} en el tiempo t_k
              {0, en caso contrario
```

**Restricción:** Dado que la máquina M{m} puede estar en solo un estado a la vez:
∑(i=1 to I{m}) s_i(m, t_k) = 1, ∀m, ∀t_k

### Transiciones de Estado

**Tiempo de Transición:** El tiempo para la transición entre dos estados S_i{m} y S_j{m} es estocástico con una distribución de probabilidad general D_{i,j}{m}

**Independencia:** Los tiempos de transición se asumen independientes entre pares de estados

**Correlación:** Sin embargo, la secuencia de tiempos generados desde la distribución D_{i,j}{m} también puede estar correlacionada

### Tasas de Producción

**Tasa Nominal:** En cada estado S_i{m} ∈ S{m}, la máquina M{m} procesa material con una tasa de producción nominal μ_i{m}

**Clasificación de Estados:**
- **Estado Operacional:** si μ_i{m} > 0
- **Estado Inactivo:** si μ_i{m} = 0

**Vector de Tasas:** El vector fila de las tasas de producción nominales de todos los estados S{m} de la máquina M{m} se define como μ{m} = [μ_i{m}], con i = 1, ..., I{m}

### Tipos de Transiciones

**Dependiente de Operación:** Una transición desde un estado S_i{m} a cualquier estado S_j{m} se asume dependiente de operación si S_i{m} es un estado operacional

**Dependiente de Tiempo:** Se asume dependiente de tiempo si S_i{m} es un estado inactivo

### Tasa de Producción Efectiva

En cualquier tiempo de evento t_k, la tasa de producción efectiva de una máquina M{m} se define por la variable μ(m, t_k). La tasa de producción efectiva μ(m, t_k) puede diferir de la tasa de producción nominal μ{m} · s(m, t_k) de M{m} en t_k, si en t_k M{m} está ralentizada, bloqueada o privada de material por otras máquinas en el sistema.

### Parámetros de Buffers

**Notación:** Cada buffer del sistema se representa por B{b}, con b = 1,...,B

**Capacidad:** Cada buffer B{b} puede tener capacidad finita o infinita, definida por:
- Límite superior N{b}
- Límite inferior L{b}
- Con N{b} > L{b}

**Backlog:** Si L{b} < 0, significa que se permite el backlog de órdenes relacionadas con el material almacenado en el buffer B{b} hasta el valor máximo |L{b}|

**Nivel Actual:** En cualquier tiempo de evento t_k, el nivel actual de un buffer B{b} se define por la variable continua x(b, t_k), tal que L{b} ≤ x(b, t_k) ≤ N{b}

### Estructura del Sistema

**Restricciones de Conexión:**
- Cada buffer B{b} es alimentado por solo una máquina upstream
- Alimenta solo una máquina downstream
- Cada máquina puede alimentar más de un buffer
- Cada máquina puede ser alimentada por más de un buffer

**Tipos de Máquinas:**
- **Máquinas de Ensamblaje:** Alimentadas por múltiples buffers
- **Máquinas de Desensamblaje:** Alimentan múltiples buffers

**Asunciones del Modelo:**
- No se consideran máquinas de división y fusión
- Una máquina no puede procesar selectivamente material desde uno de sus buffers upstream o hacia uno de sus buffers downstream
- Para cada unidad de material procesada por una máquina, se asume que se recibe una unidad de material de cada buffer upstream y se alimenta una unidad de material hacia cada buffer downstream

### Dinámicas del Sistema

**Matriz de Flujo:** El diseño del sistema se formaliza a través de la matriz de flujo F, compuesta por B filas y M columnas representando respectivamente los buffers y las máquinas del sistema.

**Definición de Entradas:**
```
F_{b,m} = { 1,  si la máquina M{m} alimenta el buffer B{b}
          {-1,  si el buffer B{b} alimenta la máquina M{m}
          { 0,  en caso contrario
```

### Comportamiento del Subsistema

**Configuración Básica:** Considerando dos máquinas M{m} y M{m'}, donde M{m} es una máquina inmediatamente upstream de M{m'} y M{m'} es una máquina inmediatamente downstream de M{m}, si existe un buffer B{b} en el sistema tal que F_{b,m} = 1 y F_{b,m'} = -1.

**Dinámicas de Ralentización:**
- Si M{m} está en un estado S_i{m} y M{m'} está en un estado S_j{m'} tal que M{m} procesa material más rápido que M{m'} (μ_i{m} > μ_j{m'})
- Después de cierto período de tiempo, el nivel del buffer B{b} alcanza el límite superior N{b}
- La máquina M{m} se ve forzada a procesar material a la misma tasa de producción de M{m'}

**Dinámicas de Privación:**
- Si M{m} en el estado S_i{m} es más lenta que M{m'} en el estado S_j{m'}
- Después de cierto período de tiempo, el nivel del buffer B{b} alcanza el límite inferior L{b}
- La máquina M{m'} se ve forzada a procesar material a la misma tasa de producción de M{m}

## Simulación de Flujo Continuo

### Pasos Principales

La simulación de flujo continuo para un sistema con diseño general consiste en dos pasos principales que se realizan iterativamente:

1. **Definición de la regla de avance del tiempo de reloj** en la simulación
2. **Actualización de todas las variables del sistema** después del avance del tiempo de reloj

### Definición del Avance del Tiempo de Simulación

**Próximo Tiempo de Evento:** El primer paso es la definición del próximo tiempo de evento t_{k+1} relacionado con una transición de estado de una máquina o un cambio del flujo de material en una o más máquinas en el sistema.

**Fórmula del Próximo Evento:**
```
t_{k+1} = t_k + Δt_k
```

donde Δt_k es el período de tiempo antes de la ocurrencia del próximo evento en el sistema.

**Tipos de Eventos:** El próximo evento que ocurre en el tiempo t_{k+1} puede ser de tres tipos diferentes:
1. Transición de estado de una máquina en el sistema
2. Llenado o agotamiento de un buffer en el sistema  
3. Fin de la simulación

### Cálculo del Período Inter-evento

**Variables Necesarias:**
- **RM(m, t_k):** Tiempo restante de máquina de cada máquina M{m}
- **RB(b, t_k):** Tiempo restante de buffer de cada buffer B{b}
- **T - t_k:** Tiempo restante de simulación

**Fórmula del Período:**
```
Δt_k = min{RM(1, t_k), ..., RM(M, t_k), RB(1, t_k), ..., RB(B, t_k), T - t_k}
```

### Tiempo Restante de Máquina

**Matriz de Tiempo de Transición:** Para cada máquina M{m}, se introduce una matriz de tiempo de transición τ(m, t_k) tal que cada entrada τ_{i,j}(m, t_k) define el período de tiempo entre t_k y la ocurrencia de una transición desde el estado S_i{m} hasta el estado S_j{m}

**Inicialización:** Cuando la simulación comienza en t_0, el valor de cada entrada τ_{i,j}(m, t_k) con i ≠ j se inicializa con variables aleatorias simuladas según la distribución de probabilidad D_{i,j}{m}

**Ratio de Saturación de Capacidad:** El tiempo restante de máquina RM(m, t_k) se divide por el ratio de saturación de capacidad c(m, t_k) de M{m} en el tiempo t_k:

```
c(m, t_k) = {1,                    si μ(m, t_k) = μ{m} · s(m, t_k)
            {μ(m, t_k)/(μ{m}·s(m, t_k)), en caso contrario
```

**Cálculo del Tiempo Restante:**
```
RM(m, t_k) = min{τ_{i,1}(m, t_k), ..., τ_{i,I{m}}(m, t_k)} / c(m, t_k)
```

### Tiempo Restante de Buffer

**Vector de Tiempo de Buffer:** Se introduce el vector β(b, t_k) de tamaño 1 × 2 donde:
- β_1(b, t_k) define el tiempo para llenar B{b}
- β_2(b, t_k) define el tiempo para agotar B{b}

**Fórmulas de Tiempo:**
```
β_1(b, t_k) = {(N{b} - x(b, t_k))/(μ(m, t_k) - μ(m', t_k)), si μ(m, t_k) > μ(m', t_k)
              {+∞,                                           en caso contrario

β_2(b, t_k) = {(x(b, t_k) - L{b})/(μ(m', t_k) - μ(m, t_k)), si μ(m, t_k) < μ(m', t_k)  
              {+∞,                                           en caso contrario
```

**Tiempo Restante de Buffer:**
```
RB(b, t_k) = min{β_1(b, t_k), β_2(b, t_k)}
```

### Análisis de Propagación de Interrupciones de Flujo y Ralentizaciones

#### Matriz de Adyacencia

**Definición:** En cada tiempo de evento t_k, la matriz de adyacencia V(t_k) es una matriz booleana cuadrada con tamaño M×M, donde M es el número de máquinas en el sistema.

**Entrada de la Matriz:**
```
V_{m,m'}(t_k) = {1, si ∃b : (F_{b,m} = 1 ∧ F_{b,m'} = -1 ∧ x(b, t_k) = N{b})
                {1, si ∃b : (F_{b,m} = -1 ∧ F_{b,m'} = 1 ∧ x(b, t_k) = L{b})
                {0, en caso contrario
```

#### Matriz de Alcanzabilidad

**Definición:** En cada tiempo de evento t_k, la matriz de alcanzabilidad W(t_k) es una matriz booleana cuadrada con tamaño M × M. Cada entrada W_{m,m'}(t_k) en W(t_k) es igual a 1 si en el tiempo t_k la tasa de producción efectiva de la máquina M{m} puede ser afectada por el estado de la máquina M{m'} ubicada en cualquier lugar del sistema, y 0 en caso contrario.

**Longitud Máxima de Propagación:** M* se define como la longitud máxima de secuencia de máquinas adyacentes y distintas, a través de las cuales una interrupción de flujo o ralentización puede potencialmente propagarse en el sistema.

**Cálculo de la Matriz de Alcanzabilidad:**
```
W(t_k) = (I + V(t_k))^{M*}
```

donde I es la matriz identidad de tamaño M × M.

### Cálculo de Tasas de Producción Efectivas

Una vez que W(t_k) se calcula, la tasa de producción efectiva μ(m, t_k) de cada máquina M{m} puede computarse como el valor mínimo entre las tasas de producción nominales en el tiempo t_k de todas las máquinas M{m'} que pueden potencialmente afectar M{m}:

```
μ(m, t_k) = min_{m'} {μ{m'} · s(m', t_k) : m' = 1, ..., M ∧ W_{m,m'}(t_k) = 1}, ∀m
```

### Actualización del Estado del Sistema

Después de la definición del tiempo inter-evento Δt_k, el tiempo de reloj de la simulación puede avanzarse instantáneamente al tiempo t_{k+1} = t_k + Δt_k.

**Actualización de Estados de Máquinas:**
- El nuevo estado s(m, t_{k+1}) de cada máquina M{m} en t_{k+1} es s(m, t_{k+1}) = s(m, t_k) si el evento en el tiempo t_{k+1} no es una transición de estado de la máquina M{m}
- Si hay transición: s_j(m, t_{k+1}) = 1 y s_i(m, t_{k+1}) = 0 ∀i ≠ j

**Actualización de Niveles de Buffer:**
```
x(b, t_{k+1}) = x(b, t_k) + (μ(m, t_k) - μ(m', t_k)) · Δt_k
```

**Actualización de Matriz de Tiempo de Transición:**
```
τ_{i,j}(m, t_{k+1}) = {τ_{i,j}(m, t_k) - Δt_k · c(m, t_k), si s_i(m, t_k) = 1
                      {τ_{i,j}(m, t_k),                   en caso contrario
```

### Estimación del Rendimiento del Sistema

**Throughput Promedio:**
```
th(m) = Σ_{k=0}^{K-1} μ(m, t_k) · Δt_k / T
```

**Nivel Promedio de Buffer:**
```
x̄(b) = Σ_{k=0}^{K-1} (x(b, t_k) + x(b, t_{k+1})) · Δt_k / (2 · T)
```

**Porcentaje de Tiempo Vacío:**
```
P(L{b}) = Σ_k Δt_k / T · 100%, con k : (x(b, t_k) = L{b} ∧ x(b, t_{k+1}) = L{b})
```

**Porcentaje de Tiempo Lleno:**
```
P(N{b}) = Σ_k Δt_k / T · 100%, con k : (x(b, t_k) = N{b} ∧ x(b, t_{k+1}) = N{b})
```

## Resultados Numéricos

### Generación de Casos de Prueba

Se probó el rendimiento computacional de la simulación de flujo continuo en 8 casos diferentes, que consideran 4 diferentes diseños de sistema:

1. **Líneas Seriales**
2. **Líneas de Ensamblaje y Desensamblaje**  
3. **Líneas de Bucle Único**
4. **Líneas de Múltiples Bucles**

Cada diseño de sistema se simuló con:
- **Número pequeño de máquinas:** 5
- **Número grande de máquinas:** 50
- **Tiempo de simulación:** 10⁵ unidades de tiempo
- **Réplicas:** 5 simulaciones para cada caso

### Configuración de Pruebas

**Hardware:** Computadora con procesador Intel core i7 de 2.5 GHz con 8 GB RAM

**Software:** 
- Simulación de flujo continuo implementada en función MATLAB (versión R2021b)
- Modelos DES desarrollados en software MATLAB/Simulink de grado industrial (versión R2021b)

### Características de las Máquinas

**Estados:** Cada máquina tiene un estado activo y un estado inactivo

**Tasa de Producción:** 
- Determinística en estado activo
- Generada aleatoriamente desde distribución uniforme continua U(1, 3) [material/tiempo]

**Tiempos de Falla y Reparación:**
- Distribuidos exponencialmente
- Tasa de falla: U(0.005, 0.02) [1/tiempo]  
- Tasa de reparación: U(0.05, 0.2) [1/tiempo]
- Eficiencia de máquina en aislamiento: 60% a 97.5%
- Throughput de máquinas en aislamiento: 0.6 a 2.925 [material/tiempo]

### Resultados de Rendimiento

#### Tabla de Resultados Principales

| Diseño | Caso | M | B | Tiempo Comp [s] | Eventos | Δth% | Δx̄% |
|--------|------|---|---|----------------|----------|------|------|
|        |      |   |   | CF | DCF | CF | DCF |      |      |
| Línea Serial | 1 | 5 | 4 | 3 | 185 | 1.4×10⁴ | 2.2×10⁶ | 0.64 | 0.82 |
|              | 2 | 50 | 49 | 44 | 2558 | 1.4×10⁵ | 2.1×10⁷ | 0.72 | 0.74 |
| Ensamblaje/Desensamblaje | 3 | 5 | 4 | 2 | 202 | 1.5×10⁴ | 2.2×10⁶ | 0.02 | 0.59 |
|                          | 4 | 50 | 49 | 25 | 2452 | 1.1×10⁵ | 1.6×10⁷ | 0.55 | 0.83 |
| Bucle Único | 5 | 5 | 5 | 2 | 204 | 1.4×10⁴ | 3.5×10⁶ | 0.17 | 1.42 |
|             | 6 | 50 | 50 | 46 | 2631 | 1.4×10⁵ | 1.8×10⁷ | 0.56 | 0.66 |
| Múltiples Bucles | 7 | 5 | 7 | 2 | 453 | 1.2×10⁴ | 9.5×10⁵ | 0.04 | 0.06 |
|                  | 8 | 50 | 52 | 45 | 9425 | 1.4×10⁵ | 1.5×10⁷ | 0.68 | 0.84 |

**CF:** Simulación de Flujo Continuo  
**DCF:** Simulación de Flujo Discreto Continuo

#### Análisis de Resultados

**Eficiencia Computacional:**
- La simulación CF es de **57 a 249 veces más rápida** que la simulación DCF
- Relacionado con el número de eventos generados: CF genera en promedio **150 veces menos eventos** que DCF

**Precisión:**
- **Diferencia porcentual en throughput:** 0.42% en promedio
- **Diferencia porcentual en niveles de buffer:** 0.74% en promedio
- Alta precisión de la simulación de flujo continuo propuesta

**Patrones de Rendimiento:**
- El tiempo computacional aumenta casi linealmente con el número de máquinas
- La pendiente de la curva depende del diseño del sistema
- Explicación: tiempo para computar la matriz de alcanzabilidad W(t_k) en la ecuación, que es el cálculo más intensivo

## Caso Industrial

### Descripción del Sistema

**Empresa:** Fabricante italiano de cajones para cocinas  
**Sistema:** Línea de producción altamente automatizada para ensamblaje de lados de cajones  
**Objetivo:** Automatizar la operación de carga de partes en paletas al comienzo de la línea de ensamblaje

### Configuración "As Is"

**Estaciones:** Cuatro estaciones ST1, ST2, ST3 y ST4

**Buffers Inter-operacionales:**
- B{1}, B{2}, B{3} con capacidades 4, 4 y 7 respectivamente

**Procesos:**
- **ST1 y ST2:** Ensamblaje de componentes al cuerpo principal del lado del cajón
- **ST3:** Soldadura de componentes adicionales, verificación visual automatizada y operaciones finales
- **ST4:** Robot de descarga R descarga automáticamente los lados de cajón de las paletas

**Configuración Actual:**
- Carga manual del cuerpo principal en paleta por operador dedicado
- La línea casi nunca se queda sin partes para procesar

### Parámetros de Máquinas (Caso Industrial)

| Estación | Máquina | Tiempo de Ciclo [u.t.] | MTTF [u.t.] | MTTR [u.t.] |
|----------|---------|------------------------|-------------|-------------|
| ST1 | A | 5.06 | 1834.41 | 19.82 |
|     | B |      | 259.02  | 11.04 |
|     | C |      | 2234.97 | 37.72 |
| ST2 | D | 5.75 | 147.10  | 8.32  |
|     | E |      | 324.31  | 8.64  |
|     | F |      | 519.50  | 7.07  |
|     | G |      | 851.90  | 3.76  |
| ST3 | H | 3.85 | 274.39  | 8.08  |
|     | I |      | 9183.66 | 32.10 |
| ST4 | R | 3.85 | 4371.43 | 2.39  |

**u.t.:** unidades de tiempo  
**MTTF:** Tiempo Promedio Hasta Falla  
**MTTR:** Tiempo Promedio de Reparación

### Validación del Modelo

**Throughput Real del Sistema:** 0.156 [lados de cajón/u.t.]  
**Throughput Simulado:** 0.159 [lados de cajón/u.t.]  
**Error Porcentual:** 1.92%

El error está en línea con el nivel de precisión mostrado por el modelo en el análisis de sistemas de flujo discreto, por lo que el modelo puede considerarse preciso.

### Reconfiguración Propuesta

**Solución:** Explotar el robot de descarga R para realizar también la operación de carga

**Nuevo Proceso del Robot R:**
1. Descargar el lado de cajón de la paleta
2. Cargar un nuevo cuerpo principal en la paleta vacía

**Tiempo de Ciclo del Robot:** 5.36 [u.t.] para el ciclo completo de descarga-carga

**Nueva Configuración:**
- El sistema se convierte en un sistema de bucle cerrado único
- El flujo de entrada del cuerpo principal ocurre en la estación ST4 en lugar de ST1
- Nuevo buffer B{4} para almacenar los cuerpos principales cargados en paletas

### Optimización de Parámetros

#### Número de Paletas

**Restricciones:**
- Capacidad total de buffer no puede ser mayor a 20 partes
- Número máximo de paletas debe ser menor a 30

**Análisis:** Se varió la población del sistema de 1 a 29 paletas evaluando el throughput

**Resultados:**
- **Tiempo computacional CF:** 1.04 h
- **Tiempo computacional DES:** 4.88 h  
- **Número óptimo de paletas:** rango [10, 20]

#### Reasignación de Capacidad de Buffer

**Objetivo:** Aumentar el throughput reasignando la capacidad total de buffer entre los buffers del sistema

**Configuración de Prueba:**
- Capacidades de B{1}, B{2}, B{3} variadas entre 4 y 8
- Capacidad de B{4} definida como diferencia hasta capacidad total de 20

**Análisis:**
- 35 alternativas de reasignación evaluadas
- **Tiempo computacional CF:** 1.29 h
- **Tiempo computacional DES:** 6.38 h

**Resultado Óptimo:**
- Combinación [8, 4, 4, 4] para capacidades de B{1}, B{2}, B{3} y B{4}
- El throughput aumenta cuando la capacidad de B{1} aumenta

## Conclusiones y Desarrollos Futuros

### Contribuciones Principales

1. **Método de Simulación Innovador:** Presentación de un método de simulación de flujo continuo para evaluación de rendimiento de sistemas de manufactura con:
   - Producción de tipo de pieza única
   - Diseño general
   - Máquinas de ensamblaje y desensamblaje
   - Bucles únicos o múltiples
   - Distribuciones generales de tiempo inter-evento

2. **Eficiencia Computacional:** Los resultados numéricos mostraron que el uso de simulación de flujo continuo para la evaluación de rendimiento de sistemas de manufactura trae una reducción significativa del número de eventos discretos generados en una corrida de simulación:
   - **15 veces más rápido** que DES en evaluación de sistemas de flujo discreto
   - **110 veces más rápido** en evaluación de sistemas de flujo continuo

3. **Aplicabilidad Industrial:** La aplicabilidad del método propuesto se mostró en un caso industrial del sistema de manufactura, donde la simulación de flujo continuo se explotó durante la fase de reconfiguración de una línea de producción de lados de cajón.

### Limitaciones Actuales

**Sistemas Multi-producto:** Actualmente, la técnica de simulación de flujo continuo es inadecuada para analizar sistemas de manufactura multi-producto debido a dos preocupaciones principales:

1. **Buffers Compartidos:** Cuando los buffers se comparten entre múltiples productos en el sistema, el modelo propuesto del nivel de buffer no considera las cantidades individuales de diferentes productos

2. **Políticas de Despacho:** El método propuesto carece de una formalización general de las diversas políticas de despacho para la selección del próximo tipo de producto para procesamiento

### Desarrollos Futuros

#### Extensión a Sistemas Multi-producto

**Objetivo:** Generalizar el método de simulación de flujo continuo para la evaluación de sistemas multi-producto con:
- División y fusión de flujos de material  
- Políticas de despacho específicas

**Enfoque:** Estudio de un marco general para la formalización de las políticas más comunes que manejan el flujo de material en la industria manufacturera

#### Optimización Integrada

**Enfoques de Optimización:**

1. **Programación Lineal:** Formalización de las ecuaciones analíticas de la simulación de flujo continuo como un problema de programación lineal, donde las variables de control serán los parámetros de la política de control

2. **Análisis de Perturbación Infinitesimal:** Integración en la simulación de flujo continuo del análisis de perturbación infinitesimal para la estimación del gradiente de las medidas de rendimiento con respecto a pequeñas variaciones de los parámetros de control

#### Distribución de Probabilidad Conjunta

**Desarrollo:** Definición de la distribución de probabilidad conjunta de los niveles de buffer desde el log de eventos de la simulación de flujo continuo

**Aplicación:** Este análisis apoyará la definición de muchas políticas de control del flujo de material o del consumo de energía, que se basan en las condiciones conjuntas de varios recursos del sistema de manufactura bajo análisis

### Resumen

El trabajo propuesto proporciona un método de evaluación de rendimiento eficiente para analizar sistemas de manufactura de flujo continuo de tipo de pieza única con diseño general y distribuciones generales de tiempo inter-evento. Este método permite simulación muy rápida de sistemas bajo suposiciones generales y habilita la determinación eficiente de los parámetros utilizados en el diseño y control de sistemas de manufactura.

---

*Este método representa un avance significativo en la simulación de sistemas de manufactura, proporcionando una herramienta computacionalmente eficiente para el análisis y optimización de sistemas complejos de producción con diseños generales y múltiples bucles.*