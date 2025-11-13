Compendio Exhaustivo sobre el Método de Monte Carlo
1. Fundamentos del Método de Monte Carlo
1.1. Origen e Historia
El método de Monte Carlo surgió en un contexto de alta confidencialidad científica. La palabra "Simulación", en su concepto actual, se remonta a finales de la década de 1940, cuando "Von Neumann y Ulam acuñaron el término «análisis de Monte Carlo» para aplicarlo a una técnica matemática que usaban entonces para resolver ciertos problemas de protección nuclear que eran, o demasiado costosos para resolverse experimentalmente o demasiado complicados para ser tratados analíticamente".
Si bien la técnica fue formalmente publicada por Nicholas Constantine Metropolis y Stanislaw Marcin Ulam en 1949, la técnica del muestreo estadístico ya se había utilizado años antes, por ejemplo, por Enrico Fermi en los años 30. La concepción del método está intrínsecamente ligada al Proyecto Manhattan en el Laboratorio de Los Álamos, donde Stanislaw Ulam, al recuperarse de una enfermedad, concibió la idea de usar procesos aleatorios para resolver problemas matemáticos no determinísticos, lo que llevó a la formulación de un enfoque estadístico para abordar problemas de criticidad y difusión de neutrones.
El nombre fue elegido en referencia a la "capital del juego de azar", el Casino de Monte Carlo en Mónaco, debido a que el método "enlaza el muestreo aleatorio con la capacidad de los Computadores para generar números pseudoaleatorios y efectuar cálculos". Este enfoque pragmático "surge a mediados de la segunda guerra mundial" y, con el advenimiento de las computadoras de alta velocidad, su uso se expandió más allá de la física nuclear hacia diversas disciplinas científicas [114, 129, 248 probabilidad al valor de la "medida" del conjunto conforme se aumenta el número de simulaciones. La Ley Fuerte de los Grandes Números justifica el valor esperado de una variable aleatoria como el promedio a largo plazo de un muestreo repetitivo, indicando que:
"Dada una sucesión infinita de variables aleatorias independientes idénticamente distribuidas ($X_1, X_2, \dots$), todas ellas con valor esperado $\mu$: $\lim_{n \to \infty} \frac{X_1 + X es que "converge con mucha lentitud". Se requiere una gran cantidad de cálculos, por lo que es considerado un método de cómputo intenso. La precisión se reduce a medida que aumenta la raíz cuadrada del número de simulaciones ($n$). Un punto fundamental a su favor en la integración es que, a diferencia de los métodos numéricos tradicionales, "la velocidad de convergencia no depende del número de dimensiones".
2. Estimación de Áreas, Volúmenes e Integración Numéricala envolvente). Por ejemplo, en la estimación del área de un círculo unitario (radio $r=1$), se elige un cuadrado que lo circunscribe (envolvente). Se generan puntos aleatorios dentro de esta región, y se cuenta la proporción de puntos que caen dentro del área de interés:
$$\text{Área del círculo} = \frac{\text{Nº puntos que quedaron dentro del círculo}}{\text{Nº puntos colocados dentro del cuadrado}} \times (4 \cdot r $I = \int_{D} s(\mathbf{x}) d \mathbf{x}$ reescribiendo la expresión como el valor esperado de una función $h(\mathbf{X})$, $I = E (h(\mathbf{X}))$.
Si el dominio de integración $D$ es acotado y se considera una distribución uniforme en $D$, la aproximación más simple consiste en estimar el valor esperado mediante la media muestral.
Para una integral simple en el intervalo $[a, b]$, $I = \int_{a}^{b} h(x) d x$, donde $h(x)$ es la función a integrar, se aplica la relación:
$$I = (b - a) \cdot E(y) \approx (b - a) \cdot \frac{1}{n} \sum_{i=1}^{n} h(x_i)$$.
Donde $x_i$ son muestras independientes extraídas de una distribución uniforme en el intervalo $(a, b)$.
2.3. Integración en Dominios No Acotados (Muestreo por Importancia)
Para aproximar integrales impropias (con dominio no acotado), si la distribución de muestreo uniforme no cubre bien la región de interés, es preferible recurrir a una densidad auxiliar. El Muestreo por Importancia se utiliza para aproximar $\theta = E (h (X))$ generando observaciones de una densidad $g$ que tenga una forma similar al producto $h \cdot f$. Si se generan muestras $Y_i \sim g$, la aproximación es:
$$\theta \approx \frac{1}{n} \sum_{i=1}^{n} q (y_i) = \frac{1}{n} \sum_{i=1}^{n} w(y_i)h (y_i) = \theta_g$$.
Donde $w(y) = f(y)/g(y)$ son los pesos, y esta técnica puede reducir significativamente la varianza respecto al método clásico.
3. Ejemplos Aplicados de Simulación Monte Carlo
El método de Monte Carlo tiene aplicaciones extensas en diversos campos de la ciencia y la tecnología.
3.1. Simulación de Juegos de Azar
Un ejemplo clásico para introducir el método MC en una hoja de cálculo es el lanzamiento de una moneda al aire. La simulación consiste en definir una regla de decisión (por ejemplo, si el número aleatorio $R$ es menor que 0.5, se considera "águila"; de lo contrario, "sello") para determinar la probabilidad de obtener sello después de muchas repeticiones (ej. 2000 veces). Esta aplicación se conoce como simulación estática, dado que el tiempo no es considerado.
3.2. Problemas Matemáticos (Cálculo de $\pi$ e Integrales)
El método MC es especialmente útil para problemas teóricos de las ciencias básicas.
• Cálculo de Pi ($\pi$): La estimación de la constante $\pi$ es un ejemplo clásico de cálculo de áreas. También el problema de la aguja de Buffon es un ejemplo típico que utiliza la simulación tipo Monte Carlo en Excel para obtener el valor de $\pi$ mediante aproximaciones secuenciales.
• Resolución de Integrales: La fuente presenta el caso de calcular la integral $I = \int_{0}^{1} x \cdot d x$, o integrales más complejas como $\int_{0}^{\pi/2} \sin(x) d x$, donde se usa la hoja de cálculo para generar números aleatorios y calcular el promedio de la función evaluada en esos puntos. En un ejemplo aplicado, se resolvió:
"∫ +∞ −∞ $\frac{1}{e^y + e^{-y}} \cdot d y$ mediante el método de Monte Carlo, formalizando con la hoja de cálculo diez réplicas de mil simulaciones cada una, se ha alcanzado un valor de: 1,56832519. Siendo la resolución analítica $\pi / 2 \approx 1,57079633$".
3.3. Aplicaciones Industriales y Financieras
• Ingeniería y Producción: El método MC es fundamental para el análisis de riesgo. Se usa en control de inventarios para calcular el tamaño óptimo de pedido bajo condiciones de incertidumbre, así como en el pronóstico de demanda. En el ámbito de la ingeniería industrial, se utiliza para simular el número de fallas de equipos, como los de aire acondicionado, a lo largo de varios años.
• Finanzas: Las simulaciones de Monte Carlo son cruciales para el análisis de inversiones, el pronóstico de precios de valores, la estimación de rendimientos esperados de carteras y la valoración de opciones. El objetivo es "simular miles de posibles escenarios financieros" para evaluar las probabilidades de diferentes resultados.
• Evaluación Económica en Salud (EES): Las simulaciones de Monte Carlo se emplean para "la estimación de parámetros y su distribución de probabilidad". Por ejemplo, se usan en modelos de microsimulación para evaluar la variabilidad de resultados en enfermedades complejas (como la osteoporosis) donde la evolución individual de los pacientes es crucial. El Análisis Probabilístico de Sensibilidad (APS) se lleva a cabo mediante el muestreo de Monte Carlo, que requiere un código de programación (por ejemplo, Visual Basic en Excel, o R) para generar miles de simulaciones iterativas.

--------------------------------------------------------------------------------
Referencias
A continuación, se listan las fuentes citadas en formato APA:
Banks, J. (ed.). (1998). Handbook of Simulation Principles, Methodology, Advances, Applications, and Practice. Nueva York: John Wiley & Sons.
Banks, J., Carson, J.S., Nelson, B.L., & Nicol, D.M. (1996). Discrete-Event System Simulation. Prentice Hall.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Gómez Cabrera, A. (2010). Simulación de Procesos constructivos. Revista Ingenieria de Construcción.
Hernández Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw Hill.
Kelton, W. D. (s.f.). SIMULATION MODELING AND ANALYSIS (3rd ed.). McGraw-Hill.
Law, A. M. (2014). Simulation Modelling and Analysis. McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Llamas Cerdá, P. R., y Antón, R. T. (2009). Integración numérica. (Apéndice B).
LLIram Ruiz, E. G., Martìnez Alvarez, F. d., & Monroy Alvarado, G. S. (2006). Simulación: Conceptos y Evolución.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Ricondo, A. (2013). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Ríos Insúa, S., & Ríos Insua, S. (1997). Simulación: Métodos y aplicaciones. Ra-Ma.
Rubinstein, R. Y., & Kroese, D. P. (2009). Simulation and the Monte Carlo Method. Wiley Series in Probability and Statistics.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Taha, H. (2017). Investigación de operaciones (10ª ed.). Pearson Educación.
Van Der Post, H. (2024). Monte Carlo with Python. Reactive Publishing.
Varios Autores. (s.f.). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). Generador lineal congruencial. Wikipedia.
Varios Autores. (s.f.). Introducción a la simulación.
Varios Autores. (s.f.). SIMULACIÓN 18 UNIDAD 3 Generación de variables aleatorias. UCREANOP.
Varios Autores. (s.f.). Stochastic Simulation.
Varios Autores. (s.f.). Técnicas de Simulación y Remuestreo.
Wainer, G. A. (s.f.). Simulación. CRC Press.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. International Thomson.
