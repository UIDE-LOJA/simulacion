# Caso 1: Aplicación de Simulación de Eventos Discretos para Reducir Tiempos de Espera y Aglomeraciones de Pacientes

## Información del Artículo

**Título:** Applying Discrete Event Simulation to Reduce Patient Wait Times and Crowding: The Case of a Specialist Outpatient Clinic with Dual Practice System

**Fuente:** Healthcare, Enero 2022  
**DOI:** 10.3390/healthcare10020189  
**Citaciones:** 21  
**Lecturas:** 501  

## Autores Principales

- **Weng Hong Fun** - Institute for Health Systems Research
- **Ruzelan Khalid** - Northern University of Malaysia  
- **Sondi Sararaks** - Institute for Health Systems Research, National Institutes of Health
- **Kar Foong Tang** - 14 publicaciones, 156 citaciones

## Resumen

### Problema
Los largos tiempos de espera y las aglomeraciones son problemas importantes que afectan la prestación de servicios ambulatorios, pero no está claro cómo estos afectan a los pacientes en entornos de práctica dual.

### Objetivo
Evaluar los efectos del cambio en el horario de inicio de consultas y la llegada de pacientes sobre los tiempos de espera y las aglomeraciones en una clínica ambulatoria con sistema de práctica dual.

### Metodología
- **Técnica:** Modelo de Simulación de Eventos Discretos (DES)
- **Ubicación:** Clínica de Obstetricia y Ginecología (O&G) en un hospital público de Malasia
- **Datos:** Flujo de pacientes del mundo real, disponibilidad de recursos, y tiempos de registro y procesos clínicos
- **Fuentes de datos:** 
  - Discusiones con stakeholders
  - Estudio de tiempo-movimiento (TMS)
  - Base de datos del sistema de información hospitalario

### Hallazgos Principales

1. **Diferencias Significativas en Tiempos de Respuesta (TT):**
   - Los pacientes públicos tienen tiempos de espera significativamente más largos que los pacientes privados
   - Medianas de TT de registro y clínica fueron significativamente diferentes entre pacientes públicos y privados (p < 0.01)

2. **Resultados de Análisis de Escenarios:**
   - **Inicio temprano de consultas** que coincida con el tiempo de llegada de pacientes: reducción del TT general en 40% para pacientes públicos y 21% para pacientes privados
   - **Llegada escalonada:** puede reducir el número de pacientes esperando en la clínica por hora en 10-21% durante las horas pico

3. **Beneficios del Modelo Óptimo:**
   - Coincidencia del tiempo de inicio de consulta con llegada escalonada de pacientes
   - Reduce significativamente los tiempos de espera y aglomeraciones
   - Especialmente beneficioso para pacientes públicos
   - No requiere recursos adicionales
   - Ayuda a reducir la brecha de tiempo de espera entre pacientes públicos y privados

## Introducción

### Contexto del Sistema de Salud Malayo

Malasia tiene un sistema de salud híbrido que consiste en sistemas de prestación de atención médica públicos y privados.

**Sistema Público:**
- Ha proporcionado acceso casi universal a servicios de salud de calidad gratuitos o con tarifa nominal
- A pesar de bajos niveles de financiamiento gubernamental para la salud

**Sistema Privado:**
- Financiado principalmente por pagos directos de pacientes
- Pacientes que eligen buscar servicios de atención médica privada

### Práctica Dual en Hospitales Públicos

**Establecimiento:** 2007  
**Objetivo Principal:** Retener especialistas que sirven bajo el Ministerio de Salud (MOH) de Malasia

**Características:**
- Los especialistas senior pueden brindar servicios privados además de servicios públicos
- Reciben remuneración por servicio además de salarios fijos mensuales
- Los ingresos adicionales de servicios privados también se canalizan al gobierno

**Regulaciones:**
- Los especialistas están restringidos a brindar servicios privados después de completar la provisión de servicios públicos
- Esto asegura que los servicios privados no afecten la provisión de atención pública y el uso de recursos

**Desafíos Potenciales:**
- Existencia de diferentes colas de pacientes
- Compartir instalaciones y recursos de atención médica pública entre pacientes públicos y privados
- Puede afectar inadvertidamente el acceso y la eficiencia de los servicios de atención médica si los servicios no están bien regulados

## Materiales y Métodos

### Configuración del Estudio

