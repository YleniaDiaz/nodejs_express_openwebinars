import Sequelize from 'sequelize';

const DB = new Sequelize('test', 'postgres', 'root',{
    host:'localhost',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

const Film = DB.define(
    'Film',
    {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        poster: {
            type: Sequelize.STRING,
            field: 'poster'
        }
    },
    {
        freezeTableName: true
    }
);

Film.sync({force: true})
    .then(()=>Film.create({
        title: 'Star Wars: The Last Jedi',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/81Q4JB0yMjL.jpg'
    }));