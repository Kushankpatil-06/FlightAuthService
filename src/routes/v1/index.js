const express = require('express');

const UserController = require('../../controllers/user-controller');
// const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router();

router.post('/signup', 
    // AuthRequestValidators.validateUserAuth,
    UserController.create
);
module.exports = router;