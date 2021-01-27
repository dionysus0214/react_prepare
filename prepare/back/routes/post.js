const express = require('express');

const {Post, User, Image, Comment} = require('../models');
const {isLoggedIn} = require('./middlewares');

const router = express.Router();
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,   
    });
    const fullPost = await Post.findOne({
      where: {id: post.id},
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: user,
          attribute: ['id', 'nickname'],
        }]
      }, {
        model: User,
        attribute: ['id', 'nickname'],
      }]
    })
    res.status(201).json(post);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: {id: comment.id},
      include: [{
        model: User,
        attribute: ['id', 'nickname'],
      }],
    })
    res.status(201).json(post);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.delete('/', (req, res) => {
  res.json({id:1});
});

module.exports = router;