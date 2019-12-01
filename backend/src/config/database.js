const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    :  'mongodb://localhost/db-test',{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});