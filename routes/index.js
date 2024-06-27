const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/api/test', (req, res) => {
  res.json({ message: 'Endpoint test berhasil!' });
});

module.exports = router;

