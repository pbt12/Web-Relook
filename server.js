/*-----------------Module Imports-------------------*/
const express = require('express')
const {response} = require('express')
const Router = express.Router()
const router = require('./routes/routes')
/*--------------------------------------------------*/

/*------------------ Variables ---------------------*/
userObject = {
    userName : 'User Name',
    Name : 'Name',
    DOB : 'DOB',
    Email : 'E-Mail',
    profession : 'Profession',
    profilePic : 'Profile Pic',
    backCover : 'Back Cover'
}
/*--------------------------------------------------*/

/*------------- Express instantiation --------------*/
app = express();
const PORT = 4000;
/*--------------------------------------------------*/

/*------------------ Middlewares--------------------*/
app.use(express.json()) // JSON middleware
app.use(express.urlencoded({extended:false}))
app.use('/', Router)
/*--------------------------------------------------*/

/*------------------ ROUTES ------------------------*/
router(Router)


/*--------------------------------------------------*/

/*--------------- Listening to PORT ----------------*/
app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT: ${PORT}`);
})
/*---------------------- END -----------------------*/