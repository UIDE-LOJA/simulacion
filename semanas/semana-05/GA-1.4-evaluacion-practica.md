# Evaluación Práctica GA-1.4: Simulación de Sistema Bancario

**Nombre del estudiante:** _______________________________________________

**Fecha:** _______________________________________________

**Duración:** 60 minutos | **Puntaje Total:** 8.0 puntos

---

## Introducción

Esta evaluación práctica te permitirá demostrar tu dominio de los **conceptos fundamentales de simulación** cubiertos en las semanas 1-4. Trabajarás de forma progresiva sobre un **caso único de sistema bancario real**, basado en una sucursal de Banco Pichincha en la ciudad de Loja (Ecuador), aplicando conocimientos sobre *clasificación de sistemas*, *generación de números pseudoaleatorios*, y *método de Monte Carlo* mediante ejercicios prácticos en Excel.

---

## CASO DE ESTUDIO: Sistema de Atención en Sucursal Banco Pichincha (Loja)

### Contexto del Sistema

Banco Pichincha, como el banco privado más grande del Ecuador, cuenta con una red de agencias a nivel nacional y múltiples canales de atención (ventanillas, cajeros automáticos, Mi Vecino, banca web y móvil). En el centro de Loja, una de sus sucursales físicas desea analizar y mejorar su sistema de atención al cliente en ventanilla. 

A lo largo del día, especialmente en fechas de pago de sueldos, pensiones y vencimiento de servicios básicos, los clientes llegan de forma aleatoria para realizar diversas transacciones. Cuando los cajeros están ocupados, los clientes esperan en una fila única dentro de la agencia.

### Operaciones de la Sucursal

En esta sucursal de Banco Pichincha de Loja se atienden transacciones como:
- Retiros y depósitos en cuentas corrientes y de ahorro
- Pagos de servicios básicos (agua, luz, teléfono, internet)
- Pagos de tarjetas de crédito
- Consultas relacionadas con créditos y movimientos de cuenta

El tiempo de servicio varía según el tipo de transacción y la complejidad del requerimiento del cliente. El banco también monitorea continuamente el flujo de efectivo en sus bóvedas y ventanillas, que cambia de manera constante con cada transacción en dólares.

### Datos Históricos del Sistema

El banco ha recopilado datos históricos que indican:
- Los clientes llegan con intervalos de tiempo variables a lo largo de la jornada de atención
- El tiempo de servicio por cliente en ventanilla varía entre **3 y 8 minutos**
- Hay **3 cajeros** disponibles en horario normal de operación
- La jornada de atención es de **8 horas continuas** (480 minutos)
- En días de alta demanda, la sucursal recibe aproximadamente **100 clientes al día**

---

## FASE 1: Análisis del Sistema (2.0 puntos)

Lee cuidadosamente el caso de estudio y completa las siguientes tareas:

### a) Clasificación del Sistema (1.2 puntos)

Completa la siguiente tabla clasificando el sistema bancario según las dimensiones estudiadas:

| Dimensión | Tu Clasificación | Justificación Técnica |
|-----------|------------------|----------------------|
| **Naturaleza** <br> (Discreto / Continuo / Híbrido) | | |
| **Comportamiento** <br> (Determinista / Estocástico) | | |

**Instrucciones:**
- Para "Naturaleza": Identifica qué componentes del sistema son discretos (eventos puntuales) y cuáles son continuos (cambios graduales)
- Para "Comportamiento": Explica si existe incertidumbre en el sistema y por qué

### b) Identificación de Componentes del Sistema (0.8 puntos)

Identifica los elementos clave del sistema de atención de la sucursal:

**Entidades** (elementos que fluyen por el sistema):

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

**Eventos principales** (acontecimientos que cambian el estado del sistema):

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

4. _________________________________________________________________

**Variables clave** (métricas para evaluar el desempeño):

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

4. _________________________________________________________________

---

## FASE 2: Generación de Datos de Tiempos de Servicio (2.0 puntos)

