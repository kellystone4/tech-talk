const db = require("../models");

module.exports = {

    create: (req, res) => {
        db.Comment.create({
            text: req.body.text,
            UserId: req.body.userId,
            PostId: req.body.postId
        })
            .then((data) => {
                res.json(data)
            })
            .catch(err => {
                console.log(err);
                res.send(false)
            })
    }

};