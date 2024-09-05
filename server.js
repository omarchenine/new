const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Dentist Clinic website!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
