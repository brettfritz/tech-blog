
const router = require('express').Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const dashboardController = require('../controllers/dashboardController');
const homeController = require('../controllers/homeController');
const withAuth = require('../utils/withAuth');

router.use('/users', userController);
router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/dashboard', dashboardController);
router.use('/home', homeController);

module.exports = router;
