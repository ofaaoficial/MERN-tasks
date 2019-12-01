const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users.route'));
app.use('/api/tasks', require('./routes/tasks.route'));

module.exports = app;