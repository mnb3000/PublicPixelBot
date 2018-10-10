const fs = require('fs');
const fastify = require('fastify')({
  logger: true,
  key: fs.readFileSync(path.join(__dirname, 'domain.key')),
  cert: fs.readFileSync(path.join(__dirname, 'chechnya.cert'))
});

const startOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        url: 'string',
        imageUrl: "string",
        userId: "string"
      }
    }
  }
};

fastify.post('/start', (request, reply) => {

});