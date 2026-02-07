# Sistema de Transiciones de Página Implementado

## 📦 Dependencias Instaladas
- **framer-motion**: Librería de animaciones para React

## 🎨 Componentes Creados

### 1. PageTransition.jsx
Componente wrapper que aplica animaciones de entrada y salida a cada página:
- **Entrada**: Fade in + movimiento desde abajo (20px)
- **Salida**: Fade out + movimiento hacia arriba (-20px)
- Duración: 400ms entrada, 300ms salida
- Easing suave para una experiencia fluida

### 2. LoadingOverlay.jsx
Overlay visual que aparece durante las transiciones:
- **Barra de progreso animada** en la parte superior
- **Spinner circular** en el centro
- **Backdrop blur** para efecto de profundidad
- Se activa automáticamente en cada cambio de ruta
- Duración: 600ms
- **Scroll automático** al inicio de cada página

### 3. loadingOverlay.css
Estilos para el overlay:
- Gradiente de colores moderno (púrpura-índigo-rosa)
- Soporte para modo oscuro
- Backdrop blur para efecto premium
- Animaciones fluidas y no intrusivas

## 🔧 Cambios en App.js

1. **Importaciones nuevas**:
   - `AnimatePresence` de framer-motion
   - `useLocation` de react-router-dom
   - `PageTransition` y `LoadingOverlay` componentes

2. **Componente AnimatedRoutes**:
   - Usa `useLocation` para detectar cambios de ruta
   - Envuelve todas las rutas con `AnimatePresence`
   - Cada ruta ahora está envuelta en `<PageTransition>`
   - El `LoadingOverlay` se renderiza globalmente

3. **Estructura mejorada**:
   ```jsx
   <Router>
     <Header />
     <AnimatedRoutes />  // Nuevo componente interno
     <Footer />
   </Router>
   ```

## ✨ Efectos Visuales Implementados

### Cuando el usuario hace clic en el menú "Soluciones":

1. **Aparece un overlay blanco semi-transparente** con blur
2. **Barra de progreso animada** en la parte superior (gradiente de colores)
3. **Spinner circular** que rota suavemente
4. **La página anterior se desvanece** y se mueve hacia arriba
5. **La nueva página aparece** con fade in y movimiento desde abajo
6. **Scroll automático** al inicio de la página
7. Todo esto sucede en menos de 1 segundo para no interrumpir la experiencia

### Beneficios:

✅ **Feedback visual claro** - El usuario sabe que está cambiando de página
✅ **Experiencia premium** - Animaciones suaves y profesionales
✅ **No bloqueante** - Las animaciones son rápidas (400-600ms)
✅ **Accesible** - Respeta las preferencias de movimiento reducido del sistema
✅ **Responsive** - Funciona en todos los tamaños de pantalla
✅ **Scroll automático** - Cada página nueva comienza desde arriba

## 🎯 Uso

Las transiciones se aplican automáticamente a todas las rutas. No se necesita configuración adicional en los componentes individuales.

## 🔄 Personalización

Para modificar las animaciones, edita los siguientes valores en `PageTransition.jsx`:

```javascript
const pageVariants = {
  initial: {
    opacity: 0,    // Opacidad inicial
    y: 20,         // Desplazamiento vertical
  },
  animate: {
    duration: 0.4, // Duración de entrada (segundos)
  },
  exit: {
    duration: 0.3, // Duración de salida (segundos)
  }
};
```

Para modificar el overlay, edita `LoadingOverlay.jsx` o `loadingOverlay.css`.

## 🚀 Próximas Mejoras Sugeridas

- [ ] Agregar diferentes tipos de transiciones según la sección
- [ ] Implementar transiciones direccionales (swipe left/right)
- [ ] Agregar efectos de partículas para páginas especiales
- [ ] Precarga de imágenes para transiciones más fluidas
- [ ] Animaciones específicas para el menú dropdown
