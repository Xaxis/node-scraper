const Lodash = require('lodash')
const Express = require('express')
const Cors = require('cors')
const BodyParser = require('body-parser')
const app = Express()
const server_name = 'Node Scraper API Server'
const server_port = 2222


/**
 * Configure APP/API server for application routes.
 */
app.use(Cors())
app.options('*', Cors())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))


/**
 * API Routes - Routes that can be used outside of the application as standalone
 * consumable data.
 */

app.get('/api/get/alive', (req, res) => {
    res.send("Server is alive!")
})


/**
 * Initialize the APP/API HTTP server.
 */
app.listen(server_port, () => console.log(`${server_name} -  Listening on port ${server_port}`))