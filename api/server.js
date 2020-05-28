const server = require('./src/config/custom-express');
const db = require('./src/app/data/db');

server.listen(server.get('port'),
    () => console.log(`server is running in port ${server.get('port')}`));