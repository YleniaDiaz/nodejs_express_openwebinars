import express from 'express';
import jwt from 'jwt-simple';

const router = express.Router();

router.post('/', (req, res, next)=>{
    const PAYLOAD = {
        email: req.body.email
    };

    const token = jwt.encode(PAYLOAD, req.app.locals.config.TOKEN);

    res.status(201).send({token});
});

export default router;