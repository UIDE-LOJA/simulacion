# Presentación Semana 3: Generación de Números Pseudoaleatorios
## Fundamentos y Aplicaciones en Simulación de Monte Carlo

---

## 🎯 Objetivos de la Presentación

- Comprender la **naturaleza y definición** de los números pseudoaleatorios
- Analizar las **propiedades de uniformidad e independencia**
- Dominar el **Generador Congruencial Lineal (GCL) Mixto**
- Aplicar **pruebas de validación** para verificar calidad
- Implementar generadores en **Excel y R**

---

## 📊 Agenda

1. **Fundamentos de Números Pseudoaleatorios**
2. **Propiedades: Uniformidad e Independencia**
3. **Generador Congruencial Lineal Mixto**
4. **Pruebas de Validación Estadística**
5. **Implementación Práctica en Excel y R**

---

## 🎲 ¿Qué son los Números Pseudoaleatorios?

### Definición Central
> *"Los números pseudoaleatorios son esenciales en la simulación estocástica, ya que permiten reproducir el comportamiento de variables aleatorias con cualquier función de probabilidad"*

### Características Fundamentales
- **Pseudoaleatorios**: "Falso aleatorios" - generados por algoritmo determinista
- **Apariencia aleatoria**: Parecen aleatorios pero siguen un patrón matemático
- **Reproducibilidad**: Misma semilla → misma secuencia
- **Distribución objetivo**: Principalmente $U(0,1)$ uniforme

---

## 📐 Notación Matemática

### Variable Aleatoria Uniforme
Un número pseudoaleatorio $(R_i$ o $U_i)$ es el valor de una variable aleatoria $x$ con distribución uniforme:

$$x \sim \mathcal{U}(0,1)$$

### Rango Estándar
- **Intervalo**: $(0,1)$ 
- **Ventaja**: Simplifica transformaciones a otras distribuciones
- **Objetivo**: Reproducir propiedades estadísticas de secuencia verdaderamente aleatoria

---

## ✅ Propiedad 1: Uniformidad

### Distribución Uniforme $\mathcal{U}(0,1)$

#### Función de Densidad
$$f(x) = \begin{cases} 
1 & \text{si } x \in (0,1) \\
0 & \text{si } x \notin (0,1)
\end{cases}$$

#### Parámetros Teóricos
- **Media**: $\mu = 0.5$ (un medio)
- **Varianza**: $\sigma^2 = \frac{1}{12}$
- **Desviación estándar**: $\sigma \approx 0.2887$

---

## 🔗 Propiedad 2: Independencia

### Independencia Estadística
- **Sin correlación**: No debe existir relación aparente entre números consecutivos
- **Dispersión uniforme**: Valores uniformemente distribuidos
- **Clave en simulación**: Independencia entre ejecuciones/réplicas

### Requisitos del Generador
- **Periodo suficientemente grande**: Ciclo de vida extenso
- **Reproducibilidad**: Mismas condiciones iniciales → misma secuencia

---

## ⚙️ Generador Congruencial Lineal (GCL) Mixto

### Definición Histórica
> *"Uno de los algoritmos más antiguos, conocidos y utilizados para generar números pseudoaleatorios"*

### Fórmula Recursiva
$$X_{i+1} = (a \cdot X_i + c) \bmod m \quad \text{para } i = 0, 1, 2, 3, \ldots$$

### Parámetros del GCL
- **$X_0$**: Semilla (valor inicial)
- **$a$**: Constante multiplicativa (multiplicador)
- **$c$**: Incremento o constante aditiva
- **$m$**: Módulo (determina rango de valores)

---

## 🔄 Tipos de Generadores Congruenciales

### Clasificación por Incremento
- **GCL Mixto**: $c \neq 0$ (con incremento)
- **GCL Multiplicativo**: $c = 0$ (sin incremento)

### Rango de Valores
$$X_{i+1} \in \{0, 1, 2, \ldots, m-1\}$$

### Transformación a Uniforme
$$U_i = \frac{X_i}{m}$$

*Alternativa*: $R_i = \frac{X_i}{m-1}$ para obtener valores entre 0 y 1

---

