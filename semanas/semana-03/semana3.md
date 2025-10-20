Compendio Exhaustivo sobre Generación de Números Pseudoaleatorios
1. Números Pseudoaleatorios Uniformes
1.1. Definición y Naturaleza
Los números pseudoaleatorios son esenciales en la simulación estocástica, ya que permiten reproducir el comportamiento de variables aleatorias con cualquier función de probabilidad. Se denominan "pseudoaleatorios" (falso aleatorios) porque, aunque tienen la apariencia de ser aleatorios, en realidad son generados a partir de un algoritmo matemático determinista.
Un número pseudoaleatorio ($R_i$ o $U_i$) es el valor que toma una variable aleatoria $x$ que posee una distribución de probabilidad uniforme en el intervalo $$. Este rango es el más común porque simplifica las transformaciones a otras distribuciones.
Para que una secuencia de números pseudoaleatorios sea útil en simulación, debe cumplir las mismas propiedades estadísticas relevantes que una secuencia verdaderamente aleatoria $U(0, 1)$.
1.2. Propiedades de la Uniformidad e Independencia
La secuencia de números pseudoaleatorios generada debe satisfacer dos propiedades principales, las cuales deben ser validadas mediante pruebas estadísticas:
1. Uniformidad: La secuencia debe ajustarse a una distribución $\mathcal{U}(0, 1)$.
    ◦ Función de Densidad: $f(x) = 1$ si $x \in (0, 1)$ y $0$ si $x \notin (0, 1)$.
    ◦ Media Teórica: El valor esperado (media poblacional) debe ser $\mu = 0.5$ (un medio).
    ◦ Varianza Teórica: La varianza poblacional debe ser $\sigma^2 = 1/12$. La desviación estándar es $\sigma \approx 0.2887$.
