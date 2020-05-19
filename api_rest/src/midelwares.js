import jwt from 'jwt-simple';

export const auth = (req, res, next)=>{
    if(req.headers.authorization==undefined){
        return res.status(401).send({message: 'No authorized'});
    }else{
        const token = req.headers.authorization.split(' ')[1];
        const PAYLOAD = jwt.decode(token, req.app.locals.config.TOKEN);

        req.user=PAYLOAD.email;

        next();
    }
}