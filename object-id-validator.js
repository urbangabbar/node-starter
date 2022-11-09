const ObjectId = require('mongoose').Types.ObjectId;

const validateObjectId = (id) => {
  try {
    new ObjectId(id);
  } catch (error) {
    return false;
  }
  return true;
};

module.exports = validateObjectId;
