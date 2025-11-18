# Guía Paso a Paso: Monte Carlo en Excel - PE 1.4

## Semana 4 - FT-06-SIM Simulación

---

## Preparación

### Antes de comenzar

1. **Abre Excel** y crea un nuevo libro
2. **Guárdalo** con el nombre: `PE-1.4_ApellidoNombre_MonteCarlo.xlsx`
3. **Duración:** 90 minutos
4. **Entregable:** PDF con código/fórmulas, resultados, gráficos y análisis

---

## ACTIVIDAD 1: Estimación de π (Pi)

### Objetivo
Estimar el valor de π usando 10,000 puntos aleatorios en el cuadrado [0,1]×[0,1] y contar cuántos caen dentro del círculo x²+y²≤1.

### Paso 1: Preparar la hoja de cálculo

1. **Renombra la primera hoja** como "Estimación de Pi"
2. **Crea los encabezados** en la fila 1:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| **X** | **Y** | **Distancia²** | **¿Dentro?** | | **X_dentro** | **Y_dentro** | **X_fuera** | **Y_fuera** | **Puntos dentro** | **π estimado** |

---

### Paso 2: Escribir las fórmulas en la fila 2

#### Celda A2 (Coordenada X):
```
=ALEATORIO()
```
> Genera un número aleatorio entre 0 y 1

#### Celda B2 (Coordenada Y):
```
=ALEATORIO()
```
> Genera un número aleatorio entre 0 y 1

#### Celda C2 (Distancia² al origen):
```
=A2^2+B2^2
```
> Calcula x² + y² (distancia al cuadrado desde el origen)

#### Celda D2 (¿Está dentro del círculo?):
```
=SI(C2<=1,1,0)
```
> Devuelve 1 si el punto está dentro del círculo (x²+y²≤1), 0 si está fuera

#### Celda F2 (X_dentro - para gráfico):
```
=SI(D2=1,A2,"")
```
> Si está dentro del círculo, muestra X; si no, vacío

#### Celda G2 (Y_dentro - para gráfico):
```
=SI(D2=1,B2,"")
```
> Si está dentro del círculo, muestra Y; si no, vacío

#### Celda H2 (X_fuera - para gráfico):
```
=SI(D2=0,A2,"")
```
> Si está fuera del círculo, muestra X; si no, vacío

#### Celda I2 (Y_fuera - para gráfico):
```
=SI(D2=0,B2,"")
```
> Si está fuera del círculo, muestra Y; si no, vacío

#### Celda J2 (Total de puntos dentro):
```
=SUMA(D:D)
```
> Cuenta cuántos puntos cayeron dentro del círculo

#### Celda K2 (Estimación de π):
```
=4*J2/CONTARA(A:A)
```
> Calcula π = 4 × (puntos dentro / total de puntos)

---

### Paso 3: Copiar las fórmulas para 10,000 puntos

1. **Selecciona el rango A2:I2** (las 9 celdas con fórmulas, desde X hasta Y_fuera)
2. **Copia las fórmulas hacia abajo hasta la fila 10001** (10,000 puntos)

**Métodos para copiar:**
- **Método 1**: Selecciona A2:I2, copia (Ctrl+C), selecciona A2:I10001, pega (Ctrl+V)
- **Método 2**: Selecciona A2:I2, arrastra el cuadrito verde de la esquina inferior derecha hacia abajo hasta la fila 10001
- **Método 3**: Selecciona A2:I2, Ctrl+C, luego en el cuadro de nombres escribe A2:I10001, Enter, Ctrl+V

**IMPORTANTE**: Las celdas J2 y K2 (resultados) NO las copies hacia abajo, solo déjalas en la fila 2.

---

### Paso 4: Calcular el error

#### Celda J3 (Etiqueta):
```
Valor real de π
```

#### Celda K3 (Valor real):
```
=PI()
```

#### Celda J4 (Etiqueta):
```
Error absoluto
```

#### Celda K4 (Error absoluto):
```
=ABS(K2-K3)
```

#### Celda J5 (Etiqueta):
```
Error relativo %
```

#### Celda K5 (Error relativo):
```
=(K4/K3)*100
```

---

### Paso 5: Verificar resultados

**Mira la celda K2**: Deberías ver un valor cercano a **3.14159**

| Estadística | Ubicación | Valor esperado |
|-------------|-----------|----------------|
| Puntos dentro | J2 | ~7,850 |
| π estimado | K2 | ~3.14 |
| Error absoluto | K4 | ~0.001 - 0.01 |
| Error relativo % | K5 | ~0.03% - 0.3% |

