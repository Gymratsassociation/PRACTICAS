const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection : {
        filename: 'db.db'

    },
    useNullAsDefault: true
    
});

exports.db = db;