## 🔄 Periodo Máximo: Teorema de Hull-Dobell

### Definición de Periodo
- **Periodo**: Longitud de secuencia antes de repetirse
- **Máximo posible**: $p = m$ (periodo completo)

### Condiciones para Periodo Completo
Para que un GCL tenga periodo completo ($p = m$):

1. **$c$ y $m$ son primos relativos**: $\gcd(c, m) = 1$
2. **$a - 1$ es múltiplo** de todos los factores primos de $m$
3. **Si $m$ es múltiplo de 4**, entonces $a - 1$ también lo es

---

## 🧪 Pruebas de Validación: Uniformidad

### Objetivo General
> *"Garantizar que la secuencia de números generados se ajusta a una distribución $\mathcal{U}(0,1)$"*

### Pruebas Estadísticas Principales
1. **Kolmogorov-Smirnov (K-S)**
2. **Chi-Cuadrado ($\chi^2$)**  
3. **Pruebas de Medias y Varianzas**

---

## 📊 Prueba de Kolmogorov-Smirnov (K-S)

### Características
- **Tipo**: Test no paramétrico de bondad de ajuste
- **Aplicación**: Distribuciones teóricas continuas
- **Comparación**: Función de distribución empírica vs teórica

### Procedimiento
1. **Ordenar** números pseudoaleatorios
2. **Calcular** desviación máxima $D$
3. **Comparar** con valor crítico $d_{\alpha,n}$
4. **Decisión**: Si $D > d_{\alpha,n}$ → rechazar $H_0$ (uniformidad)

---

## 📈 Prueba Chi-Cuadrado ($\chi^2$)

### También Conocida Como
- Prueba de Pearson
- Prueba de frecuencias

### Metodología
- **Mide**: Discrepancia entre frecuencia observada ($F_o$) y esperada ($F_e$)
- **Principio**: En distribución uniforme, frecuencias deben ser aproximadamente iguales

### Pasos del Procedimiento
1. **Agrupar** $n$ números en $K$ clases de igual amplitud
2. **Calcular** $F_o$ y $F_e = n \cdot A_i$
3. **Computar** estadístico $\chi^2$
4. **Comparar** con $\chi^2_{\alpha,K-1}$

---

## 📏 Pruebas de Medias y Varianzas

### Prueba de Medias
- **Hipótesis nula**: $H_0: \mu = \frac{1}{2}$
- **Fundamento**: Gran cantidad de datos uniformes → promedio = 0.5

### Prueba de Varianzas  
- **Hipótesis nula**: $H_0: \sigma^2 = \frac{1}{12}$
- **Fundamento**: Teoría estadística de distribución uniforme

### Importancia
Validan si propiedades muestrales coinciden con parámetros teóricos $\mathcal{U}(0,1)$

---

## 💻 Implementación en Excel

### Función Incorporada
- **=ALEATORIO()** o **=RAND()**
- **Características**: Función "volátil" - se actualiza con F9
- **Rango**: Entre 0 y 1

### Variable Uniforme en Intervalo $[a,b]$
$$X = a + (b-a) \cdot R_i$$

**Ejemplo Excel**: `=245+10*(B17)` para $[245, 255]$

---

## ⚡ Implementación GCL en Excel

### Fórmula del Residuo
Para calcular $X_{i+1} = (a \cdot X_i + c) \bmod m$:

```excel
=(D$3*C10+D$4)/D$5-ENTERO((D$3*C10+D$4)/D$5))*D$5
```

### Parámetros de Referencia
- **D$3**: Multiplicador $a$
- **D$4**: Incremento $c$  
- **D$5**: Módulo $m$
- **C10**: Valor anterior $X_i$

### Número Final
$$R_i = \frac{X_i}{m}$$

---

## 🔧 Implementación en R

### Generación Básica
```r
# Números uniformes U(0,1)
runif(n)

# Fijar semilla para reproducibilidad
set.seed(123)
```

### Variable Uniforme en $[a,b]$
```r
# Transformación manual
u <- runif(n)
x <- a + u * (b - a)

# Función directa
runif(n, min = a, max = b)
```

---

## 🎯 GCL en R: Implementación Avanzada

