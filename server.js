/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// redirect https to http for Heroku deployment
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

// for react-router browserHistory
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Express server is up on port ${PORT}`);
});
