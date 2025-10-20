Compendio Exhaustivo: Probabilidad y Generación de Variables Aleatorias
I. Fundamentos de Probabilidad Necesarios para la Simulación
La simulación estocástica se basa en la capacidad de desarrollar un modelo matemático de naturaleza aleatoria que lógicamente represente el sistema real bajo estudio. Para ello, es indispensable identificar y modelar estadísticamente las variables aleatorias de entrada.
1. Variables Aleatorias (VA) y su Importancia
Una variable aleatoria ($X$) es un concepto central en la simulación. En el contexto de un modelo, las variables aleatorias de entrada representan las incertidumbres y la variabilidad inherente en el sistema.
• Tipos de VA: Las variables aleatorias pueden ser clasificadas como continuas o discretas. Las distribuciones discretas toman un número contable de valores, mientras que las continuas se definen por una función de densidad.
• Importancia del Modelado: La inclusión adecuada de las variables aleatorias es "esencial para que la simulación se aproxime a la realidad". Por ejemplo, al simular el tiempo de espera en una tienda, es crucial considerar la variabilidad en los tiempos de llegada y de servicio. "Si se ignora la variabilidad en alguna de estas variables, los resultados simulados podrían ser muy diferentes a los observados en la realidad".
• Conceptos Descriptivos: Es fundamental comprender conceptos clave de la distribución de probabilidad de una VA, como su función de densidad de probabilidad ($f(x)$) y su probabilidad acumulada ($F(x)$), además de las medidas de tendencia central y dispersión como la media, la varianza y la desviación estándar.
2. Independencia
En la simulación, especialmente en los métodos de Monte Carlo, se asume que los valores generados son independientes. El concepto de independencia es crucial para la credibilidad de los resultados.
• Definición: "Independence in probability theory refers to the scenario where the occurrence of one event does not influence the occurrence of another".
• Rol en MC: El método de Monte Carlo ejecuta pruebas que imitan "the random behavior of real-world events under defined probability distributions", por lo que la independencia de estas pruebas es un supuesto estadístico riguroso.
II. Método de la Transformada Inversa
El método de la transformada inversa (o de inversión) es una de las técnicas fundamentales y más utilizadas para transformar números pseudoaleatorios uniformes ($R \sim \mathcal{U}(0, 1)$) en observaciones de variables aleatorias que siguen una distribución específica ($F(x)$).
1. Fundamento Teórico
El método se basa en el teorema de inversión generalizada, que establece que si se dispone de una función de distribución $F$ continua y estrictamente creciente (inversible) y $U \sim \mathcal{U}(0, 1)$, entonces $X = F^{-1}(U)$ es una variable aleatoria con distribución $F$.
Narrativamente, el método lo que hace es "simular la probabilidad que es un valor entre 0 y 1, para después una vez fijada una distribución con sus parámetros poder indicar qué valor corresponde a la probabilidad".
2. Procedimiento General
El método requiere la función de distribución acumulada $F(x)$ de la distribución a simular. Los pasos para la simulación (o Transformación Cuantil en el caso discreto) son:
1. Generar un número aleatorio $R$ (o $U$) distribuido uniformemente en el intervalo $(0, 1)$.
2. Igualar la función de distribución acumulada a este número aleatorio: $F(x) = R$.
3. Despejar la variable aleatoria $X$ de la ecuación para obtener la función acumulada inversa: $X = F^{-1}(R)$.
3. Aplicación en Variables Discretas
Para variables discretas, la transformada inversa se implementa mediante la función de probabilidad acumulada discreta. La idea consiste en asociar a cada posible valor $x_i$ de $X$ un subintervalo de $(0, 1)$ de longitud igual a su probabilidad $p_i$.
"El procedimiento se basa en dividir el intervalo (0, 1) en tantos sub-intervalos como valores pueda tomar la variable aleatoria, ($x_1, x_2, \dots, x_i$) siendo el tamaño de los mismos su probabilidad".
El algoritmo compara el número aleatorio generado $R$ con los valores de la probabilidad acumulada $F(x)$ hasta encontrar el intervalo donde cae. El valor de $X$ se asigna según la regla: $X = x_i$ si $F(x_{i-1}) \le R < F(x_i)$.
4. Limitaciones
Aunque es el procedimiento más extendido, una limitación es que "algunas veces se dificulta demasiado la consecución de la transformada inversa", o bien, la función inversa puede involucrar funciones "computacionalmente costosas".
III. Generación de Variables Aleatorias Discretas
La transformada inversa es el método principal para generar observaciones de variables discretas como Bernoulli, Binomial y Poisson.
1. Distribución de Bernoulli
La Distribución de Bernoulli modela una ocurrencia aleatoria con dos resultados posibles, típicamente éxito (1) o fracaso (0), con una probabilidad de éxito $p$. La binomial con $n=1$ ensayo se convierte en una distribución de Bernoulli.
• Función de Masa de Probabilidad (FP): $P(X=x) = p^x (1-p)^{1-x}$, para $x \in {0, 1}$.
• Generación por Transformada Inversa (Método Directo):
    ◦ Se calcula la función acumulada $F(x)$: $F(0) = 1-p$ y $F(1) = 1$.
    ◦ Se aplica la siguiente regla de decisión: $$\mathbf{X_i = \begin{cases} 0 & \text{si } r_i \in (0, 1-p) \ 1 & \text{si } r_i \in (1-p, 1) \end{cases}}$$
    ◦ Cita textual corta: Para generar un valor de $X$, se genera $U$ y "si $U < p$, $X = 1$ y si no, $X = 0$".
