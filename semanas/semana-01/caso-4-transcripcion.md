# Caso 4: Un Estudio de Caso Real de un Modelo de Optimización Multi-Objetivo Determinístico en un Sistema de Pensión de Contribución Definida para Docentes

**Autores:** Marco Antonio Montufar-Benítez, Jaime Mora-Vargas, José Ramón Corona-Armenta, Gustavo Erick Anaya-Fuentes, Héctor Rivera-Gómez, Mayra Rivera-Anaya

**Fuente:** Computation 2025, 13, 25

**Institución:** Universidad Autónoma del Estado de Hidalgo, Tecnológico de Monterrey, Universidad La Salle

## Resumen

La gestión óptima de los fondos de pensiones se ha vuelto cada vez más crítica. A medida que la población envejece, la gestión efectiva de los fondos de pensiones es esencial para el sistema de seguridad social. El objetivo principal de este artículo es desarrollar un modelo de optimización multi-objetivo no lineal determinístico para determinar las tasas de contribución en un sistema de pensión de contribución definida. El modelo de optimización computacional fue implementado utilizando el lenguaje LINGO. En la primera parte de este estudio, se analizaron tres escenarios principales considerando diferentes tasas de inflación, enfocándose en la función objetivo que minimiza los porcentajes salariales que pagan los trabajadores al ahorrar durante un período específico mientras busca lograr un cierto número de años de cobertura.

### Resultados Principales:
- **Primer escenario:** Asume que el trabajador desea una calidad económica equivalente a su vida laboral, mostrando que las tasas de contribución van del 10% al 30% (con una tasa de inflación del 3%)
- **Segundo escenario:** Supone que el trabajador solo requiere el 80% de su salario equivalente durante la jubilación
- **Tercer escenario:** Especula que la inflación puede alcanzar el 7% anual, causando que las tasas de contribución aumenten significativamente del 40% al 80%
- **Frontera de Pareto:** Ilustra el equilibrio entre la tasa de contribución y los años de cobertura

## 1. Introducción

### 1.1 Motivación

Se han realizado modificaciones recientes a los sistemas de pensiones en países como México. La reforma de pensiones promovida por el Presidente Andrés Manuel López Obrador (AMLO) en 2020 introdujo varios cambios clave para mejorar la cobertura y beneficios para trabajadores en esquemas de contribución definida:

#### Aspectos Principales de la Reforma:
1. **Reducción de semanas mínimas requeridas:** De 1250 a 750 semanas para elegibilidad de pensión, con aumento gradual a 1000 semanas
2. **Aumento en contribuciones patronales:** Subida del 6.5% al 15% del salario base en ocho años
3. **Aumento en pensiones mínimas:** Vinculadas a salarios y edad del trabajador al jubilarse
4. **Consolidación de CONSAR:** Para mejorar medidas regulatorias y transparencia en las AFORES
5. **Pensiones garantizadas por el estado:** Para asegurar una pensión mínima para todos los trabajadores elegibles

En 2024 se propuso una reforma para que los trabajadores bajo la ley de 1997 se jubilen con el 100% de su salario. Aunque estas medidas son prometedoras, su sostenibilidad económica permanece incierta.

### 1.2 Revisión de Literatura

#### Evolución de los Sistemas de Pensiones

Los sistemas de seguridad social establecidos por Bismarck en Alemania y Beveridge en Inglaterra a finales del siglo XIX sirven como base para los sistemas de pensiones actuales en muchos países desarrollados. Operan bajo un modelo distributivo donde los ingresos de los trabajadores actuales financian las pensiones de los jubilados actuales.

#### Estadísticas de Investigación en Pensiones
Según la literatura, entre 1936 y 2021 se publicaron 1287 artículos relacionados con sistemas de pensiones en 536 revistas, escritos por 2035 autores de 112 países. Estos artículos fueron citados 10,663 veces, con un promedio de 8.29 citas por artículo.

#### Organizaciones de Seguridad Social en México

Las dos organizaciones responsables de la seguridad social en México son:
1. **Instituto Mexicano del Seguro Social (IMSS)**
2. **Instituto de Seguridad y Servicios Sociales para los Trabajadores del Estado (ISSSTE)**

