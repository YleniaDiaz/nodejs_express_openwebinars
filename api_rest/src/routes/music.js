import express from 'express';
import mocks from '../../mokcs';

const router = express.Router();

router.get('/', (req, res, next)=>{
        res.status(200)
            .json(mocks);
    })
    .post('/', (req, res, next)=>{
        console.log(`BODY RECEIVED -> ${req.body}`);

        res.status(201)
            .json(req.body);
    });

router.get('/:singer', (req, res, next)=>{
    const SONGS_BY_SINGER=mocks
        .filter(item=>item.singer.toLowerCase()===req.params.singer.toLowerCase());

    res.status(200).json(SONGS_BY_SINGER);
});

export default router;