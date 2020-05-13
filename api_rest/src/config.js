import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';

const SETTINGS=config();
console.log(SETTINGS);

export default app =>{
    app.disabled('x-powered-by');

    app.set('env', SETTINGS.parsed.ENV);
    app.set('config', SETTINGS.parsed);

    if(SETTINGS.parsed.ENV !== 'test'){
        app.use(logger('combined'));
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(cors());
};
