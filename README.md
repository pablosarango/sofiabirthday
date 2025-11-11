# 🌹 Invitación Bella y la Bestia

Una hermosa página web estática con temática de Bella y la Bestia para invitaciones de cumpleaños, optimizada para visualización en celulares.

## 📋 Características

- ✨ Diseño elegante con temática auténtica de Bella y la Bestia
- 🎥 Video cuadrado (1:1) con reproducción automática en loop
- 🔊 Control de sonido fácil de activar
- 📍 Botón de ubicación integrado con Google Maps
- 🎨 Animaciones mágicas y efectos visuales
- 📱 **Optimizado especialmente para celulares** (mobile-first)
- 🌹 Rosa encantada bajo cúpula de cristal
- ✨ Efectos de sparkles interactivos
- 🏰 Pétalos de rosa animados cayendo

## 🚀 Cómo usar

### Instalación

1. Descarga o clona este repositorio
2. Coloca tu video de invitación en la carpeta
3. Abre `index.html` en tu navegador

### Personalización

#### 1. Agregar tu video de invitación

**IMPORTANTE**: El video debe ser formato **cuadrado (1:1)** para verse perfectamente.

Coloca tu video en la carpeta del proyecto y actualiza la ruta en `index.html` (línea 69):

```html
<video 
    id="invitation-video" 
    autoplay 
    loop 
    muted
    playsinline
    poster="poster.jpg">
    <source src="TU-VIDEO.mp4" type="video/mp4">
</video>
```

**Consejos para el video:**
- Formato: MP4 (H.264)
- Proporción: 1:1 (cuadrado, ej: 1080x1080)
- Tamaño recomendado: Máximo 20-30MB
- Duración: 30-60 segundos ideal

#### 2. Configurar la ubicación del evento

En `script.js` (línea 97), actualiza la URL con tu ubicación:

```javascript
const locationUrl = 'https://www.google.com/maps?q=TU_LATITUD,TU_LONGITUD';
```

**Para obtener las coordenadas:**
1. Abre Google Maps
2. Busca la ubicación del evento
3. Haz clic derecho sobre el lugar
4. Selecciona las coordenadas (se copian automáticamente)
5. Pega en el formato: `https://www.google.com/maps?q=4.6097,-74.0817`

#### 3. Actualizar detalles del evento

En `index.html`, edita la sección de detalles (líneas 92-127):
- **Fecha**: Modifica "Sábado, 15 de Noviembre" y "2025"
- **Hora**: Cambia "3:00 PM"
- **Vestimenta**: Ajusta el código de vestimenta

#### 4. Personalizar títulos y textos

Puedes modificar:
- Título principal (línea 48-51)
- Subtítulo y frase inicial (líneas 53-64)
- Frase del footer (línea 251)

## 📁 Estructura de archivos

```
birthay/
├── index.html              # Página principal
├── styles.css              # Estilos CSS con diseño mobile-first
├── script.js               # JavaScript con efectos interactivos
├── README.md               # Este archivo
├── InvitacionSofia.mp4     # Tu video de invitación (actualizar)
└── poster.jpg              # Imagen de portada del video (opcional)
```

## 🎨 Paleta de colores temática

- **Dorado Real**: `#FFD700` - Elegancia del castillo
- **Dorado Antiguo**: `#C9B037` - Detalles vintage
- **Rojo Profundo**: `#8B0000` - Rosa encantada
- **Morado Encantado**: `#9370DB` - Magia
- **Crema/Marfil**: `#FFF8DC` - Textos elegantes

## 📱 Diseño Mobile-First

La página está **optimizada primero para celulares** y se adapta a pantallas más grandes:
- 📱 **Móvil** (< 768px): Diseño principal optimizado
- 💻 **Desktop** (> 768px): Elementos ampliados y mejorados

## 🌟 Características especiales

