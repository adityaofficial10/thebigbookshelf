require('dotenv').config({
    path: "config/.env"
});
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    return Promise.resolve();
  }

  return mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};