2. Distribución Binomial
La Distribución Binomial ($B(n, p)$) se utiliza para modelar el número de éxitos ($k$) en $n$ ensayos independientes, cada uno con probabilidad de éxito $p$. Su función de probabilidad (fp) es $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$.
• Método de Convolución (Sumación): Este método resulta sencillo para la Binomial, ya que una VA Binomial ($n, p$) puede generarse "a partir de la suma de $n$ variables aleatorias con distribución de Bernouilli de parámetro $p$". En notación, $Y = X_1 + X_2 + \dots + X_n$, donde cada $X_i \sim \text{BE}(p)$.
• Método de Transformada Inversa Discreta: Puesto que "no existe método directo para hacer esto", la generación se realiza utilizando la inversa de la función de probabilidad acumulada discreta. El algoritmo implica generar $U \sim \mathcal{U}(0, 1)$ y compararlo secuencialmente con las probabilidades acumuladas $F(0), F(1), F(2), \dots$ hasta encontrar el valor $X$ que satisface $F(X-1) \le U < F(X)$.
3. Distribución de Poisson
La Distribución de Poisson ($P(\lambda)$) modela el número de eventos discretos que ocurren en un periodo definido, siendo $\lambda$ la media de ocurrencia.
• Función de Masa de Probabilidad (FP): $P(X=x) = \frac{e^{-\lambda}\lambda^x}{x!}$, para $x = 0, 1, 2, 3, \dots$.
• Método de Transformada Inversa Discreta: Al igual que con la Binomial, "como no existe método directo para hacer esto, se procede mediante la inversa de la función de probabilidad acumulada discreta".
• Algoritmo de Generación (Transformada Inversa): La fuente describe el algoritmo detallado para generar la distribución de Poisson utilizando la inversa de la acumulada:
• Ejemplo Narrativo: Esta distribución se aplica a diversos fenómenos, como en el problema de una máquina de llenado automático de leche en polvo: "ciertas muestras de las bolsitas de leche, no pasan las pruebas de control biológico. En promedio, solo se rechazan dos de cada 3000...".
• Relación con la Exponencial: En un proceso de Poisson homogéneo de parámetro $\lambda$, los tiempos de llegada entre eventos son variables aleatorias exponenciales con media $1/\lambda$. Esto proporciona un método alternativo de generación basado en simular secuencias de tiempos exponenciales hasta que la suma de estos tiempos supere un intervalo unitario.

--------------------------------------------------------------------------------
Referencias
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2013). Discrete-Event System, Simulation (5th edition). Pearson.
Banks, J., Carson, J.S., Nelson, B.L., & Nicol, D.M. (2014). Discrete Event System Simulation. Person Education.
Carlton, M. A., & Devore, J. L. (2014). Probability with Applications in Engineering, Science, and Technology. Springer.
Femenia, J. L., & Pellicer, P. C. (2025). Introducción a la simulación con JaamSim. Recursos Educativos En Abierto EdUPV. https://doi.org/10.4995/REA.2025.681901
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11th Edition). McGraw-Hill.
Law, A. M. (2014). Simulation Modeling and Analysis (5th ed.). McGraw-Hill.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Russell, S. J. (2004). Artificial Intelligence: A Modern Approach. Prentice Hall.
Universidad de Oviedo. (s.f.). Estadística para Simulación (B-2017) Introducción Objetivos Contenido.
Van Der Post, H. (2024). Monte Carlo with Python. Reactive Publishing.
Varios Autores. (s.f. a). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f. b). Generación de variables aleatorias discretas Método de la Transformada Inversa. FaMAF.
Varios Autores. (s.f. c). Generación de variables aleatorias continuas Método de la transformada inversa. FaMAF.
Varios Autores. (s.f. d). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f. e). Método de la transformada inversa. Universidad Tecnológica de Panamá.
Varios Autores. (s.f. f). SIMULACIÓN 18 UNIDAD 3 Generación de variables aleatorias. 3.1. Introducción. UCREANOP.
Varios Autores. (s.f. g). Simulación de sistemas con variables aleatorias para la toma de decisiones estratégicas. SciELO México.
Varios Autores. (s.f. h). Simulación: Métodos y aplicaciones. Ra-Ma.
Varios Autores. (s.f. i). Técnicas de Simulación y Remuestreo.
Varios Autores. (s.f. j). Variables Aleatorias. CIMAT.
Vose, D. (2000). Quantitative Risk Analysis: A Guide to Monte Carlo Simulation Modelling (1st edition). Wiley.