process.on('unhandleRejection', (err, p)=>{
    console.log(`ERROR unhandleRejection -> ${err}`);
});

process.on('uncaughtException', (err)=>{
    console.log(`ERROR uncaughtException -> ${err}`);
});

//Promise(resolve => JSON.parse({color:"blue"}));
//test();
//throw 'error';