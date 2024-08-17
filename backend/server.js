const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());

// In-memory storage for cards
let cards = [];

// Check if server is running
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Create a card
app.post('/cards', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newCard = {
    id: uuidv4(),
    title: String,
    description :String
  };

  cards.push(newCard);
  res.status(201).json(newCard);
});

// Get all cards
app.get('/cards', (req, res) => {
  res.status(200).json(cards);
});

// Get a specific card by title
app.get('/cards/:title', (req, res) => {
  const { title } = req.params;
  const card = cards.find(c => c.title.toLowerCase() === title.toLowerCase());

  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }

  res.status(200).json(card);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});