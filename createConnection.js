const { createConnection } = require('mysql');
const con = createConnection({
    host    :   '127.0.0.1',
    password:   '',
    user    :   'root',
    port    :   3306,
    database:   'birthdaygreeter'
});

con.connect(error =>
{
    if(error)
        console.error(error);
    else
    {
        con.query('SELECT * FROM tbl_contacts LIMIT 5;',(error,result,fileds)=>
        {
            if(error)
                console.error(error);
            else
                console.log(result)
        });
    }
});