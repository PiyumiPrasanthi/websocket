const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 43384 });


// Event listener for WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event listener for incoming messages
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Process the incoming message as needed
    
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Event listener for closing connection
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});
