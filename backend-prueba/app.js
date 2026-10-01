const express = require('express');
const app = express();

app.use(express.json());

const personaRoutes = require ('./routes/personaRoutes');
app.use('/personas', personaRoutes);

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});