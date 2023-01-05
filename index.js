const express = require('express');
const mongoose = require('mongoose');

const { Book } = require("./models");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://root:<password>@cluster0.xqsrw.mongodb.net/?retryWrites=true&w=majority", {dbName: 'books_db'})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDb...', err));

app.get('/', async (req, res) => {  
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
});

const PORT = parseInt(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});