const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

connectDB();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())
app.use('/api/post', require('./Routes/posts'));

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})