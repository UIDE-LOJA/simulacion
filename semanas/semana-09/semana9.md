Compendio Exhaustivo: Validación, Ajuste de Distribuciones y Análisis de Sensibilidad
I. Pruebas de Bondad de Ajuste (Goodness-of-Fit Tests)
Las pruebas de bondad de ajuste son herramientas estadísticas esenciales cuyo objetivo principal es determinar si un conjunto de datos observados se ajusta a una distribución de probabilidad específica. En el proceso de simulación, estas pruebas se realizan para contrastar la hipótesis de que una variable aleatoria sigue cierta distribución de probabilidad. Si la función de distribución de probabilidad (FDP) de los datos es conocida, es posible obtener un generador de variable aleatoria (VA) adecuado para esa distribución. La automatización de estas pruebas ha permitido que la simulación sea más utilizada en el mundo real.
1. Prueba Chi-Cuadrado de Pearson ($\chi^2$) (Nivel Básico)
La prueba Chi-Cuadrado de Pearson es una de las pruebas de bondad de ajuste "más útiles y ampliamente utilizadas en la estadística".
Propósito y Aplicación:
1. Mide la discrepancia o distancia entre una distribución observada ($F_o$) y una teórica ($F_e$).
2. Se utiliza generalmente para muestras consideradas grandes (usualmente mayores a treinta datos).
3. Es adecuada tanto para distribuciones discretas (como Poisson o Binomial) como para distribuciones continuas (como Normal o Exponencial).
Estadístico y Metodología: El estadístico de prueba se basa en la diferencia entre las frecuencias o proporciones observadas y las esperadas. La fórmula para el estadístico Chi-cuadrado observado ($X^2_{obs}$) es:
$$\mathbf{\chi^2_{obs} = \sum_{i=1}^{n} \frac{(F_o - F_e)^2}{F_e}}$$
• Hipótesis: La hipótesis nula ($H_0$) plantea que "no hay diferencia entre el conjunto de frecuencias observadas y el conjunto de frecuencias esperadas" o que los datos siguen la distribución hipotetizada (ej. Poisson).
• Grados de Libertad (GL): El valor $X^2_{obs}$ se compara con el valor crítico de tablas, utilizando los grados de libertad ($GL$), que se calculan como $GL = N_c - N_p - 1$, donde $N_c$ es el número de clases y $N_p$ es el número de parámetros estimados. Si los parámetros de la distribución son estimados a partir de la muestra, los grados de libertad se reducen en función de la cantidad de parámetros estimados.
• Criterio Fundamental: Es requerido que todos los valores de la frecuencia esperada ($F_e$) sean mayores a 5.
2. Prueba de Kolmogórov-Smirnov (K-S) (Nivel Básico)
La prueba de Kolmogórov-Smirnov (K-S) es una prueba no paramétrica de bondad de ajuste.
Propósito y Aplicación:
1. Permite medir el grado de concordancia entre la distribución acumulada empírica de los datos muestrales ($F_n$) y la distribución teórica acumulada especificada ($F_0$).
2. Se utiliza cuando la variable aleatoria es de tipo continuo y para muestras consideradas pequeñas o reducidas, generalmente menor a cincuenta datos.
3. La prueba K-S es a menudo considerada más potente y de fácil uso que la prueba Chi-cuadrada, ya que no requiere agrupar los datos en categorías.
Estadístico y Metodología: El estadístico de prueba, notado usualmente como $D_n$, se basa en encontrar la máxima desviación absoluta entre la distribución acumulada teórica y la observada:
$$\mathbf{D_{obs} = \max_x |F_n(x) - F_0(x)|}$$
• Fundamento: Si la distancia máxima ($D$) no es significativa, se concluye que la distribución teórica describe bien la distribución observada.
• Hipótesis: La hipótesis nula ($H_0$) plantea que la muestra proviene de una población con una distribución teórica específica (ej. uniforme, exponencial).
• Decisión: El estadístico $D_{obs}$ se compara con un valor crítico $D_{\alpha, n}$ de tablas. Si $D_{obs}$ es menor que el valor crítico, no se puede rechazar la hipótesis nula.
II. Validación Conceptual y Operacional
La Validación es un proceso que busca determinar si el modelo de simulación es una representación adecuada del sistema real. La validez de un modelo reduce riesgos, lo cual es "especialmente crítico en un proyecto que depende de la simulación para su desarrollo o decisiones de gestión".
1. Validación Conceptual
La validación conceptual se lleva a cabo en la Fase de Análisis y Modelado.
• Definición: "Validación conceptual es definida como determinar que las teorías y supuestos subyacentes al modelo conceptual son correctos y la representación del modelo de la entidad problema es razonable para el propósito intencionado del modelo".
• Revisión de Supuestos: Incluye la revisión de supuestos, algoritmos, conceptos de modelado, disponibilidad de datos y la arquitectura del modelo conceptual. El modelo conceptual es la "imagen mental coherente de la situación a resolver", y su validación asegura que los supuestos simplificadores (como la linealidad o la independencia) sean apropiados y correctos.
• Proceso: Se busca determinar si la estructura lógica que representa el modelo es aceptable. Debe asegurarse que se desarrollen las percepciones esenciales de los actores relevantes del proceso.
2. Validación Operacional
La validación operacional, también conocida como Validación de Resultados o Validación de Aptitud, se enfoca en la salida del modelo.
• Definición: La validación operacional se define como "determinar que el comportamiento de salida del modelo tiene suficiente exactitud para el propósito intencionado del modelo" sobre el dominio de aplicabilidad previsto.
• Comparación con el Sistema Real: Consiste en comparar los resultados de la simulación con datos del sistema real, o con los resultados esperados de la teoría. En un proceso que se desea mejorar, "el modelo debe someterse a prueba con las condiciones actuales de operación, lo que nos dará como resultado un comportamiento similar al que se presenta realmente en nuestro proceso".
• Técnicas Operacionales (Outputs): Para realizar la validación operacional, se pueden utilizar técnicas como:
    ◦ Comparación gráfica de los datos del modelo con los datos del sistema real (ej. series temporales).
    ◦ Uso de intervalos de confianza para medias o varianzas de las salidas del modelo.
    ◦ Pruebas estadísticas como la prueba de hipótesis basada en la diferencia de medias (ej. estadístico t-student) para comparar la muestra simulada con la muestra real.
