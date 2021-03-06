const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/idol-initiatives', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;