const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({
  logger: true,
  /*https: {
    key: fs.readFileSync(path.join(__dirname, 'domain.key')),
    cert: fs.readFileSync(path.join(__dirname, 'chechnya.cert')),
  },*/
});
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const allowedPublics = ["22751485"];
const allowedImageUrl = "http://shampinion.cf/controlImage.png";

fastify.register(require('fastify-cors'), {
  origin: true,
  methods: ['POST', 'OPTIONS'],
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
    const user = db.get('users').find({ userId }).value();
    if (user) {
      db.set(`users.${userId}.timestamp`, Date.now()).write();
    } else {
      db.get('users').push({ userId, timestamp: Date.now() }).write();
    }
    try {
    } catch (e) {

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
