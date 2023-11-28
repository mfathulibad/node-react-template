const express = require('express');
const client = require('./config/connection');
const app = express();

const dosenRoute = require('./routes/dosenRouter');

app.listen(5000, () =>{
    console.log('server running in port 5000')
})

client.connect(err => {
    if(err){
        console.log(err.message);
    } else{
        console.log('Connected');
    }
})

app.use(dosenRoute)