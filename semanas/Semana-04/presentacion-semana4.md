# Presentación Semana 4: Fundamentos del Método de Monte Carlo
## Compendio exhaustivo para FT-06-SIM • Sexto Nivel

---

## 🎯 Objetivos de la Presentación

- Reconstruir el origen y evolución del método de Monte Carlo en el contexto científico e histórico.
- Explicar la base estadística del método a través de la Ley Fuerte de los Grandes Números.
- Aplicar Monte Carlo a la estimación de áreas, volúmenes e integrales en dominios acotados.
- Introducir el muestreo por importancia para dominios no acotados y problemas de alta varianza.
- Revisar casos aplicados en juegos de azar, ingeniería, finanzas y evaluación económica en salud.

---

## 📊 Agenda

1. **Fundamentos e Historia del Método**
2. **Ley de los Grandes Números y Convergencia**
3. **Estimación de Áreas, Volúmenes e Integrales**
4. **Muestreo por Importancia en Dominios No Acotados**
5. **Aplicaciones Prácticas Multidisciplinares**

---

## 🧠 Fundamentos del Método de Monte Carlo

### Origen e Historia
> “Von Neumann y Ulam acuñaron el término análisis de Monte Carlo para resolver problemas de protección nuclear demasiado costosos o complejos para abordarlos experimental o analíticamente.”

- Surge en la década de 1940 ligado al Proyecto Manhattan.
- Publicado formalmente por Metropolis y Ulam (1949) e inspirado por trabajos previos de Enrico Fermi.
- El nombre honra al Casino de Monte Carlo por su vínculo con el azar y el muestreo aleatorio.
- El auge de las computadoras aceleró su adopción en disciplinas científicas y de ingeniería.

---

## 📐 Ley Fuerte de los Grandes Números y Convergencia

- Justifica que la media muestral converge al valor esperado:  
  $$\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^{n} X_i = \mu$$
- **Ventaja**: la convergencia no depende de la dimensionalidad del problema.
- **Limitación**: convergencia lenta → requiere gran número de simulaciones (método intensivo en cómputo).
- El error decrece proporcionalmente a \( \frac{1}{\sqrt{n}} \), lo que impone costos computacionales significativos.

---

## 🎯 Estimación de Áreas, Volúmenes e Integración

### Ejemplo clásico: área del círculo unitario
1. Se circunscribe el círculo de radio \( r = 1 \) en un cuadrado.
2. Se generan puntos aleatorios uniformes en el cuadrado.
3. La fracción de puntos que cae dentro del círculo aproxima el área:

\[
\text{Área}_{\text{círculo}} \approx \frac{N_{\text{dentro}}}{N_{\text{total}}} \times (4r^2)
\]

### Formulación general de integrales
Para un dominio acotado \( D \):

\[
I = \int_{D} h(\mathbf{x})\, d\mathbf{x} = E[h(\mathbf{X})] \approx \frac{1}{n}\sum_{i=1}^{n} h(\mathbf{X}_i)
\]

Caso 1D en \( [a,b] \):

\[
I = \int_{a}^{b} h(x)\, dx \approx (b-a)\cdot \frac{1}{n}\sum_{i=1}^{n} h(x_i)
\]

---

## 🌌 Integración en Dominios No Acotados (Muestreo por Importancia)

- Cuando el dominio o la distribución uniforme no capturan bien la región crítica, se usa una densidad auxiliar \( g \).
- Se generan muestras \( Y_i \sim g \) y se ponderan:

\[
\theta = E[h(X)] \approx \frac{1}{n}\sum_{i=1}^{n} w(Y_i)\, h(Y_i), \quad w(y) = \frac{f(y)}{g(y)}
\]

- Reduce la varianza respecto al muestreo clásico y mejora la eficiencia en integrales impropias.

---

## 🧪 Ejemplos Aplicados

### 1. Juegos de Azar (Simulación Estática)
- Lanzamiento de moneda en hoja de cálculo: si \( R < 0.5 \) → “águila”, si no “sello”.
- Permite estimar probabilidades tras miles de réplicas sin modelar el tiempo.

### 2. Problemas Matemáticos
- **Estimación de \( \pi \)**: conteo de puntos dentro de un círculo (incluye problemas como la aguja de Buffon).
- **Resolución de integrales**: desde \( \int_{0}^{1} x\,dx \) hasta integrales impropias como \( \int_{-\infty}^{+\infty} \frac{1}{e^y + e^{-y}} dy \) obteniendo aproximaciones muy cercanas al valor analítico (\(1.5683\) vs \( \pi/2 \approx 1.5708\)).

### 3. Ingeniería e Industria
- Control de inventarios en entornos inciertos.
- Pronósticos de demanda y confiabilidad (p. ej., fallas de equipos HVAC a lo largo de años).

### 4. Finanzas Cuantitativas
- Valoración de opciones, proyección de portafolios y análisis de riesgo mediante “miles de escenarios financieros”.

### 5. Evaluación Económica en Salud
- Microsimulaciones para enfermedades complejas (ej. osteoporosis).
- Análisis Probabilístico de Sensibilidad (APS) usando Visual Basic, Excel o R para miles de iteraciones.

---

## ⚙️ Consideraciones Computacionales

- Requiere generadores de números pseudoaleatorios robustos y eficientes.
- El método es altamente paralelizable y escala bien con infraestructura de cómputo masivo.
- La elección de la distribución de muestreo y el tamaño de muestra definen la precisión/costo del experimento.

---

## 📚 Referencias Clave

- Banks, J. (1998). *Handbook of Simulation Principles...*
- Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). *Discrete-Event System Simulation.*
- Garriga Garzón, F. *Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo.*
- Gómez Cabrera, A. (2010). *Simulación de procesos constructivos.*
- Hernández Sampieri, R., & Mendoza Torres, C. P. (2018). *Metodología de la investigación.*
- Kelton, W. D. *Simulation Modeling and Analysis* (3rd ed.).
