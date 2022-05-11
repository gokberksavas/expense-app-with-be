const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    expense_type: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;