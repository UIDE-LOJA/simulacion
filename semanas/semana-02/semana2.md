Compendio Exhaustivo sobre la Clasificación de Modelos y Paradigmas de Simulación
I. Modelos Discretos vs. Modelos Continuos
La clasificación de modelos de simulación según su evolución temporal es fundamental, distinguiendo cómo cambian las variables de estado del sistema a lo largo del tiempo.
1. Simulación de Eventos Discretos (Discretos)
Los modelos discretos tienen que ver con sistemas cuyo comportamiento solo cambia en instantes de tiempo determinados y puntuales.
• Comportamiento: Los cambios ocurren de forma instantánea en puntos aleatorios del tiempo como resultado del tratamiento de los eventos discretos.
• Tiempo de Simulación: El tiempo simulado "salta" de un evento al siguiente. Se avanza el reloj de simulación de un punto discreto a otro en la escala del tiempo.
• Unidad de Modelado: Modela elementos individuales (entidades) del proceso, como piezas o clientes.
• Ejemplos: El estudio de líneas de espera (colas), donde las medidas de desempeño cambian solo cuando un cliente entra o sale del sistema. La cantidad o número de pantalones bordados cada hora es un ejemplo de un modelo de calidad discreto.
2. Simulación Continua (Continuos)
Los modelos continuos se ocupan de sistemas cuyo comportamiento cambia continuamente con el tiempo. Las variables de estado varían continuamente a lo largo del tiempo.
• Descripción Matemática: Estos modelos suelen estar representados mediante ecuaciones diferenciales o algebraicas que dependen del paso del tiempo de forma continua.
• Unidad de Modelado: Modela flujos, donde el monitoreo de los valores de las estadísticas es posible realizarlo en todo punto de la escala del tiempo.
• Ejemplos: El flujo de un líquido en una tubería, la transferencia de calor en un molde, el crecimiento de la población mundial o la dinámica de un avión en vuelo.
3. Modelos Híbridos
En la naturaleza, es difícil encontrar sistemas "puros" continuos o discretos; a menudo se encuentran de forma mixta. Los modelos híbridos o de cambio continuo-discreto son aquellos que combinan ambos tipos de eventos. Un ejemplo es la simulación del inventario de combustible en un aeropuerto, donde los clientes (aviones) llegan como eventos discretos, pero el combustible que ingresa en el avión es un flujo continuo.
II. Modelos Determinísticos vs. Modelos Estocásticos (Probabilísticos)
Esta clasificación se basa en la naturaleza de los datos y la intervención del azar o la incertidumbre en el sistema.
1. Modelos Determinísticos
En los modelos determinísticos, no interviene el azar en ninguna variable del sistema.
• Comportamiento: "Relación constante entre los diferentes cambios que presentan las variables del modelo, por lo tanto, mismas entradas o condiciones iniciales van a ser las mismas salidas o resultados".
• Variables: Utilizan variables cuyos valores no se ven afectados por variaciones aleatorias y se conocen con exactitud. En la modelización económica sanitaria (MAD), utilizan fórmulas algebraicas y se asume certidumbre en los datos (se utiliza la media de la población).
• Ejemplo: Un modelo continuo determinista es la posición teórica de una partícula en movimiento, donde el valor de $x(t)$ siempre está determinado por el valor específico del tiempo $t$. Un modelo clásico de inventario como la Cantidad Económica de Pedido (CEP) también es determinístico, asumiendo que la demanda es conocida y se produce a una tasa constante.
2. Modelos Estocásticos (Probabilísticos o Aleatorios)
En los modelos estocásticos interviene el azar o elementos que no se controlan.
• Variables: Utilizan variables aleatorias cuyos valores sufren modificaciones aleatorias con respecto a un valor promedio. La incertidumbre en estos modelos se representa como distribuciones de probabilidad.
• Propósito: Son esenciales para modelar sistemas que operan de forma probabilística a través del tiempo, ya que imitan el desempeño del sistema real mediante distribuciones de probabilidad para generar aleatoriamente los eventos.
• Resultados: La salida de datos de una simulación estocástica es un proceso estocástico. Los resultados de una corrida son siempre diferentes, por lo que se requiere de métodos estadísticos para su análisis.
• Simulación Estocástica: Las conclusiones se obtienen generando repetidamente simulaciones del modelo aleatorio. Esto a menudo se denomina método Monte Carlo, que se basa en la aleatoriedad y la probabilidad para obtener un resumen estadístico de las observaciones simuladas.
III. Introducción a Agentes (Modelado Basado en Agentes)
La simulación basada en agentes (Agent-based Models) es un enfoque sofisticado de modelado que se centra en las interacciones y la autonomía de las entidades individuales.
1. Concepto de Agente
Un agente es una entidad que percibe su contexto (o medio ambiente) a través de diversos sensores y genera una respuesta (acción) haciendo uso de actuadores.
• Función del Agente: La funcionalidad del agente se basa en una tabla que registra la secuencia de percepciones junto con la acción desarrollada, permitiéndole tomar una decisión en base a las percepciones recibidas.
• Contexto y Aprendizaje: El contexto permite que el agente registre percepciones y respuestas, que sirven para que el agente vaya aprendiendo los diferentes comportamientos que el contexto le demanda.
• Ejemplo: El agente aspiradora es un modelo simple que opera en un espacio de cuadrículas, detectando si una cuadrícula está sucia y decidiendo acciones como moverse (derecha/izquierda) o aspirar la suciedad. Estos agentes permiten probar estrategias bajo condiciones aleatorias.
2. Modelos Basados en Agentes (ABMS)
Estos modelos consisten en simulaciones donde cada individuo de la población se modela como un agente independiente con sus propias características y comportamientos.
• Autonomía: Aunque los agentes están obligados a seguir reglas, disponen de un grado de autonomía que impide predefinir la dinámica del modelo.
• Dinámica del Modelo: La información sobre la dinámica se obtiene de la interacción de los agentes en el modelo, ya que estos pueden tener inteligencia, memoria y capacidad de aprendizaje.
• Aplicación: Se utilizan, por ejemplo, en la representación de sistemas aeroportuarios, donde los pasajeros se definen como agentes inteligentes para determinar espacios, flujos y operaciones. También son utilizados en modelos dinámicos de representación de enfermedades infecciosas en poblaciones.
IV. Identificación de Paradigmas de Simulación Discreta (Consolidado)
Dentro de la simulación de eventos discretos (SED), existen principalmente tres estrategias (o visiones del mundo) para el modelado de un sistema.
Paradigma
Enfoque Principal
Mecánica del Reloj/Tiempo
Software Común
Programación de Eventos (Event Scheduling)
Se centra en el Evento. Identifica las características del evento y usa rutinas para describir los cambios que ocurren en el tiempo con cada evento.
Se basa en el tratamiento secuencial de los acontecimientos ordenados por tiempo en una lista de eventos. El reloj avanza de evento en evento. Es el más extendido computacionalmente.
SIMSCRIPT II.5, SLAM II.
Interacción de Procesos (Process Interaction)
Se centra en la Entidad. Describe la secuencia de tiempos interrelacionados (procesos) que sufre una entidad a través del sistema.
Se basa en hacer avanzar al máximo posible a cada entidad que llega al sistema. Aunque es más intuitivo para el modelador, internamente puede usar la Programación de Eventos.
GPSS, SIMAN, ProModel, Arena.
Exanimación de Actividades (Activity Scanning)
Se centra en la Actividad. El modelador define las condiciones necesarias para el inicio y el final de cada actividad.
El tiempo es avanzado en iguales incrementos de tiempo, y en cada incremento se evalúan las condiciones para determinar qué actividades pueden empezar o terminar.
ESCL (desarrollado en FORTRAN).

