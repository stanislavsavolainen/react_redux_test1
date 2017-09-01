'use strict';

//NodeJS Hapi - module   ( Hapi / static-express )

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ host: 'localhost' , port: 5659, routes: {
        cors: true
      } });

//use cors, because http-request come from other doimain than server


// Add the route
server.route({
    method: 'POST',
    path:'/link1', 
    handler: function (request, reply) {

    let x = request.payload.check;

    console.log("/hello POST-handler executed.");
    console.log("Message from client : " +x);

        //return reply('hello world');
	return reply(JSON.stringify({ body: 'hello world' }));
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});