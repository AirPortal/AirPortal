const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const mg = require('mongoose');
mg.connect(`mongodb://${config.dbHost}/${config.dbDatabase}`);
require('./init');

app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000})); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, '/../client')));
app.use('/', express.static(path.join(__dirname, '/../client/index.html')));

// --- CAPTIVE PORTAL HANDLING ---
// app.use('/generate_204', (req, res) => {
//   // !204: to trigger captive portal
//   res.send(200);
// });
app.use('/generate_204', express.static(path.join(__dirname, '/../client/index.html')));
app.use('/library/test/success.html', express.static(path.join(__dirname, '/../client/index.html')));
app.use('/hotspot-detect.html', express.static(path.join(__dirname, '/../client/index.html')));
app.use('/fonts', express.static(path.join(__dirname, '/../client/assets/fonts')));
const routes = require('./routes');
app.use('/', routes);
app.use((req, res) => {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(path.resolve(path.join(__dirname, '/../client/index.html')));
});

app.listen(config.serverPort, () => {
  console.info('server started');
});
