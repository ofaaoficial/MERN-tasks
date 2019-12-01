const User = require('../models/User');

class UserController{
    async index(req, res){
        return res.json(await User.find());
    }

    async store(req, res){
        const {username} = req.body;
        const newUser = new User({
            username
        });
        return res.status(201).json(await newUser.save());
    }

    async find(req, res){
        const {id} = req.params;
        return res.json(await User.findById(id));
    }

    async update(req, res){
        const {id}  = req.params;
        const {username} = req.body;
        await User.updateOne({_id: id}, {
            username
        });
        return res.json({message: "Updated successfully."});
    }

    async destroy(req, res){
        const {id} = req.params;
        await User.deleteOne({_id: id});
        return res.json({message: "Deleted successfully."});
    }
}

module.exports = new UserController();
