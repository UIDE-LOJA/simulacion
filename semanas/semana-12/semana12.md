Compendio Exhaustivo sobre Inventarios y Simulación de Políticas
I. Componentes del Sistema de Inventarios
La simulación de un sistema de inventarios, enmarcado en los problemas con sistemas de Inventarios, requiere identificar las variables que definen el estado y la dinámica del sistema.
1. Variables y Elementos Clave
Los componentes principales de un sistema de inventarios incluyen:
• Variable de estado: El Inventario en el almacén.
• Entidades: Los Clientes, cuya demanda impulsa el sistema.
• Eventos: La Demanda (o Ventas) y la Entrega de material por parte del proveedor.
• Actividades: El Cálculo de los costos, fundamental para la evaluación de las políticas.
2. Parámetros Financieros y Operacionales
Para formular las políticas de inventario, es necesario definir una serie de parámetros, muchos de los cuales varían con cada corrida de simulación:
• Demanda ($D$ o $N$): La demanda anualizada. En los modelos estocásticos, la demanda es una variable aleatoria.
• Costo de Ordenar ($A$ o $C_p$): El costo asociado a la colocación de un pedido.
• Costo de Mantenimiento ($C$ o $C_s$): El costo anual de mantener el inventario, usualmente expresado como un porcentaje ($i$) del valor del producto.
• Tamaño del Lote ($Q$): La cantidad a pedir cada vez que se hace un pedido.
• Punto de Reorden ($R$): El nivel de inventario que determina el momento para realizar un nuevo pedido. Este punto depende del tiempo promedio de entrega, de la demanda promedio, y del inventario de seguridad (Safety Stock).
Además, en el análisis de inventarios se pueden utilizar variables relacionadas con el desabastecimiento, como el costo por unidad de producto excedente o sobrante ($C_e$) al final del periodo, o en modelos más avanzados (como Distancia a la Pérdida o DL), el costo de desabastecimiento de inventario y el valor de salvamento por unidad.
II. Políticas Básicas de Inventario
Las políticas de inventario son reglas que definen cuánto pedir y cuándo pedir. El objetivo es determinar la mejor política de adquisiciones para maximizar la utilidad o minimizar el costo total anual.
1. Revisión Continua (Modelo Tipo “Q” o $(Q, R)$)
Para inventarios con demanda aleatoria independiente, el modelo típico utilizado es el de revisión continua o tipo “Q”.
• Características: Se basa en compras de cantidades fijas de mercancías ($Q$), también llamado orden económica de pedido (EOQ).
• Mecanismo: El modelo no tiene periodo de revisión; en su lugar, se activa un pedido cuando el inventario final cae por debajo del punto de reorden ($R$). Este modelo "protege a los artículos de mayor valor económico y su nivel de inventario promedio tiende a ser lo más bajo posible".
2. Justo a Tiempo (Just in Time - JIT)
El enfoque JIT es una estrategia de gestión que constituye "una forma de gestión formada por un conjunto de técnicas y prácticas de organización de la producción".
• Objetivo: Pretende que el cliente "sea servido cuando lo precise (justo a tiempo) y en la cantidad y calidad requeridas".
• Contexto: Es aplicable en contextos de producción donde el producto final está compuesto por muchos componentes con interrelaciones complejas. En estos casos, "no es necesario prever la demanda, sino que esta puede ser calculada casi con certeza a través del programa maestro de producción".
III. La Cantidad Económica de Pedido (EOQ/CEP)
El EOQ o CEP es el modelo más fundamental en la gestión de inventarios.
1. Modelo Clásico (Determinístico)
El modelo de la Cantidad Económica de Pedido (CEP) es un modelo "más simple y clásico" encuadrado dentro de los modelos de universo cierto o determinístico. Esto se debe a que su principal supuesto es que la demanda es considerada como una cantidad conocida.
El modelo busca minimizar el costo total variable ($CT$) de la política de inventarios. El costo total de inventarios ($CT$) se compone del costo de pedido/ordenar ($C_p$) y el costo de almacenamiento/mantener ($C_s$). La simulación de este modelo se utiliza para encontrar el punto de reorden.
2. Extensiones y Análisis de Sensibilidad
En la práctica, la gestión de inventarios utiliza modelos más sofisticados.
• Costos Variables: Alfares y Ghaithan (2019) realizaron una revisión de los modelos EOQ y EPQ formulados bajo la suposición de costos de mantenimiento variables.
• Interés Compuesto: Çalışkan (2021a) presenta una solución cerrada intuitiva para el modelo EOQ con interés compuesto, mejorando el costo de almacenamiento.
• Análisis de Sensibilidad: El cálculo del EOQ requiere la formulación y el análisis de sensibilidad de los resultados. El análisis de sensibilidad es una herramienta que se utiliza para "investigar la reacción de la salida del modelo ante cambios drásticos en la entrada". Este análisis es realizado, por ejemplo, por Pando et al. (2019) y Liao et al. (2018).
IV. Simulación de Políticas de Inventario
La simulación es la metodología de elección cuando se trata de inventarios con demanda aleatoria independiente o para problemas que son "demasiado complicados para ser tratados analíticamente".
1. Objetivos de la Simulación
La simulación permite a los decisores "evaluar el comportamiento del sistema frente a sus decisiones antes de tomarlas". El proceso busca encontrar una solución adecuada mediante la simulación de miles de posibles escenarios.
Un caso común es determinar la cantidad óptima de pedido para cumplir y satisfacer a los clientes al 100%, manteniendo un nivel adecuado de inventario.
2. Implementación de Políticas en Hoja de Cálculo
La simulación de políticas de inventario puede llevarse a cabo en una hoja de cálculo. Para una simulación con 300 días de operación:
1. Definición de Inventario: El inventario final será igual al inventario inicial de ese día, restándole la demanda de ese mismo día.
2. Regla de Pedido ($R, Q$): "Luego se pasa a la celda de hacer pedido, utilizando una función 'SI', para comparar el Inv. Final de ese día respecto al punto de reorden 'R'. Si es inferior, se hace un pedido por una cantidad fija 'Q'. De lo contrario no hacer el pedido".
3. Evaluación: Se comparan diversas alternativas de pedido (ej. 40, 50, 60, 70 y 80) para determinar la mejor política de adquisiciones para maximizar la utilidad. La simulación permite calcular la Utilidad Promedio de cada política.
3. Uso de Herramientas Digitales y Optimización
Para simular el control de inventarios, las herramientas digitales utilizadas incluyen:
• Simulación: (Frecuencia de 2 en artículos revisados).
• EOQ: Es la herramienta más frecuente, con una frecuencia de 12.
• Análisis de Sensibilidad: (Frecuencia de 3).
En casos reales, la simulación se aplica para "analizar la logística de desplazamiento, distribución y almacenamiento de materiales". Autores como Campuzano-Bolarín et al. (2019) integran el EOQ con la simulación discreta.
La simulación también es parte de la Administración de Operaciones y la Cadena de Suministro, disciplinas que se ocupan de minimizar el costo a largo plazo de los productos y procesos.

