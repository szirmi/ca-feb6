const mongo = require('mongoose');
const config = require('../../config');

const ItemService = require('./service/item');

mongo.connect(config.mongo.url, { useNewUrlParser: true }, () => console.log('Database connected.'));

module.exports = {
  ItemService
};