2. Independencia: Los números deben ser estadísticamente independientes, sin ninguna correlación aparente entre ellos, actuando como valores uniformemente dispersos. La independencia entre ejecuciones o réplicas es clave en la simulación.
Un generador eficiente debe tener un periodo (ciclo de vida) suficientemente grande y ser reproducible (arrancando con las mismas condiciones iniciales, debe generar siempre la misma secuencia).
2. Generador Congruencial Lineal Mixto (GCL Mixto)
El Generador Congruencial Lineal (GCL) es uno de los algoritmos más antiguos, conocidos y utilizados para generar números pseudoaleatorios. El GCL es un algoritmo recursivo que produce una secuencia de números pseudoaleatorios.
2.1. Definición del Generador Mixto
El GCL Mixto se define por la siguiente relación de recurrencia, la cual genera una secuencia de números enteros $X_i$:
$$X_{i+1} = (a \cdot X_i + c) \mod m \quad \text{para } i = 0, 1, 2, 3, \dots$$
Donde los parámetros enteros deben ser mayores que cero:
• $X_0$: La semilla o valor inicial, necesaria para empezar el algoritmo.
• $a$: La constante multiplicativa (multiplicador).
• $c$: El incremento o constante aditiva (avance).
• $m$: El módulo. Es el máximo número posible de valores distintos que pueden ser generados ($X_{i+1} \in {0, 1, 2, \dots, m-1}$).
El generador es Mixto si $c \ne 0$. Si $c=0$, se denomina Congruencial Multiplicativo.
2.2. Obtención de Números Uniformes
La ecuación recursiva genera enteros $X_i \in {0, 1, \dots, m-1}$. Para transformar la secuencia a números pseudoaleatorios $R_i$ en el intervalo $(0, 1)$, se utiliza la relación:
$$U_{i} = \frac{X_{i}}{m}$$
Alternativamente, en algunos casos se utiliza $R_i = X_i / (m - 1)$ para obtener valores entre 0 y 1.
2.3. Periodo Máximo
El periodo es la longitud de la secuencia antes de que se repita cíclicamente. El periodo máximo que puede alcanzar un GCL es igual a su módulo, $p=m$.
Para que un generador congruencial lineal tenga periodo completo ($p=m$) para cualquier semilla, debe cumplir las tres condiciones del Teorema de Hull-Dobell:
1. $c$ y $m$ son primos relativos ($\text{mcd}(c, m) = 1$).
2. $a - 1$ es múltiplo de todos los factores primos de $m$.
3. Si $m$ es múltiplo de 4, entonces $a - 1$ también lo es.
3. Pruebas Básicas de Uniformidad
La finalidad de los tests empíricos de uniformidad es garantizar que la secuencia de números generados se ajusta a una distribución $\mathcal{U}(0, 1)$.
3.1. Prueba de Kolmogorov-Smirnov (K-S)
La prueba K-S es un test no paramétrico de bondad de ajuste.
• Propósito: Compara la función de distribución empírica de los datos generados con la función de distribución acumulada de la distribución uniforme teórica.
• Aplicación: Es útil para determinar si los números se distribuyen uniformemente. Se aplica a distribuciones teóricas continuas.
• Procedimiento Básico: Se ordenan los números pseudoaleatorios, se calcula la desviación máxima D (la máxima diferencia absoluta entre la distribución acumulada teórica y la observada) y se compara con un valor crítico $d_{\alpha, n}$. Si $D > d_{\alpha, n}$, se rechaza la hipótesis nula ($H_0$) de uniformidad.
3.2. Prueba Chi-Cuadrado ($\chi^2$)
También conocida como la prueba de Pearson o prueba de frecuencias, es una prueba de bondad de ajuste.
• Propósito: Mide la discrepancia entre la frecuencia observada ($F_o$) de los números en ciertos intervalos y la frecuencia esperada ($F_e$) si los números fueran perfectamente uniformes. En una distribución uniforme, se espera que el número de datos en cada intervalo sea aproximadamente igual.
• Procedimiento Básico:
    1. Agrupar los $n$ números aleatorios generados en $K$ clases disjuntas de igual amplitud $A$.
    2. Calcular la frecuencia observada ($F_o$) y la frecuencia esperada ($F_e = n \cdot A_i$).
    3. Calcular el estadístico $\chi^2$.
    4. Comparar el estadístico calculado con el valor crítico de la distribución Chi-cuadrado $\chi^2_{\alpha, K-1}$. Si $\chi^2 > \chi^2_{\alpha, K-1}$, se rechaza la hipótesis nula de uniformidad.
3.3. Pruebas de Medias y Varianzas
Estas pruebas son pruebas de hipótesis que validan si las propiedades muestrales coinciden con los parámetros teóricos de la distribución $\mathcal{U}(0, 1)$.
• Prueba de Medias: Contrasta la hipótesis nula ($H_0$) de que la media poblacional ($\mu$) es $1/2$ (o 0.5), ya que si hay una gran cantidad de datos uniformes entre cero y uno, se esperaría que el promedio fuera 0.5.
    ◦ $H_0: \mu = 1/2$.
• Prueba de Varianzas: Contrasta la hipótesis nula ($H_0$) de que la varianza poblacional ($\sigma^2$) es $1/12$, de acuerdo con la teoría estadística de la distribución uniforme.
    ◦ $H_0: \sigma^2 = 1/12$.
4. Implementación Básica en Excel y R
4.1. Implementación en Excel
Excel es una herramienta fundamental para la implementación manual y la simulación básica.
1. Generación de Números Uniformes $U(0, 1)$:
    ◦ Se utiliza la función incorporada =ALEATORIO() (o =RAND()), que genera un número pseudoaleatorio entre 0 y 1. Esta es una función "volátil" que se actualiza cada vez que se realiza un cálculo o se presiona F9.
