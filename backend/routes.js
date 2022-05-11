const express = require('express');
const userModel = require('./models/users');
const ticketModel = require('./models/tickets');

const app = express();

app.post('/create-user', async (request, response) => {
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (err) {
        response.status(500).send(err);
    }
});

app.post('/create-ticket', async (request, response) => {
    const ticket = new ticketModel(request.body); 

    try {
        await ticket.save();
        response.send(ticket);
    } catch (err) {
        response.status(500).send(err);
    } 
});

app.get('/users', async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (err) {
        response.status(500).send(err);
    }
});

app.get('/tickets', async (request, response) => {
    const tickets = await userModel.find({});

    try {
        response.send(tickets);
    } catch (err) {
        response.status(500).send(err);
    }
});

app.delete('/delete-user', async (request, response) => {
    try {
        await userModel.findByIdAndDelete(request.body.id);

        response.send('User deleted');
    } catch (err) {
        response.status(500).send(err);
    }
});

module.exports = app;