Han establecido dos sistemas separados: obligatorio y electivo.

#### Transición del Sistema de Pensiones

- **1997:** El sistema de pensiones de retiro del IMSS mexicano transicionó de un sistema de contribución individual financiado públicamente a uno financiado privadamente
- **2007:** La modificación del estatuto del ISSSTE facilitó el establecimiento de un sistema de pensión que actualmente sirve como Administrador de Fondos de Retiro (AFORE)

### 1.3 Novedad del Artículo

Este estudio contribuye con un modelo de optimización multi-objetivo para establecer las contribuciones monetarias que un trabajador debe hacer al sistema de retiro durante un cierto número de años de ahorro, buscando lograr cierta cobertura en años y recompensas monetarias después del retiro.

**Características del Modelo:**
- Aplicado a una institución de educación superior en México
- Determina la frontera de Pareto que funciona para minimizar la tasa de contribución salarial mientras maximiza los años de cobertura
- Elimina factores estocásticos o probabilísticos para claridad en la toma de decisiones
- Complementa otros enfoques donde se incorporan factores estocásticos

## 2. Materiales y Métodos

### 2.1 Descripción del Problema y Modelo Conceptual

#### Contexto Demográfico en México

El IMSS emitió una nueva ley para regular las pensiones en 2019. Una razón principal para este cambio es el aumento promedio en la esperanza de vida entre los mexicanos:

- **1930:** 34 años promedio
- **1970:** 61 años promedio  
- **2000:** 74 años promedio
- **2016:** 75.2 años promedio
- **2016 en Hidalgo:** 74.6 años promedio (donde se aplica el modelo)

#### Impacto de la Natalidad

INEGI estimó que la tasa de natalidad cayó 50% de 1970 a 1990, sugiriendo que una población económicamente activa (PEA) más pequeña resultaría en menos recursos para apoyar a los pensionados.

#### Marco Legal

El Artículo 71 de la Ley del Seguro Social establece una pensión garantizada otorgada por el estado a aquellos que tienen 60 años o más y han contribuido por un mínimo de mil semanas.

#### Ejemplo Ilustrativo

Usando calculadoras del IMSS y Finauta:
- Persona de 50 años que comenzó a contribuir en 1997
- Ahorros acumulados: MXN 1,400,000
- Salario mensual actual: MXN 22,000
- Pensión resultante: MXN 12,149 (aproximadamente 55% del salario actual)

Esto ilustra que un trabajador debe buscar medios adicionales de ahorro si desea mantener un estilo de vida económicamente similar durante su jubilación.

### 2.2 Recopilación de Datos

#### Criterios de Elegibilidad

La institución educativa estableció criterios específicos para profesores elegibles para su esquema de retiro:
1. El trabajador debe ser miembro del sindicato académico
2. El salario del trabajador es un componente crucial que varía entre académicos

#### Parámetros del Modelo

**Contribuciones:**
- Inicialmente se anticipó que deducir el 5% del salario mensual tendría impacto mínimo en el nivel de vida
- Fondos contribuidos por empleados e institución se invertirían en instrumentos financieros con tasa de interés anual de aproximadamente 6%

**Inflación:**
- Escenario base requiere tasa de inflación del 3.33% (meta anual de inflación del país)
- La institución proporciona aumento salarial anual del 3% para mantener el ritmo de la inflación

### 2.3 Formulación del Modelo

#### Conjuntos de Datos:
- **A:** Años de ahorro; a = {1, ..., M}
- **B:** Años de cobertura; b = {M + 1, ..., M + m}

#### Parámetros:
- **M:** Años de ahorro
- **m:** Años de cobertura  
- **δ:** Tasa de aumento salarial
- **η:** Tasa de inflación
- **ρ:** Tasas de interés pagadas por el fideicomiso
- **σ:** Tasas de interés pagadas por el banco
- **I₀:** Salario inicial

#### Variables:
- **λ:** Tasa de contribución
- **Tᵦ:** Retiro o retiro en el año b
- **Dₐ:** Contribución en el año a
- **Uₐ:** Salario en el año a
- **Vₐ:** Balance en el año a
- **Vᵦ:** Balance en el año b

