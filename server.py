import http.server
import socketserver
import socket
import os
import sys

# Reconfigure stdout for utf-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

DIRECTORY = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIRECTORY)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

class ThreadingTCPServer(socketserver.ThreadingTCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        super().server_bind()

# Find an available port
ports = [8000, 8001, 8002, 8080, 8081, 9000]
httpd = None
selected_port = None

for port in ports:
    try:
        httpd = ThreadingTCPServer(("127.0.0.1", port), Handler)
        selected_port = port
        break
    except OSError as e:
        print(f"Port {port} is not available: {e}")

if httpd is None:
    try:
        httpd = ThreadingTCPServer(("127.0.0.1", 0), Handler)
        selected_port = httpd.server_address[1]
    except Exception as e:
        print(f"Failed to find any free port: {e}")
        sys.exit(1)

print(f"--- SERVER STARTED ---")
print(f"Serving folder: {DIRECTORY}")
print(f"Local URL: http://127.0.0.1:{selected_port}")
print(f"Localhost URL: http://localhost:{selected_port}")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nShutting down server.")
    httpd.server_close()