Para simular el sistema de atención, necesitas generar tiempos de servicio aleatorios entre 3 y 8 minutos.

### a) Implementación del Generador Congruencial Lineal - GCL (1.2 puntos)

Implementa en Excel un **GCL Mixto** con los siguientes parámetros:

**Parámetros del GCL:**
- Semilla (X₀) = 11
- Multiplicador (a) = 17
- Incremento (c) = 7
- Módulo (m) = 32

**Fórmula a utilizar:**
```
Xᵢ₊₁ = (a · Xᵢ + c) mod m
```

**Instrucciones:**
1. Crea una tabla en Excel (Hoja 2: "Fase 2 - Generación GCL")
2. Genera 20 números pseudoaleatorios (X₁, X₂, ..., X₂₀)
3. Calcula Rᵢ = Xᵢ / m para normalizar los valores entre 0 y 1

**Tabla de Generación (completa en Excel):**

| i | Xᵢ | Cálculo: (17·Xᵢ + 7) mod 32 | Xᵢ₊₁ | Rᵢ = Xᵢ₊₁/32 |
|---|----|-----------------------------|------|--------------|
| 0 | 11 | | | |
| 1 | | | | |
| 2 | | | | |
| ... | | | | |
| 19 | | | | |

### b) Transformación a Tiempos de Servicio (0.8 puntos)

Transforma cada número Rᵢ al rango [3, 8] minutos usando la fórmula:

```
Tiempo de Servicio = 3 + 5 × Rᵢ
```

**Instrucciones:**
- Agrega una columna en tu tabla de Excel con el título "Tiempo de Servicio (min)"
- Aplica la fórmula de transformación a cada Rᵢ
- Estos 20 valores representarán los tiempos de servicio de 20 clientes consecutivos

---

## FASE 3: Simulación del Sistema Bancario (3.0 puntos)

Usando los 20 tiempos de servicio generados en la Fase 2, simula la operación del sistema de atención.

### a) Tabla de Simulación (2.0 puntos)

Crea una tabla en Excel (Hoja 3: "Fase 3 - Simulación") con la siguiente estructura:

| Cliente | Rᵢ | Tiempo Servicio (min) | Tiempo Acumulado (min) |
|---------|----|-----------------------|------------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| ... | | | |
| 20 | | | |

**Instrucciones:**
- Copia los valores Rᵢ de la Fase 2
- Calcula el tiempo de servicio para cada cliente
- El tiempo acumulado es la suma progresiva de todos los tiempos de servicio

### b) Cálculos Estadísticos (1.0 punto)

Calcula las siguientes métricas en tu hoja de Excel:

**Tiempo promedio de servicio:**

Resultado: _____________ minutos

**Tiempo total de atención (20 clientes):**

Resultado: _____________ minutos

**Tiempo mínimo de servicio:**

Cliente #_____ con _____________ minutos

**Tiempo máximo de servicio:**

Cliente #_____ con _____________ minutos

---

## FASE 4: Análisis y Recomendación (1.0 punto)

Con base en los resultados de tu simulación, responde las siguientes preguntas en la Hoja 4 de Excel:

### 1. Interpretación de Capacidad (0.3 puntos)

Si la sucursal opera en jornada continua de 8 horas al día (480 minutos) y tiene 3 cajeros en ventanilla, ¿cuántos clientes puede atender aproximadamente?

**Cálculo:**

Capacidad por cajero = 480 min ÷ Tiempo promedio de servicio = _____________ clientes

Capacidad total (3 cajeros) = _____________ clientes/día

**Respuesta:**

___________________________________________________________________________

___________________________________________________________________________

### 2. Recomendación sobre Recursos (0.4 puntos)

Si la sucursal recibe en promedio 100 clientes al día en ventanilla, especialmente en días de pago de sueldos, pensiones y servicios, ¿es suficiente con 3 cajeros? Justifica tu respuesta con los datos de la simulación.

**Análisis:**

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

**Conclusión:** ☐ Suficiente  ☐ Insuficiente

