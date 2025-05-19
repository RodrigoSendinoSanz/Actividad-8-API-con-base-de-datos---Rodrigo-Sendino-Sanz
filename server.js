require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const authorRoutes = require('./routes/authors');
const postRoutes = require('./routes/posts');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use((req, res, next) => { req.db = pool; next(); });

app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

app.use((req, res) => res.status(404).json({ error: 'Endpoint no encontrado' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));