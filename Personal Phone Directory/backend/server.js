const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Static list of contacts
let contacts = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', phone: '987-654-3210' }
];

// Get all contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Add new contact
app.post('/api/contacts', (req, res) => {
  const newContact = {
    id: contacts.length + 1,
    name: req.body.name,
    phone: req.body.phone
  };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