**Ubicación:** Hospital terciario público de Malasia (2017)  
**Clínica Seleccionada:** Clínica ambulatoria especializada de Obstetricia y Ginecología (O&G)  
**Razón de Selección:** Sirvió al mayor número anual de pacientes privados en el hospital

**Servicios Proporcionados:**
- Atención prenatal
- Evaluación temprana del embarazo
- Atención antenatal y postnatal
- Ginecología general
- Anticoncepción
- Cuidados de infertilidad

### Características Operativas y Flujo de Pacientes

**Recursos Físicos:**
- 10 salas de consulta
- 2 estaciones de enfermeras
- 1 mostrador de registro
- 2 estaciones de medición de signos vitales
- 1 laboratorio
- 1 área de espera general

**Recursos Humanos:**
- Médicos
- Especialistas (solo servicios públicos o servicios públicos y privados)
- Enfermeras
- Asistentes de atención médica
- Personal administrativo

**Horarios de Operación:**
- Aproximadamente 7 médicos y 3 especialistas disponibles de 8:00 a.m. a 1:00 p.m.
- Número de médicos después de 1:00 p.m. depende del horario de la clínica y carga de pacientes
- Registro de pacientes privados típicamente comienza después de 11:30 a.m.
- Servicios privados proporcionados por 2 especialistas de lunes a jueves

**Carga de Pacientes (Octubre 2017):**
- Promedio de 86 pacientes públicos por día laboral
- Promedio de 7 pacientes privados por día laboral

### Flujo de Pacientes Públicos

1. **Llegada al Departamento Ambulatorio**
   - Obtener número de cola en mostrador general (QMS) desde 7:00 a.m.
   - Mostradores QMS y de ingresos compartidos entre clínicas especializadas

2. **Registro y Pago**
   - Registrarse y pagar servicios en mostradores de ingresos
   - Proceder a clínica O&G

3. **Proceso en Clínica O&G**
   - Registrarse en mostrador de clínica O&G
   - Obtener número de cola de clínica O&G
   - Medición de signos vitales (obligatorio antes de consulta)
   - Laboratorio (si es necesario)
   - Esperar consulta
   - Consulta médica
   - Obtener nuevas fechas de cita en estación de enfermeras antes de salir

### Flujo de Pacientes Privados

1. **Registro Especializado**
   - Registrarse en mostrador designado para pacientes privados después de 11:30 a.m.
   - Este mostrador sirve como registro, cita y mostrador de ingresos para pacientes privados

2. **Proceso en Clínica**
   - Proceder a clínica O&G
   - Procesos similares a pacientes públicos excepto consulta solo con especialistas
   - Regresar a mostrador designado para pago y cita después de consulta

### Estudio de Tiempo-Movimiento (TMS)

**Período:** Octubre 2017  
**Objetivo:** Recopilar datos sobre tiempo tomado para procesos de registro y clínica en cada ubicación

**División del Estudio:**

#### Observación 1
- **Duración:** 5 días laborables
- **Enfoque:** Registro de tiempo para procesos de registro de pacientes públicos
- **Ubicaciones:** Mostrador QMS, mostradores de ingresos, mostrador de clínica O&G
- **Método:** Muestreo aleatorio de pacientes en diferentes intervalos de tiempo

#### Observación 2
- **Duración:** 5 días laborables
- **Enfoque:** Procesos clínicos para pacientes públicos y privados
- **Ubicaciones:** 
  - Mostrador de clínica O&G
  - Estación de medición de signos vitales
  - Laboratorio
  - Salas de consulta
  - Estación de enfermeras
  - Mostrador de pacientes privados
- **Datos Recopilados:** Número de registro médico del paciente en mostrador de clínica O&G

### Tiempo Requerido para Revisión y Manejo de Casos

**Fuente:** Discusiones con gerentes hospitalarios, médicos y especialistas

**Información Obtenida:**
- Horarios de trabajo
- Estimaciones de tiempo para revisión de registro médico electrónico (EMR)
- Documentación
- Consulta para casos de seguimiento/nuevos
- Discusión de casos entre médicos y especialistas

**Dato Importante:** Aproximadamente 10% de los casos diarios vistos por médicos requirieron discusión/consulta con especialista

### Gestión de Datos

**Fuente de Datos:** Sistema de Información Hospitalaria Total (THIS) del hospital de estudio

