const WebSocket = require('ws')
const {v4: uuidv4} = require('node-uuid')

/**
 * WebSocketServer manages the initialization of the websocket used by this
 * application.
 *
 * WebSocketServer requires access to a DBManager instance.
 */
class WebSocketServer {

    constructor(DBManager) {
        this.DB = DBManager
        this.WSS = null
        this.WSS_CLIENTS = {}
        this.CONNECTION_OBJECT = null
    }

    /**
     * Initialize the websocket connection, handlers, and task interval.
     */
    init_wss = () => {
        this.WSS = new WebSocket.Server({port: 2223})

        // Build handlers on WebSocket connection
        this.WSS.on('connection', (cobj) => {
            this.CONNECTION_OBJECT = cobj
            cobj._clientID = uuidv4()
            cobj._error = false
            this.WSS_CLIENTS[cobj._clientID] = cobj
            console.log('WebSocket: Connected: New WebSocket connection from client. ID: ', cobj._clientID)

            // Handle client disconnects
            cobj.on('close', () => {
                delete this.WSS_CLIENTS[cobj._clientID]
                console.log('WebSocket: Closed: WebSocket client connection closed. ID: ', cobj._clientID)
            })
        })
    }

}

module.exports = {
    WebSocketServer: WebSocketServer
}