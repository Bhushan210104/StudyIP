const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Salary calculation (simple example)
function calculateNetSalary(basicSalary) {
  const taxRate = 0.2; // Assume 20% tax
  const netSalary = basicSalary - (basicSalary * taxRate);
  return netSalary;
}

// POST request to calculate net salary
app.post('/api/calculate-salary', (req, res) => {
  const { basicSalary } = req.body;

  if (!basicSalary || isNaN(basicSalary)) {
    return res.status(400).json({ error: 'Invalid salary input' });
  }

  const netSalary = calculateNetSalary(basicSalary);
  res.json({ netSalary });
});

app.listen(port, () => {
  console.log(`Salary Estimator API running at http://localhost:${port}`);
});
