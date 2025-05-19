# API Rest Blog

- Usa métodos HTTP según especificación: GET, POST, PUT/PATCH, DELETE
- Todas las respuestas en JSON
- Responder SIEMPRE a cada petición
- Unidad y consistencia en URLs: prefijo `/api`

## Endpoints

### Autores

- **GET** `/api/authors`  
  Obtiene lista de autores

- **GET** `/api/authors/:id`  
  Obtiene un autor por ID  
  -> 404 si no existe

- **POST** `/api/authors`  
  Crea nuevo autor (name, email, image)

- **GET** `/api/authors/:id/posts`  
  Lista posts de un autor

### Posts

- **GET** `/api/posts`  
  Lista todos los posts con datos de autor

- **GET** `/api/posts/:id`  
  Obtiene un post por ID  
  -> 404 si no existe

- **POST** `/api/posts`  
  Crea nuevo post (title, description, category, author_id)