### Video
- ✅ Formato cuadrado 1:1 perfecto para móvil
- ✅ Reproducción automática en loop
- ✅ Botón elegante para activar sonido
- ✅ Optimizado para iOS y Android (playsinline)

### Animaciones Mágicas
- 🌹 Rosa encantada bajo cúpula de cristal flotante
- ✨ Sparkles interactivos que siguen el cursor
- 🥀 Pétalos de rosa cayendo continuamente
- 💫 Efectos de brillo en títulos dorados
- ⭐ Animaciones al hacer scroll

### Interactividad
- Toca la rosa encantada para ver magia
- Sparkles al pasar sobre botones
- Explosión de estrellas al clickear
- Hover effects suaves y elegantes

## 💡 Consejos importantes

### Para el video:
1. **Edita tu video en formato 1:1** (cuadrado)
   - Apps recomendadas: CapCut, InShot, Adobe Premiere
   - Dimensiones ideales: 1080x1080 o 720x720
2. **Comprime el video** para carga rápida
   - Herramientas: HandBrake, CloudConvert
   - Tamaño objetivo: 10-20MB
3. **Asegúrate que inicie con volumen bajo** ya que el autoplay requiere muted

### Para compartir:
1. **Prueba en tu celular primero** antes de enviar
2. **Verifica la ubicación** del botón del mapa
3. **Envía el link directo** en WhatsApp o redes sociales
4. **Considera acortar la URL** con bit.ly o similar

## 🚀 Despliegue (Hosting)

Opciones **gratuitas** para publicar tu invitación:

### Opción 1: Netlify (Recomendado - más fácil)
1. Ve a [netlify.com](https://www.netlify.com/)
2. Arrastra la carpeta completa del proyecto
3. ¡Listo! Te da un link automáticamente

### Opción 2: GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Link disponible en minutos

### Opción 3: Vercel
1. Crea cuenta en [vercel.com](https://vercel.com/)
2. Importa desde GitHub o sube archivos
3. Deploy automático

### Opción 4: Compartir localmente
1. Comprime toda la carpeta en .zip
2. Súbela a Google Drive o Dropbox
3. Comparte el link de descarga
4. Los invitados abren `index.html`

## 📲 Cómo compartir la invitación

Una vez publicada:

1. **Copia el link** de tu hosting
2. **Acórtalo** con [bit.ly](https://bitly.com/) para WhatsApp
3. **Mensaje sugerido:**
   ```
   ✨ Estás invitado a una celebración mágica ✨
   🌹 Tema: Bella y la Bestia 🏰
   
   Abre tu invitación aquí: [tu-link]
   
   ¡No te lo pierdas!
   ```

## 🔧 Solución de problemas

### El video no se reproduce automáticamente en iPhone
- Es normal, iOS requiere interacción del usuario
- El usuario debe tocar la pantalla para iniciar
- El botón de sonido aparecerá automáticamente

### El sonido no funciona
- El video inicia muted (sin sonido) por defecto
- Esto es requerido para autoplay en navegadores
- El usuario debe tocar el botón "Toca para escuchar"

### La página se ve cortada en mi celular
- Asegúrate de tener la última versión del navegador
- Prueba en Chrome o Safari
- Verifica que no haya zoom activado

### El video pesa mucho y tarda en cargar
- Comprime el video a máximo 20MB
- Usa resolución 720x720 en lugar de 1080x1080
- Considera un formato más eficiente (VP9 o AV1)

## 📝 Notas adicionales

- ❌ **No se necesita confirmación de asistencia** (código eliminado)
- ✅ **Solo botón de ubicación** para el evento
- 📱 **Diseño optimizado para móvil** (la mayoría de invitados lo verán así)
- 🎥 **Video en loop infinito** para mantener la magia

## 🎉 Créditos

Diseñado con 💛 y un toque de magia ✨  
Inspirado en el clásico cuento de Bella y la Bestia 🌹🏰

---

**¿Necesitas ayuda?** Revisa los comentarios en el código o prueba diferentes navegadores.
