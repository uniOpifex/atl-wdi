const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');


// INDEX PIRATES
 router.get("/", (req, res) => {
     res.render("pirates/index", {
         pirates: pirates.seededPirates
     })
 })
 // NEW PIRATES
router.get("/new", (req, res) => {
    res.render('pirates/new');
})


 // SHOW PIRATES
router.get("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates.seededPirates[id];
    res.render('pirates/show',{
    pirate: pirate
    });
})
 // POST PIRATES

 router.post('/', (req, res) => {
     console.log(req.body);
     const newPirate = req.body;
     pirates.seededPirates.push(newPirate);
     res.redirect('/pirates');

 })
//==============================
// EDIT
//==============================
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirates: {
            id: req.params.id,
            name: pirates.seededPirates[req.params.id].name,
            birthplace: pirates.seededPirates[req.params.id].birthplace,
            death_year: pirates.seededPirates[req.params.id].death_year,
            base: pirates.seededPirates[req.params.id].base,
            nickname: pirates.seededPirates[req.params.id].nickname
        }
    })
})



//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) => {
    console.log(req.body)
    const pirateToEdit = pirates.seededPirates[req.params.id];

    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;
    res.redirect('/pirates');
})


//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
pirates.seededPirates.splice(req.params.id, 1);
res.redirect("/pirates");
});




module.exports = router;
