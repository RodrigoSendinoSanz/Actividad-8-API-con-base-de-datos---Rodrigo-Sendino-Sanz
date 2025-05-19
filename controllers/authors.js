// controllers/authors.js

exports.getAll = async (req, res) => {
  const [rows] = await req.db.query('SELECT * FROM authors');
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await req.db.query('SELECT * FROM authors WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'Autor no encontrado' });
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { name, email, image } = req.body;
  const [result] = await req.db.query(
    'INSERT INTO authors (name, email, image) VALUES (?, ?, ?)',
    [name, email, image]
  );
  res.status(201).json({ id: result.insertId, name, email, image });
};


// controllers/authors.js
exports.getPosts = async (req, res) => {
  const [rows] = await req.db.query(`
    SELECT p.*, a.name AS author_name, a.email AS author_email, a.image AS author_image
    FROM posts p
    JOIN authors a ON p.author_id = a.id
    WHERE a.id = ?
  `, [req.params.id]);
  res.json(rows);
};