III. Análisis de Sensibilidad Simple
El Análisis de Sensibilidad es una técnica crucial utilizada para estudiar la incertidumbre de los parámetros y evaluar la robustez de los resultados de un modelo de simulación.
1. Definición y Propósito
El análisis de sensibilidad se define como la "investigación sistemática de la reacción de la salida del modelo ante cambios drásticos en la entrada y en la estructura del modelo". Su utilidad radica en:
• Identificar las variables o parámetros que tienen el mayor impacto en los resultados de la simulación.
• Determinar si el comportamiento del modelo está de acuerdo con los juicios de los expertos.
• Evaluar la robustez y precisión de los resultados del caso base.
2. Análisis de Sensibilidad Determinístico (ASD) Univariante
El análisis simple o univariante es la forma más común de ASD:
• Procedimiento: Este análisis "cambia un parámetro cada vez e informa del resultado, dejando todos los demás sin modificar". Se parte del modelo del caso base, donde todos los parámetros se fijan en su valor medio o "más probable".
• Rangos de Cambio: Si la fuente de incertidumbre es el tamaño limitado de la muestra, el parámetro puede cambiarse para tomar el límite superior e inferior de su intervalo de confianza del 95% (ej., la media $\pm 1.96$ errores estándar).
• Resultados: Los resultados de este análisis se suelen representar gráficamente en un diagrama de tornado. Se debe buscar que los efectos estimados ($\beta$) tengan los signos correctos, ya que "Wrong signs show computer errors or conceptual errors".
IV. Casos Prácticos de Simulación
La simulación es una herramienta de las ciencias administrativas muy poderosa y se utiliza "para el análisis y estudio de sistemas complejos". Se utiliza ampliamente para la toma de decisiones y la experimentación en áreas como la economía, informática, finanzas, mercadotecnia y física.
Área de Aplicación
Caso Práctico / Ejemplo
Fuente
Producción y Manufactura
Evaluación de la capacidad de una máquina que llena bolsas con patatas para determinar el peso promedio real de cada bolsa.
Control de Calidad
Determinar qué distribución siguen los datos de cantidad de defectos en soldaduras.
Logística y Cadena de Suministro
Simulación de inventarios para determinar el costo total (Costo Total Anual) y la política óptima de control de inventarios ($Q$ y $R$) mediante el método de Monte Carlo en hoja de cálculo.
Sistemas de Servicios
Modelado de centros de atención telefónica o la simulación de una peluquería (negocio de corte de pelo) en hoja de cálculo.
Diseño y Optimización Industrial
Evaluar diferentes configuraciones de un sistema de producción de engranajes, identificando cuellos de botella (ej. la máquina tres llegó a 91.17% de operación) para optimizar la productividad.
Simulación Manual/Educativa
Uso de la prueba de Kolmogorov-Smirnov para determinar si un conjunto de números pseudoaleatorios sigue una distribución uniforme en.
Validación de Parámetros
Comparar datos de producción histórica de miel envasada con los datos de un modelo de simulación para validar la precisión del modelo.

