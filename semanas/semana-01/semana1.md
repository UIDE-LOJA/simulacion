Compendio Exhaustivo sobre Simulación y Modelado de Sistemas
1. Definición e Importancia de la Simulación
1.1. Definición
La simulación es una técnica poderosa utilizada para el análisis y estudio de sistemas complejos. Su origen se remonta a la aplicación de la probabilidad y estadística a mediados de la Segunda Guerra Mundial, conocida como el método Monte Carlo, para resolver problemas demasiado costosos o complicados para ser tratados analíticamente o experimentalmente (Prawda, 2004).
Formalmente, la simulación se define de varias maneras:
• "La simulación es el proceso de diseñar un modelo de un sistema real y llevar a término experiencias con él, con la finalidad de comprender el comportamiento del sistema o evaluar nuevas estrategias, dentro de los límites impuestos por un cierto criterio o un conjunto de ellos, para el funcionamiento del sistema" (Shannon).
• "La simulación es el proceso de diseñar y desarrollar un modelo de un sistema o proceso y conducir experimentos, involucrando ciertos tipos de modelos matemáticos, con el propósito de entender el comportamiento del sistema o evaluar estrategias con las cuales se puede operar el sistema a través de largos periodos de tiempo".
• "Simulación es una técnica numérica para conducir experimentos en una computadora digital, los cuales requieren de ciertos tipos de modelos lógicos y matemáticos, que describen el comportamiento de un sistema o de algún componente de él, en períodos de tiempo real".
• La simulación se define como "la técnica de resolver problemas siguiendo los cambios en el tiempo de un modelo dinámico de un sistema" (Gordon, 1991).
En esencia, la simulación imita la operación de un sistema del mundo real a medida que evoluciona con el tiempo, generalmente desarrollando un modelo de simulación que toma la forma de un conjunto de suposiciones expresadas como relaciones matemáticas o lógicas.
1.2. Importancia y Propósito
La simulación es una herramienta fundamental en diversas disciplinas, como la ingeniería industrial, la investigación de operaciones, la economía, la medicina y las ciencias sociales.
La importancia radica en su capacidad para:
1. Evaluar alternativas sin riesgo: Permite "probar los cambios de diseño de ingeniería sin interrumpir el sistema que se está modelando". Esto es crucial cuando es imposible o desaconsejable experimentar con el sistema real.
2. Responder a preguntas estratégicas: La simulación se utiliza generalmente para responder preguntas del tipo "¿qué sucede si?" (what-if), lo cual sirve de soporte para una decisión racional sobre el sistema.
3. Análisis de sistemas complejos: Es esencial para sistemas que son demasiado complejos para un análisis satisfactorio mediante modelos analíticos, como los modelos de colas.
4. Optimización y mejora continua: Ayuda a la toma de decisiones, permite encontrar la mejor alternativa dentro de un conjunto estudiado, identificar fallas, reducir o eliminar cuellos de botella, y mejorar la eficiencia del proceso.
5. Entrenamiento y capacitación: Se utiliza para crear entornos artificiales (simuladores) que sirven de entrenamiento para actores humanos, como pilotos de aviones o en estrategias militares/administrativas, permitiendo la experimentación bajo condiciones de incertidumbre y riesgo cero.

--------------------------------------------------------------------------------
2. Modelo, Sistema y Evento
2.1. Sistema
Un sistema se refiere a un conjunto de elementos interrelacionados que interactúan entre sí para lograr un objetivo común. La idea de sistema es amplia y se puede aplicar a entidades reales o imaginarias, concretas o abstractas, como un sistema educativo, un sistema de salud o un sistema de frenado.
Un sistema se caracteriza por tener:
• Elementos (llamados entidades en simulación).
• Relaciones entre esos elementos.
• Entradas y salidas.
• Propiedades.
2.2. Modelo
El modelo es una representación simplificada y abstracta de un sistema real que se utiliza para comprender y predecir su comportamiento. Es el medio por el cual la razón humana (el cogito cartesiano) representa la realidad.
El modelo de simulación es una descripción lógica de cómo un sistema o proceso se comporta. Un buen modelo debe describir todas las propiedades importantes del sistema, ser fácil de entender y modificar, y perseguir objetivos claros.
2.3. Evento
En el contexto de la simulación, especialmente la de eventos discretos (SED), un evento es un acontecimiento que sucede en un instante de tiempo determinado en la simulación, lo que provoca un cambio en el estado actual del sistema.
Los eventos son acciones instantáneas que cambian el estado del modelo. En una simulación de eventos discretos, los cambios ocurren instantáneamente en puntos aleatorios del tiempo como resultado del tratamiento de estos eventos.
En cualquier simulación de evento discreto, los dos eventos básicos son: llegadas y salidas (o terminación del servicio).

