const { Schema, model } = require('mongoose');

const idolSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
      type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
  });


const Idol = model('Idol', idolSchema);

module.exports = Idol;
