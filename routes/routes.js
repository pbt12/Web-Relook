const userDataController = require("../db/models/users");

module.exports = function (router) {
    router.get('/getAllUsers', userDataController.getAllUsers, (req, res) => {
        // if(!req.body.success){
        //     const error = req.body.error;
        //     res.send(error);
        // }else{
        const resUsers = req.body.resUsers;
        res.send(resUsers);
        // }
    })
    router.get('/getUserDetails', userDataController.getUserDetails , (req, res)=>{
        if(!req.body.success){
            const error = req.body.error;
            res.send(error);
        }else{
            const resUser = req.body.user;
            res.send(resUser);
        }
    })
    router.post('/addUserDetails' , userDataController.addUserDetails, (req, res) => {
        if(!req.body.success){
            const error = req.body.error;
            res.send(error);
        }else{
            res.json('User Added succesfully!!')
        }
    })
    router.post('/updateUserDetails', userDataController.updateUserDetails, (req, res) => {
        if(!req.body.error){
            res.json('User details updated succesfully !!!');
        }else{
            res.json(error);
        }
    })
}