---

## ACTIVIDAD 2: Área bajo la curva f(x) = x²

### Objetivo
Calcular el área bajo la curva y = x² en el intervalo [0,1] usando Monte Carlo con 10,000 puntos. Comparar con el valor exacto 1/3.

### Paso 1: Preparar nueva hoja

1. **Crea una nueva hoja** llamada "Área bajo curva"
2. **Crea los encabezados** en la fila 1:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| **X** | **Y** | **f(x)=x²** | **¿Bajo curva?** | | **X_bajo** | **Y_bajo** | **X_sobre** | **Y_sobre** | **Área estimada** |

---

### Paso 2: Escribir las fórmulas

#### Celda A2 (Valor X aleatorio):
```
=ALEATORIO()
```
> Genera un número aleatorio entre 0 y 1

#### Celda B2 (Valor Y aleatorio):
```
=ALEATORIO()
```
> Genera un número aleatorio entre 0 y 1

#### Celda C2 (Evaluar función en x):
```
=A2^2
```
> Calcula f(x) = x² para verificar si el punto está bajo la curva

#### Celda D2 (¿Está bajo la curva?):
```
=SI(B2<=C2,1,0)
```
> Devuelve 1 si el punto (x,y) está bajo la curva (y ≤ x²), 0 si está sobre ella

#### Celda F2 (X_bajo - para gráfico):
```
=SI(D2=1,A2,"")
```
> Si está bajo la curva, muestra X; si no, vacío

#### Celda G2 (Y_bajo - para gráfico):
```
=SI(D2=1,B2,"")
```
> Si está bajo la curva, muestra Y; si no, vacío

#### Celda H2 (X_sobre - para gráfico):
```
=SI(D2=0,A2,"")
```
> Si está sobre la curva, muestra X; si no, vacío

#### Celda I2 (Y_sobre - para gráfico):
```
=SI(D2=0,B2,"")
```
> Si está sobre la curva, muestra Y; si no, vacío

#### Celda J2 (Área estimada):
```
=SUMA(D:D)/CONTARA(A:A)
```
> Área = (puntos bajo la curva) / (total de puntos) × (área del rectángulo [0,1]×[0,1])
> Como el rectángulo tiene área 1, simplemente es la proporción de puntos

---

### Paso 3: Copiar las fórmulas para 10,000 puntos

1. **Selecciona A2:I2** (todas las fórmulas desde X hasta Y_sobre)
2. **Copia hacia abajo hasta la fila 10001** (10,000 puntos)

**IMPORTANTE**: La celda J2 (Área estimada) NO la copies hacia abajo, solo déjala en la fila 2.

---

### Paso 4: Calcular el error

#### Celda E3 (Etiqueta):
```
Valor exacto (1/3)
```

#### Celda J3 (Valor exacto):
```
=1/3
```

#### Celda E4 (Etiqueta):
```
Error absoluto
```

#### Celda J4 (Error absoluto):
```
=ABS(J2-J3)
```

#### Celda E5 (Etiqueta):
```
Error relativo %
```

#### Celda J5 (Error relativo):
```
=(J4/J3)*100
```

---

### Paso 5: Verificar resultados

**Mira la celda J2**: Deberías ver un valor cercano a **0.3333**

| Estadística | Ubicación | Valor esperado |
|-------------|-----------|----------------|
| Área estimada | J2 | ~0.330 - 0.337 |
| Valor exacto | J3 | 0.3333 |
| Error absoluto | J4 | ~0.001 - 0.005 |
| Error relativo % | J5 | ~0.3% - 1.5% |

---

## ACTIVIDAD 3: Análisis de convergencia

### Objetivo
Analizar cómo mejora la precisión al aumentar n según la ley 1/√n.

### Paso 1: Crear tabla de convergencia para π

1. **Crea una nueva hoja** llamada "Convergencia Pi"
2. **Crea la tabla**:

| A | B | C | D | E |
|---|---|---|---|---|
| **n** | **π estimado** | **Error absoluto** | **Error relativo %** | **√n** |
| 100 | | | | =RAIZ(A2) |
| 1000 | | | | =RAIZ(A3) |
| 10000 | | | | =RAIZ(A4) |
| 100000 | | | | =RAIZ(A5) |

---

### Paso 2: Obtener datos para cada valor de n

#### Para n = 100:

