# Caso 3: Un Modelo de Simulación Combinado Discreto-Continuo para Analizar Interacciones Tren-Peatón

**Autores:** Ronald Ekyalimpa, Michael Werner, Stephen Hague, Simaan AbouRizk (Universidad de Alberta), Nadia Porter (SMA Consulting)

**Fuente:** Proceedings of the 2016 Winter Simulation Conference

## Resumen

La simulación por computadora se ha establecido como un método confiable para el análisis de sistemas complejos estocásticos y dinámicos tanto en aplicaciones académicas como prácticas. Esto se atribuye en gran medida al desarrollo y evolución de varias taxonomías de simulación, tales como Simulación de Eventos Discretos, Simulación Continua, Dinámica de Sistemas, Modelado Basado en Agentes y enfoques híbridos como la simulación combinada discreto-continua. Cada uno de estos métodos de simulación funciona mejor para ciertos tipos de problemas. En este artículo, se describe un enfoque de simulación discreto-continua para estudiar las interacciones de tráfico de trenes y peatones con propósitos de apoyo a la toma de decisiones. Se utiliza un problema práctico de operaciones relacionado con la operación de trenes de mercancías dentro de dos pequeñas ciudades en Alberta, Canadá, para demostrar la implementación del enfoque dentro del sistema de simulación Simphony.NET.

## 1. Introducción

Las vías de tren construidas y operadas a nivel del suelo frecuentemente se intersectan con otros modos de transporte como el transporte vehicular y peatonal. El transporte vehicular se refiere a automóviles, camiones, etc., en carreteras, mientras que el transporte peatonal se refiere a personas caminando o corriendo. Tales intersecciones típicamente se dejan sin control hasta que los volúmenes de tráfico aumentan, la molestia de los silbatos de tren es intolerable, o hay ocurrencia de incidentes.

Los estudios formales son inevitables para llegar a decisiones relacionadas con la necesidad de instalar dispositivos de control formal en tales intersecciones debido a los costos de capital y operación involucrados. Tales estudios se basan en el concepto de "warrants" que se utiliza predominantemente en la gestión de tráfico de intersecciones. Estos estudios se llevan a cabo empíricamente, usando enfoques basados en simulación, o usando una combinación de ambos.

En el enfoque mixto (empírico-basado en simulación), el componente empírico se utilizó para establecer la verdad del estado del sistema siendo estudiado a través de la observación de patrones de llegada de tráfico, la geografía del sitio, etc. Los datos recopilados sirvieron como entradas básicas para el proceso de construcción del modelo de simulación.

## 2. Simulación por Computadora

Existen varias taxonomías de simulación por computadora hoy en día. Esto se debe en parte a los avances hechos en el dominio de las ciencias de la computación y la naturaleza cada vez más compleja de los problemas que deben analizarse usando simulación. Ejemplos de taxonomías de simulación incluyen:

### 2.1 Tipos de Simulación

- **Simulación Monte Carlo:** Método de simulación que en gran medida depende de desviaciones aleatorias extraídas de un modelo para la realización de cálculos. La mayoría de las simulaciones Monte Carlo son estáticas por naturaleza, pero también existen las dinámicas.

- **Simulación de Eventos Discretos (DES):** Tipo dinámico de simulación utilizado en la emulación de sistemas a través de la programación y procesamiento de eventos en puntos específicos en el tiempo.

- **Simulación Continua (CS):** El sistema siendo emulado en computadora es escaneado cada paso de tiempo y se toman decisiones sobre si los eventos se disparan. Las variables de estado del sistema están estrechamente acopladas con el tiempo y por lo tanto cambian continuamente.

- **Dinámica de Sistemas (SD):** Tipo de simulación de alto nivel que utiliza un esquema de implementación de simulación continua junto con técnicas de modelado matemático. Más adecuada para problemas caracterizados por interrelaciones no lineales entre variables de estado.

- **Modelado Basado en Agentes (ABM):** Paradigma de simulación de alto nivel compuesto por constructos autónomos o semi-autónomos referidos como agentes. Estos agentes tienen la capacidad de comunicarse entre sí y con su entorno, y pueden comportarse de maneras únicas.

## 3. Diseño Conceptual para Simular Interacciones Tren-Peatón

### 3.1 Formulación y Modelado de Comportamientos

En estudios típicos de transporte, todos los constructos de interés pueden colocarse en una de dos categorías:
1. **Infraestructura:** Incluye las vías del tren para el viaje del tren, el espacio disponible para el movimiento peatonal y cualquier dispositivo de control que exista.
2. **Usuarios de la infraestructura:** Incluye trenes y peatones.

