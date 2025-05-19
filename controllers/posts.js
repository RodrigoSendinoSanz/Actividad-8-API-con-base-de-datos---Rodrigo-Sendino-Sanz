// controllers/posts.js

// Obtener todos los posts con datos de autor
exports.getAll = async (req, res) => {
  const [rows] = await req.db.query(`
    SELECT p.*, a.name AS author_name, a.email AS author_email, a.image AS author_image
    FROM posts p
    JOIN authors a ON p.author_id = a.id
  `);
  res.json(rows);
};

// Obtener un post por ID (con autor)
exports.getById = async (req, res) => {
  const [rows] = await req.db.query(`
    SELECT p.*, a.name AS author_name, a.email AS author_email, a.image AS author_image
    FROM posts p
    JOIN authors a ON p.author_id = a.id
    WHERE p.id = ?
  `, [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'Post no encontrado' });
  res.json(rows[0]);
};

// Crear un nuevo post
exports.create = async (req, res) => {
  const { title, description, category, author_id } = req.body;
  const [result] = await req.db.query(
    `INSERT INTO posts (title, description, category, author_id)
     VALUES (?, ?, ?, ?)`,
    [title, description, category, author_id]
  );
  res.status(201).json({ id: result.insertId, title, description, category, author_id });
};
