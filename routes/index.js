var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //��X-XSS-Protection��Ӧ��Ϊ0������������������أ�����û�ã���
    res.set('X-XSS-Protection',0);
    res.render('index', {title: 'Express', xss: req.query.xss});
});

module.exports = router;
