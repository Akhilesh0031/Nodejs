const con = require('../db_connect');
const SQL = require('sql-template-strings')

exports.updateQuery= async (req, res) => {
    try {
        console.log(req + "inside one");
        
        const queryString = SQL`UPDATE employee SET id = 4 WHERE id = 6`;
        console.log(queryString);
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
    
};