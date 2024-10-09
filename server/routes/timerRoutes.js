// routes/timerRoutes.js
import express from 'express';
import { getTimersByStore, createTimer, updateTimer, deleteTimer } from '../controllers/timerController.js';

const router = express.Router();

// Route to get all timers for a specific store
router.get('/:storeId', getTimersByStore);

// Route to create a new timer
router.post('/', createTimer);

// Route to update a timer by ID
router.put('/:id', updateTimer);

// Route to delete a timer by ID
router.delete('/:id', deleteTimer);

export default router;
