const JsonServer = require('json-server');
const server = JsonServer.create();
const router = JsonServer.router('db.json');
const middlewares = JsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('JSON Server esta corriendo en el puerto ${PORT}');
});

