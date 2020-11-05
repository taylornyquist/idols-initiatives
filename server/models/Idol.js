const { Schema, model } = require('mongoose');

const idolSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
    },
    hometown: {
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
    },
    charity_url: {
      type: String,
      required: true,
    },
    twitter_url: {
      type: String,
    },
});

module.exports = idolSchema;