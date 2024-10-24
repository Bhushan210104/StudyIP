import { useState } from 'react';
import './App.css';

function App() {
  const [basicSalary, setBasicSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/calculate-salary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ basicSalary: parseFloat(basicSalary) }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setNetSalary(null);
        } else {
          setNetSalary(data.netSalary);
          setError('');
        }
      })
      .catch((error) => {
        setError('Error calculating salary');
        setNetSalary(null);
      });
  };

  return (
    <div className="App">
      <h1>Quick Salary Estimator</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Basic Salary: </label>
          <input 
            type="number" 
            value={basicSalary} 
            onChange={(e) => setBasicSalary(e.target.value)} 
            required 
            min="0"
            placeholder="Enter salary in ₹"
          />
        </div>
        <button type="submit">Calculate Net Salary</button>
      </form>

      {error && <p className="error">{error}</p>}
      {netSalary !== null && (
        <div className="result">
          <h2>Estimated Net Salary: ₹{netSalary.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