--------------------------------------------------------------------------------
Referencias
A continuación, se presenta la bibliografía citada en formato APA, basada en los autores y años mencionados en las fuentes.
Acosta, H. (2007). Simulación con Flexsim.
Ackoff, R. L. (1961). Scientific method: Optimizing applied research decisions. Wiley.
Ackoff, R. L. (1962). Scientific Method: Integrating Theory and Practice. Wiley.
Azarang, M. R. y García Dunna, E. (1996). Simulación y análisis de modelos estocásticos (1a ed.). McGraw-Hill.
Banks, J. (ed.). (1998). Handbook of Simulation: Principles, Methodology, Advances, Applications, and Practice. John Wiley & Sons.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2005). Discrete-Event System Simulation (4ta ed.). Prentice Hall NJ.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2010). Discrete-Event System Simulation (5ta ed.). Pearson.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2013). Discrete-Event System Simulation (5ta ed.). Pearson.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2014). Discrete Event System Simulation. Pearson Education.
Beaverstock, M., Greenwood, A., Lavery, R., & Nordgren, W. (2012). Applied Simulation Modeling and Analysis. McGraw Hill.
Buzacott, J. A., & Shanthikumar, J. G. (1994). Stochastic Modeling and Analysis of Manufacturing Systems. Springer-Verlag.
Churchman, C. W. (1963). An analysis of the concept of simulation. South-Western Publishing.
Churchman, C. W., Ackoff, R. L., & Arnoff, E. L. (1957). Introduction to Operations Research. Wiley.
Coss Bù, R. (1993). Simulación un enfoque práctico. LIMUSA - Noriega Editores.
Flagle, C. D., Huggins, W. H., & Roy, R. H. (1960). Operations Research and Systems Engineering. Johns Hopkins Press.
Fonseca i Casas, P. (2014). Formal languages for computer simulation: Transdisciplinary models and applications. IGI Global. DOI:10.4018/978-1-4666-4369-7
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
García, H. et al. (2005). La Simulación en la Industria. (Citado en Mireya Tovar Vidal et al., 2022).
García Dunna, E., García Reyes, H., & Cárdenas Barrón, L. E. (2006). Simulación y análisis de sistemas con Promodel primera edición. Pearson Educación de México, S.A de C.V.
Gordon, G. (1980). Simulación de sistemas (1ra. ed.). Diana.
Hillier, F. S., & Lieberman, G. J. (2010). Introducción a la investigación de operaciones (9a. ed.). McGraw-Hill.
Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11th Edition). McGraw-Hill.
Kelton, W. D., Sadowski, R. P., & Sturrock, D. T. (2008). Simulation with Arena. McGraw-Hill.
Khan, M. A. A. (2018). Exploring Wumpus World in Artificial Intelligence.
Law, A. M. (2014). Simulation Modelling and Analysis (5th ed.). McGraw Hill Education.
Law, A. M., & Kelton, W. D. (2000). Simulation modeling and analysis (3.ª ed.). McGraw-Hill.
LLIram Ruiz, E. G., Martìnez Alvarez, F. d., & Monroy Alvarado, G. S. (2006). Simulación: Conceptos y Evolución.
Naylor, T. H. (1982). Técnicas de simulación en computadoras. Limusa.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
Ricondo, A. (2013). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Russell, S. J. (2004). Artificial Intelligence: A Modern Approach. Prentice Hall.
Sanchez, J. R. (2015). INTRODUCCION A LA SIMULACION. En L. Álvarez Pomar et al., Introducción a las simulación discreta. UD universidad Diatrital.
Shannon, R. E. (1988). Simulación de Sistemas: Diseño, Desarrollo e Implantación (1ra. edición). Trillas.
Shubik, M. (1960). Simulation of the industry and the firm. American Economic Review.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. International Thomson.