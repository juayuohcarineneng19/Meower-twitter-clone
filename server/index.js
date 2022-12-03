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

function isValidMew(mew){
    return mew.name && mew.name.toString().trim() ! == '' &&
    mew.content && mew.content.toString().trim() ! == '';
}

app.post('/mews', (req, res) =>{
    if(isValidMew(req.res)){
        // insert into db..
        const mew = {
            name: req.body.name.toString(),
            content:req.body.content.toString()
        };
        console.log(mew)
    }else{
        res.status(422)
        res.json({
            message:'Hey! name and content are required'
        })
    }
});

app.listen(8000,() => {
    console.log('listening on http://localhost:8000');
});