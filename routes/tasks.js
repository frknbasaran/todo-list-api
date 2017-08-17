var express = require('express');
var router = express.Router();

const tasks = [{"id":0,"title":"Eve git."},{"id":1,"title":"React yaz."},{"id":2,"title":"CS oyna."}];

/* GET home page. */
router.get('/', function(req, res) {
  return res.json(res.json({"error":false,"data":tasks}));
});

/* GET home page. */
router.get('/:id', function(req, res) {
    if (tasks.indexOf(tasks[req.params.id]) !== -1) {
        res.json({"error":false,"data":tasks[req.params.id]});
    } else {
        res.json({"error":true,"data":{"message":"No found task."}});
    }

});

/* GET home page. */
router.put('/:id', function(req, res) {
    let task = tasks.find(task => task.id === req.params.id);
    tasks[tasks.indexOf(task)].title = req.body.title;
    res.json(tasks[tasks.indexOf(task)]);
});

router.post('/', function (req, res) {
    let task = {id:req.body.id, title:req.body.title};
    tasks.push(task);
    res.json(tasks);
})

module.exports = router;
