let router = require('express').Router();

let tutorialController = require('../controller/tutorial.controller');

router.route('/')
    .get(tutorialController.index)
    .post(tutorialController.new);

router.route('/:tutorial_id')
    .get(tutorialController.view)
    .patch(tutorialController.patch)
    .put(tutorialController.patch)
    .delete(tutorialController.delete);

module.exports = router;