**Datos Extraídos:**
- Número de registro médico del paciente
- Edad, género, disciplina
- Tipo de servicio y paciente (seguimiento o nuevo paciente)
- Fecha y hora de reserva de cita
- Tiempos de llegada
- Tiempo de registro electrónico en mostrador de ingresos

**Proceso de Vinculación:**
- Números de registro médico de THIS y datos TMS vinculados para:
  1. Excluir pacientes de clínicas no-O&G en mostradores QMS e ingresos
  2. Consolidar tiempos de llegada, tiempos de proceso y tiempo entre cada proceso

**Criterios de Exclusión:**
- Datos faltantes
- Inconsistencia de datos
- Desviación del flujo de proceso estándar
- Tiempos de consulta atípicos
- Anomalías de tiempo de registro
- Pacientes que solo tuvieron servicios de laboratorio

**Métricas Calculadas:**
- **Tiempo de Respuesta (TT) de Registro:** Desde llegada hasta registro en mostrador O&G
- **TT Clínico:** Desde registro en mostrador O&G hasta salida
- TT incluye tanto tiempos de proceso como tiempos de espera del paciente

## Simulación

### Método Aplicado
**Técnica:** Simulación de Eventos Discretos (DES)  
**Software:** FlexSim Healthcare (FlexSim Software Products, Inc., Orem, UT, USA, versión 5.3.10)

### Desarrollo del Modelo
- Creación de modelo réplica de mostradores QMS, pacientes privados e ingresos
- Simulación de características operativas y flujo de pacientes
- Reporte según pautas STRESS-DES (Strengthening the Reporting of Empirical Simulation Studies)

### Datos de Entrada
**Fuentes:**
- Tiempos de llegada de pacientes generales y O&G de THIS
- Tiempos de proceso de TMS
- Tiempo para revisión EMR y consulta de opinión experta

**Procesamiento:**
- Ajuste de mejores distribuciones de probabilidad para cada tipo de paciente
- Uso de software ExpertFit de FlexSim
- Reflejo de tiempos de proceso del mundo real

### Entidades del Modelo
**Pacientes (4,802 pacientes con datos completos):**
- Generales (no-O&G)
- Obstetricos públicos
- Ginecología pública
- Privados

**Atributos de Entidades:**
- Edad (ancianos, no ancianos)
- Tipo de cita (seguimiento/caso nuevo)

**Otras Entidades:**
- Proveedores de atención médica
- Personal administrativo

### Características del Modelo
**Patrones de Llegada:**
- Llegadas según patrones de llegada en bloque del mundo real
- Caracterizado por número aleatorio de llegadas de pacientes en cualquier momento
- Gran número de llegadas durante horas pico
- Distribución aleatoria de llegada de pacientes en modelo de caso base

**Flujo de Pacientes:**
- Simulación desde llegada al mostrador QMS hasta salida de clínica O&G
- Pacientes esperan/hacen cola cuando ocurren restricciones de recursos
- Salida del sistema al final de procesos clínicos

### Supuestos del Modelo Base

1. Todos los pacientes visitan cada estación una vez durante su visita a clínica O&G
2. Pacientes servidos basado en regla de primero en llegar, primero en ser atendido
3. Asignación a médicos se hace aleatoriamente
4. Médicos trabajan continuamente hasta que todos los pacientes son atendidos
5. Enfermeras que asisten a médicos/especialistas para procedimientos no son factor limitante
6. Se considera una hora de almuerzo para especialistas antes de atender pacientes privados en la tarde

**Consideraciones Adicionales:**
- Tiempo tomado debido a tiempo de consulta atípico
- Salas de consulta inactivas (más de 15 min) durante horas activas de clínica
- 30 replicaciones independientes
- Duración de cada replicación: 5 días laborables

### Validación del Modelo

**Validación de Apariencia:**
- Discusiones de participación de stakeholders con gerentes hospitalarios
- Asegurar que el modelo fuera una representación cercana del sistema de clínica O&G

**Validación de Modelo:**
- Comparación de salidas del modelo de caso base sobre TT clínico y de registro contra hallazgos TMS
- Simulación con distribución aleatoria o uniforme de llegada de pacientes produjo salida similar en TT general
- Diferencia mínima de alrededor de 3 minutos

### Experimento de Simulación con Escenarios

**Desarrollo de Escenarios:**
Basado en consenso entre miembros del equipo de investigación para entender efectos de cambiar tiempo de inicio de consulta y/o llegada de pacientes.

