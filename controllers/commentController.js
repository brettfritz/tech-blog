// routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

// Create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get all comments for a specific post
router.get('/:postId', async (req, res) => {
  try {
    const commentsData = await Comment.findAll({
      where: { post_id: req.params.postId },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json(commentsData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a comment
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!updatedComment[0]) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
