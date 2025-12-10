from flask import Flask, send_from_directory, jsonify
import requests
import csv
import io

app = Flask(__name__, static_folder='.')

# Configuración de Google Sheets
SHEET_ID = '1jUxGcAtPLiDxbuJbdcI3ORCGHgb5wese5uhBu3patO0'
SHEET_GID = '0'

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/api/gifts')
def get_gifts():
    try:
        # Cargar datos desde Google Sheets
        csv_url = f'https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={SHEET_GID}'
        
        response = requests.get(csv_url)
        response.raise_for_status()
        
        # Parsear CSV
        gifts = []
        csv_data = io.StringIO(response.text)
        reader = csv.reader(csv_data)
        
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
        
        return jsonify(gifts)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
