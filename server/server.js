const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { getDistance } = require('./utils/geo')
const db = require('./db')
const authRouter = require('./routers/auth-router');

//creating server
const app = express();
const PORT = process.env.PORT || 5000;

// const pool = new Pool({
//     user : 'postgres',
//     host: 'localhost',
//     database : 'reactproject',
//     password : '1234',
//     port:5432
// });
// pool.connect((err,client,release)=>{
//     if(err){
//         return console.error('Some error occure while connnect to PGSql : ',err.message);
//     }
//     console.log("connected successfully with postgresql");
// })

const geoFence = {
    center : {lat: 20.309445, lng: 85.819040},
    radius : 2
};

// app.use(cors({
//     origin : 'http://localhost:5173/',
//     methods : ['GET','POST','PUT','DELETE'],
//     allowedHeaders : [
//         "Content-Type",
//         'Authorization',
//         'Cache-Control',
//         'Expires',
//         'Pragma'
//     ],
//     credentials : ture
// }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());



app.get('/check',(req,res)=>{
    res.json('api working')
})

app.post('/api/location',(req,res)=>{
    const {lat,lng,username} = req.body;
    const distance = getDistance(lat,lng,geoFence.center.lat,geoFence.center.lng);

    const insideFence = distance <= geoFence.radius;
    console.log(`${username} : ${insideFence ? "inside" : "outside"} fence (${Math.round(distance)}m)`);

    res.json({
        insideFence,
        distance : Math.round(distance),
        message : insideFence ? "Inside Geo-Fence" : "Outside Geo-Fence"
    });
});
app.use("/api/auth",authRouter);

app.listen(PORT,()=>{
    console.log(`server started successfully at : ${PORT}`);
});