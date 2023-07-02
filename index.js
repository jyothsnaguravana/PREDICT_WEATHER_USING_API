const expr = require('express');
const app = expr();
const axios  = require('axios');
const {response} = require('express');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

app.get('/',function(req,res) {
    const addr = req.query.address;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${addr}&units=metric&appid=${API_KEY}`;
    axios.get(url).then(response =>{
        const data = response.data ;
        const city = data.name;
        const temp = data.main.temp;
        const time = new Date(data.sys.sunset * 1000).toLocaleTimeString(); 
        res.send(`<html><body><h1>${city}<br>${temp}<br>${time}<br></h1></body></html>`)
    })
    // res.send('Hello Jothsna');
});

app.listen(3033 ,function(){
    console.log('I love chocolates');
})
