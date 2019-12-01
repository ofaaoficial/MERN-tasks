const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamp: true
});

module.exports = model('Task', TaskSchema);