class TaskController{
    index(req, res){
        res.json('index');
    }

    store(req, res){
        res.json('store');
    }

    find(req, res){
        res.json('find')
    }

    update(req, res){
        res.json('update');
    }

    destroy(req, res){
        res.json('destroy')
    }
}

module.exports = new TaskController();
