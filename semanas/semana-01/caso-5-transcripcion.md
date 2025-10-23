# Caso 5: Un Estudio Comparativo de Enfoques de Modelado Computacional Determinístico y Estocástico para Analizar y Optimizar el Control de COVID-19

**Autores:** Abdeldjalil Kadri, Ahmed Boudaoui, Saif Ullah, Mohammed Asiri, Abdul Baseer Saqib, Muhammad Bilal Riaz

**Fuente:** Scientific Reports (2025) 15:11710

**Instituciones:** Universidad de Adrar (Argelia), Universidad de Peshawar (Pakistán), Universidad King Khalid (Arabia Saudí), Universidad Nangrahar (Afganistán), Universidad VSB-Technical de Ostrava (República Checa), Universidad Jadara (Jordania)

## Resumen

Este artículo presenta un análisis comparativo de enfoques de modelado computacional determinístico y estocástico para el control óptimo de COVID-19. Formulamos un modelo epidémico compartimental con perturbación por ruido blanco que incorpora varios factores que influyen en la transmisión de la enfermedad. Al incorporar efectos estocásticos, el modelo explica las incertidumbres inherentes en los datos epidémicos del mundo real. Establecemos las propiedades matemáticas del modelo, como la buena formulación y la existencia de distribuciones estacionarias, que son cruciales para entender la dinámica epidémica a largo plazo. Además, el estudio presenta estrategias de control óptimo para mitigar el impacto de la epidemia, tanto en escenarios determinísticos como estocásticos. Se utilizan datos reportados de Argelia para parametrizar el modelo, asegurando su relevancia y aplicabilidad a situaciones prácticas.

**Palabras clave:** Modelado estocástico COVID-19, Extinción, Distribución estacionaria, Control optimizado estocástico, Simulación

## 1. Introducción

El modelado matemático y la simulación son herramientas esenciales para la toma de decisiones informada en el control epidémico. Cada epidemia exhibe características biológicas únicas, necesitando la formulación de modelos dinámicos para capturar con precisión los procesos de transmisión y abordar escenarios del mundo real.

### 1.1 COVID-19 y Modelado Matemático

La infección altamente contagiosa del Coronavirus surgió por primera vez en China en diciembre de 2019 y se extendió rápidamente para cubrir prácticamente todo el mundo, representando una amenaza seria para todos en el globo. La epidemia de COVID-19 ha creado una crisis de salud mundial sin precedentes causando gran sufrimiento humano y trastorno social.

Los modelos matemáticos ayudan a explorar cómo una enfermedad se propaga a través de una población y sugieren intervenciones de control efectivas. Estos modelos pueden aplicarse para analizar la eficacia de las medidas de salud pública y pronosticar la progresión de la epidemia.

### 1.2 Enfoques de Modelado

Aunque se han discutido varios modelos epidémicos determinísticos en estudios previos, los modelos diferenciales estocásticos son más efectivos que los modelos determinísticos para simular fenómenos biológicos, ya que ofrecen un mayor nivel de realismo. Ejecutar un modelo estocástico múltiples veces genera una distribución de posibles resultados, proporcionando perspectivas más profundas y prácticas.

**Tipos de ruido ambiental:**
- **Ruido blanco:** Captura fluctuaciones aleatorias no correlacionadas
- **Ruido de Lévy:** Incorpora saltos ocasionales
- **Ruido coloreado:** Modelación de correlaciones temporales

## 2. Formulación Matemática del Modelo

### 2.1 Clasificación de la Población

La población total N(t) se clasifica en cuatro clases:
- **S(t):** Susceptibles
- **V(t):** Vacunados  
- **I(t):** Infectados
- **R(t):** Recuperados

Con N = S + V + I + R en el tiempo t > 0.

### 2.2 Supuestos del Modelo

Según las características de COVID-19, se consideran las siguientes suposiciones:
1. No hay parámetros negativos
2. La población susceptible se vacuna
3. Las personas infectadas pueden transmitir la infección a personas susceptibles o vacunadas
4. Las personas recuperadas tienen inmunidad temporal
5. El ruido blanco es proporcional a los compartimentos

