const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router();
posts.get('/', postsCtrl.read);
posts.delete('/', postsCtrl.remove);
posts.patch('/', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

module.exports = posts;
