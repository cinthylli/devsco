const mongoose = require('mongoose');

const URI = "mongodb+srv://RWUser:Bictia2019@cluster0-y6yvx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
