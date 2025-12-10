# 🎄 Amigo Secreto - Despliegue en la Nube

## ✅ Archivos Preparados para Despliegue

He creado los archivos necesarios para desplegar en **Render** (hosting gratuito):

- `app.py` - Aplicación Flask para la nube
- `requirements.txt` - Dependencias de Python
- `Procfile` - Configuración de despliegue

## 🚀 Cómo Desplegar en Render (GRATIS)

### Paso 1: Crear cuenta en Render
1. Ve a: https://render.com
2. Crea una cuenta gratuita (puedes usar GitHub)

### Paso 2: Subir código a GitHub

**Opción A: Usar GitHub Desktop (Más fácil)**
1. Descarga GitHub Desktop: https://desktop.github.com
2. Crea un nuevo repositorio
3. Arrastra todos los archivos de la carpeta
4. Haz commit y push

**Opción B: Línea de comandos**
```bash
cd "c:\Users\Enrique\Downloads\SITIO WEB AMIGO SECRETO"
git init
git add .
git commit -m "Sitio Amigo Secreto"
git branch -M main
git remote add origin [TU_URL_DE_GITHUB]
git push -u origin main
```

### Paso 3: Desplegar en Render
1. En Render, haz clic en "New +" → "Web Service"
2. Conecta tu repositorio de GitHub
3. Configuración:
   - **Name**: amigo-secreto
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
4. Haz clic en "Create Web Service"

### Paso 4: ¡Listo!
Render te dará una URL como: `https://amigo-secreto-xxxx.onrender.com`

## 🌟 Ventajas del Despliegue en la Nube

✅ **Accesible desde cualquier lugar** - Comparte la URL con tu equipo
✅ **Actualización automática** - Los datos se cargan desde Google Sheets
✅ **Gratis** - Render ofrece plan gratuito
✅ **HTTPS automático** - Seguro y profesional
✅ **Sin necesidad de servidor local** - Funciona 24/7

## 📱 Alternativas de Despliegue

### Vercel (Más rápido pero requiere adaptación)
1. Instala Vercel CLI: `npm install -g vercel`
2. En la carpeta: `vercel`
3. Sigue las instrucciones

### Railway (Similar a Render)
1. Ve a: https://railway.app
2. Conecta GitHub
3. Deploy automático

### PythonAnywhere (Específico para Python)
1. Ve a: https://www.pythonanywhere.com
2. Sube los archivos
3. Configura la app Flask

## 🔧 Solución de Problemas

**Si el despliegue falla:**
1. Verifica que `requirements.txt` esté correcto
2. Asegúrate de que el Google Sheets sea público
3. Revisa los logs en Render

**Si necesitas ayuda:**
- Render tiene documentación excelente
- Puedo ayudarte con cualquier error específico

## 📝 Notas Importantes

- El plan gratuito de Render puede "dormir" después de 15 minutos de inactividad
- La primera carga después de dormir puede tardar ~30 segundos
- Para mantenerlo activo 24/7, necesitas el plan de pago ($7/mes)

---

**¿Necesitas ayuda para subir a GitHub o configurar Render?** Avísame y te guío paso a paso.
