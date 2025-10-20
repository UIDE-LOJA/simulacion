Compendio Exhaustivo sobre Simuladores y Análisis de Resultados
I. Panorama de Simuladores y Herramientas
La simulación computacional, que es la conjunción de algoritmos matemáticos que modelan el sistema, ha evolucionado de la programación en lenguajes de bajo nivel a sistemas de software especializados que facilitan la construcción de modelos.
1. Tipos de Herramientas de Simulación
Existen diversas herramientas disponibles en el mercado, adaptándose a la complejidad del problema y al nivel de conocimiento del usuario:
• Lenguajes de Propósito General: Los primeros modelos de simulación requerían expertos en programación que dominaran lenguajes de bajo nivel como FORTRAN, C/C++, Java o PASCAL. El software MATLAB/Simulink también es usado para resolver problemas, aunque en el contexto de las E.D.P. (Ecuaciones en Derivadas Parciales).
• Hoja de Cálculo: La hoja electrónica de cálculo, como MS Excel, es una herramienta clave. Su uso es común para la simulación sencilla de tipo Monte Carlo y para modelos simples de inventarios o líneas de espera. Excel permite la simulación, la programación del modelo, y la construcción de gráficas e intervalos de confianza.
• Simuladores Gráficos Especializados: La tendencia ha sido desarrollar lenguajes especiales orientados a la simulación que incluyen facilidades de animación. Actualmente, existen cerca de 100 sw’s de simulación disponibles. Algunos ejemplos son:
    ◦ Arena: Software que se utiliza para modelar sistemas de eventos discretos. Es conocido por sus módulos de flujo (basic process) y módulos de datos. Arena utiliza una metodología de modelado orientado a los procesos. Puede manejar eventos discretos y continuos y se utiliza para el análisis de salidas y la comparación de sistemas.
    ◦ ProModel: Utilizado para la simulación y análisis de sistemas. Es una herramienta líder de modelado de simulación que permite desarrollar ejemplos, validar y mejorar el programa.
    ◦ FlexSim: Software de simulación que se enfoca en el modelado de sistemas virtuales para la toma de decisiones. Se destaca por su animación 3D y su capacidad para controlar eventos discretos y continuos (modelos híbridos).
    ◦ Otros paquetes: La lista de software comercial disponible incluye ExtendSim, GPSS World, SIMIO, SIMUL8, GoldSim y JaamSim.
