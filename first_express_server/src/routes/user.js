import express from 'express';

const router = express.Router();

router.get('/:user', (req, res)=>{
    res.render('user', {
        title: 'User',
        message: `Welcome ${req.params.user}`
    });
});

router.get('/:user/bio', (req, res)=>{
    res.render('user', {
        title: 'User',
        message: `Bio de ${req.params.user}`
    });
});

export default router;