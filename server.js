const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    console.log('requested')
  res.send({ express: 'Hello From Express' });
});

app.post('/api/form', (req, res) => {
    console.log('form requested')
    let x = JSON.stringify(req.body)
    console.log(x)
   
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));