1. **Ve a la hoja "Estimación de Pi"**
2. **Selecciona las filas 2 a 101** (columnas A a D)
3. **Copia y pega** en un área temporal o modifica el rango
4. **Anota** en la tabla de convergencia:
   - Celda B2: El valor de π estimado (G2)
   - Celda C2: Error absoluto (G4)
   - Celda D2: Error relativo % (G5)

#### Para n = 1,000:

1. Extiende el rango hasta la fila 1001
2. Anota los valores en la fila 3 de la tabla

#### Para n = 10,000:

1. Extiende hasta la fila 10001 (ya lo tienes de la actividad 1)
2. Anota los valores en la fila 4 de la tabla

#### Para n = 100,000:

1. **IMPORTANTE**: Excel puede volverse lento. Considera lo siguiente:
   - Copia las fórmulas hasta la fila 100001
   - Espera a que Excel calcule
   - Anota los valores en la fila 5 de la tabla
2. Si Excel se pone muy lento, puedes trabajar con n hasta 10,000 solamente

---

### Paso 3: Crear tabla de convergencia para Área

1. **Crea otra hoja** llamada "Convergencia Área"
2. **Repite el proceso** con la misma estructura para el área bajo la curva

---

### Paso 4: Crear gráfico de convergencia

#### Gráfico 1: Error vs n (Escala logarítmica)

1. **Selecciona** las columnas A (n) y C (Error absoluto) de "Convergencia Pi"
2. **Insertar → Gráfico de dispersión con líneas**
3. **Modifica el eje X a escala logarítmica**:
   - Clic derecho en eje X → Formato de eje → Escala logarítmica
4. **Título**: "Convergencia de π: Error vs n"

#### Gráfico 2: Error vs √n

1. **Selecciona** las columnas E (√n) y C (Error absoluto)
2. **Insertar → Gráfico de dispersión con líneas**
3. **Título**: "Convergencia de π: Error vs √n"
4. **Observa**: Debería mostrar una relación aproximadamente lineal

---

## ACTIVIDAD 4: Visualización

### Objetivo
Crear gráficos de dispersión claros mostrando puntos dentro/fuera del círculo y bajo/sobre la curva con colores diferentes.

---

### Visualización 1: Estimación de π

**¡Perfecto!** Ya tienes las columnas auxiliares creadas desde el Paso 2 (columnas F, G, H, I). Ahora solo necesitas crear el gráfico.

---

#### PASO A: Crear el gráfico de dispersión con dos series

1. **Selecciona SOLO las columnas de puntos DENTRO** (F1:G1001):
   - Haz clic en la celda F1
   - Mantén presionado Shift
   - Haz clic en la celda G1001
   - Deberías ver seleccionadas 2 columnas con 1,001 filas

2. **Insertar el gráfico**:
   - Ve a la pestaña **Insertar**
   - En el grupo **Gráficos**, haz clic en **Insertar gráfico de dispersión**
   - Selecciona el primer tipo: **Dispersión** (solo puntos, sin líneas)

3. **Ya tienes el gráfico con la primera serie (puntos dentro)**. Ahora vamos a agregar la segunda serie (puntos fuera):
    - Haz **clic derecho** sobre el área del gráfico
    - Selecciona **Seleccionar datos...**
    - Se abre una ventana "Seleccionar origen de datos"

4. **Agregar la segunda serie (puntos FUERA)**:
    - En la ventana "Seleccionar origen de datos", haz clic en el botón **Agregar** (lado izquierdo)
    - Se abre una ventana "Modificar serie"
    - **Nombre de la serie**: Escribe "Fuera del círculo"
    - **Valores de X de la serie**: Haz clic en el ícono de selección, selecciona H2:H1001, presiona Enter
    - **Valores de Y de la serie**: Haz clic en el ícono de selección, selecciona I2:I1001, presiona Enter
    - Haz clic en **Aceptar**
    - Haz clic en **Aceptar** nuevamente

5. **Ahora deberías ver dos series de puntos en el gráfico** (una encima de la otra, pero aún no tienen colores diferentes)

---

#### PASO B: Dar formato y colores a las series

6. **Cambiar color de la Serie 1 (Puntos DENTRO) a AZUL**:
    - Haz **clic en cualquier punto de la primera serie** en el gráfico
    - Clic derecho → **Dar formato a serie de datos...**
    - En el panel derecho, ve a **Marcador** (ícono de punto)
    - Expande **Marcador** → Selecciona **Integrado**
    - **Tipo**: Círculo
    - **Tamaño**: 3 o 4
    - Expande **Relleno** → **Relleno sólido**
    - **Color**: Azul
    - Expande **Borde** → **Sin línea**
    - Cierra el panel

