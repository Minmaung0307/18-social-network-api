const mongoose = require("mongoose");
require("dotenv");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialmedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
