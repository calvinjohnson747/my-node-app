// server.js
const express = require('express');
const mongoose = require('mongoose');
const Job = require('./models');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://cjoseph6:Cjjjjj123@cluster0.ffkmal0.mongodb.net/test';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful connection

        app.get('/',(req,res)=>{
            res.sendFile(path.join(__dirname,'static','index.html'));
        });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.post('/jobs', async (req, res) => {
    try {
        // Create a new user document
        const job = new Job({
            name: req.body.name,
            url: req.body.url,
        });
        console.log(req.body.name);
        console.log(req.body.url);
        // Save the user document to the database
        await job.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});
