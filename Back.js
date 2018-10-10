const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({
  logger: true,
  /*https: {
    key: fs.readFileSync(path.join(__dirname, 'domain.key')),
    cert: fs.readFileSync(path.join(__dirname, 'chechnya.cert')),
  },*/
});

const allowedPublics = ["22751485"];
const allowedImageUrl = "http://shampinion.cf/controlImage.png";

const startOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        url: {type: 'string'},
        imageUrl: {type: 'string'},
        userId: {type: 'string'},
      },
      required: ["url", "imageUrl", "userId"],
    },
  },
};

fastify.post('/start', startOpts, (request, reply) => {
  const url = request.body.url;
  const publicId = url.match(/&group_id=(\d+)/)[1];
  if (allowedPublics.includes(publicId) && request.body.imageUrl === allowedImageUrl) {
    reply.send({ok: true});
  } else {
    reply.send({ok: false});
  }
});

fastify.listen(8080, '0.0.0.0', (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`)
});