--------------------------------------------------------------------------------
3. Tipos de Sistemas y Modelos
Los modelos se pueden clasificar según su estructura, naturaleza (probabilística o no), y las técnicas cuantitativas que utilizan.
3.1. Clasificación por representación (Tipo de Modelo)
1. Modelos Icónicos (Físicos): Representaciones a escala del sistema, como maquetas, prototipos o plantas piloto. Estos modelos intentan representar físicamente el sistema real.
2. Modelos Analógicos: Representaciones que utilizan una analogía entre el sistema y el modelo (ej. mapas, diagramas de distribución eléctrica). No reflejan de manera detallada la estructura, sino las relaciones entre las partes del sistema.
3. Modelos Simbólicos (Matemáticos): Codifican las características del sistema mediante el lenguaje matemático. Son fundamentales para la simulación computacional.
3.2. Clasificación por Naturaleza (Tipos de Simulación)
Característica
Modelo Discreto (Eventos Discretos)
Modelo Continuo
Cambio del sistema
Solo cambia en instantes específicos y puntuales del tiempo (eventos).
Cambia continuamente a lo largo del tiempo.
Tiempo
El tiempo simulado avanza de un evento al siguiente; el reloj de simulación salta de un punto discreto a otro.
Modelado por ecuaciones que dependen del paso del tiempo de forma continua (ecuaciones diferenciales).
Unidad de modelado
Modela elementos individuales (entidades) del proceso. Se enfoca en la teoría de colas.
Modela flujos.
Ejemplos
Un peaje, un cajero automático, líneas de espera.
Flujo de un líquido en una tubería, procesos de transferencia de calor, dinámica de población.
Modelos Híbridos: Son una combinación de sistemas continuos y discretos. Por ejemplo, en un aeropuerto, los clientes (aviones) llegan como eventos discretos, pero el combustible que ingresa en el avión es un flujo continuo.
3.3. Clasificación por Aleatoriedad (Comportamiento)
1. Deterministas: No interviene el azar en ninguna variable del sistema. Bajo las mismas condiciones iniciales se obtienen siempre los mismos resultados. Estos sistemas prácticamente no existen en la naturaleza.
2. Estocásticos (Probabilísticos): Interviene el azar o elementos que no se controlan. Se utilizan variables cuyos valores sufren modificaciones aleatorias respecto a un valor promedio, que pueden manejarse mediante distribuciones de probabilidad.
Simulación de Monte Carlo: Se clasifica como un modelo estático. No interviene el tiempo y se basa en la aleatoriedad, usando números aleatorios para variar los valores de entrada, con el objetivo de obtener un resumen estadístico de las observaciones simuladas.
3.4. Estrategias de Simulación Discreta
Dentro de la simulación discreta, existen principalmente tres estrategias para el modelado:
1. Programación de Eventos (Event Scheduling): Se basa en el tratamiento secuencial de los acontecimientos ordenados por tiempo en una lista de eventos. El reloj de simulación avanza de evento en evento, ya que no se producen cambios significativos entre dos eventos.
2. Interacción de Procesos (Process Interaction): El enfoque se centra en la experiencia de la entidad a través del sistema, describiendo los procesos que sufre la entidad (secuencia de tiempos interrelacionados). Los paquetes de simulación orientados al proceso (como Arena y ProModel) usan una interfaz gráfica de usuario (GUI).
3. Exanimación de Actividades: El modelador define las condiciones necesarias para empezar y finalizar cada actividad. El tiempo avanza en iguales incrementos y en cada incremento se evalúan las condiciones para determinar qué actividades pueden comenzar o terminar.

