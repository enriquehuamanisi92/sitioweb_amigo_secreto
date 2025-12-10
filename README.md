# 🎄 Amigo Secreto UCH

Sitio web moderno para intercambio de Amigo Secreto con los colores institucionales de la Universidad de Ciencias y Humanidades (UCH). Carga datos en tiempo real desde Google Sheets.

## ✨ Características

- 🎨 **Colores institucionales UCH** (Biscay #20366D, Sapphire #35509D)
- 📊 **Datos en tiempo real** desde Google Sheets
- 🔄 **Actualización automática** cada 30 segundos
- 🔍 **Búsqueda en tiempo real** por nombre
- 📱 **Diseño responsive** (móvil, tablet, desktop)
- ❄️ **Animaciones festivas** con copos de nieve
- 🎁 **18 personas** con sus sugerencias de regalos

## 🚀 Uso Local

### Opción 1: Servidor Python Simple
```bash
python server.py
```
Luego abre: http://localhost:8000

### Opción 2: Aplicación Flask
```bash
pip install -r requirements.txt
python app.py
```

### Opción 3: Doble Clic
Ejecuta `INICIAR_SERVIDOR.bat` en Windows

## ☁️ Despliegue en la Nube

### Render
1. Conecta este repositorio en Render
2. Render detectará automáticamente la configuración
3. Deploy automático

### Vercel
```bash
vercel
```

### Replit
1. Importa desde GitHub
2. Click "Run"

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal
├── styles.css          # Estilos con colores UCH
├── script.js           # Lógica del frontend
├── server.py           # Servidor local simple
├── app.py              # Aplicación Flask para producción
├── requirements.txt    # Dependencias Python
├── Procfile           # Configuración para Render
└── README.md          # Este archivo
```

## 🎨 Colores UCH

- **Biscay**: #20366D (Azul oscuro)
- **Sapphire**: #35509D (Azul medio)
- **Athens Gray**: #F3F4F6 (Gris claro)

## 📊 Google Sheets

El sitio carga datos desde un Google Sheets público. Para usar tu propio sheet:

1. Edita `SHEET_ID` en `server.py` y `app.py`
2. Asegúrate de que el sheet sea público

## 🛠️ Tecnologías

- HTML5, CSS3, JavaScript (ES6+)
- Python 3.11+
- Flask (para producción)
- Google Sheets API

## 📝 Licencia

MIT

## 👥 Autor

Creado para la Universidad de Ciencias y Humanidades
