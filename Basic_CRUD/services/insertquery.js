const con = require('../db_connect');
const SQL = require('sql-template-strings')

exports.insertQuery= async (req, res) => {
    try {
        console.log(req + "inside one");
        
        const queryString = SQL`INSERT INTO employee (name, address) VALUES ('sanju', 'chennai')`;
        console.log(queryString);
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
    
};