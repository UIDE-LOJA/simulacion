Compendio Exhaustivo: Componentes, Dinámica y Análisis de Sistemas de Colas
I. Componentes Esenciales de un Modelo de Simulación Discreta
La simulación de un sistema es "el diseño y la operación de un modelo, el cual es la representación del sistema, con el objetivo de experimentar con la información de manera rápida, práctica y barata". Para modelar un sistema estocástico, la simulación sintetiza la estructura con la construcción de cada componente y de cada evento.
Los elementos básicos que permiten construir un modelo de simulación de eventos discretos (SED) varían en su comportamiento, pero son fundamentales para replicar la realidad del sistema. Según las fuentes, los componentes más importantes son:
Componente
Definición y Función
Citas
Entidad (Entity)
Representa los elementos que fluyen por el sistema, teniendo una vida finita en el modelo y recibiendo transformaciones u operaciones. Es el elemento dinámico responsable del flujo de entrada y de que el estado del sistema cambie. Ejemplos: clientes, piezas, productos, cajas, documentos.
Locaciones (Locations)
Son los lugares fijos en el sistema donde las entidades pueden detenerse para ser transformadas, esperar o ser almacenadas. En software especializado, son la "imagen y lugar que se utiliza para representar" equipos, almacenes, filas de espera o centros de trabajo.
Recursos (Resources)
Dispositivos que no son localizaciones, pero son necesarios para llevar a cabo una operación. Incluyen personal, equipo, espacio, o herramientas. Las entidades compiten por ser servidas por los recursos.
Evento (Event)
Una acción instantánea que sucede en un instante determinado de tiempo en la simulación y que provoca un cambio en el estado actual del sistema. En SED, los cambios ocurren de forma instantánea en puntos aleatorios del tiempo.
Estado del Sistema
La condición o "fotografía" que guarda el sistema bajo estudio en un momento de tiempo determinado. En sistemas discretos, el estado del sistema cambia solo en instantes dados, como cuando una entidad entra o sale.
Atributos (Attributes)
Características o cualidades de las entidades (ej. hora de llegada, tamaño del producto, edad, gravedad de la enfermedad). Permiten diferenciar entidades sin generar una nueva.
Reloj de Simulación
Es el contador de tiempo de la simulación, que avanza de evento en evento. Se relaciona con la tabla de eventos futuros.
II. Dinámica de Llegadas y Servicio en Sistemas de Colas
La simulación de eventos discretos describe, directa o indirectamente, situaciones de colas, donde se modelan las interacciones entre los clientes (entidades), las colas (locaciones) y los servidores (recursos).
1. Proceso de Llegada (Arribos)
Las llegadas (Arrivals) son todo tipo de entidad que entra al modelo. La simulación requiere definir adecuadamente la frecuencia de ocurrencia de la llegada.
• Tasa de Llegada ($\lambda$): Es el número promedio de clientes que llegan por unidad de tiempo.
• Tiempo entre Llegadas (TELL): Es la variable que especifica la forma en que llegan los clientes al sistema. Si las llegadas siguen un proceso de Poisson con media $\mu=0.5$ pasajeros por minuto, entonces el tiempo entre llegadas (TELL) sigue una distribución Exponencial con $1/\mu=2$ minutos entre cada pasajero.
• Eventos: La llegada de una nueva pieza al sistema es un tipo de evento en la simulación.
• Variabilidad: En sistemas de servicio, es crucial tener en cuenta la variación de la demanda a lo largo del tiempo, refiriéndose a los picos y valles de la demanda.
2. Proceso de Servicio y Salida
El proceso de servicio está especificado por el tiempo que dura el servicio.
• Tasa de Servicio ($\mu$): Indica el número promedio de clientes que el servidor pueda considerar por unidad de tiempo.
• Tiempo de Servicio (TS): Es el tiempo que el cliente es atendido por el recurso. El tiempo de servicio es una variable aleatoria que sigue cierta distribución (empírica, discreta o continua).
• Disciplina de la Cola: Es el orden en el que son atendidos los clientes. Un ejemplo común es FIFO (First In First Out o Primero en entrar, primero en salir).
• Eventos: La salida de una pieza del sistema cuando finaliza el tiempo de procesado en la máquina es un evento que actualiza el sistema.
III. Métricas de Desempeño (Indicadores)
Para medir el desempeño de una simulación, se requiere de indicadores. Un indicador es "una expresión cuantitativa que se construye a partir de variables deterministas y aleatorias" y que sirven como una guía hacia el logro del resultado esperado. El objetivo final de la simulación es estimar algunas medidas de desempeño deseables que describan el comportamiento del sistema simulado.
Algunos de los indicadores o medidas de desempeño (o métrica) comunes en sistemas de colas y producción son:
Medida de Desempeño
Descripción
Citas
Tiempo promedio en el sistema ($W$)
El tiempo total que un cliente/entidad permanece en el sistema (incluyendo espera y servicio).
Tiempo medio de espera en la cola ($W_q$)
Tiempo que un cliente espera en la fila antes de ser atendido.
Utilización promedio del servidor ($\rho$)
Indica el tiempo que el servidor ha estado ocupado. Si la política es que los clientes no hagan fila, el Indicador líder será el tamaño de la fila en su valor mínimo.
Número medio de clientes en el sistema ($L$)
El número promedio de clientes en la cola y en servicio.
Trabajo en Proceso (WIP)
En manufactura, es dinero que no genera ingreso y un indicador de inventarios en proceso.
Producto Terminado
Cantidad producida en un intervalo, crucial para suministrar pedidos sin retraso.
IV. Modelado Simple con Herramientas
Para realizar simulaciones, existen diversas alternativas. La simulación en computadoras se realiza al codificar un programa que imita el comportamiento de un sistema real.
1. Hoja de Cálculo (Excel)
La alternativa más rápida y accesible para la mayoría de los usuarios es la utilización de Excel. Excel puede realizar simulaciones básicas y es muy útil para modelos muy simples que no tendrán mayores modificaciones.
• Uso Práctico: Las hojas de cálculo, como Excel, permiten llevar a cabo simulaciones complejas y son accesibles en cualquier Computador, permitiendo evaluar el comportamiento del sistema "a coste prácticamente cero".
• Simulación Manual: El proceso de simulación puede realizarse desde técnicas manuales, como la simulación de llegadas y servicios en una tabla, hasta sofisticadas técnicas computacionales. La hoja de cálculo es ideal para modelar líneas de espera de manera didáctica.
2. Software Especializado (Simuladores Gráficos)
Cuando los modelos son más complejos, Excel deja de ser viable, y se recurre a software especializado. La tendencia actual es usar simuladores que combinan la facilidad de uso gráfico con la flexibilidad de un lenguaje.
• ProModel: Es un simulador que permite modelar sistemas de producción y de servicios. Su interfaz gráfica de usuario (GUI) es amigable, permitiendo probar nuevas alternativas y localizar cuellos de botella. La construcción del modelo se realiza definiendo los elementos básicos (Locations, Entities, Arrivals, Resources, Processing) a través del menú BUILD. ProModel cuenta con paquetes complementarios como Stat:Fit para pruebas de ajuste de datos (ej. Chi-cuadrado y K-S) y Simrunner para diseño de experimentos y optimización.
• Arena: Este software utiliza la metodología de modelado orientado a los procesos. Se construye el modelo describiendo el proceso mediante un diagrama de flujo. Arena emplea módulos como Create (para representar el arribo de entidades/llegadas), Dispose (para la finalización de entidades/salidas) y Process (para el procesamiento). Arena es una plataforma comercial desarrollada por Rockwell Automation que utiliza una interfaz gráfica del estilo “arrastrar y soltar” (drag and drop).
• FlexSim: Es un software orientado a objetos y modelado tridimensional. Permite visualizar sistemas con flujos dinámicos en 3D. Utiliza objetos predefinidos como Source (llegadas), Queue (fila), Processor (servicio/procesamiento) y Sink (salida). Su entorno es flexible y contiene un lenguaje de programación denominado Flex Script (similar a C).
• Otros Simuladores: Existen otros programas como SIMIO (paquete con animación 3D para eventos discretos) y SIMULINK de MATLAB (lenguaje de alto nivel para sistemas dinámicos).

