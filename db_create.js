const sqlite3 = require('sqlite3').verbose() 
const DB_PATH = 'mydatabase.db' 
const DB = new sqlite3.Database(DB_PATH) 

DB.serialize(() => {
    DB.run(
        'CREATE TABLE IF NOT EXISTS Kids (id INTEGER PRIMARY KEY UNIQUE, thing TEXT, price TEXT, customer TEXT)'
    )
})
module.exports = DB
