const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to calculate total cost
app.post('/calculate', (req, res) => {
    const { items } = req.body; // Expecting an array of { name, quantity, price } objects
    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    res.json({ total });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