--------------------------------------------------------------------------------
Referencias
Abdollahi, M., Yang, X., Nasri, M. I., & Fairbank, M. (2023). Demand management in time-slotted last-mile delivery via dynamic routing with forecast orders. European Journal of Operational Research, 309, 704-718.
Aguilar, M. A. (2018). Propuesta de un sistema de gestión de inventarios para un distribuidor mayorista de equipos electrónicos e informáticos [Tesis de bachiller, Universidad Peruana de Ciencias Aplicadas]. Repositorio Académico UPC.
Alfares, H. K., & Ghaithan, A. M. (2019). EOQ and EPQ Production-Inventory Models with Variable Holding Cost: A Review. Arabian Journal for Science and Engineering, 43(4), 1703-1722.
Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (1996). Discrete-Event System Simulation. Prentice Hall.
Çalışkan, C. (2021a). The Economic Order Quantity Model with Compounding. Omega, 102(102307).
Campuzano-Bolarín, F., Mula, J., Díaz-Madroñero, M., & Legaz-Aparicio, Á.-G. (2019). A rolling horizon simulation approach for managing demand with lead time variability. International Journal of Production Research, 58(12), 3800-3820.
Cárdenas-Barrón, L. E., Shaikh, A. A., Tiwari, S., & Treviño-Garza, G. (2020). An EOQ inventory model with nonlinear stock dependent holding cost, nonlinear stock dependent demand and trade credit. Computers & Industrial Engineering, 139, 105557.
García, D., García, R. H., & Cárdenas, B. R. (2013). Simulación y análisis de sistemas con ProModel (2a ed.). Pearson Educación de México, S.A de C.V.
Garriga Garzón, F. (s.f.). Tome la mejor decisión experimentando previamente sus consecuencias: Casos prácticos resueltos de simulación Monte Carlo mediante hoja de cálculo. OmniaScience.
Hillier, F. S., & Lieberman, G. J. (2010). Introducción a la investigación de operaciones (9a. ed.). McGraw-Hill.
Hillier, F. S., & Lieberman, G. J. (2021). Introduction to Operations Research (11th ed.). McGraw-Hill.
Lario Femenia, J., & Cortés Pellicer, P. (2025). Introducción a la simulación con JaamSim. Recursos Educativos En Abierto EdUPV.
Law, A. (2014). Simulation Modeling and Analysis (5th ed.). McGraw Hill Education.
Liao, J.-J., Huang, K.-N., Chung, K.-J., Lin, S.-D., Ting, P.-S., & Srivastava, H. M. (2018). Retailer’s optimal ordering policy in the EOQ model with imperfect-quality items under limited storage capacity and permissible delay. Mathematical Methods in the Applied Sciences, 41(17), 7624-7640.
Martín, C., & Urquia, A. (s.f.). Modelado y simulación de eventos discretos (Guía de estudio pública). UNED.
Nahmias, S., & Olsen, T. L. (2020). Production and Operations Analysis (8th ed.). McGraw-Hill.
Pando, V., San-José, L. A., & Sicilia, J. (2019). Profitability ratio maximization in an inventory model with stock-dependent demand rate and non-linear holding cost. Applied Mathematical Modelling, 69, 337–350.
Prawda, J. W. (2004). Métodos y Modelos de Investigación de Operaciones, Vol. 2. Modelos Estocásticos. LIMUSA.
ProModel. (s.f.). Simulación y Optimización de Procesos Discretos y Contínuos: Estado del Arte y Tendencias.
Sarabia, A. (1996). La investigación operativa. Una herramienta para la adopción de decisiones. Universidad Pontificia Comillas.
Sargent, R. G. (2007). Verification and validation of simulation models. Proceedings of the 2007 Winter Simulation Conference.
Silao Duarte. (2012). (Citado en I ANÁLISIS DE SISTEMAS DE PRODUCCIÓN MEDIANTE EL USO DE HERRAMIENTAS DIGITALES...).
Taha, H. A. (2017). Investigación de operaciones (10ª ed.). Pearson Educación.
Varios Autores. (s.f.). Apuntes de Simulación.pdf. Repositorio Institucional del Tecnológico Nacional de México (RI - TecNM).
Varios Autores. (s.f.). Modelos analíticos de decisión en evaluación económica: tipos, metodología, análisis y comunicación de los resultados. Fundación PORIB.
Varios Autores. (s.f.). Pruebas de bondad de ajuste - Yachana Revista Científica.
Varios Autores. (s.f.). Simulación de Sistemas - Repositorio Academico UPC.
Varios Autores. (s.f.). Simulación y Optimización de Procesos Discretos y Contínuos: Estado del Arte y Tendencias.
Varios Autores. (s.f.). UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS - Repositorio Academico UPC.
Wainer, G. A. (s.f.). Discrete-Event Modeling and Simulation: A Practitioner's Approach. CRC Press.
Winston, W. L. (2005). Investigación de operaciones: Aplicaciones y algoritmos. International Thomson.
Winston, W. L. (2001). Simulation Modeling Using @RISK. Duxbury Press.
Zeigler, B. P., Praehofer, H., & Kim, T. G. (s.f.). Theory of Modeling and Simulation: Discrete-Event Modeling and Simulation. ACADEMIC PRESS.
