Compendio Exhaustivo: Generación y Validación de Variables Aleatorias Continuas
La simulación de sistemas estocásticos requiere generar valores para las variables aleatorias de entrada que sigan distribuciones de probabilidad específicas. Para obtener estas variables aleatorias (VA) no uniformes, se parte de una secuencia de números pseudoaleatorios uniformemente distribuidos en el intervalo $\mathcal{U}(0, 1)$. El método más utilizado para esta conversión es el Método de la Transformada Inversa.
I. Generación de Variables Aleatorias Continuas
1. Distribución Uniforme ($\mathcal{U}(a, b)$)
La distribución uniforme es la más simple de simular a partir de números pseudoaleatorios $R_i \sim \mathcal{U}(0, 1)$, ya que estos son, por definición, uniformes en el intervalo $(0, 1)$.
Para simular una variable $X$ distribuida uniformemente en un intervalo $[a, b]$, se utiliza la transformada directa:
$$\mathbf{X_i = a + (b - a) \cdot R_i}$$
Procedimiento por Transformada Inversa (TI):
1. La función de densidad de probabilidad para una uniforme entre $a$ y $b$ es $f(x) = \frac{1}{b-a}$.
2. La función de distribución acumulada es $F(x) = \frac{x-a}{b-a}$.
3. Al igualar $F(x) = R$ y despejar $x$, se obtiene la expresión final $x = a + (b - a) R$.
2. Distribución Exponencial ($\text{Exp}(\lambda)$)
La distribución exponencial es una VA continua que a menudo representa el tiempo entre llegadas $t$ a una instalación. Se puede simular eficientemente mediante la transformada inversa.
Procedimiento por Transformada Inversa (TI):
1. Función de Densidad (FP): $f(t) = \lambda e^{-\lambda t}$, para $t \ge 0$.
2. Función Acumulada (FA): $F(t) = 1 - e^{-\lambda t}$, para $t \ge 0$.
3. Inversa: Al igualar $F(t) = R$ (o $U$) y despejar $t$, se obtiene la ecuación generadora:
$$\mathbf{t = -\frac{1}{\lambda} \ln(1 - R)}$$
• Simplificación: Dado que si $R$ es uniforme en $(0, 1)$, $1 - R$ también lo es, "ln(1 − R) puede ser reemplazado con ln(R)" para acelerar los cálculos. La forma simplificada más común es:
$$\mathbf{t = -\frac{1}{\lambda} \ln(R)}$$
• Ejemplo de Aplicación: En Excel, si $\mu = 1/\lambda$ (ej. $\mu=12$ minutos/pieza), se puede usar la fórmula =-12*LN(B17) (donde B17 contiene el número aleatorio $R$).
3. Distribución Normal ($\mathcal{N}(\mu, \sigma^2)$)
La distribución normal es la más general y de mayor utilización, apareciendo en muchísimos fenómenos naturales. Es una distribución continua.
Dificultad de la Transformada Inversa: A diferencia de la Uniforme o la Exponencial, el método de inversión es complicado para la Normal porque su función de distribución acumulada $\Phi(x)$ "no se puede escribir en términos de funciones simples, y lo mismo ocurre con su inversa". Por ello, se recurre a métodos especiales:
Método A: Convolución (Teorema Central del Límite)
Este método se basa en el Teorema Central del Límite, el cual establece que la suma (convolución) de $n$ variables aleatorias independientes e idénticamente distribuidas se aproxima asintóticamente a una distribución normal a medida que $n$ crece.
1. Se generan $k$ variables aleatorias uniformes independientes $R_i \sim \mathcal{U}(0, 1)$.
2. Dado que $R_i$ tiene media $\mu_{R} = 1/2$ y varianza $\sigma^2_{R} = 1/12$, la suma $Y = \sum R_i$ se distribuye aproximadamente $\mathcal{N}(\frac{k}{2}, \frac{k}{12})$.
3. Por conveniencia, "en la practica, se considera que n=12". Esto simplifica el cálculo de la variable normal estandarizada ($Z \sim \mathcal{N}(0, 1)$) a: $$\mathbf{Z = \sum_{i=1}^{12} R_i - 6}$$.
4. La variable normal general $X \sim \mathcal{N}(\mu, \sigma^2)$ se obtiene mediante la transformación:
$$\mathbf{X = \mu + \sigma \cdot \left( \sum_{i=1}^{12} R_i - 6 \right)}$$.
Método B: Box-Muller (Transformación Directa)
Este método es un procedimiento especial que genera dos variables normales tipificadas ($\mathcal{N}(0, 1)$) independientes a partir de dos uniformes $U_1, U_2 \sim \mathcal{U}(0, 1)$.
• El algoritmo de Box-Muller establece que si $E = -\ln(U_1)$ es exponencial $\text{Exp}(1)$ y $W_2 = 2\pi U_2$ es uniforme en $(0, 2\pi)$, entonces: $$\mathbf{X_1 = \sqrt{2E} \cos(W_2), \quad X_2 = \sqrt{2E} \sen(W_2)}$$ son $\mathcal{N}(0, 1)$ independientes.
• La variable normal general $N$ con media $\mu$ y desviación $\sigma$ se obtiene como: $$\mathbf{N_i = \left[\sqrt{-2\ln(1-R_1)}\sen(2\pi R_2)\right] \sigma + \mu}$$.
II. Chequeos Rápidos y Visualización
Una vez que se generan las variables aleatorias de entrada o se tienen los resultados del modelo, es esencial realizar análisis para determinar su calidad y validez. La validación de los datos generados debe comprobar si la secuencia de números cumple con la uniformidad y la independencia, y si la distribución de salida se ajusta a la distribución teórica esperada.
1. Métodos de Visualización (Chequeos Rápidos)
Las herramientas gráficas permiten una inspección visual preliminar para evaluar la calidad de la modelación.
• Histogramas: Permiten comparar la distribución de frecuencias observada de los datos con la función de densidad de probabilidad teórica. La sobreposición del histograma con la gráfica de la distribución teórica "dará una idea visual del grado de ajuste o calidad de la modelación de los datos reales".
• Gráficas de Probabilidad o Cuantiles (Q-Q plots): Se utilizan para "ajustar los datos a una distribución de probabilidad conocida". Por ejemplo, se puede utilizar una "gráfica de probabilidad normal".
• Gráficos de Caja y Bigotes: Útiles en el análisis de datos de entrada o salida.
• Gráficos Secuenciales / de Dispersión Retardada: Para verificar rápidamente la independencia y la aleatoriedad. En el "gráfico de dispersión retardado se observa un fuerte patrón reticular", lo cual indicaría dependencia o problemas con la aleatoriedad.
• Series de Tiempo: Permiten "comprobar si realmente se adecuan a lo esperado". Las gráficas de series temporales pueden ser utilizadas para decidir si el modelo de simulación "refleja de forma precisa el fenómeno de interés".
2. Pruebas Estadísticas de Bondad de Ajuste
Si la inspección visual sugiere una distribución candidata (ej. normal o exponencial), se deben usar métodos estadísticos formales, conocidos como Pruebas de Bondad de Ajuste, para cuantificar el grado de semejanza entre la distribución muestral y la poblacional o teórica.
• Prueba de Chi-Cuadrado ($\chi^2$) (Karl-Pearson):
    ◦ Propósito: Es una de las pruebas "más útiles y ampliamente utilizadas en la estadística". Permite "docimar la hipótesis de que una variable aleatoria sigue cierta distribución de probabilidad". Mide la discrepancia entre la frecuencia observada ($F_o$) y la frecuencia esperada ($F_e$).
    ◦ Uso: Se utiliza para muestras grandes y para distribuciones discretas o continuas (agrupando en intervalos).
