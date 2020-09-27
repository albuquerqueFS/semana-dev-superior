var Tutorial = require('../model/tutorial.model');

exports.index = (req, res) => {
    Tutorial.get((err, tutorial) => {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Tutorial recuperado.",
                data: tutorial
            })
        }
    });
}

exports.new = (req, res) => {
    var tutorial = new Tutorial();
    tutorial.title = req.body.title;
    tutorial.description = req.body.description;
    tutorial.published = req.body.published;

    tutorial.save(err => {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'Novo tutorial cadastrado.',
                data: tutorial
            });
        }
    });
}

exports.view = (req, res) => {
    Tutorial.findById(req.params.tutorial_id, (err, tutorial) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Tutorial recuperado.',
                data: tutorial
            })
        }
    });
}

exports.patch = (req, res) => {
    Tutorial.findById(req.params.tutorial_id, (err, tutorial) => {
        if (err)
            res.send(err);
        
        tutorial.title = req.body.title;
        tutorial.description = req.body.description;
        tutorial.published = req.body.published;
        tutorial.createdAt = req.body.createdAt; 

        tutorial.save(err => {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Tutorial atualizado.',
                data: tutorial
            });
        });
    });
}

exports.delete = (req, res) => {
    Tutorial.findById(req.params.tutorial_id).remove(err => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: 'success',
                message: 'Tutorial deletado'
            });
        }
    });
}