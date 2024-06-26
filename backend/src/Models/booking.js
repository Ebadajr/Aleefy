const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    type: {
      type: String,
      enum: [
        "Feeding",
        "Clinic",
        "Grooming",
        "Train",
        "Adoption",
        "Boarding",
        "Exercise",
        "Treatment",
      ], // Specify the options
      required: true,
    },
  },
  { timestamps: true }
);

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;
