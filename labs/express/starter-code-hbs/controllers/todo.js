const express = require("express");
const router = express.Router();
const data = require("../data.js");


/* INDEX TODOS */
router.get('/', function(req,res) {
    res.render('todos/index', {
        todos: data.seededTodos
    });
});


module.exports = router;



