import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <TextField
          label="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          variant="outlined"
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          variant="outlined"
          style={{ marginRight: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setCelsius('');
            setFahrenheit('');
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
