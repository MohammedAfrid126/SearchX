const express = require('express')
const path = require('path');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/img/bg1.png', (req, res) => {
    res.sendFile(path.join(__dirname, './img/bg1.png'));
})

app.get('/searchword', (req, res) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${req.query.word}`;

    let options = { 
        method: 'GET',
    };
    fetch(url, options)
    .then((res) => {
        return res.json()
    })
    .then((json) =>{
        res.json(json);
    })
    .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})