### Generador por Defecto
- **Mersenne-Twister**: Generador predeterminado en R
- **Alta calidad**: Periodo extremadamente largo

### Implementación Personalizada
```r
# Usando paquete simres
library(simres)
rlcg(n, a, c, m, seed)

# Implementación manual
gcl_mixto <- function(n, a, c, m, seed) {
  x <- numeric(n)
  x[1] <- seed
  for(i in 2:n) {
    x[i] <- (a * x[i-1] + c) %% m
  }
  return(x/m)
}
```

---

## 🔬 Validación Práctica

### Proceso de Verificación
1. **Generar** secuencia de números pseudoaleatorios
2. **Aplicar** pruebas estadísticas (K-S, $\chi^2$, medias/varianzas)
3. **Analizar** resultados vs valores críticos
4. **Validar** o **rechazar** calidad del generador

### Criterios de Aceptación
- **Uniformidad**: Distribución aproximadamente $\mathcal{U}(0,1)$
- **Independencia**: Sin correlaciones aparentes
- **Periodo**: Suficientemente largo para aplicación

---

## ⚖️ Ventajas y Limitaciones

### Ventajas del GCL
- **Simplicidad**: Fácil implementación
- **Eficiencia**: Computacionalmente rápido
- **Reproducibilidad**: Control total de la secuencia
- **Teoría sólida**: Base matemática bien establecida

### Limitaciones
- **Correlaciones**: Pueden existir en secuencias largas
- **Periodo limitado**: Determinado por el módulo $m$
- **Sensibilidad**: A la elección de parámetros
- **Pruebas**: Requiere validación estadística rigurosa

---

## 🎯 Síntesis: Elementos Clave

### Fundamentos Teóricos
- **Números pseudoaleatorios** como base de simulación estocástica
- **Propiedades esenciales**: Uniformidad e independencia
- **Validación estadística** obligatoria

### Implementación Práctica
- **GCL Mixto**: Algoritmo recursivo determinista
- **Herramientas**: Excel para casos básicos, R para aplicaciones avanzadas
- **Calidad**: Depende de elección correcta de parámetros

---

## 🔮 Aplicaciones en Simulación

### Usos Principales
- **Simulación de Monte Carlo**: Base fundamental
- **Modelado estocástico**: Variables aleatorias diversas
- **Análisis de riesgo**: Evaluación de incertidumbre
- **Optimización**: Algoritmos metaheurísticos

### Transformaciones
- **Método de transformada inversa**
- **Método de aceptación-rechazo**
- **Generación de distribuciones específicas**

---

## 📚 Referencias Clave

### Fundamentos Clásicos
- **Banks et al. (2005)**: *Discrete-Event System Simulation*
- **Law & Kelton (2000)**: *Simulation Modeling and Analysis*
- **Knuth (2014)**: *Art of Computer Programming, Vol. 2*

### Implementación y Pruebas
- **L'Ecuyer (1992)**: *Testing Random Number Generators*
- **García et al. (2013)**: *Simulación y análisis de sistemas con ProModel*

---

## 💡 Reflexiones Finales

### Preguntas para Considerar
- ¿Cómo **equilibrar** simplicidad y calidad estadística?
- ¿Qué **impacto** tiene la elección de parámetros en resultados?
- ¿Cuándo es **necesario** usar generadores más sofisticados?

### Desafío Profesional
> *"La calidad de una simulación nunca puede ser mejor que la calidad de los números pseudoaleatorios que la alimentan"*

---

## 🎯 Para Profundizar

### Lecturas Recomendadas
- **Shannon (1988)**: *Simulación de Sistemas: Diseño, Desarrollo e Implantación*
- **Van Der Post (2024)**: *Monte Carlo With Python*
- **Varios Autores**: *Apuntes de Simulación - TecNM*

### Herramientas Avanzadas
- **Generadores modernos**: Mersenne-Twister, Well, PCG
- **Librerías especializadas**: GSL, Boost Random, NumPy
- **Validación exhaustiva**: TestU01, NIST Statistical Test Suite

---

*Presentación basada en el Compendio Exhaustivo sobre Generación de Números Pseudoaleatorios - Semana 3, FT-06-SIM Simulación-MC*