--------------------------------------------------------------------------------
4. Ventajas y Limitaciones
4.1. Ventajas de la Simulación
La simulación es una herramienta flexible, poderosa e intuitiva que ofrece múltiples beneficios:
Categoría
Descripción y Citas
Análisis y comprensión
Mejora el proceso de decisión al permitir el análisis de efectos de cambios internos o externos. Facilita la comprensión de la operación de sistemas complejos, detectando las variables más importantes y entendiendo su relación.
Experimentación y riesgo
Permite experimentar con nuevas situaciones (sistemas nuevos o existentes con poca información) y anticipar resultados no previstos. Permite probar diferentes alternativas y diseños sin incurrir en los costos que implica usar el sistema real.
Costo y Tiempo
Experimentar con un modelo suele ser más económico que con un sistema real. Además, permite simular en cuestión de segundos o minutos años de operación de un sistema, generando observaciones estadísticas.
Flexibilidad y Precisión
El modelo puede ser muy detallado y preciso, ya que los modelos de simulación tienen pocas restricciones en comparación con los modelos analíticos. Es posible controlar y manipular las variables de entrada con mayor precisión que en un sistema real.
Comunicación
El uso de animaciones (2D, 3D) permite "comunicar la esencia de un modelo de simulación... a los administradores y otras personas clave".
4.2. Limitaciones de la Simulación
A pesar de sus beneficios, la simulación presenta inconvenientes que deben considerarse:
• No es una técnica de optimización: Generalmente, la simulación solo analiza alternativas y proporciona estimaciones estadísticas, no resultados exactos u óptimos (a menos que se utilicen paquetes especializados como OptQuest).
• Costo y tiempo de desarrollo: Es costosa en horas de desarrollo y requiere tiempo para la verificación del programa y la validación de los resultados. Los estudios pueden requerir meses para modelar y simular sistemas complejos.
• Resultados estadísticos: Proporciona solo estimaciones estadísticas, no resultados exactos. Además, puede ser muy costoso realizar análisis de sensibilidad de los valores de los parámetros supuestos, ya que la única forma posible es efectuar una serie de corridas con diferentes valores.
• Imitación parcial: "La simulación imita, pero no reproduce exactamente (en un 100%) la vida". Algunos aspectos de la realidad son difíciles o imposibles de simular.
• Dependencia del software y personal: Está limitada por la habilidad del programador y la existencia de software especializado. El modelador requiere un amplio conocimiento del software, probabilidad y estadística para interpretar correctamente los resultados.

--------------------------------------------------------------------------------
Referencias (Formato APA)
Acosta, H. (2007). Simulación con Flexsim.
Banks, J. (ed.). (1998). Handbook of Simulation Principles, Methodology, Advances, Applications, and Practice. John Wiley & Sons.
Banks, J., Carson, J.S., Nelson, B.L., & Nicol, D.M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J.S., Nelson, B.L., & Nicol, D.M. (2014). Discrete Event System Simulation. Pearson Education.
Beaverstock, M., Greenwood, A., Lavery, R. & Nordgren, W. (2012). Applied Simulation Modeling and Analysis. McGraw Hill.
Churchman, C. W. (1963). An analysis of the concept of simulation. South-Western Publishing.
Coss Bù, R. (1993). Simulación un enfoque práctico. LIMUSA - Noriega Editores.
García, D., García, R.H., & Cárdenas, B.R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
García-Dunna, E., García-Reyes, H., Cárdenas-Barrón, L. E. (2006). Simulación y análisis de sistemas con Promodel primera edición. México: Pearson Educación de México, S.A de C.V.
García et al. (2005). La Simulación en la Industria. (Citado en Mireya Tovar Vidal et al., 2022).
Gordon, G. (1989). Simulación de sistemas. Diana.
Hillier, F. S., & Lieberman, G. J. (2010). Introducción a la investigación de operaciones (9a. ed.). McGraw-Hill.
Kelton, W. D., Sadowski, R. P., & Sturrock, D. T. (2010). Simulation with Arena. McGraw-Hill.
Kelton, W. D., Sadowski, R. P., & Sturrock, D. T. (2008). Simulation with Arena. (Citado en Un Primer Paso A La Simulacion Con | PDF | Simulación | Software - Scribd).
Law, A. M. (2014). Simulation Modelling and Analysis. McGraw Hill Education.
Law, A. M., & Kelton, W. D. (1991). Simulation modeling and analysis (2.ª ed.). McGraw-Hill.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
LLIram Ruiz, E. G., Martìnez Alvarez, F. d., & Monroy Alvarado, G. S. (2006). Simulación: Conceptos y Evolución.
Nance, R. E. (1993). A history of discrete event simulation programming languages. (Citado en Un Primer Paso A La Simulacion Con | PDF | Simulación | Software - Scribd).
Naylor, T. H. (1982). Técnicas de simulación en computadoras. Limusa.
Neumann, J. V. (1992). The Monte Carlo method. (Citado en Un Primer Paso A La Simulacion Con | PDF | Simulación | Software - Scribd).
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Ricondo, A. (2013). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar , G. Méndez Giraldo, F. Baesler Abufarde, & M. A. Centeno, Introducción a las simulación discreta. UD universidad Diatrital.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. edición). Trillas.
Shubik, M. (1960). Simulation of the industry and the firm. American Economic Review.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. (Citado en Un Primer Paso A La Simulacion Con | PDF | Simulación | Software - Scribd).