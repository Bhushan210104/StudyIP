import React, { useState } from 'react';
import axios from 'axios';

function SavingsInterestCalculator() {
    const [principal, setPrincipal] = useState('');
    const [age, setAge] = useState('');
    const [period, setPeriod] = useState('');
    const [interest, setInterest] = useState(null);

    // Handle the form submission to calculate interest
    const calculateInterest = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate-interest', {
                principal: parseFloat(principal),
                age: parseInt(age),
                period: parseFloat(period)
            });
            setInterest(response.data.interest);
        } catch (error) {
            console.error('Error calculating interest:', error);
        }
    };

    return (
        <div>
            <h2>Savings Interest Calculator</h2>
            <div>
                <input
                    type="number"
                    placeholder="Principal Amount"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Investment Period (years)"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                />
            </div>
            <button onClick={calculateInterest}>Calculate Interest</button>
            {interest !== null && (
                <h3>Interest Earned: ₹{interest}</h3>
            )}
        </div>
    );
}

export default SavingsInterestCalculator;
