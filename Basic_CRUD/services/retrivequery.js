const con = require('../db_connect');
const SQL = require('sql-template-strings')

exports.selectQuery= async (req, res) => {
    try {
        console.log(req + "inside one");
        
        const queryString = SQL`SELECT * FROM employee WHERE address = 'bangalore'`;
        console.log(queryString);
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
    
};