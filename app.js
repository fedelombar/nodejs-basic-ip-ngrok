const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true'); // Adding the ngrok skip browser warning header
  next();
});

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`Nueva conexión desde ${clientIp}`);
  res.send('Hi');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
