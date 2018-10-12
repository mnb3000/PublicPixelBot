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
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '669298066:AAGEeXEXbUcAmJ5skw3goYhTupehgeKOi1s';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ users: [], pixelEvents: [], pixelCount: 0 }).write();

const allowedPublics = ["22751485", "57536014"];
const allowedImageUrl = "http://shampinion.cf/controlImage.png";

fastify.register(require('fastify-cors'), {
  origin: true,
  methods: ['POST', 'OPTIONS'],
});
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public'
});

const startOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        url: {type: 'string'},
        imageUrl: {type: 'string'},
        userId: {type: 'string'},
        upd: {type: 'boolean'}
      },
      required: ["url", "imageUrl", "userId"],
    },
  },
};

const pixelOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        userId: {type: 'string'},
        x: {type: 'number'},
        y: {type: 'number'},
        pxColor: {type: 'string'}
      },
      required: ["userId", "x", "y", "pxColor"],
    },
  },
};

const countOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        userId: {type: 'string'},
        pixelCount: {type: 'number'}
      },
      required: ['pixelCount', 'userId'],
    },
  },
};

fastify.post('/start/', startOpts, (request, reply) => {
  const url = request.body.url;
  const publicIdMatch = url.match(/&group_id=(\d+)/);
  let publicId = '0';
  if (publicIdMatch) {
    publicId = publicIdMatch[1];
  }
  const userId = request.body.userId;
  if (allowedPublics.includes(publicId) && request.body.imageUrl === allowedImageUrl && request.body.upd) {
    const user = db.get('users').find({ userId }).value();
    console.log(user);
    if (user) {
      db.get('users').find({ userId }).assign({ timestamp: Date.now(), publicId }).write();
    } else {
      db.get('users').push({ userId, timestamp: Date.now(), publicId }).write();
    }
    reply.send({ok: true});
    // bot.sendMessage(-1001160236729, `${Math.floor(Date.now() / 1000)}\nUser ${userId} started with public ${publicId}`);
  } else {
    reply.send({ok: false});
  }
});

fastify.post('/count/', countOpts, (request, reply) => {
  const { pixelCount, userId } = request.body;
  const user = db.get('users').find({ userId }).value();
  console.log(user);
  if (user) {
    db.update('pixelCount', x => x + 1).write();
    bot.sendMessage(-1001160236729, `User: *${userId}* pixel count: *${pixelCount}*`, { parse_mode: 'Markdown' });
    reply.send({ok: true});
  }
   else {
    reply.send({ok: false});
  }
});

fastify.post('/pixel/', pixelOpts, (request, reply) => {
  const { x, y, pxColor, userId } = request.body;
  const user = db.get('users').find({ userId }).value();
  console.log(user);
  if (user) {
    db.get('users').find({ userId }).assign({ timestamp: Date.now() }).write();
  } else {
    db.get('users').push({ userId, timestamp: Date.now(), publicId: '0' }).write();
  }
  db.get('pixelEvents').push({userId, x, y, pxColor, timestamp: Date.now() }).write();
  bot.sendMessage(-1001160236729, `${Math.floor(Date.now() / 1000)}\nUser *${userId}* placed *${pxColor}* on *(${x}, ${y})*`, { parse_mode: 'Markdown' });
  reply.send({ok: true});
});

fastify.listen(8080, '0.0.0.0', (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`)
});

bot.onText(/^\/count(?:@DvachBotBot)?$/, async (msg) => {
  const activeUsers = db.get('users').filter(o => o.timestamp > (Date.now() - 80000)).value();
  await bot.sendMessage(msg.chat.id, `Активных ботов на данный момент: *${activeUsers.length}*`, { parse_mode: 'Markdown' });
});

bot.onText(/^\/pixels(?:@DvachBotBot)?/, async (msg) => {
  const pixels = db.get('pixelEvents').filter(o => o.timestamp > (Date.now() - 300000)).size().value();
  await bot.sendMessage(msg.chat.id, `За последние 5 минут нарисовано *${pixels}* пикселей`, { parse_mode: 'Markdown' });
});

bot.onText(/^\/pixelTotal(?:@DvachBotBot)?/i, async (msg) => {
  const pixels = db.get('pixelEvents').size().value();
  await bot.sendMessage(msg.chat.id, `Всего с 7:40 12.10 ботами нарисовано *${pixels}* пикселей`, { parse_mode: 'Markdown' });
});

bot.onText(/^\/pixelCount(?:@DvachBotBot)?/i, async (msg) => {
  const pixels = db.get('pixelCount').value();
  await bot.sendMessage(msg.chat.id, `Осталось красить *${pixels}* пикселей`, { parse_mode: 'Markdown' });
});