### 2.3 Modelo Estocástico

Considerando que el ruido blanco es directamente proporcional a S, V, I, R, obtenemos el siguiente modelo estocástico:

```
dS(t) = [Δ - β S(t)I(t)/N + μR(t) - (k + δ)S(t)]dt + ρ₁S(t)dW₁(t)

dV(t) = [kS(t) - (1-τ)β V(t)I(t)/N - δV(t)]dt + ρ₂V(t)dW₂(t)

dI(t) = [β S(t)I(t)/N + (1-τ)β V(t)I(t)/N - (α + δ + δ₀)I(t)]dt + ρ₃I(t)dW₃(t)

dR(t) = [αI(t) - (δ + μ)R(t)]dt + ρ₄R(t)dW₄(t)
```

Donde:
- **Wⱼ {j = 1,...,4}:** Movimientos brownianos independientes
- **ρⱼ {j = 1,...,4}:** Intensidades del ruido blanco

### 2.4 Modelo Determinístico

Si ponemos ρⱼ = 0, j = 1,2,3,4, resulta la versión determinística del modelo:

```
dS(t)/dt = Δ - β I(t)S(t)/N + μR(t) - (δ + k)S(t)
dV(t)/dt = kS(t) - (1-τ)β V(t)I(t)/N - δV(t)  
dI(t)/dt = β I(t)S(t)/N + β(1-τ) V(t)I(t)/N - (α + δ + δ₀)I(t)
dR(t)/dt = αI(t) - (μ + δ)R(t)
```

### 2.5 Parámetros del Modelo

| Parámetro | Descripción |
|-----------|-------------|
| Δ | Tasa de nacimiento |
| k | Tasa de vacunación |
| β | Tasa de contacto |
| τ | Tasa de efectividad de la vacuna |
| μ | Pérdida de inmunidad natural |
| δ₀ | Tasa de muerte debido a infección COVID-19 |
| δ | Tasa de mortalidad natural |
| α | Tasa de recuperación |

### 2.6 Número de Reproducción Básico

El número de reproducción básico se define como:

**R₀ᵈ = [βδ + (1-τ)βk] / [(k + δ)(α + δ + δ₀)]**

- Si R₀ᵈ < 1: El equilibrio libre de enfermedad es globalmente asintóticamente estable
- Si R₀ᵈ > 1: El modelo posee un equilibrio endémico globalmente asintóticamente estable

## 3. Análisis Cualitativo del Modelo Estocástico

### 3.1 Existencia de Solución Única y Global Positiva

**Teorema 1:** Para todos los valores iniciales (S(0), V(0), I(0), R(0)) ∈ ℝ₊⁴, se puede determinar una solución única del sistema. Además, la solución permanecerá en ℝ₊⁴ para todo t ≥ 0 casi seguramente.

### 3.2 Criterios de Extinción de la Infección

Se define un parámetro:

**R₀ = [β + β(1-τ)] / [δ + α + δ₀ + ρ₃²/2]**

**Teorema 2:** Si R₀ < 1, entonces:
```
lim sup (ln I(t))/t < 0 a.s.
t→∞
```
Es decir, I(t) → 0 exponencialmente a.s.

### 3.3 Distribución Estacionaria y Ergodicidad

**Teorema 3:** Bajo la suposición:
```
R̄₀ := δkβ(1-τ) / [(δ + k + ρ₁²/2)(δ + ρ₂²/2)(δ₀ + α + δ + ρ₃²/2)] > 1
```
La solución posee una distribución estacionaria única π(·) y es ergódica.

## 4. Formulación del Control Óptimo Estocástico

### 4.1 Variables de Control

Se aplican dos variables de control en este trabajo:
- **c₁(t):** Control de vacuna dependiente del tiempo para COVID-19
- **c₂(t):** Control de efectos de tratamiento dependiente del tiempo

### 4.2 Problema de Control Determinístico