#### Modelo Matemático Multi-Objetivo:

**Funciones Objetivo:**
- **Min:** Z₁ = λ (minimizar tasa de contribución)
- **Max:** Z₂ = m (maximizar años de cobertura)

**Restricciones:**
1. Dₐ = Uₐ(2λ), ∀a ∈ A
2. Dᵦ = 0, ∀b ∈ B  
3. Uₐ = Uₐ₋₁(1 + δ), ∀a ∈ A
4. Uᵦ = 0, ∀b ∈ B
5. Vₐ = (Vₐ₋₁ + Dₐ)(1 + ρ), ∀a ∈ A
6. Vᵦ = (Vᵦ₋₁ - Tᵦ)(1 + σ), ∀b ∈ {B - {M + m}}
7. Tᵦ = I₀(1 + η)ᵇ, ∀b ∈ B
8. Tₐ = 0, ∀a ∈ A
9. V_{M+m} ≥ 0
10. λ ≥ 0

## 3. Resultados

### Escenarios Analizados

Se consideraron tres escenarios cuyos parámetros se presentan en la siguiente tabla:

| Parámetro | Escenario 1 | Escenario 2 | Escenario 3 |
|-----------|-------------|-------------|-------------|
| δ (Tasa de Aumento Salarial) | 3% | 3% | 3% |
| η (Tasa de Inflación) | 3.3% | 3.3% | 7% |
| ρ (Tasa de Interés Fideicomiso) | 6% | 6% | 6% |
| σ (Tasa de Interés Bancario) | 3% | 3% | 3% |
| I₀ | MXN 240,000 | MXN 240,000 | MXN 240,000 |
| Factor Especial | - | 80% del factor de contribución (Fc) | - |

### Resultados del Escenario 1

**Para la función objetivo Z₁:**
- Porcentaje de contribución resultante λ = 13%
- Más del doble de la cantidad recomendada (5%)

**Análisis de Sensibilidad:**
- Se examinaron escenarios para empleados e instituciones basados en:
  - Número de años trabajados o años de contribución (a)
  - Número de años de vida después del retiro a cubrir (m)

**Primera hipótesis:** Una persona ahorra por 30 años y desea vivir de 10 a 20 años después del retiro
- Se estableció una correlación lineal entre cobertura y porcentaje de contribución
- Aproximadamente 1.5% de aumento en la contribución por cada año adicional de cobertura deseada

**Análisis de comportamiento:** Para 10 años de cobertura con duración de ahorro variando de 16 a 30 años
- La curva es decreciente, indicando que a medida que aumenta el período de ahorros, disminuye el porcentaje de contribución requerido

**Análisis de sensibilidad extendido:**
- Duración de ahorros: 21 a 40 años
- Cobertura: 11 a 20 años
- Porcentajes de contribución bajos (≈10%) corresponden a ahorros de 40 años y coberturas de 12 años
- Porcentajes altos (≈33%) corresponden a 20 años de ahorros y 20 años de cobertura

### Resultados del Escenario 2

**Factor de cobertura Fc introducido en la Ecuación (7):**
- Si Fc = 80%, los porcentajes de contribución óptima son directamente proporcionales a Fc
- Demuestra que un pensionado no necesita actualizar el 100% de su salario con el efecto de la inflación durante el período de cobertura post-retiro

### Resultados del Escenario 3

**Comportamiento de inflación:**
- Banxico reportó una tasa de inflación general del 7% anual en 2021
- Bajo esta suposición, el modelo indicó las siguientes tasas de contribución óptima:

**Análisis crítico:**
- Para duraciones de ahorro de 20-40 años y cobertura de 10-12 años
- El trabajador debería contribuir alrededor del 40% de su salario anual
- Esto representa un escenario no realista sin experimentar un deterioro en el gasto familiar

### Frontera de Pareto

**Características:**
- Relación aproximadamente lineal entre parámetros en la frontera de Pareto
- Las diferentes curvas corresponden al número de años de ahorro
- Debido a la naturaleza del modelo donde la función de años de cobertura solo toma valores enteros, las curvas para menores cantidades de años de ahorro muestran múltiples valores de tasa de contribución para el mismo valor de años de cobertura

