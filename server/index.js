const express = require('express'); // bring in a library installed with express

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        message: 'Meower🐹🐈'
    });
});

app.post('/mews', (req, res) =>{
    console.log(req.body);
});

app.listen(8000,() => {
    console.log('listening on http://localhost:8000');
});