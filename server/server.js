const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/timeslots', (req, res) => {
  res.sendFile('/timeslots.json', { root: '.' });
});

app.get('/api/timeslots/:dates', (req, res) => {
  //TODO
});

app.listen(PORT, () => {
  console.log(`Servin up on ${PORT}`);
});
