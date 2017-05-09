const Koa = require('koa');
import serverConfig from './config/server';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});
console.log(`please open http://localhost:${serverConfig.port}`);
app.listen(serverConfig.port);