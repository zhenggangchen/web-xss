var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //把X-XSS-Protection响应设为0，让浏览器不对它拦截（好像没用？）
    res.set('X-XSS-Protection',0);
    res.render('index', {title: 'Express', xss: req.query.xss});
});

module.exports = router;
