const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

//middleware which is almost always utilized
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'production')));

app.get("/", (req, res) =>{
    res.json("Hello world!")
})

app.listen(PORT)