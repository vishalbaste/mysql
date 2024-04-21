const { createPool } = require('mysql');
const con = createPool({
    host    :   '127.0.0.1',
    user    :   'root',
    database:   'birthdaygreeter',
    password:   '',
    connectionLimit: 10
});

con.query('SELECT * FROM tbl_contacts LIMIT 5;',(error,result,fileds)=>
{
    if(error)
        console.error(error);
    else
        console.log(result)
});