const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/enciclodofus'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/enciclodofus/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);