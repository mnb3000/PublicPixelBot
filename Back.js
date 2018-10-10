const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({
  logger: true,
  /*https: {
    key: fs.readFileSync(path.join(__dirname, 'domain.key')),
    cert: fs.readFileSync(path.join(__dirname, 'chechnya.cert')),
  },*/
});
const JsonDB = require('node-json-db');
const db = new JsonDB("dvachPixel", true, false);

const allowedPublics = ["22751485"];
const allowedImageUrl = "http://shampinion.cf/controlImage.png";

fastify.register(require('fastify-cors'), {
  origin: false,
  methods: ['POST'],
});

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
  const userId = request.body.userId;
  if (allowedPublics.includes(publicId) && request.body.imageUrl === allowedImageUrl) {
    const user = db.getData(`/users/${userId}`);
    if (!user) {
      db.push(`/users/${userId}`, {
        timestamp: Date.now(),
      });
    }
    reply.send({ok: true});
  } else {
    reply.send({ok: false});
  }
});

fastify.listen(8080, '0.0.0.0', (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`)
});
