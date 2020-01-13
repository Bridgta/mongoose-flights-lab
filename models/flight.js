var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"],
    required: true
  },
  arrival: {
    type: Date,
    default: function() {
      let nextYear = new Date();
      return nextYear.setFullYear(nextYear.getFullYear() + 1);
    }
  }
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Air Canada"]
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function() {
      let nextYear = new Date();
      return nextYear.setFullYear(nextYear.getFullYear() + 1);
    }
  },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"],
    default: "SEA"
  }
});

module.exports = mongoose.model("Flight", flightSchema);
