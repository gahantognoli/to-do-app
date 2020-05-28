const knex = require('knex');
const knexfile = require('./knexfile');

const env = 'production' // i know it's wrong

const options = knexfile[env];

module.exports = knex(options);