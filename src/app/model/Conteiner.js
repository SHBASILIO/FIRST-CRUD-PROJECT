const db = require('../../config/db')

module.exports = {
    all(callback){
        db.query(`
        SELECT *
        FROM containers
        ORDER BY name ASC`, function(err, results){

            if (err) throw `Database all error ${err}`
            callback(results.rows)
        })
    },

    create(data, callback){
        const query = `
            INSERT INTO containers (
                name,
                codigo,
                tipo,
                status,
                category
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `
        const values = [
            data.name,
            data.codigo,
            data.tipo,
            data.status,
            data.category
        ]

        db.query(query, values, function(err, results){
            
            if(err) throw `Database create error ${err}`
            callback(results.rows[0])
        })
    },

    find(id, callback){
        db.query(`
            SELECT * 
            FROM containers 
            WHERE id = $1`, [id], function(err, results){

                if(err) throw `Database find error ${err}`
                callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE containers SET
                name=($1),
                codigo=($2),
                tipo=($3),
                status=($4),
                category=($5)
            WHERE id = $6
        `
        const values = [
            data.name,
            data.codigo,
            data.tipo,
            data.status,
            data.category,
            data.id
        ]

        db.query(query, values, function(err, results){
           
            if(err) throw `Database update error ${err}`
            callback()
        })
    },

    delete(id, callback){
        db.query (`
        DELETE FROM containers WHERE id = $1`, [id], function(err, results){
            if(err) throw `Database delete error! ${err}`

            return callback()
        })
    }
}