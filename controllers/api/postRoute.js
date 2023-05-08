const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const moment = require('moment');
//require sequelize

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_content', 'user_id', 'post_id', 'created_at'],
          include: {
            model: User,
            attributes: ['name'],
          },
          // format created_at timestamp using Moment.js
          order: [['created_at', 'ASC']],
          attributes: [
            'id',
            'comment_content',
            'user_id',
            'post_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE comment.id = vote.comment_id)'), 'vote_count'],
            'created_at',
            [sequelize.literal(`(SELECT IFNULL(VALUE, 0) FROM vote WHERE comment.id = vote.comment_id AND vote.user_id = ${req.session.user_id})`), 'user_vote']
          ],
          // add a formatted_created_at virtual property to each comment object
          // using Moment.js to format the timestamp
          // example format: May 7th 2023, 5:28:12 pm
          include: [
            [
              sequelize.literal(`DATE_FORMAT(comment.created_at, '%M %D %Y, %h:%i:%s %p')`),
              'formatted_created_at',
            ],
          ],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = postData.get({ plain: true });

    // format post created_at using Moment.js
    post.formatted_created_at = moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a');

    // format each comment's created_at using Moment.js
    post.comments = post.comments.map((comment) => {
      return {
        ...comment,
        formatted_created_at: moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a'),
      };
    });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;