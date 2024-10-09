// controllers/timerController.js
import Timer from '../models/Timer.js';

// @desc   Get all timers for a specific store
// @route  GET /api/timers/:storeId
// @access Public
const getTimersByStore = async (req, res) => {
  const { storeId } = req.params;
  try {
    const timers = await Timer.find({ storeId });
    res.status(200).json(timers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc   Create a new countdown timer
// @route  POST /api/timers
// @access Public
const createTimer = async (req, res) => {
  const { storeId, title, startDate, endDate, description, displayOptions } = req.body;
  console.log(req.body);
  

  if (!storeId || !title || !startDate || !endDate) {
    console.log('sdfasdf');
    
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  try {
    const newTimer = new Timer({
      storeId,
      title,
      startDate,
      endDate,
      description,
      displayOptions
    });
    const createdTimer = await newTimer.save();
    res.status(201).json(createdTimer);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc   Update a countdown timer
// @route  PUT /api/timers/:id
// @access Public
const updateTimer = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTimer = await Timer.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedTimer) {
      return res.status(404).json({ message: 'Timer not found' });
    }

    res.status(200).json(updatedTimer);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc   Delete a countdown timer
// @route  DELETE /api/timers/:id
// @access Public
const deleteTimer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTimer = await Timer.findByIdAndDelete(id);

    if (!deletedTimer) {
      return res.status(404).json({ message: 'Timer not found' });
    }

    res.status(200).json({ message: 'Timer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export { getTimersByStore, createTimer, updateTimer, deleteTimer };
