const express = require('express');
const CORS = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(CORS());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

const user_id = 'nithin_vakalapudi_02062004';
const email = 'ns5625@srmist.edu.in';
const roll_number = 'RA2111047010044';


app.get("/bfhl", (req, res) => {
    res.send({ 'operation_code': 1 });
});


app.post("/bfhl", (req, res) => {
    const data = req.body.data || [];

    const numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (/^\d+$/.test(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });

    const highestAlphabet = alphabets.length
        ? [alphabets.reduce((max, char) => char.toUpperCase() > max.toUpperCase() ? char : max)]
        : [];

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    };

    res.json(response);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});