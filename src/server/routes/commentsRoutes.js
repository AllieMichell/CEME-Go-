const router = require('express').Router();
const bodyParser = require('body-parser');
const commentsController = require('../controllers/commentController');

// MODULE OF BODY PARSER TO HAVE MAJOR SKILLS SENDIND DATA
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** @ROUTE_TEST */
router.get('/', (req, res) => {
  res.send('Hi API Comments');
});

/** @ROUTES_OF_APIs_COMMENTS */
router.post('/newComment', commentsController.newComment);
router.get('/commentsList', commentsController.commentsList);

module.exports = router;