2. Generación de Variables Uniformes $X(a, b)$:
    ◦ Para generar una variable aleatoria $X$ uniformemente distribuida en un intervalo $[a, b]$ a partir de $R_i \sim \mathcal{U}(0, 1)$, se aplica la transformación $X = a + (b - a) \cdot R_i$.
    ◦ Fórmula de Excel (Ejemplo $a=245, b=255$): =245+10*(B17) (si la celda B17 contiene el número aleatorio generado por =ALEATORIO()).
3. Implementación del GCL Mixto:
    ◦ La relación $X_{i+1} = (a \cdot X_i + c) \mod m$ se puede implementar utilizando una fórmula de celda que calcula el residuo (módulo).
    ◦ Cálculo del Residuo: Una fórmula general para calcular el residuo $X_{i+1}$ en Excel, utilizando $R_i$ de la celda C10, y los parámetros $a, c, m$ en otras celdas (D$3, D$4, D$5 respectivamente), es: =(D$3*C10+D$4)/D$5-ENTERO((D$3*C10+D$4)/D$5))*D$5.
    ◦ El número pseudoaleatorio final $R_i$ se obtiene dividiendo el residuo $X_i$ por el módulo $m$.
4.2. Implementación en R
El lenguaje R es una implementación del lenguaje S y es adecuado para la simulación estadística.
1. Generación de Números Uniformes $U(0, 1)$:
    ◦ R utiliza la función runif(n) para generar $n$ valores de una uniforme $\mathcal{U}(0, 1)$.
    ◦ Es posible fijar la semilla para reproducir la secuencia usando set.seed(entero).
2. Generación de Variables Aleatorias Uniformes $X(a, b)$:
    ◦ Para simular la distribución $\mathcal{U}[a, b]$, se genera $U \sim \mathcal{U}(0, 1)$ y se usa la transformación $U \mapsto a + U(b - a)$. La función runif(n, min, max) puede usarse directamente.
3. Generación GCL Mixto:
    ◦ R emplea por defecto el generador Mersenne-Twister. Sin embargo, los GCL (mixtos y multiplicativos) se pueden implementar utilizando funciones personalizadas o paquetes como simres, que ofrece la función rlcg().
    ◦ La lógica recursiva $X_i = (a \cdot X_{i-1} + c) \mod m$ se puede programar en R, y el valor $U_i$ se obtiene dividiendo el residuo $X_i$ por $m$.

--------------------------------------------------------------------------------
Referencias
Banks, J., Carson, J.S., Nelson, B.L., & Nicol, D.M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J.S., Nelson, B.L., y Nicol, D.M.(2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
García, D., García, R.H., & Cárdenas, B.R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Knuth, D. E. (2014). Art of Computer Programming, Volume 2: Seminumerical Algorithms. Addison-Wesley Professional.
L’Ecuyer, P. (1992). Testing random number generators. Proceedings of the 1992 Winter Simulation Conference, 305–313.
Law, A.M., & Kelton, W.D. (2000). Simulation Modeling and Analysis (3a ed.). McGraw Hill.
Lehmer, D.H. (1951). Proceedings of the Second Symposium on Large-Scale Digital Computing Machinery. Harvard University Press.
P. L’Ecuyer. (1994b). Uniform Random Number Generation. Ann. Of Operations Research.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Sadowski, R. P., Shannon, R. E., & Kelton, W. D. (1991). Simulation with Arena. McGraw-Hill.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. ed.). Trillas.
Van Der Post, H. (2024). Monte Carlo With Python. Reactive Publishing.
Varios Autores. (s.f.). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). Generador lineal congruencial. Wikipedia.
Varios Autores. (s.f.). Generación de Números Aleatorios. Universidad Tecnológica de Panamá.
Varios Autores. (s.f.). Generación de variables aleatorias continuas Método de la transformada inversa. FaMAF.
Varios Autores. (s.f.). SIMULACIÓN 18 UNIDAD 3 Generación de variables aleatorias. UCREANOP.
Varios Autores. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias. UPCommons.
Varios Autores. (s.f.). Técnicas de Simulación y Remuestreo.
