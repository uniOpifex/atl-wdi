const express = require("express");
const router = express.Router();
const data = require("../recipes.js");


/* INDEX TODOS */


router.get('/', (req, res) =>{
    res.render('recipes/index', {
        recipes: data.seededRecipes
    })
})

router.get('/:recipe', (req,res) => {
    const recipe = req.params.recipe;
    const recipeList = data.seededRecipes[id];
    res.render('recipes/show', {recipeList})
})

/*
SHOW TODS
*/

// router.get('/:id', (req, res) => {
//         const id = req.params.id;
//         const todo = data.seededTodos[id];
//         if (!todo){
//         res.render('todos/show', {
//             //todo,
//             error: "no to-do found with this ID"
//         })
//     } else {
//         res.render('todos/show', {todo})
//     }
// })

// router.post('/', (req, res) => {
//         console.log('req.body');
//         const newTodo = req.body;
//         data.seededTodos.push(newTodo);
//         res.redirect("/todos");              
// });



module.exports = router;