2. Herramientas Complementarias
Las herramientas modernas facilitan la parte tediosa del proceso:
• Análisis de Entradas: Herramientas como Stat:Fit (mencionado en el historial de conversación) y EasyFit automatizan las pruebas de bondad de ajuste para encontrar la mejor distribución de los datos de forma rápida. Esto ha permitido que la simulación sea más utilizada en el mundo real.
• Optimización y Diseño de Experimentos: La simulación se complementa con el Diseño de Experimentos y la Optimización.
II. Componentes de un Simulador
La estructura de un modelo de simulación de eventos discretos (SED) se define por los elementos que lo componen y que buscan ser "lo más parecido a la realidad del sistema".
Los componentes más importantes en un simulador son:
Componente
Descripción de la función
Referencias
Entidad
Es el elemento responsable de que el estado del sistema cambie, ya que es quien representa el flujo de entrada.
Localizaciones
Son cada uno de los lugares que conforman el sistema, donde las entidades pueden esperar o ser procesadas.
Recursos
Son los que permiten llevar a cabo una operación, como un operario, montacargas o equipo.
Evento
Un cambio en el estado actual del sistema que sucede en un instante de tiempo simulado.
Estado del Sistema
La condición que guarda el sistema bajo estudio en un momento de tiempo determinado, como una "fotografía".
Atributo
Permite diferenciar una entidad de otra sin necesidad de crear una nueva.
Reloj de Simulación
El contador de tiempo que demora un sistema simulando.
Variable
Términos cuyos valores son creados y modificados por ecuaciones matemáticas y relaciones lógicas.
Proceso
Define la secuencia de actividades por las que pasa una entidad.
III. Construcción de Modelos Simples
La construcción de un modelo de simulación es un arte que debe enfatizarse en la enseñanza. Para un estudio de simulación exitoso, es fundamental seguir una metodología bien definida.
1. Metodología General del Estudio de Simulación
Aunque la metodología es flexible, los pasos convencionales en un estudio de simulación estocástica de eventos discretos incluyen:
1. Formulación del Problema: Enunciar claramente el problema y los objetivos del estudio. Esto incluye establecer los supuestos del modelo e identificar las variables de decisión.
2. Plan de Estudio: Estimar el trabajo y el tiempo requerido.
3. Colección y Análisis de Datos: Recopilar datos de registros contables, órdenes de trabajo, o experimentación. "Definir con claridad y exactitud los datos que el modelo va a requerir para producir los resultados deseados".
4. Formulación de un Modelo Matemático/Conceptual: Definir todas las variables, sus relaciones lógicas y los diagramas de flujo.
5. Construcción de un Programa de Computadora del Modelo (Implementación): Codificar el modelo en un lenguaje o paquete. En esta etapa se deben definir los parámetros y las condiciones iniciales del modelo.
6. Verificación y Validación del Modelo: Verificar que el código se comporta como debe. La Validación se realiza para determinar si el modelo es una representación adecuada del sistema real.
7. Diseño de Experimentos: Determinar un conjunto de experimentos que satisfagan los objetivos.
8. Ejecución de la Corrida de Simulación: Llevar a cabo la corrida para generar datos.
9. Análisis de Resultados: Responder a las preguntas planteadas.
2. Construcción Simple con Herramientas
La construcción de modelos sencillos se puede abordar con una hoja de cálculo o con software de eventos discretos.
• Modelado Monte Carlo en Hoja de Cálculo: Este método resulta didáctico y económico. Un ejemplo es la simulación del lanzamiento al aire de una moneda. Esto implica establecer el problema, especificar el objetivo, definir los indicadores y determinar la muestra. Se requiere utilizar la función =ALEATORIO() para generar números pseudoaleatorios.
• Modelado con Simuladores Gráficos (ProModel): La construcción de un modelo implica configurar los elementos básicos como las localizaciones, entidades, llegadas, recursos y el procesamiento. La estructura del modelo de simulación en el paquete requiere instrucciones para la programación del modelo.
IV. Análisis de Resultados
Un estudio de simulación busca respuestas a preguntas sobre el sistema a través de los experimentos con el modelo. El análisis de los resultados es una fase esencial que requiere rigor estadístico.
1. Obtención y Tipos de Resultados
Los simuladores generan diversos outputs que deben ser interpretados.
• Formato de Resultados: Los resultados se manifiestan en tablas, gráficas, histogramas, resúmenes de estadísticos, valores críticos de variables, reportes técnicos y resúmenes ejecutivos. Un ejemplo es el informe general (General Report) de ProModel, que muestra el estado de las localizaciones y el estado de los recursos.
• Proceso Estocástico: Dado que los resultados de una corrida son diferentes (ya que son resultados de un proceso aleatorio), se requiere el uso de métodos estadísticos y transformación de los datos.
2. Rigor Estadístico y Conclusiones
El análisis de los resultados es una etapa en la que "se requiere saber qué combinación de variables optimizan el sistema y hallar cuellos de botella".
• Intervalos de Confianza (IC): Las respuestas deben ser expresadas numéricamente para cada alternativa. Se debe utilizar la Construcción de intervalos de confianza para obtener conclusiones más robustas. Los intervalos de confianza para la media de magnitudes son esenciales tanto en estudios con condición de terminación como en estudios en el estacionario.
• Interpretación y Selección: El análisis incluye la Interpretación de los informes de salida y la emisión de Juicios sobre los resultados reportados. La fase final del estudio es la Selección de la mejor configuración al comparar las alternativas simuladas.
• Reporte y Recomendaciones: El trabajo debe culminar con un reporte profesional que indique el objetivo y los métodos empleados. Se deben incluir las conclusiones, la comparación de los resultados con la teoría, la verificación del modelo, y las recomendaciones para la implantación en el sistema real.

