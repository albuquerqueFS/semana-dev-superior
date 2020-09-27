var mongoose = require('mongoose');

var tutorialSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    published: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

var Tutorial = module.exports = mongoose.model('tutorial', tutorialSchema);

module.exports.get = function(callback, limit) {
    Tutorial.find(callback).limit(limit);
}