**Configuraciones Evaluadas:**
- Tiempo de inicio de consulta
- Patrones de llegada de pacientes (escalonada vs aleatoria)
- Número máximo de pacientes por slot de 30 minutos

**Definición de Llegada Escalonada:**
- Número de pacientes distribuido uniformemente
- Patrón de llegada para cada slot de 30 minutos
- Cada simulación de escenario: 30 replicaciones

### Tabla de Escenarios

| Escenario | Patrón de Llegada | Inicio Registro QMS | Inicio Consulta | Máx. Pacientes Públicos/30min | Última Franja Pacientes Públicos | Inicio Pacientes Privados | Máx. Pacientes Privados/30min |
|-----------|-------------------|---------------------|-----------------|--------------------------------|-----------------------------------|----------------------------|-------------------------------|
| Caso Base | Aleatorio | TMS (7:00 a.m.) | TMS (~9:00 a.m.) | TMS (22) | ~12:00 p.m. | TMS (11:30 a.m.) | TMS (9) |
| Escenario 1 | Uniforme | TMS (7:00 a.m.) | TMS (~9:00 a.m.) | TMS (22) | ~12:00 p.m. | TMS (11:30 a.m.) | TMS (9) |
| Escenario 2 | Uniforme | TMS (7:00 a.m.) | 8:15 a.m. | TMS (22) | ~12:00 p.m. | TMS (11:30 a.m.) | TMS (9) |
| Escenario 3 | Uniforme | 7:30 a.m. | 8:15 a.m. | 10 | 12:00 p.m. | 1:30 p.m. | 2 |
| Escenario 4 | Uniforme | 7:30 a.m. | TMS (~9:00 a.m.) | 10 | 12:00 p.m. | 1:30 p.m. | 2 |
| Escenario 5 | Uniforme | 8:00 a.m. | TMS (~9:00 a.m.) | 7 | 3:00 p.m. | TMS (11:30 a.m.) | TMS (9) |
| Escenario 6 | Uniforme | 8:00 a.m. | TMS (~9:00 a.m.) | 10 | 12:30 p.m. | 1:30 p.m. | 2 |
| Escenario 7 | Uniforme | 8:00 a.m. | TMS (~9:00 a.m.) | 10 | 12:30 p.m. | 11:00 a.m. | 2 |

**Notas:**
- Número de pacientes por slot de 30 minutos: 7 o 10, basado en disponibilidad de recursos
- Máximo de 10 salas de consulta disponibles
- Número óptimo de salas reducido a 7 en un escenario para considerar salas inactivas
- Sin cambios en recursos ni número total de pacientes en simulaciones

## Resultados

### Análisis Estadístico
**Métodos:**
- Prueba H de Kruskal-Wallis para comparar tiempos de proceso TMS y TT entre tipos de pacientes
- Prueba U de Mann-Whitney para comparar tiempos de consulta entre pacientes Obs públicos y privados
- Software: IBM SPSS Statistics (versión 26.0)

### Tiempos de Proceso TMS y Tiempos de Respuesta

**Hallazgos Significativos:**
- TT de registro y clínica mediano para pacientes privados significativamente más corto (p < 0.01) comparado con pacientes Obs y Gyn públicos
- Diferencias debido a procesos de registro diferentes y tiempos de llegada
- Tiempo de consulta significativamente más corto para pacientes públicos comparado con pacientes privados

### Tabla de Resultados TMS

#### Observación 1
| Tipo de Paciente | Público (n=338) |  | Privado (n=32) |
|------------------|-----------------|--|----------------|
|  | Obs (n=191) | Gyn (n=147) |  |
| **TT Registro** | 00:45 (00:31–00:55) | 00:29 (00:22–00:38) | 00:14 (00:12–00:16) |
| **Registro y pago** | - | - | 00:04 (00:02–00:07) |

#### Observación 2
| Proceso | Público (n=357) |  | Privado (n=32) |
|---------|-----------------|--|----------------|
|  | Obs (n=180) | Gyn (n=177) |  |
| **TT Clínico** | 01:39 (01:15–02:08) | 01:33 (01:11–01:54) | 01:06 (00:43–01:33) |
| **Medición signos vitales** | 00:02 (00:01–00:03) | 00:02 (00:01–00:04) | 00:01 (00:01–00:01) |
| **Laboratorio** | 00:04 (00:03–00:06) | - | 00:03 (00:02–00:04) |
| **Consulta** | 00:13 (00:10–00:20) | 00:10 (00:07–00:17) | 00:17 (00:13–00:21) |
| **Programación cita** | 00:02 (00:01–00:04) | 00:02 (00:01–00:04) | 00:02 (00:01–00:05) |

