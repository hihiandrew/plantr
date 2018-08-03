const { conn, Gardener, Vegetable, Plot } = require('./model');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  })
  .then(() => {
    conn.close().then(() => {
      console.log('Disconnected');
    });
  });
// why does this print out in this order?
