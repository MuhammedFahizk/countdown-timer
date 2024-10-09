// models/Timer.js
import mongoose from 'mongoose';

const timerSchema = mongoose.Schema(
  {
    storeId: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: false },
    displayOptions: {
      color: { type: String, required: false },
      size: { type: String, required: false },
      position: { type: String, required: false }
    }
  },
  { timestamps: true }
);

const Timer = mongoose.model('Timer', timerSchema);
export default Timer;
