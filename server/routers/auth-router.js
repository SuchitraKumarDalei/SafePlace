const express = require('express')
const router = express.Router();
const {redg,login,authMiddleWare} = require('../controller/auth-controller');

router.post('/registration',redg);
router.post('/login',login);
router.get('/checkAuth', authMiddleWare,(req,res)=>{
    const user = req.user;
    res.status(200).json({
        success : true,
        message : "Authenticated User",
        user,
    });
});
module.exports = router;
