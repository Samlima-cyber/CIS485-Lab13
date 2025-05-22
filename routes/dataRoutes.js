const express = require('express');
const router = express.Router();
const data = require('../data.json');

// 1. Regex-like route: Alphanumeric ID (validated in code)
router.get('/regex/:id', (req, res) => {
  const id = req.params.id;
  if (!/^[a-zA-Z0-9]+$/.test(id)) {
    return res.status(400).json({ error: 'Invalid ID format. Only alphanumeric characters allowed.' });
  }

  const item = data.find(d => d.id === parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found (regex)' });
  }
});

// 2. Get All Items
router.get('/', (req, res) => {
  res.json(data);
});

// 3. Get Details of a specific item
router.get('/:id/details', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(d => d.id === id);
  if (item) {
    res.json({ id: item.id, name: item.name, details: item.details });
  } else {
    res.status(404).json({ error: 'Details not found' });
  }
});

// 4. Dynamic route - Get item by ID
router.get('/:id', (req, res, next) => {
  if (req.path.includes('/details')) return next(); // avoid conflict
  const id = parseInt(req.params.id);
  const item = data.find(d => d.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// 5. Wildcard route
router.get('*', (req, res) => {
  res.status(404).json({ error: 'Wildcard: No matching route' });
});

module.exports = router;
