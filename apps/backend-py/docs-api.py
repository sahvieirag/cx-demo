from flask import Flask, request, jsonify
from functools import wraps
import jwt

app = Flask(__name__)
SECRET_KEY = "your-secret-key" # Should be in Google Secret Manager

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            # Em produção, usaríamos uma chave vinda do Secret Manager
            data = jwt.decode(token.split(" ")[1], SECRET_KEY, algorithms=["HS256"])
            request.user_id = data['user_id']
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return decorated

@app.route('/docs/<document_id>', methods=['PUT'])
@require_auth
def update_document(document_id):
    # FIX: Adicionado @require_auth para proteger o endpoint
    content = request.json.get('content')
    # Lógica de atualização aqui...
    return jsonify({'message': f'Document {document_id} updated successfully by {request.user_id}'})

if __name__ == '__main__':
    app.run(debug=True)
