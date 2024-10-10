import React, { useEffect, useState } from 'react';

const ListTimers = () => {
  // State to hold the list of timers
  const [timers, setTimers] = useState([]);

  // Fetch the timers data from the API when the component loads
  useEffect(() => {
    fetchTimers();
  }, []);

  // Function to fetch timers from the API
  const fetchTimers = async () => {
    try {
      const response = await fetch('https://countdown-timer-psi-ochre.vercel.app//api/timers/all/theh2o2');
      if (!response.ok) {
        throw new Error('Failed to fetch timers');
      }
      const data = await response.json();
      setTimers(data);
    } catch (error) {
      console.error('Error fetching timers:', error);
    }
  };

  // Function to delete a timer
  const deleteTimer = async (timerId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/timers/${timerId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete timer');
      }
      // Remove the deleted timer from the state
      setTimers(timers.filter((timer) => timer._id !== timerId));
    } catch (error) {
      console.error('Error deleting timer:', error);
    }
  };

  // Function to render the timer cards
  const renderTimers = () => {
    return timers.map((timer) => (
      <div key={timer._id} className="timer-card">
        <div className="timer-header">
          <h2 className="timer-title">{timer.title}</h2>
          <button
            className="delete-button"
            onClick={() => deleteTimer(timer._id)}
            title="Delete Timer"
          >
            &#x1F5D1; {/* Trash icon */}
          </button>
        </div>
        <p className="timer-description">{timer.description}</p>
        <p className="timer-dates">
          <strong>Start:</strong> {new Date(timer.startDate).toLocaleString()}<br />
          <strong>End:</strong> {new Date(timer.endDate).toLocaleString()}
        </p>
      </div>
    ));
  };

  return (
    <div className="timers-container">
      <h1>Offers</h1>
      <div className="timers-list">
        {timers.length > 0 ? renderTimers() : <p>No offers available</p>}
      </div>

      {/* Inline CSS for styling (can be moved to a CSS file) */}
      <style jsx="true">{`
        .timers-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        .timers-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .timer-card {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.3s ease;
        }

        .timer-card:hover {
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        }

        .timer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .timer-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          color: #333;
        }

        .delete-button {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #d9534f;
          font-size: 18px;
          margin-left: 10px;
          transition: color 0.3s ease;
        }

        .delete-button:hover {
          color: #c9302c;
        }

        .timer-description {
          font-size: 14px;
          color: #666;
          margin: 15px 0;
        }

        .timer-dates {
          font-size: 14px;
          color: #333;
        }

        .timer-dates strong {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default ListTimers;
