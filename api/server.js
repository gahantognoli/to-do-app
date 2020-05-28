const server = require('./src/config/custom-express');

server.listen(server.get('port'),
    () => console.log(`server is running in port ${server.get('port')}`));