Los aspectos conductuales importantes se relacionan con la forma en que los usuarios interactúan con la infraestructura y entre ellos mismos. La movilidad es uno de los comportamientos importantes y se comparte entre los usuarios de la infraestructura.

**Parámetros que definen la movilidad:**
- Tasas de llegada
- Dirección de viaje
- Velocidad máxima/promedio de viaje
- Aceleración y desaceleración

**Otros comportamientos incluyen:**
- Detener movimientos
- Alterar la dirección del movimiento
- Tiempos de espera tolerables

### 3.2 Discretización del Espacio de Interacción

El espacio es un parámetro importante en estudios que se refieren a comportamientos dinámicos de constructos móviles. Se necesita delinear límites después de lo cual el espacio delineado se subdivide en celdas o zonas discretas más pequeñas para facilitar el cálculo dinámico y análisis relacionado.

#### Zonas para Peatones
Se designaron un total de cuatro zonas para modelar el comportamiento peatonal:

1. **"Zona roja peatonal":** Representa la vía del tren y un espacio más cercano a ella. Los peatones dentro de esta zona son golpeados por el tren cuando llega a la "zona de cruce peatonal" designada.

2. **"Zona amarilla peatonal":** Los peatones dentro de esta zona se cuentan como estadísticas de incidentes perdidos cuando un tren llega a la "zona de cruce peatonal".

3. **"Zona verde peatonal":** Sirve como punto de entrada para peatones que llegan al área con la intención de cruzar y como salida para aquellos que dejan el área.

#### Zonas para Trenes
Las zonas designadas para modelar el comportamiento del tren y su interacción con peatones incluyeron:

1. **"Zona amarilla del tren":** Configurada para disparar un escaneo del espacio de interés para que un tren pueda decidir su próximo curso de acción mientras está en movimiento.

2. **"Zona roja del tren":** Segunda zona de activación para escaneo.

3. **"Zona de cruce peatonal":** Utilizada para recopilar estadísticas de incidentes (peatones golpeados) e incidentes perdidos.

### 3.3 Reglas Conductuales Basadas en Zonas

#### 3.3.1 Reglas Conductuales del Tren

La comunicación se inició cada vez que un tren transitó a una zona designada. El tren se configuró para operar a través de tres zonas designadas en el siguiente orden:

1. **Primera zona - "zona amarilla del tren":** Una transición a esta zona dispara la primera sesión de escaneo del tren. Si los resultados del escaneo revelan presencia de peatones, entonces el tren silbará y continuará el movimiento.

2. **Segunda zona - "zona roja del tren":** Se activa un segundo escaneo del espacio de la vía del tren. El tren se verá obligado a silbar y luego desacelerar hasta una parada completa si se revela presencia de peatones para este segundo escaneo.

3. **Tercera zona - "zona de cruce peatonal":** Cuando se activa una parada de emergencia, el tren escanea en busca de peatones que estén en la vía o cerca de la vía cuando el tren llega a esta zona.

**Tipos de paradas:**
- **Paradas de emergencia por incidentes:** Resultan en retrasos más largos
- **Paradas de emergencia por incidentes perdidos:** Retrasos menores
- **Paradas programadas:** Para facilitar operaciones de descarga y recogida del tren

#### 3.3.2 Reglas Conductuales del Peatón

Dado que los peatones se configuraron como constructos esclavos, las alteraciones a su comportamiento predeterminado se implementaron solo cuando reciben una señal de silbato del tren.

**Clusters de peatones:**
1. **Cluster 1:** Peatones con movilidad reducida (personas mayores de 65 años, niños con adulto, personas con discapacidades)
2. **Cluster 2:** Peatones con movilidad normal

**Comportamientos después del silbato del tren:**
1. **Proceder sin impedimentos:** Continuar en movimiento después de escuchar el silbato (por no escuchar o por ser tomadores de riesgo alto)
2. **Parada completa:** Con dos sub-opciones:
   - Esperar hasta que se despeje su derecho de paso
   - Esperar solo un tiempo predefinido antes de irse en dirección opuesta

## 4. Metodología

Los estudios tuvieron un componente de recopilación de datos. Los datos se requerían para servir como entrada para el modelo de simulación y para propósitos de validación. Estos datos se recopilaron de las siguientes maneras:

1. **Entrevistas estructuradas:** Con operadores del tren, sus supervisores, personas que viven en las cercanías del área de estudio
2. **Observaciones:** Del sitio, patrones de comportamiento y medición directa

