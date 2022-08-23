const { datestart, dateend } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback){
        db.query(`SELECT * 
        FROM movimentacoes
        ORDER BY typemovement ASC`, function(err, results){

            if (err) throw `Database all error ${err}`
            callback(results.rows)
        })
    },

    create(data, callback){
        const query = `
            INSERT INTO movimentacoes (
                typemovement,
                startdate,
                starttime,
                enddate,
                endtime
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `
        const values = [
            data.typemovement,
            datestart(data.startdate).iso,
            data.starttime,
            dateend(data.enddate).iso,
            data.endtime
        ]

        db.query(query, values, function(err, results){
            
            if(err) throw `Database create error ${err}`
            callback(results.rows[0])
        })
    },

    find(id, callback){
        db.query(`
            SELECT *
            FROM movimentacoes 
            WHERE id = $1`, [id], function(err, results){

                if(err) throw `Database find error ${err}`
                callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE movimentacoes SET
                typemovement=($1),
                startdate=($2),
                starttime=($3),
                enddate=($4),
                endtime=($5)
            WHERE id = $6
        `
        const values = [
            data.typemovement,
            data.startdate,
            data.starttime,
            data.enddate,
            data.endtime,
            data.id
        ]

        db.query(query, values, function(err, results){
           
            if(err) throw `Database update error ${err}`
            callback()
        })
    },

    delete(id, callback){
        db.query (`
            DELETE FROM movimentacoes 
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database delete error! ${err}`

                return callback()
        })
    },
}