const express = require('express');
const app = express();
const port = 2304;


//Route
app.get('/abc', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})