### 4.1 Entorno de Simulación

El entorno de simulación elegido para la implementación de los diseños presentados fue **Simphony.NET**. La elección se vio influenciada por los hechos de que Simphony.NET es software gratuito para propósitos de investigación y también dos de los autores de este artículo están involucrados en su creación y mantenimiento.

Sin embargo, Simphony.NET aún no tiene los servicios para facilitar el modelado basado en agentes, un paradigma de modelado de simulación que habría sido una opción natural para este tipo de estudio. Consecuentemente, se adaptó un enfoque de simulación combinado discreto-continuo como la segunda mejor opción.

**Implementación:**
- **Porción continua:** Dedicada a la implementación de sub-modelos que emulan el viaje del tren, su transición entre zonas y las operaciones de escaneo relacionadas
- **Porción de eventos discretos:** Utilizada para emular el viaje de los peatones

## 5. Implementación del Diseño

### 5.1 Visión General del Caso de Estudio

Se utilizó un proyecto de simulación recientemente consultado para una compañía ferroviaria como caso de estudio. El interés de la compañía era obtener información sobre sus operaciones en dos pequeñas ciudades: **Camrose y Ervick**, en Alberta, Canadá.

**Categorías de trenes:**
1. **"Trenes de paso":** Viajan sin detenerse
2. **"Trenes de posicionamiento":** Se detienen para hacer una descarga o recogida

### 5.2 Métricas del Modelo de Simulación

El modelo de simulación creado se configuró para generar la siguiente información:
- El nivel de molestia de los silbatos de tren (cuantificado como estadísticas de conteo)
- El número de incidentes tren-peatón
- El número de incidentes perdidos tren-peatón
- Los tiempos de espera peatonal resultantes de trenes de posicionamiento que bloquean el derecho de paso peatonal

### 5.3 Datos de Entrada

#### Velocidades de Caminata
| Categoría de Peatón | Velocidad de Caminata (m/s) |
|---------------------|----------------------------|
| Cluster 1 (Mayores de 65 años, Niño con Adulto y Discapacitados) | 1.00 – 1.36 |
| Cluster 2 (Menores de 30 y 30-60 años) | 1.42 – 1.49 |

#### Tiempos de Inter-llegada de Peatones
| Hora del Día | Inter-llegadas (Hrs.) | |
|--------------|----------------------|--|
| | Dirección Norte | Dirección Sur |
| 6am a 10pm | 0.35 – 0.40 | 0.30 – 0.45 |
| 10pm a 6am | 0.80 – 1.60 | 0.70 – 1.50 |

#### Datos Cinemáticos para Trenes
| Métrica | Valor |
|---------|-------|
| Velocidad Máxima del Tren (m/s) | Constante(11.18) |
| Aceleración/Desaceleración del Tren (m/s²) | Uniforme(186.26, 372.53) |

#### Frecuencias de Llegada de Trenes
| Tipo de Tren | Frecuencia de Llegada |
|--------------|----------------------|
| Tren "de Paso" | 5 por día |
| Tren "de Posicionamiento" | 2 por día |

## 6. Verificación y Validación del Modelo de Simulación

### 6.1 Verificación del Modelo

Para el caso de estudio implementado en este artículo, se emprendieron los siguientes pasos de verificación:

- **Contadores estratégicamente posicionados:** Dentro de ambos sub-modelos discretos y continuos
- **Generación de registro de trazas:** De eventos de simulación mientras evolucionaban
- **Revisión de secuencias de eventos:** Para asegurar comportamiento lógico

### 6.2 Validación del Modelo

El problema en el caso de estudio presentado en este artículo se caracterizó por comportamientos y procesos estocásticos y dinámicos. Consecuentemente, adoptar métodos de simulación por computadora para su solución se consideró válido.

La elección del paradigma de modelado de simulación es otra decisión importante. En el caso de estudio, se eligió un enfoque de modelado de simulación combinado discreto-continuo:
- **Eventos discretos:** Para modelar aspectos que solo cambian estado en puntos específicos en el tiempo
- **Simulación continua:** Para modelar aspectos del problema con variables de estado que varían continuamente con el tiempo

## 7. Resultados de Simulación y Discusión

Después de que se creó y depuró el modelo de simulación, se configuró para ejecutar varios escenarios:

### Escenarios Experimentales

**Escenario 1.1:** 7 trenes (1/7 posicionamiento) por día; posicionamiento del tren en cruce peatonal en Camrose; 20% cluster peatonal 1 y 80% cluster peatonal 2; 30-50 peatones por día

