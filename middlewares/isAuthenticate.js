import jwt from 'jsonwebtoken';

const isAuthenticate = (req, res, next) => {
    try{
        const token = req.cookies.token ;
        if(!token){
            return res.status(401).json({
                message: "Unauthorized access",
                success: false
            });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }
         // Attach user information to the request object
        req.id = decode.userId;
        next();
        
    } catch(error){
        console.error("Authentication error:", error);
    }
}

export default isAuthenticate;

