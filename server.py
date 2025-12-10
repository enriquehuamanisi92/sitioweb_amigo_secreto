from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import csv
import urllib.request
import ssl

# Configuración de Google Sheets
SHEET_ID = '1jUxGcAtPLiDxbuJbdcI3ORCGHgb5wese5uhBu3patO0'
SHEET_GID = '0'

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Si solicitan los datos del API
        if self.path == '/api/gifts':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            try:
                # Cargar datos desde Google Sheets
                csv_url = f'https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={SHEET_GID}'
                
                # Descargar CSV
                context = ssl._create_unverified_context()
                response = urllib.request.urlopen(csv_url, context=context)
                csv_data = response.read().decode('utf-8')
                
                # Parsear CSV
                gifts = []
                reader = csv.reader(csv_data.splitlines())
                
                for row in reader:
                    if len(row) < 2 or not row[1]:
                        continue
                    
                    name = row[1].strip()
                    
                    # Saltar headers
                    if 'Posibles Regalos' in name or 'MONTO' in name or not name:
                        continue
                    
                    # Recoger sugerencias
                    suggestions = []
                    for i in range(2, len(row)):
                        if row[i] and row[i].strip():
                            suggestions.append(row[i].strip())
                    
                    gifts.append({
                        'name': name,
                        'gifts': suggestions if suggestions else ['Sin sugerencias aún']
                    })
                
                # Enviar JSON
                self.wfile.write(json.dumps(gifts, ensure_ascii=False).encode('utf-8'))
                
            except Exception as e:
                error_data = {'error': str(e)}
                self.wfile.write(json.dumps(error_data).encode('utf-8'))
        else:
            # Servir archivos normales
            super().do_GET()

if __name__ == '__main__':
    PORT = 8000
    server = HTTPServer(('localhost', PORT), MyHandler)
    print('=' * 60)
    print('  🎄 SERVIDOR AMIGO SECRETO 🎁')
    print('=' * 60)
    print(f'\n  ✅ Servidor corriendo en: http://localhost:{PORT}')
    print(f'  📊 Datos desde Google Sheets actualizados en tiempo real')
    print(f'\n  Presiona Ctrl+C para detener\n')
    print('=' * 60)
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\n  👋 Servidor detenido')
        server.shutdown()
