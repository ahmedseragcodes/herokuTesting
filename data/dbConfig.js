const knex = require("knex");
const configs = require("../knexfile");
const environment = "production"

module.exports = knex(configs[environment]);