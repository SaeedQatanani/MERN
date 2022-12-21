const Player = require('../models/player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(all => res.json(all))
        .catch(err => res.json(err));
}
module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then(onePlayer => res.json( onePlayer))
    .catch(err => res.status(404).json(err));
}
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.status(400).json(err));
}
module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err));
}
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err));
}