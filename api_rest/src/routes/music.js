import express from 'express';
import mocks from '../mokcs';
import {auth} from '../midelwares';
import {send as wSend} from '../socket';
import mokcs from '../mokcs';

const router = express.Router();

router.get('/', (req, res, next)=>{
        //SOCKED SEND()
        wSend(req.method, req.baseUrl, mokcs);

        return res.status(200)
            .json(mocks);
    })
    .post('/', auth, (req, res, next)=>{
        console.log(`BODY RECEIVED -> ${JSON.stringify(req.body)}`);
        res.status(201)
            .json(req.body);
    });

router.get('/:singer', (req, res, next)=>{
    const SONGS_BY_SINGER=mocks
        .filter(item=>item.singer.toLowerCase()===req.params.singer.toLowerCase());

    //SOCKED SEND()
    wSend(req.method, req.baseUrl, SONGS_BY_SINGER);

    res.status(200).json(SONGS_BY_SINGER);
});

export default router;