# Blog API

API RESTful para la gestión de autores y posts de un blog, desarrollada con Node.js, Express y MySQL.

## Características

- CRUD de autores y posts
- Relación entre autores y posts
- Respuestas en formato JSON
- Paginación para recursos (en endpoints de restaurantes)
- Manejo de errores y rutas no encontradas
- Separación de rutas y controladores

## Endpoints principales

### Autores

- `GET /api/authors`  
  Lista todos los autores

- `GET /api/authors/:id`  
  Obtiene un autor por ID

- `POST /api/authors`  
  Crea un nuevo autor (`name`, `email`, `image`)

- `GET /api/authors/:id/posts`  
  Lista los posts de un autor

### Posts

- `GET /api/posts`  
  Lista todos los posts con datos de autor

- `GET /api/posts/:id`  
  Obtiene un post por ID

- `POST /api/posts`  
  Crea un nuevo post (`title`, `description`, `category`, `author_id`)

## Instalación

1. Clona el repositorio
2. Instala dependencias:

   ```sh
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env`:

   ```
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=blogdb
   DB_PORT=3306
   PORT=3001
   ```

4. Crea la base de datos y las tablas ejecutando el script [`schema.sql`](schema.sql).

5. Inicia el servidor:

   ```sh
   npm run dev
   ```

## Pruebas de la API

Puedes usar el archivo [`peticiones.rest`](peticiones.rest) con la extensión "REST Client" de VS Code para probar los endpoints.

## Estructura del proyecto

- `server.js` — Punto de entrada principal
- `routes/` — Rutas de autores y posts
- `controllers/` — Lógica de negocio de autores y posts
- `src/` — Ejemplo de estructura modular para otros recursos (restaurantes)
- `schema.sql` — Script de creación de la base de datos y datos de ejemplo

## Licencia

MIT
