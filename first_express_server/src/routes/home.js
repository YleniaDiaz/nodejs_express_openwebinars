import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home', {
        title: 'Curso Nodejs',
        message: 'Home'
    });

    res.end();
});

export default router;