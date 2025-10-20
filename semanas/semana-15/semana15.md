Compendio Exhaustivo: Metodología y Análisis de Estudios de Simulación
I. Objetivos y Alcance del Estudio
Los estudios de simulación comienzan con una definición clara de lo que se pretende lograr y los límites del modelo.
1. Formulación del Problema y Objetivos
La primera etapa de la metodología de simulación es la Definición del problema o Formulación del problema. Este paso es fundamental y consiste en enunciar claramente el problema y los objetivos del estudio.
Un estudio de simulación busca generalmente responder a preguntas del tipo: "¿Qué pasaría sí?" (What-if). Las respuestas obtenidas deben servir de soporte a una decisión racional sobre el sistema.
2. Alcance y Credibilidad
El problema de decisión planteado debe expresar claramente la hipótesis de trabajo, el objetivo del análisis y el alcance del modelo, justificando la razón de su realización.
Para lograr la credibilidad de los resultados —es decir, que "sean aceptados por el decisor para ser utilizados en el proceso de toma de decisiones"—, es fundamental:
• Implicar al decisor: El modelo debe tener objetivos claros e implicar al decisor.
• Elementos Relevantes: El modelo debe incluir todos los elementos necesarios para responder al problema de decisión. La validación del modelo busca asegurar que se han incorporado "todos los aspectos del sistema que son de real interés para el estudio y sólo los relevantes".
El alcance debe establecer un equilibrio entre realismo (complejidad) y objetivos, evitando incluir detalles que no son relevantes para el propósito del estudio.
II. Recolección y Análisis de Datos de Entrada
Una vez definidos los objetivos, el proceso se centra en recolectar y modelar las entradas estocásticas del sistema.
1. Recolección y Definición de Datos
La etapa de Colección de datos y su análisis es considerada por diversos autores como un paso esencial en la metodología de simulación. En esta fase, "se debe definir con claridad y exactitud los datos que el modelo va a requerir para producir los resultados deseados".
Los datos pueden obtenerse de varias fuentes:
• Registros contables.
• Órdenes de trabajo.
• Opiniones de expertos.
• Experimentación.
En proyectos de investigación, la recolección de datos implica la creación de instrumentos, como cuestionarios o entrevistas, y la obtención de información de fuentes primarias y secundarias (revistas, documentos y libros).
2. Modelado y Análisis de Distribuciones
Los datos recolectados deben ser analizados para determinar su distribución de probabilidad subyacente. Esta etapa puede involucrar análisis y modelos sencillos de los datos usando Arena y R.
Cuando se dispone de un conjunto de muestras experimentales de una variable aleatoria de entrada, se deben usar técnicas para "generar observaciones de dicha variable con las que alimentar el modelo". Esto requiere:
• Reconocer algunas de las distribuciones teóricas continuas y discretas más comunes.
• Construir distribuciones empíricas a partir de datos experimentales.
• Aplicar tests empíricos de uniformidad e independencia.
Las pruebas de bondad de ajuste (goodness-of-fit tests) son la herramienta principal para validar la distribución, discutiéndose los fundamentos de los tests chi-cuadrado y de Kolmogorov-Smirnov. Por ejemplo, para verificar la aleatoriedad de una secuencia, se pueden utilizar pruebas de independencia como la de corridas arriba y abajo de la media, póker o de huecos.
III. Plan de Experimentos (Diseño Experimental)
El Diseño de Experimentos (DOE) es una etapa formal de la simulación que se realiza una vez que el modelo ha sido verificado y validado.
1. Definición del Diseño Experimental
El DOE permite "un conjunto de experimentos que satisfagan los objetivos del estudio". En esta fase se define la Planificación estratégica y táctica y la Ejecución de la corrida de simulación. Es necesario ponderar cuidadosamente el número de corridas de simulación que se necesitan.
Los conceptos fundamentales del DOE son:
• Respuesta (Response): La variable de salida que se busca medir.
• Factor (Factor): Las variables controlables que se manipulan.
• Nivel (Level): Los valores específicos que toma un factor.
• Región experimental y matriz del diseño.
El diseño del experimento es crucial para obtener resultados válidos y disminuir el esfuerzo. El experimentador debe "diseñar un experimento así como las ejecuciones concretas del mismo, los escenarios que desea estudiar" para alcanzar los objetivos.
2. Tipos de Diseños
Se deben considerar tanto el Diseño experimental factorial completo como los Diseños experimentales factoriales fraccionales.
• El diseño factorial completo permite el cálculo de los efectos principales y las interacciones entre dos o más factores, además de calcular intervalos de confianza para los mismos.
• Los diseños factoriales fraccionales se utilizan cuando el número de experimentos debe ser limitado, pero se sigue buscando la máxima eficiencia en la ejecución del plan experimental.
En software como Arena, el experimento a realizar sobre el modelo se describe mediante la especificación de los parámetros del modelo y los parámetros de las réplicas.
IV. Interpretación y Presentación de Resultados
El análisis de los resultados es la etapa final donde se extraen conclusiones y se formula el reporte profesional para la toma de decisiones.
1. Análisis Estadístico e Interpretación
El Análisis de resultados (Paso I) busca responder a un conjunto bien definido de preguntas. Los experimentos responden a preguntas de tipo what-if, y sus resultados deben ser expresados numéricamente para cada alternativa.
El análisis riguroso incluye:
• Construcción de intervalos de confianza para la media de magnitudes representativas del comportamiento del sistema, tanto en estudios con condición de terminación como en estudios en el estacionario.
• Técnicas de comparación de sistemas: Se deben aplicar técnicas para comparar dos o más sistemas o configuraciones.
• Análisis de Sensibilidad: Se realiza la corrida de simulación y el análisis de sensibilidad para investigar la reacción de la salida ante cambios drásticos en las entradas.
La Interpretación (Paso K) es la etapa donde se toma una decisión, respaldada por los resultados que arroja la simulación. El análisis debe culminar con la Selección de la mejor configuración.
2. Presentación y Documentación del Reporte
El reporte final debe ser claro, comprensible y profesional, ya que sirve para la Implantación (uso del modelo y resultados).
Requisitos del Reporte Final:
• Estructura Mínima: Todo trabajo de Ingeniería debe presentarse en forma de reporte, indicando el objetivo y los métodos empleados. Un reporte hipotético incluye típicamente: Introducción, Planteamiento del Problema, Recolección y Análisis de Datos, Resultados, Conclusiones y Fuentes Consultadas.
• Resultados y Evidencia: Los resultados deben presentarse como hallazgos, sin opinión. Deben incluirse capturas de pantalla, diagramas, hipótesis, fórmulas, cálculos.
• Conclusiones: La sección de conclusiones debe:
    1. Decir si se logró el objetivo.
    2. Exponer los principales resultados obtenidos.
    3. Incluir comentarios de la metodología y sugerencias, y comparar los resultados con la teoría, explicando cómo se verificaron.