### 3. Propuesta de Mejora (0.3 puntos)

¿Qué recomendarías a la sucursal de Banco Pichincha en Loja para mejorar su sistema de atención?

**Recomendaciones:**

1. ________________________________________________________________________

2. ________________________________________________________________________

3. ________________________________________________________________________

---

## Formato de Entrega

Archivo Excel único con 4 hojas claramente etiquetadas:

- **Hoja 1:** "Fase 1 - Análisis"
- **Hoja 2:** "Fase 2 - Generación GCL"
- **Hoja 3:** "Fase 3 - Simulación"
- **Hoja 4:** "Fase 4 - Recomendaciones"

**Requisitos adicionales:**

- Incluye todas las fórmulas y cálculos intermedios visibles
- Agrega comentarios o notas explicativas donde sea necesario
- Presenta los resultados de forma clara y organizada
- Nombre del archivo: `Apellido_Nombre_GA14.xlsx`

---

## Información Importante

- **Modalidad:** Evaluación práctica individual presencial — **8.0 pts**
- **Duración:** 60 minutos
- **Materiales permitidos:** Computadora con Excel, calculadora, compendios de las semanas 1-4
- **Entrega:** Archivo Excel al finalizar la evaluación

---

## Criterios de Evaluación

La evaluación se calificará considerando los siguientes aspectos:

- **Coherencia:** Las fases están conectadas y construyen sobre el mismo caso
- **Correctitud técnica:** Clasificaciones, fórmulas y cálculos son correctos
- **Implementación:** El GCL está correctamente implementado y los datos se transforman adecuadamente
- **Análisis:** Las recomendaciones están fundamentadas en los resultados de la simulación
- **Presentación:** El trabajo está organizado, claro y profesional

---

## Consejos para el Éxito

- Lee todo el caso antes de comenzar para entender la conexión entre las fases
- Administra tu tiempo: 15 minutos por fase aproximadamente
- Verifica tus fórmulas antes de copiarlas a múltiples celdas
- Usa los resultados de cada fase en la siguiente
- Si tienes dudas durante la evaluación, levanta la mano para consultar con el docente

---

*Documento generado para la asignatura de Simulación - Semana 5*


---

## FORMATO DE ENTREGA

### Estructura del Archivo Excel

Entrega un archivo Excel único con **4 hojas** claramente etiquetadas:

- ☐ **Hoja 1:** "Fase 1 - Análisis"
- ☐ **Hoja 2:** "Fase 2 - Generación GCL"
- ☐ **Hoja 3:** "Fase 3 - Simulación"
- ☐ **Hoja 4:** "Fase 4 - Recomendaciones"

### Requisitos del Archivo

- ☐ Todas las fórmulas y cálculos intermedios deben estar visibles
- ☐ Agrega comentarios o notas explicativas donde sea necesario
- ☐ Presenta los resultados de forma clara y organizada
- ☐ Usa formato profesional (títulos, bordes, colores apropiados)

### Nombre del Archivo

```
Apellido_Nombre_GA14.xlsx
```

**Ejemplo:** Garcia_Maria_GA14.xlsx

---

## INFORMACIÓN IMPORTANTE

| Aspecto | Detalle |
|---------|---------|
| **Modalidad** | Evaluación práctica individual presencial |
| **Puntaje** | 8.0 puntos |
| **Duración** | 60 minutos |
| **Materiales permitidos** | • Computadora con Excel<br>• Calculadora<br>• Compendios de las semanas 1-4 |
| **Entrega** | Al finalizar la evaluación |

---

## CRITERIOS DE EVALUACIÓN

Tu trabajo será evaluado considerando los siguientes aspectos:

### 1. Coherencia (20%)
- Las cuatro fases están conectadas lógicamente
- Los resultados de cada fase se utilizan en la siguiente
- El análisis final se basa en los datos generados

