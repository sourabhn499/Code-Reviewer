const express = require('express');
const aiRoutes = require('./routes/ai.routes'); // path relative to src/
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send("I am Batman");
});

app.use('/ai', aiRoutes); // This is crucial

module.exports = app;
