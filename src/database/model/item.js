const mongo = require('mongoose');

const isValidName = function (name) {
  return name.length > 3 && name.length < 50;
}

const schema = new mongo.Schema({
  name: {
    type: String,
    required: true,
    validate: { validator: isValidName, message: 'Name length is not correct.' }
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true,
    default: null
  },
  category: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'Category'
  },
  firstname: String,
  lastname: String
});

schema.static('createItem', function (name, start, end) {
  return this.create({
    name: name,
    start: start,
    end: end
  });
});

schema.method('updateEnd', function(end) {
  this.end = end;
  return this.save();
});

schema.virtual('fullName').get(function() {
  return this.lastname + ' / ' + this.firstname;
});

const Item = mongo.model('Item', schema);

module.exports = Item;