**Función de costo:**
```
J₁(c₁, c₂) = ∫₀ᵀᵉ [a₁S + a₂I + ½(p₁c₁²(t) + p₂c₂²(t))] dt
```

Sujeto al sistema:
```
dS(t)/dt = Δ - β I(t)S(t)/N + μR(t) - (kc₁(t) + δ)S(t)
dV(t)/dt = kS(t)c₁(t) - (1-τ)β V(t)I(t)/N - δV(t)
dI(t)/dt = β I(t)S(t)/N + β(1-τ) I(t)V(t)/N - (αc₂ + δ + δ₀)I(t)
dR(t)/dt = αc₂(t)I(t) - (δ + μ)R(t)
```

### 4.3 Controles Óptimos

**Teorema 4:** Existe una variable de control c* = (c₁*, c₂*) ∈ Ω que satisface:
```
J₁(c₁*, c₂*) = min J₁(c₁, c₂)
              Ω
```

**Teorema 5:** Los controles óptimos tienen la forma:
```
c₁* = min{max{kS(γ₁ - γ₂)/a₃, 0}, 1}
c₂* = min{max{αI(γ₃ - γ₄)/a₄, 0}, 1}
```

donde γⱼ(t) son las funciones adjuntas que satisfacen:
```
γ₁' = β I/N γ₁ + kc₁γ₁ - a₁
γ₂' = (1-τ)β I/N γ₂ + δγ₂  
γ₃' = -β S/N γ₃ + (τ-1)β V/N γ₃ + (αc₂ + δ + δ₀)γ₃ - a₂
γ₄' = (δ + μ)γ₄
```

### 4.4 Control Óptimo Estocástico

Para el caso estocástico, la función de costo se modifica a:
```
j₂(c) = E[∫₀ᵀᵉ [a₁S + a₂I + ½(a₃c₁²(t) + a₄c₂²(t))]dt + (p₁S²(Tₑ) + p₂V²(Tₑ) + p₃I²(Tₑ) + p₄R²(Tₑ))/2]
```

**Teorema 6:** El problema de control tiene un control óptimo de la forma:
```
(c₁*, c₂*) = (min{max{kS(v₁ - v₂)/a₃, 0}, cₘₐₓ¹}, min{max{αI(v₃ - v₄)/a₄, 0}, cₘₐₓ²})
```

## 5. Simulaciones Numéricas

### 5.1 Estimación de Parámetros

Se utilizó el método de mínimos cuadrados no lineales para estimar los parámetros del modelo usando datos reales de COVID-19 de Argelia del 22 de octubre de 2022 al 14 de marzo de 2022.

| Parámetro | Valor | Referencia | Unidad |
|-----------|-------|------------|--------|
| Δ | 1534 | Datos | Por día |
| k | 0.0100 | Ajuste | Por día |
| β | 0.2918 | Ajuste | - |
| τ | 0.5038 | Ajuste | Por día |
| μ | 0.0001 | Ajuste | Por día |
| δ₀ | 0.0579 | Ajuste | Por día |
| δ | 1/(77.5 × 365) | Literatura | Por día |
| α | 0.1175 | Ajuste | Por día |

### 5.2 Análisis de Sensibilidad

Se calcularon los índices de sensibilidad normalizados:

| Parámetro | β | α | δ | δ₀ | τ | ρ₃ |
|-----------|---|---|---|----|----|-----|
| Índice | 1 | -0.5330 | -1.6037×10⁻⁴ | -0.2627 | -0.3367 | -0.4083 |

**Resultados:**
- **β** tiene índice positivo: aumento directo en R₀
- **α, δ, δ₀, τ, ρ₃** tienen índices negativos: reducción en R₀

### 5.3 Ejemplos Numéricos

**Ejemplo 1 (Extinción):** Con parámetros donde R₀ < 1
- Δ = 1530, β = 0.451, k = 0.664, μ = 0.01, τ = 0.576
- δ₀ = 0.795, δ = 0.65, α = 0.791
- ρ₁ = 0.2, ρ₂ = 0.1, ρ₃ = 0.3, ρ₄ = 0.2
- **Resultado:** La epidemia se extingue de la población

