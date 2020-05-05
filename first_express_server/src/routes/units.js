import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('temary', {
        title: 'Curso Nodejs',
        message: 'Temario del curso'
    });

    res.end();
});

export default router;