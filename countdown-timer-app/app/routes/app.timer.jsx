import React, { useState } from 'react';

const TimerForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [storeId, setStoreId] = useState("theh2o2");
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState('medium');
  const [position, setPosition] = useState('top');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a timer object with all necessary fields
    const newTimer = {
      storeId,
      title,
      startDate,
      endDate,
      description,
      displayOptions: { color, size, position },
    };

    try {
      // Use the `fetch` API to send a POST request to the backend
      const res = await fetch('http://localhost:5000/api/timers/', { // Use http if running locally
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTimer), // Send the complete timer object
      });

      const responseData = await res.json(); // Parse the JSON response
      console.log('Timer created successfully:', responseData); // Log the response data
    } catch (error) {
      console.error('Error creating timer:', error);
    }

    if (onSubmit) onSubmit(newTimer);

    // Clear form fields after submission
    setStartDate('');
    setEndDate('');
    setTitle('');
    setDescription('');
    setColor('#000000');
    setSize('medium');
    setPosition('top');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Create Countdown Timer</h2>
      <form onSubmit={handleSubmit}>
        {/* Timer Title */}
        <div style={{ marginBottom: '10px' }}>
          <label>Timer Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        {/* Start Date and Time */}
        <div style={{ marginBottom: '10px' }}>
          <label>Start Date and Time:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        {/* End Date and Time */}
        <div style={{ marginBottom: '10px' }}>
          <label>End Date and Time:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        {/* Promotion Description */}
        <div style={{ marginBottom: '10px' }}>
          <label>Promotion Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0', height: '100px' }}
          />
        </div>

        {/* Display Options */}
        <h3>Display Options</h3>
        
        {/* Color Picker */}
        <div style={{ marginBottom: '10px' }}>
          <label>Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>

        {/* Size Options */}
        <div style={{ marginBottom: '10px' }}>
          <label>Size:</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Position Options */}
        <div style={{ marginBottom: '10px' }}>
          <label>Position:</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          >
            <option value="top">Top</option>
            <option value="middle">Middle</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Create Timer
        </button>
      </form>
    </div>
  );
};

export default TimerForm;
