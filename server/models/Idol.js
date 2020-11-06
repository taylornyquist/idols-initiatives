const mongoose = require('mongoose');

const { Schema } = mongoose

const idolSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    charity:{
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    hometown: {
      type: String,
      required: true,
    },
    charity_url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    twitter_url: {
      type: String,
    },
    idol_category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
  },
});

const Idol = mongoose.model('Idol', idolSchema);

module.exports = Idol;