• Prueba de Kolmogórov-Smirnov (K-S):
    ◦ Propósito: Utilizada para evaluar si una muestra de datos "proviene de una distribución de probabilidad específica". Compara la distribución empírica con la distribución teórica.
    ◦ Uso: Se utiliza comúnmente para muestras pequeñas y para distribuciones continuas hipotéticas. Si la distancia máxima observada es pequeña, "entonces los datos se ajustan bien a la distribución teórica".
• Prueba de Anderson-Darling:
    ◦ Es una modificación de la prueba de Kolmogorov-Smirnov.
    ◦ Virtud: Tiene la capacidad de detectar discrepancias en los extremos de las distribuciones.
• Criterio de Rechazo: Si el $p$-valor de la prueba de bondad de ajuste es mayor que el nivel de significancia elegido (generalmente 0.05), "se puede concluir que los datos se ajustan a la distribución teórica". En software especializado como Stat:Fit (módulo de ProModel), si el resultado de la prueba es "DO NOT REJECT" (no rechazar), se acepta la hipótesis de buen ajuste.
Referencias
Anderson, D., Sweeney, D., Williams, T., Camm, J., & Cochran, J. (2016). Estadística para negocios y economía (12ª ed.). Cengace Learning.
Azarang, M. R., & García Dunna, E. (1996). Simulación y análisis de modelos estocásticos (1a ed.). McGraw Hill.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2010). Discrete-Event System Simulation (5ta ed.). Pearson.
Díaz, D., Rodríguez, G., Cruz, B., Castillo, M., & Santiago, G. (2020). Innovación en el desarrollo de unidades de producción agrícola familiar en localidades marginadas de Oaxaca. CIENCIA Ergo-Sum.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Hernández-Sampieri, R., & Mendoza, C. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw Hill.
Kisbye, P. (2010a). Generación de variables aleatorias continuas Método de la transformada inversa. FaMAF.
Kisbye, P. (2010b). Generación de variables aleatorias discretas Método de la Transformada Inversa. FaMAF.
Law, A. M. (2014). Simulation Modeling and Analysis. McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Levin, R., Rubin, D., Rastogi, S., & Hussain, M. (2017). Statistics for Management. Pearson.
L’Ecuyer, P. (1992). Testing random number generators. Proceedings of the 1992 Winter Simulation Conference, 305–313.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Taha, H. (2017). Investigación de operaciones (10ª ed.). Pearson Educación.
Universidad Tecnológica de Panamá. (s.f.). Generación de Números Aleatorios.
Van Der Post, H. (2024). Monte Carlo with Python. Reactive Publishing.
Varios Autores. (s.f. a). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f. b). I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES.... Repositorio Institucional Universidad de Pamplona.
Varios Autores. (s.f. c). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f. d). SIMULACIÓN 18 UNIDAD 3 Generación de variables aleatorias. 3.1. Introducción. UCREANOP.
Varios Autores. (s.f. e). Simulación de sistemas con variables aleatorias para la toma de decisiones estratégicas. SciELO México.
Varios Autores. (s.f. f). Técnicas de Simulación y Remuestreo.