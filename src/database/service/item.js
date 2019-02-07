const Item = require('../model/item');
const { NotFoundError } = require('../../error');

class ItemService {
  static create(name, start, end) {
    return Item.createItem(name, start, end);
  }
  static updateEnd(id,end) {
    return Item.findById(id).exec()
      .then((item) => {
        if (item) {
          console.log(item.startEnd);
          return item.updateEnd(end);
        }
        else {
          throw new NotFoundError('ITEM_NOT_FOUND');
        }
      });
  }
}

module.exports = ItemService;