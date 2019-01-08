const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  longLat: {
    type: Array,
    required: true
  },
  days: {
      type: [String],
      enum: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
      required: true
    },
  startTime: {
    type: Number,
    required: true,
    min: 0,
    max: 24
  },
  endTime: {
    type: Number,
    required: true,
    min: 0,
    max: 24
  },
  menu: {
    type: Object
  },
  imageUrl: {
    type: String,
    required: true,
    default: "https://drive.google.com/uc?id=1U9e8724aTIqe_81ckXVGWhh8G0BCYVD7"
  }
})

module.exports = Business = mongoose.model('businesses', BusinessSchema);