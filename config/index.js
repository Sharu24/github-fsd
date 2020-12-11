const config = {};

config.options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

config.mongoUri = "mongodb://localhost/reactdb";
config.mongoCloud =
  "mongodb+srv://sharu24:Dominar@24@bootcamp.i5p6q.gcp.mongodb.net/reactdb?retryWrites=true&w=majority";

module.exports = config;