--------------------------------------------------------------------------------
Referencias
Acosta Flores, J. (2007). Ingeniería de Sistemas: Un Enfoque Interdisciplinario (2a ed.). Alfaomega Grupo Editor, S. A. de C. V.
Albright, C.S., & Winston, W.L. (2020). Business analytics: data analysis and decision making (7th ed.). Cengage Learning.
Banks, J. (ed.). (1998). Handbook of Simulation Principles, Methodology, Advances, Applications, and Practice. John Wiley & Sons.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice-Hall.
Banks, J., Carson, J., Nelson, B. L., & Nicol, D. M. (2009). Discrete-Event System Simulation (5 ed.). Pearson.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2014). Discrete Event System Simulation. Person Education.
Beaverstock, M., Greenwood, A., Lavery, E., & Nordgren, W. (2012). Applied Simulation Modeling and Analysis using FlexSim (3a ed.). FlexSim Software Products, Inc.
Bradley, P. (2007). The history of simulation in medical education and possible future directions. Medical Education (en linea), Vol 40.
Cao, R. (2002). Introducción a la simulación y a la teoría de colas. NetBiblo.
Ciaburro, G. (2020). Applied simulation with Arena: an introduction to modeling and simulation. Packt Publishing.
Fonseca i Casas, P. (2014). Formal languages for computer simulation: Transdisciplinary models and applications. IGI Global. DOI:10.4018/978-1-4666-4369-7
Fonseca i Casas, P.; Casanovas, J.; Ferran, X. (2014). Passenger flow simulation in a hub airport: An application to the Barcelona International Airport. Simulation Modelling Practice and Theory, 44, 78-94.
Fonseca i Casas, P. (s.f.). Introducción a la simulación. FUOC.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
García Dunna, E., García Reyes, H., & Cárdenas Barrón, L. E. (2006). Simulación y análisis de sistemas con Promodel primera edición. Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Gordon, G. (1980). Simulación de Sistemas (1ra. ed.). Diana.
Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11th Edition). McGraw-Hill.
Higuera Obregon, J. E. (2011). Simulación Arena. Sistema con logística de retorno: Aplicación al caso de contenedores retornables.
Jain, R. (2015). Art of Computer Systems Performance Analysis: Techniques For Experimental Design Measurements Simulation and Modeling. Wiley.
Kelton, W. D.; Sadowski, R. P.; Sturrock, D. T. (2008). Simulación con Software Arena (4a ed.). McRaw-Hill, Inc.
Kelton, W. D., Sadowski, R. P., & Sturrock, D. T. (2010). Simulation with Arena. McGraw-Hill.
Law, A. M. (2014). Simulation Modeling and Analysis (5th ed.). McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
Lario Femenia, J., & Cortés Pellicer, P. (2025). Introducción a la simulación con JaamSim. Recursos Educativos En Abierto EdUPV. https://doi.org/10.4995/REA.2025.681901
López Rendon, J. F., & Soto Mejía, J. A. (2010). Laboratorios de Simulación Discreta. Postergraph S.A.
LLIram Ruiz, E. G., Martìnez Alvarez, F. d., & Monroy Alvarado, G. S. (2006). Simulación: Conceptos y Evolución.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Metropolis, N., & Ulam, S. (1949). The Monte Carlo Method. Journal of the American Statistical Association, 44(247), 335–341.
Mireya Tovar Vidal et al. (2023). Apuntes de Simulación. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Naylor, T. H., Balintfy, J. L., Burdick, D., & Kong Chu (1982). Técnicas de Simulación en Computadoras. Limusa.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
ProModel. (s.f.). Simulación y Optimización de Procesos Discretos y Contínuos: Estado del Arte y Tendencias.
Puche Forte, J. F., A Carpana, J. J., Gomez, J., Vilar, R., Villalba, S. S., & Perpiñan, J. S. (2005). GUIA PRACTICA PARA LA SIMULACION DE PROCESOS INDISTRIALES. Centro Tecnológico del MUeble y la Madera de la Region de Murcia.
Ríos Insúa, D., Ríos Insua, S., & Martín, J. (1997). Simulación: Métodos y aplicaciones. Ra-Ma.
Robinson, S. (1999). Simulation verification, validation and confidence: a tutorial. Simulation: Transactions of The Society for Modeling and Simulation International, 16(2), 63–69.
Sadowski, R. P., Shannon, R. E., & Sadowski, R. P. (1995). Introduction to Simulation using SIMAN (2nd ed.). McGraw-Hill.
Sánchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Sargent, R. G. (2007). Verification and Validation of Simulation Models. Proceedings of the 2007 Winter Simulation Conference.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. ed.). Trillas.
Simón Marmolejo, I. (s.f.). Un primer paso a la simulación con FlexSim. Universidad Autónoma del Estado de Hidalgo.
Wainer, G. A. (s.f.). Discrete-Event Modeling and Simulation: A Practitioner's Approach. CRC Press.
Winston, W. L. (2005). Investigación de Operaciones Aplicación y Algoritmos (4a ed.). Thomson Learning.
Zeigler, B. P.; Praehofer, H.; Kim, T. G. (s.f.). Theory of Modeling and Simulation: Discrete-Event Modeling and Simulation. ACADEMIC PRESS.
