const express = require('express') 
const port = process.env.PORT || '3000' 
const indexRouter = require('./route') 
const usersRouter = require('./db_select_insert') 
const app = express() 
app.use(express.json()) 
app.use('/', indexRouter) 
app.use('/api', usersRouter)
app.listen(port) 