### 2. Correctitud Técnica (30%)
- Las clasificaciones del sistema son correctas y bien justificadas
- Las fórmulas del GCL están correctamente implementadas
- Los cálculos estadísticos son precisos
- La transformación de datos es adecuada

### 3. Implementación (25%)
- El GCL genera correctamente los 20 números pseudoaleatorios
- La transformación al rango [3, 8] es correcta
- Las tablas están completas y bien estructuradas
- Las fórmulas de Excel son apropiadas

### 4. Análisis y Razonamiento (15%)
- Las recomendaciones están fundamentadas en los resultados
- El análisis de capacidad es lógico y correcto
- Las propuestas de mejora son viables y pertinentes

### 5. Presentación (10%)
- El trabajo está organizado y es fácil de seguir
- Las hojas de Excel están claramente etiquetadas
- El formato es profesional y limpio
- Incluye explicaciones donde es necesario

---

## CONSEJOS PARA EL ÉXITO

### Antes de Comenzar
- ☐ Lee todo el caso de estudio completo antes de empezar
- ☐ Entiende la conexión entre las cuatro fases
- ☐ Revisa tus apuntes de las semanas 1-4 si es necesario

### Durante la Evaluación
- ☐ **Administra tu tiempo:** Aproximadamente 15 minutos por fase
  - Fase 1: 15 minutos
  - Fase 2: 15 minutos
  - Fase 3: 20 minutos
  - Fase 4: 10 minutos

- ☐ **Verifica tus fórmulas** antes de copiarlas a múltiples celdas
- ☐ **Guarda tu trabajo** cada 10-15 minutos
- ☐ **Usa los resultados** de cada fase en la siguiente

### Si Tienes Dudas
- ☐ Levanta la mano para consultar con el docente
- ☐ No te quedes bloqueado en una fase, continúa y regresa después
- ☐ Revisa los ejemplos de los compendios

### Antes de Entregar
- ☐ Verifica que las 4 hojas estén completas
- ☐ Revisa que todas las fórmulas funcionen correctamente
- ☐ Confirma que el nombre del archivo sea correcto
- ☐ Asegúrate de que tus respuestas estén justificadas

---

## DISTRIBUCIÓN DEL TIEMPO SUGERIDA

```
Minuto 0-5:    Lectura completa del caso y planificación
Minuto 5-20:   Fase 1 - Análisis del Sistema
Minuto 20-35:  Fase 2 - Generación de Datos (GCL)
Minuto 35-50:  Fase 3 - Simulación y Cálculos
Minuto 50-58:  Fase 4 - Análisis y Recomendaciones
Minuto 58-60:  Revisión final y entrega
```

---

## RECORDATORIOS IMPORTANTES

### Sobre el GCL
- La fórmula es: **Xᵢ₊₁ = (17 · Xᵢ + 7) mod 32**
- En Excel, usa la función `=RESIDUO((17*celda_anterior + 7), 32)`
- No olvides dividir entre 32 para obtener Rᵢ

### Sobre la Transformación
- La fórmula es: **Tiempo = 3 + 5 × Rᵢ**
- Esto transforma valores [0, 1] al rango [3, 8] minutos
- Verifica que ningún tiempo sea menor a 3 o mayor a 8

### Sobre los Cálculos
- Usa funciones de Excel: `=PROMEDIO()`, `=SUMA()`, `=MIN()`, `=MAX()`
- El tiempo acumulado debe ir sumando progresivamente
- Revisa que los cálculos de capacidad consideren los 3 cajeros

---

## NOTAS FINALES

Esta evaluación te permite demostrar tu comprensión integral de los conceptos de simulación aplicados a un caso real del sector bancario ecuatoriano. Recuerda que:

- La simulación es una herramienta poderosa para la toma de decisiones
- Los resultados deben interpretarse en el contexto del problema
- Las recomendaciones deben ser prácticas y fundamentadas en datos

**¡Éxito en tu evaluación!**

---

*Documento preparado para la asignatura de Simulación - Semana 5*  
*Banco Pichincha es una marca registrada utilizada con fines educativos*
