const express = require('express');
const { connect } = require('mongoose');
// const mongoose = require('mongoose');
const { Client } = require('pg');
const redis = require('redis');

const PORT = 4000;
const app = express();

//connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = "redis"

const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redisClient.on('error', (err) => console.log('Redis not connected : ', err));
redisClient.on('connect', () => console.log('Redis connected'));
redisClient.connect();

// connect to mongo database
// const DB_USER = "root"
// const DB_PASSWORD = "example"
// const DB_PORT = 27017;
// const DB_HOST = "mongo"
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

// mongoose.connect(URI).then(() => console.log('Database connected')).catch(err => console.log(err));

// connect to postgres database
const DB_USER = "root"
const DB_PASSWORD = "example"
const DB_PORT = 5432;
const DB_HOST = "postgres"
const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

const client = new Client({
    connectionString: URI
});

client.connect().then(() => console.log('Postgres Database connected')).catch(err => console.log(err));


app.get('/', (req, res) => {
    redisClient.set('products', 'hello world');
    res.send('<h1>Hello World hi Dev Two from AWS using docker hub</h1>')
});

app.get('/data', async (req, res) => {
    const data = await redisClient.get('products');
    res.send(`<h1>Hello World hi Dev Two</h1><h2>${data}</h2>`)
});
app.listen(PORT, () => console.log(`App runnning on port ${PORT}`))