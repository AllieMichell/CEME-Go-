const router = require('express').Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');

// MODULES OF BODY PARSER TO HAVE MAJOR SKILLS SEND DATA
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', (req, res) => {
  res.send('Hi API User');
});

/** @ROUTES OF APIS */
router.post('/newUser', userController.newUser);
router.get('/usersList', userController.userList);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser/:_id', userController.deleteUser);

router.get('/id/:_id', userController.findID);
router.get('/username/:username', userController.findNAME);

module.exports = router;
