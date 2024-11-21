const express = require('express');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

// connect to database
const DB_USER = "root"
const DB_PASSWORD = "example"
const DB_PORT = 27017;
const DB_HOST = "mongo"
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(URI).then(() => console.log('Database connected')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('<h1>Hello World hi Dev Two</h1>'));
app.listen(PORT, '0.0.0.0', () => console.log(`App runnning on port ${PORT}`))