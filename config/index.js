const config = {
  production: {
    PORT: 3000,
    SECRET: "MySecret",
    MONGO_URI: "mongodb://localhost:27017/node-express",
  },
  development: {
    PORT: 5000,
    SECRET: "MySecret",
    MONGO_URI: "mongodb://localhost:27017/node-express",
  },
};

module.exports = config[process.env.node_env || "development"];
