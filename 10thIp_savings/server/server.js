const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to calculate interest
app.post('/calculate-interest', (req, res) => {
    const { principal, age, period } = req.body;

    // Basic interest calculation logic (example)
    // Adjust the interest rate based on age or other factors if needed
    let rate = 5; // Default interest rate
    if (age >= 60) {
        rate = 7; // Higher rate for senior citizens
    }

    // Simple interest formula: A = P * (1 + rt)
    const interest = (principal * rate * period) / 100;
    res.json({ interest });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