--------------------------------------------------------------------------------
Referencias
Agresti, A. (2007). An introduction to categorical data analysis (2nd ed.). Wiley.
Anderson, D., Sweeney, D., Williams, T., Camm, J., & Cochran, J. (2016). Estadística para negocios y economía (12ª ed.). Cengace Learning.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2014). Discrete Event System Simulation. Pearson Education.
Flores, C., & Flores, K. (2023). Pruebas de bondad de ajuste Kolmogórov-Smirnov y Ji-cuadrada aplicadas a la toma de decisiones empresariales. Yachana Revista Científica, 12(2), 113-127. https://doi.org/10.62325/10.62325/yachana.v12.n2.2023.844
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Guerra, G., Marín, M., & García, O. (2017). Determination of constructive operation performances fitted to probability distributions by manual simulation means. Revista Ingeniería UC, 24(3), 372-382.
Holt, D., Scott, A., & Ewings, P. (1980). Chi-squared Tests with Survey Data. Journal of the Royal Statistical Society A, 143, 303-320.
IIMAS-UNAM. (s.f.). Chapter 1: Pruebas de Bondade Ajuste.
Law, A. M. (2014). Simulation Modeling and Analysis. McGraw Hill Education.
López Rendon, J. F., & Soto Mejía, J. A. (2010). Laboratorios de Simulación Discreta. Postergraph S.A.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Miller, L. H. (1956). Table of percentage points of Kolmogorov statistics. Journal of the American Statistical Association, 51(273), 111–121.
Mireya Tovar Vidal et al. (2023). Apuntes de Simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Montgomery, D. C. (2015). Diseño y análisis de experimentos (2a ed.). Limusa.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Promodel. (s.f.). Simulación y Optimización de Procesos Discretos y Contínuos: Estado del Arte y Tendencias.
Rao, J., & Scott, A. (1981). The Analysis of Categorical Data From Complex Sample Surveys: Chi-Squared Tests for Goodness of Fit and Independence in Two-Way Tables. Journal of the American Statistical Association, 76(374), 221-230.
Sargent, R. G. (2007). Verification and Validation of Simulation Models. Proceedings of the 2007 Winter Simulation Conference.
Sarndal, C., Swensson, B., & Wretman, J. (1992). Model Assisted Survey Sampling. Springer-Verlag.
SciELO México. (2023). Simulación de sistemas con variables aleatorias para la toma de decisiones estratégicas. Computación y Sistemas, 27(3), 835–850.
Simulación - Scribd. (s.f.). Simulación - Investigación de Operaciones.
Simulación UPC. (s.f.). Validación de Modelos de Simulación.
TecNM. (s.f.). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
TecNM. (s.f.). Simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
TecNM. (s.f.). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
TecNM. (s.f.). Simulación: Aplicación de técnicas de simulación utilizando un lenguaje específico (Extend).
Universidad de Pamplona. (s.f.). I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES....
UNED. (s.f.). 24-25 - guía de estudio pública.
UNED. (s.f.). Introducción a la simulación.
UPCommons. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias. Casos prácticos de simulación Monte Carlo mediante hoja.