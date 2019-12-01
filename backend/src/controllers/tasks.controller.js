const Task = require('../models/Task');

class TaskController {
    async index(req, res) {
        return res.json(await Task.find());
    }

    async store(req, res) {
        const {title, content, author} = req.body;
        const newTask = new Task({
            title,
            content,
            author
        });
        await newTask.save();
        return res.status(201).json(newTask);
    }

    async find(req, res) {
        const {id} = req.params;
        return res.json(await Task.findById(id));
    }

    async update(req, res) {
        const {id} = req.params;
        const {title, content, author} = req.body;
        await Task.updateOne({_id: id}, {
            title,
            content,
            author
        });
        return res.json({message: "Updated successfully."});
    }

    async destroy(req, res) {
        const {id} = req.params;
        await Task.deleteOne({_id: id});
        return res.json({message: "Deleted successfully"});
    }
}

module.exports = new TaskController();