**Escenario 1.2:** 7 trenes (1/7 posicionamiento) por día; posicionamiento del tren en Ervick (5 millas al oeste); 50% cluster peatonal 1 y 50% cluster peatonal 2; 150-250 peatones por día

**Escenario 2.1:** 11 trenes (3/11 posicionamiento) por día; posicionamiento del tren en cruce peatonal en Camrose; 20% cluster peatonal 1 y 80% cluster peatonal 2; 30-50 peatones por día

**Escenario 2.2:** 11 trenes (3/11 posicionamiento) por día; posicionamiento del tren en Ervick (5 millas al oeste); 50% cluster peatonal 1 y 50% cluster peatonal 2; 150-250 peatones por día

### Resultados Principales

#### Número Total de Trenes que Pasaron la Intersección
| Tipo de Tren | Escenario 1.1 | Escenario 1.2 | Escenario 2.1 | Escenario 2.2 |
|--------------|---------------|---------------|---------------|---------------|
| "Trenes de Posicionamiento" | 730 | 730 | 1094 | 988 |
| "Trenes de Paso" | 1460 | 1460 | 2191 | 1980 |
| Ambos tipos de Trenes | 2190 | 2190 | 3285 | 2968 |

#### Número de Silbatos y Frenadas de Tren
| Parámetro | Escenario 1.1 | Escenario 1.2 | Escenario 2.1 | Escenario 2.2 |
|-----------|---------------|---------------|---------------|---------------|
| Veces totales que el tren frenó | 9 | 74 | 20 | 75 |
| Número de incidentes | 2 | 51 | 2 | 74 |
| Silbatos (Tren en zona amarilla) | 38 | 170 | 65 | 236 |
| Silbatos (Tren en zona roja) | 67 | 236 | 84 | 349 |
| Número total de silbatos de tren | 105 | 406 | 149 | 585 |

### Análisis de Resultados

Los resultados muestran que:

1. **Impacto de la frecuencia peatonal:** Un aumento en la frecuencia de llegada peatonal tiene un impacto mayor en el número de veces que los trenes tienen que detenerse debido a interacciones tren-peatón, comparado con un aumento en la frecuencia de llegada de trenes.

2. **Ubicación de posicionamiento:** Hubo menos paradas de tren, silbatos e incidentes cuando el tren se posicionó en el cruce peatonal comparado con cuando el tren se posicionó lejos del cruce peatonal en Ervick.

3. **Escalabilidad:** Cuando la frecuencia de llegada de trenes se mantuvo igual y la de peatones se incrementó, el número total de paradas de tren, incidentes y silbatos de tren aumentó.

## 8. Conclusiones

El problema de simular interacciones tren-peatón fue bien formulado de manera genérica que es transferible a otros estudios que involucran interacciones de tráfico experimentadas dentro del mismo modo de transporte o a través de diferentes modos.

### Patrones de Diseño Transferibles

1. **Conceptos de discretización del espacio**
2. **Configuraciones de comunicación/interacción maestro-esclavo**

### Hallazgos Técnicos

- Las formulaciones de diseño se utilizaron exitosamente como base para desarrollar un modelo de simulación para interacciones tren-peatón
- Un enfoque combinado discreto-continuo facilitó el modelado de comportamientos de trenes y peatones de una manera que sería extremadamente desafiante de realizar si se utilizara un enfoque de simulación de eventos discretos puro
- El proceso de depuración de modelos de simulación combinados es significativamente más complejo comparado con la depuración de modelos discretos puros

### Aplicación Práctica

Los experimentos de simulación se ejecutaron usando el modelo creado y sus resultados se encontraron satisfactorios. Esto demostró que la simulación puede utilizarse en un entorno práctico para generar resultados que pueden usarse para apoyar procesos de toma de decisiones.

Para el caso de estudio, los resultados fueron rastreados en métricas útiles que la gerencia de la compañía ferroviaria podría utilizar en conjunto con estatutos jurisdiccionales y otros criterios para tomar decisiones racionales respecto a la operación de sus trenes y la necesidad de un cruce peatonal.

Si no se proporciona un cruce formal, los resultados muestran que es mejor para los trenes posicionarse en el cruce peatonal.

---

*Este documento presenta una transcripción del artículo "A Combined Discrete-Continuous Simulation Model for Analyzing Train-Pedestrian Interactions" de los Proceedings of the 2016 Winter Simulation Conference.*