• Transparencia (Documentación Técnica): Para la credibilidad, es importante que el modelo cuente con un informe más técnico y detallado (Technical Report o User Guide), orientado a los especialistas y revisores, donde se describa la metodología, la estructura, los parámetros y la validación, permitiendo que el modelo pueda ser evaluado y reproducido.
• Formato de Citas APA: Para las fuentes consultadas, se debe usar el sistema de autor y fecha. Las referencias deben estar en orden alfabético, utilizando el formato APA. Para publicaciones específicas, como libros, se debe incluir el nombre del autor, año de publicación, título, edición y editorial.

--------------------------------------------------------------------------------
Referencias (Formato APA)
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2009). Discrete-Event System Simulation (5 ed.). Pearson.
Banks, J. (ed.). (1998). Handbook of Simulation Principles, Methodology, Advances, Applications, and Practice. John Wiley & Sons.
Flores, C., & Flores, K. (2023). Pruebas de bondad de ajuste Kolmogórov-Smirnov y Ji-cuadrada aplicadas a la toma de decisiones empresariales. Yachana Revista Científica, 12(2), 113-127.
Fonseca i Casas, P. (s.f.). Introducción a la simulación. FUOC.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Hernández Sampieri, R., & Mendoza Torres, C. P. (2018). Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta. McGraw Hill.
Law, A. M. (2014). Simulation Modeling and Analysis (5th ed.). McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Lario Femenia, J., & Cortés Pellicer, P. (2025). Introducción a la simulación con JaamSim. Recursos Educativos En Abierto EdUPV. https://doi.org/10.4995/REA.2025.681901
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Montgomery, D. C. (2015). Diseño y análisis de experimentos (Segunda ed.). Limusa.
Puche Forte, J. F., A Carpana, J. J., Gomez, J., Vilar, R., Villalba, S. S., & Perpiñan, J. S. (2005). GUIA PRACTICA PARA LA SIMULACION DE PROCESOS INDISTRIALES. Centro Tecnológico del MUeble y la Madera de la Region de Murcia.
Sadowski, R. P., Shannon, R. E., & Kelton, W. D. (2008). Simulation with Arena. McGraw-Hill.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Sargent, R. G. (2007). Verification and Validation of Simulation Models. Proceedings of the 2007 Winter Simulation Conference.
Soto, J., Casado, M. Á., & Oyagüez, I. (Eds.). (s.f.). Modelos analíticos de decisión en evaluación económica: tipos, metodología, análisis y comunicación de los resultados. Fundación PORIB.
Varios Autores. (s.f.). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). manual de prácticas de simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Valenzuela Campos, V. M. (2010). Análisis de los resultados de un diseño factorial con datos faltantes [Tesis de máster, Universitat Politècnica de Catalunya]. UPCommons.