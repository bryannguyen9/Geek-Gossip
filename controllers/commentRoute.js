const router = require('express').Router();
const { Comment } = require('../models');

router.post('/post/:id/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;