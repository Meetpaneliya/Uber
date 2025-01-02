const http = require('http');
const app = require('./app');
const connectToDb = require('./db/db');
const { initializeSocket } = require('./socket');

const port = process.env.PORT || 3000;

connectToDb();

const server = http.createServer(app);

initializeSocket(server); // Initialize Socket.IO with the server

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});