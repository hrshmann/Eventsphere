var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'thisis secret';
const fetchuser = (req,res, next)=>{
    // get user from jwt token and add id to request object
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data  = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({error:"please authenticate using a valid token"})
    }
    
}
module.exports = fetchuser;