import express from 'express';

const router = express.Router();

let tasks = [{"id": 0, "title": "Eve git."}, {"id": 1, "title": "React yaz."}, {"id": 2, "title": "CS oyna."}];

router.get('/', (req, res) => {
    setTimeout(() => {
        res.json({"error": false, "data": tasks});
    }, 1500);
});

router.get('/:id', (req, res) => {
    if (tasks.indexOf(tasks[req.params.id]) !== -1) {
        res.json({"error": false, "data": tasks[req.params.id]});
    } else {
        res.json({"error": true, "data": {"message": "No found task."}});
    }
});

router.delete('/:id', (req, res) => {
    var modifiedTasksList = tasks.filter(task => parseInt(task.id) !== parseInt(req.params.id));

    tasks = modifiedTasksList;
    res.json({"error": false, "data": modifiedTasksList});
})

router.put('/:id', (req, res) => {
    if (tasks.indexOf(tasks[req.params.id]) !== -1) {
        tasks[req.params.id].title = req.body.title;
        res.json({"error": false, "data": tasks[req.params.id]});
    } else res.json({"error": true, "data": {"message": "Not found data."}});
});

router.post('/', (req, res) => {
    let task = {id: parseInt(tasks[tasks.length - 1].id) + 1, title: req.body.title};
    tasks.push(task);
    setTimeout(() => {
        res.json({"error": false, "data": tasks});
    }, 1500);

})

export default router;
