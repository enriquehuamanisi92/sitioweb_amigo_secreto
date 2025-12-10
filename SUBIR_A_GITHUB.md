# 📤 SUBIR CÓDIGO A GITHUB - GUÍA PASO A PASO

## ✅ El código está listo para subir

Ya he preparado todo el código con Git. Solo necesitas autenticarte con GitHub.

## 🔐 Opción 1: GitHub Desktop (MÁS FÁCIL)

### Paso 1: Descargar GitHub Desktop
1. Ve a: https://desktop.github.com
2. Descarga e instala

### Paso 2: Iniciar Sesión
1. Abre GitHub Desktop
2. File → Options → Accounts
3. Sign in to GitHub.com
4. Inicia sesión con tu cuenta

### Paso 3: Agregar el Repositorio
1. File → Add Local Repository
2. Selecciona: `c:\Users\Enrique\Downloads\SITIO WEB AMIGO SECRETO`
3. Click "Add Repository"

### Paso 4: Publicar
1. Click en "Publish repository"
2. Desactiva "Keep this code private" (o déjalo privado si prefieres)
3. Click "Publish Repository"

¡LISTO! El código estará en GitHub.

---

## 🔐 Opción 2: Token de Acceso Personal

### Paso 1: Crear Token
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Nombre: "Amigo Secreto Deploy"
4. Marca: `repo` (todos los permisos de repositorio)
5. Click "Generate token"
6. **COPIA EL TOKEN** (solo se muestra una vez)

### Paso 2: Usar el Token
Ejecuta en PowerShell:
```powershell
cd "c:\Users\Enrique\Downloads\SITIO WEB AMIGO SECRETO"
git push -u origin main
```

Cuando pida contraseña:
- **Username**: enriquehuamanisi92
- **Password**: [PEGA EL TOKEN AQUÍ]

---

## 🔐 Opción 3: GitHub CLI (Avanzado)

### Paso 1: Instalar GitHub CLI
```powershell
winget install GitHub.cli
```

### Paso 2: Autenticar
```powershell
gh auth login
```
Sigue las instrucciones en pantalla.

### Paso 3: Push
```powershell
cd "c:\Users\Enrique\Downloads\SITIO WEB AMIGO SECRETO"
git push -u origin main
```

---

## ✨ Después de Subir a GitHub

Una vez que el código esté en GitHub:

### Desplegar en Render
1. Ve a: https://render.com
2. Sign up (usa tu cuenta de GitHub)
3. Click "New +" → "Web Service"
4. Conecta el repositorio: `sitioweb_amigo_secreto`
5. Configuración automática detectada
6. Click "Create Web Service"
7. Espera 2-3 minutos
8. ¡Obtendrás una URL pública!

---

## 🎯 RECOMENDACIÓN

**USA GITHUB DESKTOP** - Es lo más fácil y visual.

1. Descarga GitHub Desktop
2. Inicia sesión
3. Agrega el repositorio local
4. Click "Publish"
5. Luego ve a Render para desplegar

**Tiempo total: 10 minutos**

---

## ❓ ¿Necesitas Ayuda?

Dime qué opción prefieres y te ayudo paso a paso.