*Formato: Mediana (Q1-Q3) Tiempo (Horas: Minutos)*

### Validación del Modelo

**Confirmación:**
- Comparación entre salidas del caso base y hallazgos TMS mostró valores cercanos a los medidos en el sistema real
- Validación de apariencia con gerentes hospitalarios confirmó representación cercana del sistema de clínica real

### Efectos de Escenarios en TT General y Número de Pacientes Esperando

#### Resultados por Escenario

**Escenario 1 (Patrón de llegada uniforme):**
- Reducción en TT general observada con tiempos de consulta típicos

**Escenario 2 (Inicio temprano de consulta):**
- Reducción de TT general hasta 36% para pacientes públicos
- Reducción de 15% para pacientes privados

**Escenario 3 (Óptimo - Inicio ajustado + llegada escalonada):**
- **Mayor reducción observada:**
  - 40% para pacientes públicos
  - 21% para pacientes privados
- 10 pacientes públicos y 2 pacientes privados por slot de tiempo

**Escenario 4 (Llegada temprana sin inicio congruente):**
- Menor reducción de TT general para pacientes públicos
- Reducción para pacientes privados similar al Escenario 3

**Escenario 5 (Llegadas reducidas + sesiones extendidas):**
- 45% de reducción de TT para pacientes públicos
- Ligero incremento en TT general para pacientes privados
- 7 pacientes públicos por slot, consultas extendidas hasta la tarde

**Escenarios 6 y 7:**
- Reducciones similares de TT general (hasta 35%) para pacientes públicos
- Última franja de pacientes públicos: 12:30 p.m.
- Reducción mínima en TT para pacientes privados (Escenario 6)
- Incremento en TT para pacientes privados con llegada escalonada temprana (Escenario 7)

### Análisis de Aglomeraciones

**Tendencias Observadas:**
- Reducción incremental en aglomeración de pacientes de 9:00 a.m. a 1:00 p.m. en Escenarios 1, 2 y 3
- Escenario 4: menor porcentaje de reducción de aglomeración durante horas pico (9:00 a.m. a 12:00 p.m.)
- Escenario 5: mayor porcentaje de reducción de aglomeración pero 7-16% mayor de 2:00 p.m. a 4:00 p.m.

**Mejores Resultados de Reducción de Aglomeraciones:**
- Escenarios que combinan inicio oportuno de consulta con llegada escalonada
- Reducción de 10-21% en número de pacientes esperando por hora durante horas pico de clínica

## Discusión

### Hallazgos Principales

**Diferencias Significativas en Tiempos de Respuesta:**
- Pacientes privados tienen TT general considerablemente más corto
- Dependiendo de configuraciones de simulación, cada escenario resulta en diferentes niveles de reducción
- Inicio oportuno de consulta congruente con llegada escalonada resulta en reducción más óptima

### Interpretación de Resultados

**Tiempos de Proceso vs. Tiempos de Espera:**
- Tiempo de proceso comparativamente corto en cada estación
- TT mediano alto durante TMS para pacientes públicos indica tiempo gastado principalmente en:
  - Hacer cola y esperar registro
  - Esperar después de registro entre procesos clínicos hasta inicio de consulta

**Factores Contribuyentes:**
- Llegada masiva de pacientes públicos bajo programación de citas en bloque
- Permitió a médicos completar mayoría de provisión de servicios públicos antes de 1:00 p.m.
- Especialistas inician provisión de servicios privados en la tarde
- Llevó a TT significativamente más largo para pacientes públicos y aglomeración durante horas pico

### Estrategias Efectivas

**Inicio Temprano de Consulta:**
- Reafirma que parte del problema de tiempo de espera se atribuye a esperar consulta después de registro
- Alineado con literatura: retrasos en inicio de clínica impactan negativamente tiempos de espera

**Llegada Escalonada:**
- Distribuir carga de pacientes a través de llegada escalonada puede ser solución alternativa
- Especialmente cuando puede no ser factible aumentar recursos en entorno con restricciones de recursos

**Combinación Óptima (Escenario 3):**
- Inicio oportuno de consulta que coincida con llegada de pacientes
- Implementación de llegada escalonada
- Reduce TT general para todos los tipos de pacientes
- Contribuye a reducción de aglomeración durante horas pico de clínica
- Crea situación ganar-ganar

