const express = require('express');
const app = express();
const port = 3000;

// Ruta para la página principal
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
});

