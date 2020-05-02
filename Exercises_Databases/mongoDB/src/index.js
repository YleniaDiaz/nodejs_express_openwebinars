import mongoose, { connect } from 'mongoose';

const HOST = 'mongodb://localhost:27017/test';

mongoose.set('debug', true);

mongoose.Promise = global.Promise;

const CONN = mongoose.createConnection(HOST,
    {
        poolSize: 200
    });

CONN.on('error', err=>{
    console.log(`ERROR DB: ${err}`);
});

CONN.on('connected', ()=>console.log('DB OK'));

const testSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: {type: String, trim: true, required: true},
        poster: {type: String, trim: true, required: true},
    },
    {
        strict: false
    }
);

const Film = CONN.model('Film', testSchema);

const NEW_DOCUMENT=new Film({
    _id: new mongoose.Types.ObjectId,
    title: 'Star Wars: The Last Jedi',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/81Q4JB0yMjL.jpg'
});

NEW_DOCUMENT.save(err=>{
    if(err){
        throw err;
    }
});