**Ejemplo 2 (Distribución Estacionaria):** Con parámetros donde R̄₀ > 1
- Δ = 1530, β = 0.451, k = 0.664, τ = 0.057, δ₀ = 0.127
- μ = 0.01, δ = 0.65, α = 0.179
- ρ₁ = ρ₂ = ρ₃ = ρ₄ = 0.1
- **Resultado:** La enfermedad persiste en la población

### 5.4 Estrategias de Control

Los resultados de simulación muestran que:

1. **Implementación de controles de vacunación y tratamiento:**
   - Reduce las poblaciones S e I
   - Aumenta las poblaciones V y R

2. **Control de vacunación:**
   - Reduce el número de susceptibles moviéndolos a la clase vacunada
   - Disminuye las tasas de transmisión

3. **Control de tratamiento:**
   - Ayuda a los individuos I a recuperarse más rápidamente
   - Disminuye la población I y aumenta R

## 6. Resultados y Conclusiones

### 6.1 Principales Hallazgos

1. **Análisis Comparativo:** Los modelos estocásticos proporcionan mayor realismo que los determinísticos al incorporar incertidumbres inherentes.

2. **Extinción vs. Persistencia:**
   - Ruido blanco menor permite distribución estacionaria única cuando R̄₀ > 1
   - Ruido blanco mayor puede llevar a extinción cuando R₀ < 1

3. **Control Óptimo:**
   - Las estrategias de control dependientes del tiempo son cruciales
   - La combinación de vacunación y tratamiento es esencial

### 6.2 Impacto de Estrategias de Control

**Control de Vacunación:**
- Reduce susceptibles
- Disminuye tasas de transmisión  
- Contribuye a inmunidad de rebaño

**Control de Tratamiento:**
- Reduce severidad de la enfermedad
- Acorta tiempo de recuperación
- Alivia presión en sistemas de salud

### 6.3 Implicaciones para Políticas Públicas

1. **Estrategia Equilibrada:** Combinar vacunación y tratamiento
2. **Preparación para Variantes:** Mantener tratamientos efectivos
3. **Protección de Poblaciones de Alto Riesgo:** Estrategias dirigidas
4. **Control Sostenible:** Preparación para futuras pandemias

## 7. Conclusión

Este estudio presenta un marco matemático comprensivo para el control óptimo de COVID-19 en casos estocásticos usando un enfoque robusto de modelado matemático computacional. Al integrar elementos estocásticos, implementación con datos empíricos y técnicas de optimización sofisticadas, nuestro enfoque ofrece una herramienta potente para modelar, analizar y minimizar efectivamente la propagación de brotes de COVID-19.

### 7.1 Contribuciones Principales

1. **Marco Teórico:** Análisis riguroso del modelo estocástico con resultados de extinción y distribución estacionaria

2. **Validación Empírica:** Uso de datos reales de Argelia para parametrización y validación

3. **Control Óptimo:** Desarrollo de estrategias de control estocástico con condiciones de optimalidad

4. **Análisis Comparativo:** Comparación detallada entre enfoques determinísticos y estocásticos

### 7.2 Valor para Formuladores de Políticas

Los conocimientos obtenidos de este estudio tienen valor inmenso para formuladores de políticas y autoridades de salud pública, capacitándolos para diseñar estrategias basadas en evidencia dirigidas a:
- Frenar la transmisión del virus
- Salvaguardar la salud pública  
- Fomentar el bienestar social

### 7.3 Direcciones Futuras

1. **Extensión a Otras Enfermedades:** Aplicación del marco a otros patógenos
2. **Incorporación de Factores Socioeconómicos:** Modelado de impactos económicos
3. **Análisis Espacial:** Incorporación de heterogeneidad geográfica
4. **Modelos Adaptativos:** Desarrollo de estrategias que se adapten a condiciones cambiantes

---

*Este documento presenta una transcripción completa del artículo "A comparative study of deterministic and stochastic computational modeling approaches for analyzing and optimizing COVID-19 control" publicado en Scientific Reports en 2025.*