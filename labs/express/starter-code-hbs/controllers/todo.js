const express = require("express");
const router = express.Router();
const data = require("../data.js");


/* INDEX TODOS */
router.get('/', function(req,res) {
    res.render('todos/index', {
        todos: data.seededTodos
    });
});

/*
SHOW TODS
*/

router.get('/:id', (req, res) => {
        const id = req.params.id;
        const todo = data.seededTodos.Todos[id];
        if (!todo){
        res.render('todos/show', {
            //todo,
            error: "no to-do found with this ID"
        })
    } else {
        res.render('todos/show', {
            //todo,
            error: "no to-do found with this ID"
        })
    }
})


module.exports = router;



