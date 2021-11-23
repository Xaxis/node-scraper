const {DBManager} = require('../db_manager.js')
let DBM = new DBManager()
DBM.drop_tables()
DBM.build_tables()