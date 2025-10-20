Compendio Exhaustivo: Verificación, Depuración y Consistencia en la Simulación
1. Conceptos Básicos: Verificación y Validación
En el desarrollo de un modelo de simulación, la credibilidad y la confianza se establecen a través de los procesos de Verificación, Validación y Acreditación (VV&A). Es crucial entender que la VV&A no es una fase o un paso final del ciclo de vida, sino "una actividad continua a lo largo de todo el ciclo de vida" del modelado y la simulación.
1.1. Verificación
La Verificación es el proceso de determinar que la implementación del modelo se realizó correctamente. También se puede definir como "el proceso de determinar que el código y la lógica del M&S [Modelado y Simulación] realizan correctamente las funciones previstas". En términos sencillos, la verificación trata de construir el modelo correctamente (building the model right).
El propósito de la verificación es "identificar y eliminar errores en la lógica, las matemáticas o la programación". Este esfuerzo garantiza que el modelado y la simulación tendrán requisitos más completos, un modelo conceptual mejor definido y una implementación más limpia con menos bugs operacionales.
1.2. Validación
La Validación es el proceso que busca responder si el modelo conceptual es una representación adecuada del sistema real. La validación del modelo de simulación intenta responder a la pregunta: "¿es el modelo que hemos construido una representación adecuada del sistema real?". En otras palabras, la validación trata de construir el modelo correcto (building the right model).
2. Depuración (Debugging)
La depuración (Debugging) es, en esencia, la aplicación práctica de la verificación. El proceso de verificación es conocido como la depuración del modelo. Su objetivo principal es asegurar que no haya problemas en la programación y que se sigan las reglas de construcción de cada modelo, como la aplicación correcta de fórmulas o la creación coherente de estados.
"Después de construir y depurar el programa de computadora, el siguiente paso es probar si el modelo de simulación incorporado en él proporciona resultados válidos para el sistema que intenta representar".
2.1. Técnicas de Depuración y Pruebas
La verificación (depuración) utiliza dos enfoques básicos de prueba propuestos por Sargent:
1. Pruebas Estáticas: Se centran en analizar las propiedades estructurales del código del modelo computarizado para determinar si es correcto, utilizando técnicas como la prueba de corrección, la revisión estructurada (walk-through) y el examen de las propiedades de la estructura del programa. Una walk-through es una reunión informal donde el desarrollador explica los detalles del producto al equipo para identificar errores.
2. Pruebas Dinámicas: El modelo computarizado es ejecutado bajo diferentes condiciones, y los resultados obtenidos durante la ejecución y los valores finales son utilizados para determinar si el programa y su implementación son correctos.
Existen tres estrategias principales utilizadas en las pruebas dinámicas: la prueba de abajo hacia arriba (bottom-up), la prueba de arriba hacia abajo (top-down) y la prueba mixta. Para realizar una depuración efectiva en simulaciones de Monte Carlo, es vital entender el flujo de datos a través de las estructuras de datos, y aplicar pruebas incrementales y aislamiento de secciones de código para identificar dónde se introducen los errores.
Herramientas específicas en software de simulación también ayudan a la depuración, como la Consola de Scripts (Script Console), que permite ejecutar comandos manualmente, y el uso de Puntos de Interrupción (Breakpoints) para detener la ejecución y examinar el estado del programa.
3. Trazas (Traces)
Una Traza es una técnica esencial utilizada en la verificación dinámica y la validación para seguir el flujo de las entidades y eventos a través del modelo.
3.1. Definición y Uso
Una traza es un historial paso a paso de cada evento que tuvo lugar durante la corrida de simulación y que se escribe en un archivo. La inspección de este reporte es fundamental para "ayudar a identificar y rectificar cualquier problema antes de que se conviertan en fallas permanentes en el modelo".
El seguimiento o traza se utiliza específicamente para:
• Rastrear el progreso de un ítem (Tracing the progress of an item through the model).
• Determinar si la lógica del modelo es correcta y si se obtiene la precisión necesaria siguiendo el comportamiento de diferentes tipos de entidades específicas.
• Determinar la fuente de un problema, ya que la Event List y el Event Log (en software como FlexSim) despliegan la lista de eventos pendientes y el orden en que ocurrieron, respectivamente.
Otra técnica de verificación rápida consiste en recorrer el modelo paso a paso evento por evento (Stepping through the model event by event), o detener el modelo en ejecución, predecir lo que sucederá, y luego correrlo para verificar la predicción.
4. Verificación de Componentes
La verificación no se limita al código global, sino que debe asegurar que la estructura y las partes internas del modelo son correctas.
4.1. Pruebas Modulares
Es importante organizar el programa en submódulos, verificables por separado. Después de desarrollar el programa, se deben probar las funciones de simulación para ver si son correctas. A continuación, "cada submódulo y el modelo general deben probarse para ver si son correctos". La prueba debe extenderse a la interacción entre los módulos, ya que "el éxito de la prueba de cada módulo no implica la credibilidad general del modelo".
4.2. Chequeos de Consistencia Interna y Lógica
La verificación de componentes incluye:
• Investigaciones de relaciones entrada-salida.
• Chequeos de consistencia interna.
• Comprobación de componentes críticos mediante la reprogramación de estos para asegurar que se obtienen los mismos resultados.
• Pruebas con Casos Simples: Se recomienda probar el programa con casos sencillos, cuyo resultado sea conocido.
4.3. Verificación del Diseño y Requisitos
La verificación de componentes comienza verificando los requisitos, que establecen el punto de partida del modelo y deben estar "claramente establecidos al principio del proceso de desarrollo y deben ser consistentes entre sí". Luego, la verificación del diseño asegura que todas las características y las interacciones descritas en el modelo conceptual estén "correctamente y completamente incluidas en las representaciones de diseño y la documentación".
5. Consistencia Dimensional y Coherencia
Si bien el término específico "Consistencia Dimensional" no es explícitamente definido en las fuentes, la necesidad de que los modelos sean lógicamente coherentes y consistentes es un principio fundamental de la verificación y validación, especialmente en la Consistencia Interna.
5.1. Consistencia Interna
La consistencia interna se relaciona con la lógica matemática del modelo. Esto incluye:
1. Asegurar que al modificar algún dato, los resultados deben cambiar de manera coherente (coherente change).
2. Si se realiza el modelo con otro software distinto, los resultados deben ser muy parecidos.
La verificación permite confirmar que el modelo está correctamente implementado con respecto al modelo conceptual. Un aspecto clave de esta comprobación es la consistencia de la estructura lógica del modelo, garantizando, por ejemplo, "que los pacientes que fallecen no computen a partir del momento del fallecimiento ni años de vida, ni años ajustados por calidad ni costes".
5.2. Consistencia General y Estructura
La consistencia es una evaluación de la calidad global del modelo, incluyendo su estructura y los datos y asunciones incluidas en el mismo. Una alta cantidad de variabilidad en el modelo, que es un signo de falta de consistencia, "puede hacer que los resultados del modelo sean sospechosos". En general, la verificación se encarga de que se sigan las reglas de construcción de cada modelo y que se utilicen las fórmulas o ecuaciones correctas.