**Rangos de contribución según años de ahorro:**
- **21-25 años de ahorro:** Cobertura máxima de 22 años, tasas de contribución 21%-35%
- **27-31 años de ahorro:** Posible lograr 30 años de cobertura, tasas de contribución 21%-35%  
- **Más de 35 años de ahorro:** Cobertura de 21-35 años, contribuciones 21%-35% del salario

## 4. Conclusiones y Estudios Futuros

### Conclusiones Principales

1. **Decisiones basadas en información:** El enfoque establecido permite a las personas involucradas tomar decisiones basadas en información en lugar de creencias

2. **Insuficiencia de contribuciones bajas:** La investigación demostró que una tasa de contribución del 5% es insuficiente para cubrir los gastos de vida de la mayoría de los trabajadores

3. **Escenarios viables:** Los interesados pueden elegir entre dos escenarios con tasas de contribución por debajo del 30%

4. **Impacto de la inflación:** Con una tasa de inflación anual del 7%, las tasas de contribución se vuelven inasequibles para la mayoría de los trabajadores

5. **Resultados del modelo multi-objetivo:**
   - Para 21-25 años de ahorro: cobertura máxima de 22 años con contribuciones del 21%-35%
   - Para 27-31 años de ahorro: posible lograr 30 años de cobertura con contribuciones del 21%-35%
   - Para más de 35 años de ahorro: cobertura de 21-35 años con contribuciones del 21%-35%

### Beneficios del Modelo

1. **Para empresas:** Útil para conducir una revisión cuantitativa de varios escenarios de retiro
2. **Implementación relativamente sencilla:**
   - Determinar valores numéricos de los parámetros
   - Establecer cuántos años desea ahorrar el tomador de decisiones
   - El modelo genera información de frontera de Pareto
3. **Aplicabilidad amplia:** El modelo es aplicable a muchas otras instituciones que buscan implementar un sistema de pensión similar

### Estudios Futuros

#### Posibles Modificaciones del Modelo:

1. **Factores demográficos estocásticos:** Considerar tasas de mortalidad para ver su impacto en la probabilidad de que los fondos ahorrados se agoten antes de que el individuo fallezca

2. **Pensionado con cónyuge:** Calcular la probabilidad de que los activos ahorrados se agoten antes de que ambos individuos hayan fallecido

3. **Variabilidad en tasas:** Con datos suficientes sobre cambios en tasas de interés e inflación, el modelo puede adaptarse para tener en cuenta estos elementos

4. **Ingresos adicionales:** El modelo puede expandirse para considerar los ingresos económicos que un trabajador puede recibir de otros sistemas de retiro públicos

#### Aplicabilidad del Modelo:

- **Casos apropiados:** Cuando las empresas o instituciones manejan sus propios sistemas de retiro
- **Métodos de inversión:** Ya sea invirtiendo en bancos o en sus propios negocios
- **Certidumbre en parámetros:** Con cierta certeza en la estimación de los parámetros mencionados

### Limitaciones y Consideraciones

1. **Modelo determinístico:** No incorpora incertidumbre estocástica que podría existir en la realidad
2. **Parámetros fijos:** Asume tasas constantes que pueden variar en el tiempo
3. **Contexto específico:** Desarrollado para el contexto mexicano de educación superior

### Impacto y Contribuciones

1. **Herramienta de decisión:** Proporciona una base cuantitativa para la toma de decisiones en sistemas de pensiones
2. **Enfoque multi-objetivo:** Equilibra múltiples criterios (minimizar contribuciones vs. maximizar cobertura)
3. **Aplicación práctica:** Demostrado en un caso real de institución educativa mexicana
4. **Metodología transferible:** Puede adaptarse a otras instituciones con sistemas de pensión similares

---

*Este documento presenta una transcripción completa del artículo "An Actual Case Study of a Deterministic Multi-Objective Optimization Model in a Defined Contribution Faculty Pension System" publicado en Computation 2025.*