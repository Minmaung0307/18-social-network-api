const mongoose = require("mongoose");
require('dotenv')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialmedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
