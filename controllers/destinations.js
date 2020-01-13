const Flight = require("../models/flight");

const create = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    if (err) {
      return res.redirect(`/flights/${flight._id}`);
    }
    flight.destinations.push(req.body);
    flight.save(err => {
      res.redirect(`/flights/${flight._id}`);
    });
    console.log(flight);
  });
};

module.exports = {
  create
};