7. **Cambiar color de la Serie 2 (Puntos FUERA) a ROJO**:
    - Haz **clic en cualquier punto de la segunda serie** en el gráfico (asegúrate de que dice "Serie 2" o "Fuera del círculo")
    - Clic derecho → **Dar formato a serie de datos...**
    - En el panel derecho, ve a **Marcador**
    - Expande **Marcador** → Selecciona **Integrado**
    - **Tipo**: Círculo
    - **Tamaño**: 3 o 4
    - Expande **Relleno** → **Relleno sólido**
    - **Color**: Rojo
    - Expande **Borde** → **Sin línea**
    - Cierra el panel

8. **Agregar título al gráfico**:
    - Haz clic en el título del gráfico
    - Escribe: **"Estimación de π: Puntos dentro (azul) y fuera (rojo) del círculo"**

9. **Opcional - Mejorar la apariencia**:
    - Haz clic en el gráfico
    - Ve a **Diseño de gráfico** (pestaña que aparece)
    - Puedes elegir un estilo prediseñado que te guste
    - Para eliminar líneas de cuadrícula: Clic en las líneas → Suprimir

**¡Listo! Ya tienes tu primer gráfico con puntos azules (dentro) y rojos (fuera).**

---

### Visualización 2: Área bajo curva f(x)=x²

**¡Perfecto!** Ya tienes las columnas auxiliares creadas desde el Paso 2 (columnas F, G, H, I). Ahora solo necesitas crear el gráfico.

---

#### PASO A: Crear el gráfico de dispersión con dos series

1. **Ve a la hoja "Área bajo curva"**

2. **Selecciona las columnas F1:G1001** (puntos BAJO la curva):
   - Haz clic en F1
   - Mantén Shift presionado
   - Haz clic en G1001

3. **Insertar gráfico de dispersión**:
   - Pestaña **Insertar** → **Dispersión** (solo puntos, sin líneas)

4. **Agregar la segunda serie** (puntos SOBRE la curva):
    - Clic derecho en el gráfico → **Seleccionar datos...**
    - Clic en **Agregar**
    - **Nombre de la serie**: "Sobre la curva"
    - **Valores X**: Haz clic en el ícono, selecciona H2:H1001, Enter
    - **Valores Y**: Haz clic en el ícono, selecciona I2:I1001, Enter
    - **Aceptar** → **Aceptar**

---

#### PASO B: Dar formato y colores

5. **Serie 1 (puntos BAJO la curva) → Color VERDE**:
    - Clic en cualquier punto de la Serie 1
    - Clic derecho → **Dar formato a serie de datos**
    - **Marcador** → **Integrado** → Círculo, tamaño 3-4
    - **Relleno** → **Relleno sólido** → **Verde**
    - **Borde** → **Sin línea**

6. **Serie 2 (puntos SOBRE la curva) → Color NARANJA**:
    - Clic en cualquier punto de la Serie 2
    - Clic derecho → **Dar formato a serie de datos**
    - **Marcador** → **Integrado** → Círculo, tamaño 3-4
    - **Relleno** → **Relleno sólido** → **Naranja**
    - **Borde** → **Sin línea**

7. **Título del gráfico**:
    - Clic en el título
    - Escribe: **"Área bajo f(x)=x²: Puntos bajo (verde) y sobre (naranja) la curva"**

---

#### PASO C (OPCIONAL): Agregar la curva f(x)=x²

8. **Crear datos para la curva** en columnas vacías (K y L):
    - En K1, escribe: "X_curva"
    - En L1, escribe: "Y_curva"
    - En K2, escribe: 0
    - En K3, escribe: =K2+0.01
    - Copia K3 hacia abajo hasta llegar a 1 (aproximadamente fila 102)
    - En L2, escribe: =K2^2
    - Copia L2 hacia abajo hasta donde llegaste en la columna K

9. **Agregar la curva al gráfico**:
    - Clic derecho en el gráfico → **Seleccionar datos**
    - **Agregar**
    - **Nombre**: "Curva f(x)=x²"
    - **Valores X**: Selecciona K2:K102 (o hasta donde llegaste)
    - **Valores Y**: Selecciona L2:L102
    - **Aceptar** → **Aceptar**

