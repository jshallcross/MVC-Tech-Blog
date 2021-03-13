const router = require('express').Router();
const { User} = require('../../models');

// gets all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userDataDB => res.json(userDataDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});