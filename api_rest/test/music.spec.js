import request from 'supertest';

import server from '../src';
import mocks from '../src/mokcs';

describe('Music', ()=>{
    let instance = undefined;

    beforeEach(()=>{
        instance=server.start();
    });
    afterEach(()=>{
        server.close();
        instance=undefined;
    });

    describe('/GET /music', ()=>{
        it('it sould GET', ()=>{
            request(instance).get('/music')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err;
                });
        });
    });

    describe('/GET /music/pimpinela', ()=>{
        it('it sould GET', ()=>{
            const EXPECTED = mocks.filter(item =>
                item.singer.toLowerCase() === 'pimpinela'.toLowerCase()
            );

            request(instance).get('/music/pimpinela')
                .expect('Content-Type', /json/)
                .expect(200, EXPECTED)
                .end((err, res)=>{
                    if(err) throw err;
                });
        });
    });

    describe('/POST /music', ()=>{
        it('it sould POST', ()=>{
            const BODY={
                singer: 'Duki',
                song: 'Me gusta lo simple',
                album: 'Super sangre joven'
            };

            const TOKEN ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.GXDQ6FtjVF2mTYROJ85TvrzpDDYyymOZxLCuRfteB9s';

            request(instance).post('/music')
                .set('Authorization', `JWT ${TOKEN}`)
                .send(BODY)
                .expect(201, BODY)
                .end((err, res)=>{
                    if(err) throw err;
                });
        });
    });
});