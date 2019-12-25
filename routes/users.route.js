const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'public/uploads' });
const controller = require('../controllers/users.controller');
const validation = require('../validation/users.validation');

router.get('/', controller.index);

router.get('/test', controller.test);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:studentID', controller.getDetail);

router.post('/create', upload.single('avatar'), validation.postCreate, controller.postCreate);


module.exports = router;