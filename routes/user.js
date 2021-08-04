const express = require("express");
const User = require("../models").User;

const router = new express.Router(); 


router.post('/user/create', async (req, res) => {
    try {
        let user = await User.create({...req.body});
        res.status(200).send({result: "success", body: user});
    } catch (error) {
        res.status(400).send({result: "failed", error: error.message});
    }
});

router.get('/user/readProfile', async (req, res) => {
    try {
        let user = await User.findOne({where: {id: parseInt(req.query.id)}});
        res.status(200).send({result: "success", body: user});
    } catch (error) {
        res.status(400).send({result: "failed", error: error.message});
    }
});

router.patch('/user/updateProfile', async (req, res) => {

});

router.delete('/user/removeProfile', async (req, res) => {

});

module.exports = router;