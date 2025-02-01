const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection : {
        filename: 'DB Gimnasio.db'

    },
    useNullAsDefault: true
    
});

exports.db = db;