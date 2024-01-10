const Post = require('./models/post');

const createFakeData = () => {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'sdwfwqfewfewfewf',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts)
    .then((docs) => {
      console.log(docs);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = createFakeData;
