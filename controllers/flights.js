var Flight = require("../models/flight");

const newFlight = (req, res) => {
  res.render("flights/new", { title: "Add Flight" });
};

const index = (req, res) => {
  Flight.find({}).exec(function(err, flights) {
    return res.render("flights/index", { title: "All Flights", flights });
  });
};

const create = (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render("flights/new");
    res.redirect("/flights");
  });
};

const show = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    Ticket.find({ flight: flight._id }, function(err, tickets) {
      if (!flight) {
        return res.redirect("/flights");
      }
      res.render("flights/show", { title: "Flight Details", flight, tickets });
    });
  });
};

const newTicket = (req, res) => {
  Flight.findById(req.params.id).exec((err, flight) => {
    return res.render(`tickets/new`, { title: "Create Ticket", flight });
  });
};

const createTicket = (req, res) => {
  let newTicket = new Ticket({
    seat: req.body.seat,
    price: req.body.price,
    flight: req.params.id
  });
  newTicket.save((err, ticket) => {
    return res.redirect(`/flights/${req.params.id}`);
  });
};

module.exports = {
  newTicket,
  createTicket,
  new: newFlight,
  index,
  create,
  show
};
