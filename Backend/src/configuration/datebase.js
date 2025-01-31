const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection : {
        filename: '.db'

    },
    useNullAsDefault: true
    
});

exports.db = db;