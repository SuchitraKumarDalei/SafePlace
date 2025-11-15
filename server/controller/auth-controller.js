const { v4: uuidv4 } = require('uuid');
const db = require('../db')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const redg = async(req,res)=>{
   const {username,email,password,role} = req.body;

   if(!username||!email||!password||!role){
        return res.status(400).json({
            success : false,
            message : "Something is missing..."
        })
   }

   try{
        const query = `SELECT username FROM users WHERE username = $1`
        const checkResult = await db.query(query,[username]);
        if (checkResult.rows.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists! Please use another one.'
            });
        }

        const user_id = uuidv4(); // generate UUID
        const insertQuery = `
            INSERT INTO users 
            (user_id, username, password, role, email)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const hashPassword = await bcrypt.hash(password, 12);
        const values = [user_id, username, hashPassword, role, email];
        const insertResult = await db.query(insertQuery, values);

        res.status(201).json({
            success : true,
            message: "User created successfully",
            user: insertResult.rows[0]
        });
    }catch(e){
        console.error('Server Error:', e);
        res.status(500).json({ status : false,message: 'Verification server error.' });
    }
}

const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            success : false,
            message : "Something missing !"
        })
    }
    try{
        const query = `SELECT * FROM users WHERE username = $1`
        const result = await db.query(query,[username]);
        if(result?.rows?.length === 0){
             return res.status(404).json({
            success: false,
            message: "User not found",
            });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password,user.password);
        //console.log("Password Matching : ",isMatch);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = jwt.sign(
            {
                user_id : user.user_id,
                username : user.username,
                role : user.role,
                email : user.email
            },
            "CLIENT_SERVER_KEY",
            {expiresIn : "1d"}
        );

        res.cookie('token', token, { httponly: true, secure: false, SameSite: 'none' }).json({
            success: true,
            message: 'Log in successfully',
            user: {
                email: user.email,
                role: user.role,
                user_id: user.user_id,
                username: user.username
            }
        })

    }catch(e){
        console.error('Some error occurred', e);
        res.status(500).json({ status : false,message: 'server error.' });
    }
}

module.exports = {redg,login}
