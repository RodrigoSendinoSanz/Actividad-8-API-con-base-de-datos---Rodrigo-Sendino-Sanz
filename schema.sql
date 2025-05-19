-- schema.sql

DROP DATABASE IF EXISTS blogdb;
CREATE DATABASE blogdb CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE blogdb;

-- Tabla de autores
CREATE TABLE authors (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de posts
CREATE TABLE posts (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  category VARCHAR(100),
  author_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- Datos de ejemplo para authors
INSERT INTO authors (name, email, image) VALUES
  ('María Pérez', 'maria.perez@example.com', 'https://i.pravatar.cc/150?img=1'),
  ('Javier Gómez', 'javier.gomez@example.com', 'https://i.pravatar.cc/150?img=2'),
  ('Lucía Fernández', 'lucia.fernandez@example.com', 'https://i.pravatar.cc/150?img=3');

-- Datos de ejemplo para posts
INSERT INTO posts (title, description, created_at, category, author_id) VALUES
  (
    'Introducción a ExpressJS',
    'En este post veremos los fundamentos de ExpressJS: instalación, configuración de rutas y middleware básico.',
    '2025-05-01 10:15:00',
    'JavaScript',
    1
  ),
  (
    'Gestión de bases de datos con MySQL',
    'Aprende a conectar Node.js con MySQL usando mysql2/promise y a realizar consultas CRUD.',
    '2025-05-05 14:30:00',
    'Bases de Datos',
    2
  ),
  (
    'Middleware avanzado en Express',
    'Exploramos cómo crear middleware personalizado para validación de peticiones y manejo de errores.',
    '2025-05-07 09:00:00',
    'JavaScript',
    1
  ),
  (
    'Desplegando tu API en producción',
    'Guía para desplegar tu API de Node.js en un VPS o en plataformas como Heroku y DigitalOcean.',
    '2025-05-10 16:45:00',
    'DevOps',
    3
  ),
  (
    'Relaciones en SQL: claves foráneas',
    'Explicación de cómo funcionan las claves foráneas en SQL y ejemplos prácticos con tablas relacionadas.',
    '2025-05-12 11:20:00',
    'Bases de Datos',
    2
  );
