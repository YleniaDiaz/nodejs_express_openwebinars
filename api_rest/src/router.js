import user from './routes/me';
import music from './routes/music';

export default app => {
    app.use('/me', user);
    app.use('/music', music);
};