10. **Cambiar la Serie 3 a una LÍNEA NEGRA**:
    - Clic en la Serie 3 (la curva)
    - Clic derecho → **Dar formato a serie de datos**
    - **Marcador** → **Ninguno**
    - **Línea** → **Línea sólida** → **Color negro** → **Ancho: 2 pt**

**¡Perfecto! Ahora tienes un gráfico hermoso que muestra los puntos bajo/sobre la curva y la función f(x)=x².**

---

### Resumen visual de lo que deberías tener:

**Gráfico 1 - Estimación de π**:
- Puntos azules concentrados en una forma de cuarto de círculo
- Puntos rojos en las esquinas (fuera del círculo)
- Forma general: cuarto de círculo en el cuadrante [0,1]×[0,1]

**Gráfico 2 - Área bajo curva**:
- Puntos verdes concentrados bajo la parábola
- Puntos naranjas sobre la parábola
- Línea negra mostrando la curva y=x²
- Forma general: la curva divide el cuadrado en dos zonas de colores

---

## ACTIVIDAD 5: Documentación y Análisis

### Paso 1: Preparar capturas de pantalla

Captura las siguientes pantallas para incluir en tu PDF:

1. **Hoja "Estimación de Pi"**:
   - Muestra las fórmulas visibles (Ctrl+` para mostrar fórmulas)
   - Captura las celdas con resultados (F2:G5)

2. **Hoja "Área bajo curva"**:
   - Muestra las fórmulas visibles
   - Captura las celdas con resultados (E2:F5)

3. **Tablas de convergencia**:
   - Captura completa de ambas tablas

4. **Gráficos**:
   - Gráfico de estimación de π (dispersión)
   - Gráfico de área bajo curva (dispersión)
   - Gráfico de convergencia Error vs n
   - Gráfico de convergencia Error vs √n

---

### Paso 2: Escribir el análisis (máximo 200 palabras)

**Incluye los siguientes puntos**:

1. **Resultados obtenidos**:
   - Valor de π estimado con n=10,000
   - Valor de área estimada con n=10,000
   - Errores relativos

2. **Análisis de convergencia**:
   - ¿Cómo cambió el error al aumentar n?
   - ¿Se observa la relación Error ∝ 1/√n?
   - ¿Cuántos puntos fueron necesarios para lograr error < 1%?

3. **Observaciones sobre el método Monte Carlo**:
   - Ventajas y limitaciones
   - Precisión vs costo computacional
   - Aplicabilidad práctica

**Ejemplo de estructura**:

```
ANÁLISIS DE RESULTADOS

Con n=10,000 puntos, se obtuvo π≈3.1398 (error relativo: 0.06%) y
área≈0.3345 (error relativo: 0.36%). Los resultados demuestran que...

Al analizar la convergencia con n=[100, 1000, 10000, 100000], se observó
que el error absoluto disminuyó de... a..., confirmando la relación
teórica Error ∝ 1/√n. El gráfico de Error vs √n mostró una tendencia...

El método Monte Carlo demostró ser efectivo para... Se requirieron
aproximadamente ... puntos para alcanzar un error menor al 1%. Las
principales ventajas observadas fueron... mientras que las limitaciones
incluyeron...

[Total: 180 palabras]
```

---

### Paso 3: Crear el PDF final

1. **Crea un documento Word o similar** con:
   - **Portada**: PE-1.4, tu nombre, fecha
   - **Sección 1: Estimación de π**
     - Capturas de fórmulas
     - Capturas de resultados
     - Gráfico de dispersión
   - **Sección 2: Área bajo curva**
     - Capturas de fórmulas
     - Capturas de resultados
     - Gráfico de dispersión
   - **Sección 3: Análisis de convergencia**
     - Tablas de convergencia
     - Gráficos de Error vs n y Error vs √n
   - **Sección 4: Análisis** (máximo 200 palabras)

2. **Guarda como PDF**: `PE-1.4_ApellidoNombre_MonteCarlo.pdf`

---

## Fórmulas clave de Excel - Resumen

| Fórmula | Uso en este laboratorio |
|---------|-------------------------|
| `=ALEATORIO()` | Genera x, y entre 0 y 1 |
| `=SI(condición,si_verdadero,si_falso)` | Verificar si punto está dentro/bajo |
| `=SUMA(rango)` | Contar puntos dentro/bajo la curva |
| `=CONTARA(rango)` | Contar total de puntos |
| `=PI()` | Valor real de π |
| `=ABS(valor)` | Error absoluto |
| `=RAIZ(valor)` | Calcular √n para análisis |

---

## Teoría rápida

### ¿Por qué funciona la estimación de π?

Cuando generamos puntos en [0,1]×[0,1]:
- **Área del cuadrado [0,1]×[0,1]**: 1 × 1 = 1
- **Área del cuarto de círculo en [0,1]×[0,1]**: π × r² / 4 = π × 1² / 4 = π/4
- **Proporción**: π/4 = (puntos dentro) / (puntos totales)
- **Por lo tanto**: π = 4 × (puntos dentro) / (puntos totales)

### ¿Por qué funciona el área bajo la curva?

Para estimar ∫₀¹ f(x)dx:
- Generamos puntos (x,y) aleatorios en el rectángulo [0,1]×[0,1]
- Contamos cuántos caen bajo la curva (y ≤ f(x))
- Área ≈ (puntos bajo curva / total) × (área del rectángulo)
- Con f(x) = x²: ∫₀¹ x² dx = [x³/3]₀¹ = 1/3 = 0.3333...

### Ley de convergencia de Monte Carlo

El error estándar de Monte Carlo es proporcional a 1/√n:
- Error ≈ σ/√n
- Para reducir el error a la mitad, necesitas 4× más puntos
- Para 10× mejor precisión, necesitas 100× más puntos

---

## Checklist antes de entregar

- [ ] Hoja "Estimación de Pi" con 10,000 puntos y fórmulas correctas
- [ ] Hoja "Área bajo curva" con 10,000 puntos y fórmulas correctas
- [ ] Cálculo de errores absolutos y relativos en ambas hojas
- [ ] Tabla de convergencia con n = [100, 1000, 10000, 100000] (o mínimo hasta 10000)
- [ ] Gráfico de dispersión para estimación de π (puntos dentro/fuera coloreados)
- [ ] Gráfico de dispersión para área bajo curva (puntos bajo/sobre coloreados)
- [ ] Gráfico de convergencia Error vs n
- [ ] Análisis escrito (máximo 200 palabras)
- [ ] PDF con todas las evidencias: `PE-1.4_ApellidoNombre_MonteCarlo.pdf`

---

## Problemas comunes y soluciones

### 1. "Excel se pone muy lento con 100,000 puntos"
**Solución**:
- Trabaja solo hasta 10,000 puntos
- Desactiva cálculo automático: Fórmulas → Opciones de cálculo → Manual
- Presiona F9 solo cuando necesites recalcular

### 2. "Los números cambian constantemente"
**Solución**:
- Es normal, ALEATORIO() recalcula con cada cambio
- Para "congelar": Selecciona celdas → Copiar → Pegar valores especiales (Ctrl+Alt+V, V)

### 3. "No veo diferencia de colores en el gráfico"
**Solución**:
- Verifica que creaste dos series separadas (dentro/fuera)
- Clic derecho en cada serie → Formato de serie de datos → Color

### 4. "El error no sigue la ley 1/√n"
**Solución**:
- Monte Carlo es aleatorio, puede haber variación
- Si usas "Pegar valores" perdiste la aleatoriedad
- Presiona F9 varias veces y observa el promedio

### 5. "Las fórmulas muestran #DIV/0!"
**Solución**:
- Asegúrate de que hay datos en las columnas A-D antes de usar SUMA(D:D)/CONTARA(A:A)

---

## Criterios de evaluación (Rúbrica PE-1.4)

| Criterio | Puntos | Qué incluir para nota Excelente |
|----------|--------|----------------------------------|
| **Estimación de π y Área** | 0.75 | Ambas estimaciones correctas + errores calculados + comparación con valores exactos |
| **Análisis de Convergencia** | 0.75 | 4+ tamaños de muestra + gráfico claro + análisis según √n |
| **Visualización y Documentación** | 0.75 | Gráficos claros con colores + código/fórmulas + análisis completo |
| **TOTAL** | **2.25** | |

---

## ¿Necesitas ayuda durante el laboratorio?

1. Revisa esta guía paso a paso
2. Verifica que las fórmulas estén escritas exactamente como se indica
3. Compara tus resultados con los valores esperados
4. Pregunta a tu compañero
5. Levanta la mano para consultar con el profesor

---

**¡Éxito en tu práctica!**

**Prof. Charlie Cárdenas Toledo, M.Sc.**
FT-06-SIM Simulación - UIDE
Semana 4 - Método Monte Carlo
