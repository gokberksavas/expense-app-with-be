const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Router = require('./routes');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected successfully');
});

app.use(Router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});