--------------------------------------------------------------------------------
Referencias (Formato APA)
Acosta, H. (2007). Simulación con Flexsim.
Albright, C.S., & Winston, W.L. (2020). Business analytics: data analysis and decision making (7th ed.). Cengage Learning.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2010). Discrete-Event System Simulation (5ta ed.). Pearson.
Beaverstock, M., Greenwood, A., Lavery, R., & Nordgren, W. (2012). Applied Simulation Modeling and Analysis. McGraw Hill.
Carlton, M. A., & Devore, J. L. (2014). Probability with Applications in Engineering, Science, and Technology. Springer.
Casella, G., & Berger, R. L. (1990). Statistical Inference. Wadsworth & Brooks/Cole.
Chopra, S., & Meindl, P. (2013). Administración de la cadena de suministro (5a ed.). Pearson Educación.
Fábregas Ariza, D. E., Wadnipar Rojas, A. M., Paternina Arboleda, C. L., & Mancilla Herrera, R. (2003). Simulación con Arena: Análisis de Procesos y Sistemas de Producción.
Fonseca i Casas, P. (2014). Formal languages for computer simulation: Transdisciplinary models and applications. IGI Global.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
García Dunna, E., García Reyes, H., & Cárdenas Barrón, L. E. (2006). Simulación y análisis de sistemas con Promodel primera edición. Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Gordon, G. (1989). Simulación de sistemas. Diana.
Gonzáles Doncel, L. F., & Torres Vivas, J. C. (2005). Simulación con Arena y sus Aplicaciones en Sistemas de Manufactura.
Harrell, Ch., Ghosh, B., & Bowden R. (2004). Simulation Using Promodel with CD-ROM (2nd ed.). McGraw-Hill Science.
Hillier, F. S., & Lieberman, G. J. (2010). Introduction to Operations Research (9th ed.). McGraw Hill.
Higuera Obregon, J. E. (2011). Simulación Arena. Sistema con logística de retorno: Aplicación al caso de contenedores retornables.
Law, A. M. (2014). Simulation Modeling and Analysis (5th ed.). McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
LLIram Ruiz, E. G., Martìnez Alvarez, F. d., & Monroy Alvarado, G. S. (2006). Simulación: Conceptos y Evolución.
López Rendon, J. F., & Soto Mejía, J. A. (2010). Laboratorios de Simulación Discreta. Postergraph S.A.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
ONU Mujeres. (2022). Indicadores. (Citado en Apuntes de Simulación.pdf).
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
ProModel. (s.f.). Simulación y Optimización de Procesos Discretos y Contínuos: Estado del Arte y Tendencias.
Ricondo, A. (2013). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Sadowski, R. P., Kelton, W. D., & Sturrock, D. T. (2008). Simulation with Arena. McGraw-Hill.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. ed.). Trillas.
Simulación UPC. (s.f.). Simulación de Sistemas.
Triana, C. A. (2013). Manual de Flexsim.
Varios Autores. (s.f. a). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f. b). Generación de Números Aleatorios. Universidad Tecnológica de Panamá.
Varios Autores. (s.f. c). Introducción a la simulación. FUOC.
Varios Autores. (s.f. d). Modelos analíticos de decisión en evaluación económica: tipos, metodología, análisis y comunicación de los resultados. Fundación PORIB.
Varios Autores. (s.f. e). SIMULACIÓN 18 UNIDAD 3 Generación de variables aleatorias. UCREANOP.
Varios Autores. (s.f. f). Simulación de sistemas con variables aleatorias para la toma de decisiones estratégicas. SciELO México.
Varios Autores. (s.f. g). Simulación - Investigación de Operaciones. Scribd.
Varios Autores. (s.f. h). UNIVERSIDAD NACIONAL DE CHIMBORAZO....
Varios Autores. (s.f. i). UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS - Repositorio Academico UPC.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. International Thomson.