--------------------------------------------------------------------------------
Referencias (Formato APA)
Acosta, H. (2007). Simulación con Flexsim.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2014). Discrete Event System Simulation. Pearson Education.
Beaverstock, M., Greenwood, A., Lavery, R., & Nordgren, W. (2012). Applied Simulation Modeling and Analysis. McGraw Hill.
Carlton, M. A., & Devore, J. L. (2014). Probability with Applications in Engineering, Science, and Technology. Springer.
Casella, G., & Berger, R. L. (1990). Statistical Inference. Wadsworth & Brooks/Cole.
Ciaburro, G. (2020). Applied simulation with Arena: an introduction to modeling and simulation. Packt Publishing.
DoD directive 5000.59. (s.f.). Modeling and Simulation (M&S) Management.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
García Dunna, E., García Reyes, H., & Cárdenas Barrón, L. E. (2006). Simulación y análisis de sistemas con Promodel primera edición. Pearson Educación de México, S.A de C.V.
Gordon, G. (1980). Simulación de sistemas (1ra. ed.). Diana.
Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11th Edition). McGraw-Hill.
Kelton, W. D., Sadowski, R. P., & Sturrock, D. T. (2008). Simulation with Arena. McGraw-Hill.
Law, A. M. (2014). Simulation Modelling and Analysis. McGraw Hill Education.
Law, A. M., & Kelton, W. D. (1991). Simulation modeling and analysis (2.ª ed.). McGraw-Hill.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Metropolis, N., & Ulam, S. (1949). The Monte Carlo Method. Journal of the American Statistical Association, 44(247), 335–341.
Miller, K. S. (1956). Engineering Mathematics.
Neumann, J. V. (1992). The Monte Carlo method. (Citado en Un Primer Paso A La Simulacion Con | PDF | Simulación | Software - Scribd).
Naylor, T. H. (1982). Técnicas de simulación en computadoras. Limusa.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Ricondo, A. (2013). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Robinson, S. (1999). Simulation verification, validation and confidence: a tutorial. Simulation: Transactions of The Society for Modeling and Simulation International, 16(2), 63–69.
Robinson, S., & Brooks, R. J. (2010). Independent verification and validation of an industrial simulation model. Simulation: Transactions of The Society for Modeling and Simulation International, 86(7), 405–416.
Ross, S. M. (2014). Introduction to Probability and Statistics for Engineers and Scientists (5th ed.). Academic Press.
Sadowski, R. P., Shannon, R. E., & Kelton, W. D. (1991). Simulation with Arena. McGraw-Hill.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Sargent, R. G. (2007). Verification and validation of simulation models. Proceedings of the 2007 Winter Simulation Conference.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. ed.). Trillas.
Shubik, M. (1960). Simulation of the industry and the firm. American Economic Review.
Taha, H. (2017). Investigación de operaciones (10ª ed.). Pearson Educación.
Van Der Post, H. (2024). Monte Carlo With Python. Reactive Publishing.
Varios Autores. (s.f.). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). Generador lineal congruencial. Wikipedia.
Varios Autores. (s.f.). Introducción a la simulación.
Varios Autores. (s.f.). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). Simulación de sistemas con variables aleatorias para la toma de decisiones estratégicas. SciELO México.
Varios Autores. (s.f.). Técnicas de Simulación y Remuestreo.
Wainer, G. A. (s.f.). Simulación. CRC Press.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. International Thomson.