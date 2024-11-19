const express = require('express');

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>res.send('<h1>Hello World hi hi</h1>'));
app.listen(PORT, '0.0.0.0', () => console.log(`App runnning on port ${PORT}`))