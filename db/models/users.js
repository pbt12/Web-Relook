var user = {
    name: 'name',
    userName: 'username',
    password: 'password',
    dob: 'dob',
    email: 'E-Mail',
    profession: 'profession',
    profilePic: 'profile pic',
    backCover: 'back cover'
}

var users = new Map();
users.set('username', user);

exports.addUserDetails = function (req, res, next){
    const user = {
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        dob: req.body.dob,
        email: req.body.email,
        profession: req.body.profession,
        profilePic: req.body.profilePic,
        backCover: req.body.backCover
    }
    let success;
    try{
        users.set(user.userName, user);
        success = true;
        req.body.success = success;
    }catch(error){
        success =  false;
        req.body.success = success;
        req.body.error = error;
    }
    next();
}

exports.getAllUsers = function (req, res, next){
    let resUsers = []
    users.forEach((value, key) => {
        console.log(value, key);
        resUsers.push(value);
    });
    // console.log('results users: ', resUsers);
    req.body.resUsers = resUsers;
    next();
}
 
exports.getUserDetails = function (req, res, next){
    let success;
    try{
        const user = users.get(req.body.userName);
        success = true;
        req.body.success = success;
        req.body.user = user;
        next();
    }catch(error){
        success = false;
        req.body.success = success;
        req.body.error = error;
        next();
    }
}

exports.updateUserDetails = function (req, res, next){
    let success;
    try{
        let user = users.get(req.body.userName);
        const updatedUser = {
            name: req.body.name,
            userName: req.body.userName,
            password: req.body.password,
            dob: req.body.dob,
            email: req.body.email,
            profession: req.body.profession,
            profilePic: req.body.profilePic,
            backCover: req.body.backCover
        }
        users.set(req.body.userName, updatedUser);
        success = true;
        req.body.success = success;
        next();
        
    }catch(error){
        success = false;
        req.body.success = success;
        req.body.error = error;
        next();
    }
}
