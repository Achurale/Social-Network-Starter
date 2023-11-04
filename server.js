// Require express, import connection and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Middleware
const PORT = process.env.PORT || 3001;
const app = express()

// Parse incoming data as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// App routes
app.use(routes);

// Initialize app after connection is made
db.once('open', () => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    })
})