### Limitaciones del Estudio

**Exclusiones del Modelo:**
1. Ausencias de pacientes o falta de puntualidad
2. Aglomeración causada por miembros de familia de pacientes
3. Tiempo gastado esperando antes del inicio de registro en mostrador QMS
4. Tiempo inactivo de proveedores de atención médica

**Limitaciones de Datos:**
- Inclusión de comportamientos de pacientes y proveedores proporcionaría comprensión más completa
- Simulación termina con salida de pacientes de clínica O&G/mostrador de pacientes privados
- Procesos más allá de este punto (como farmacia) no simulados

**Limitaciones del Modelo:**
- Exclusión de pacientes con desviaciones de flujo de proceso puede resultar en sistema más eficiente comparado con situación del mundo real
- Salidas de modelo DES dependen de datos de entrada
- Impacto potencial en tiempos de espera y aglomeración puede sobreestimarse

### Implicaciones para Investigación, Política y Práctica

**Para Entornos Clínicos:**
- Estrategias de configuración pueden considerarse en clínicas ambulatorias con grupos distintos de pacientes
- Especialmente en sistemas de práctica dual para mejorar tiempos de espera y reducir aglomeración
- Simulación puede ayudar a determinar áreas de mejora en flujo de procesos o programación de pacientes

**Para el Sistema de Práctica Dual en Malasia:**
- Aunque se piensa que mejora retención de especialistas
- Puede llevar a efectos no intencionados o impactos negativos
- Necesidad de monitoreo y evaluación continua por gerentes hospitalarios y MOH
- Asegurar que se obtengan beneficios mientras se mantiene provisión óptima de servicios públicos

**Para Formuladores de Políticas:**
- Considerar beneficios, riesgos e implicaciones del sistema hacia resultados en:
  - Acceso a atención médica (tiempos de espera)
  - Utilización
  - Uso de recursos
- Asegurar implementación de estrategias efectivas para mejorar provisión oportuna de servicios ambulatorios

## Conclusiones

### Hallazgos Clave

1. **Disparidad en Tiempos de Espera:**
   - Pacientes públicos tuvieron tiempos de espera más largos que pacientes privados
   - Basado en tiempos de respuesta de registro y clínica en entorno ambulatorio de práctica dual

2. **Estrategia Óptima:**
   - Cambiar tiempo de inicio de consulta para coincidir con tiempo de llegada de pacientes
   - Implementar llegada escalonada de pacientes
   - Puede mejorar potencialmente tiempos de espera de ambos tipos de pacientes

3. **Beneficios Adicionales:**
   - Reducir aglomeración, especialmente durante horas pico de clínica
   - Sin incurrir en necesidad adicional de recursos
   - Mayor reducción en tiempos de espera para pacientes públicos comparado con pacientes privados
   - Ayuda a reducir brecha de tiempo de espera entre pacientes públicos y privados

4. **Herramienta de Gestión:**
   - Gerentes de atención médica y formuladores de políticas deberían considerar usar enfoques de simulación
   - Como herramienta para monitoreo continuo y mejora de eficiencia operativa de atención médica
   - Para satisfacer creciente demanda y costos de atención médica

### Recomendaciones

**Implementación Práctica:**
- Adoptar configuraciones en tiempos de inicio de consulta y llegada de pacientes
- Especialmente en entornos de clínicas ambulatorias con grupos distintos de pacientes que comparten los mismos recursos

**Investigación Futura:**
- Enfocar en factibilidad de implementación
- Aceptabilidad de pacientes/proveedores de atención médica
- Cambios en disponibilidad de recursos
- Estudios cualitativos para obtener aportes narrativos de proveedores de atención médica

**Monitoreo y Evaluación:**
- Evaluación continua del sistema de práctica dual
- Asegurar que se obtengan beneficios mientras se mantiene acceso equitativo
- Usar DES como herramienta para formulación de políticas basadas en evidencia

---

*Este estudio demuestra que la simulación de eventos discretos puede ser utilizada efectivamente para identificar estrategias para reducir tiempos de espera y aglomeración en un entorno ambulatorio con sistema de práctica dual, y puede aprovecharse para asistir a formuladores de políticas de atención médica en la formulación de políticas basadas en evidencia para mejora de servicios ambulatorios.*