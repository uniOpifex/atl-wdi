//======================
// requestUIREMENTS
//======================
// requestuire expresponses, router, mongoose, Donut schema
const express = require('express')
const router = express.Router()
const Schema= require("../models/donuts.js")

const DonutModel = Schema.DonutModel;

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
    DonutModel.find({})
        .then((donuts) => {
            response.render('donuts/index', {
                donuts
            })
        })
        .catch((err) => {
            response.send('things');
        })
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {
    response.render('donuts/new')
})



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
// router.get("/:id", (request, response) => {
//     const donutId = request.params.id

//     DonutModel.findById(donutId)
//         .then((donuts) => {
//             response.render('donuts/show', {
//                 donuts
//             })
//         })
//         .catch((err) => {
//             response.send("thing1s");
//         })
   
// })



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response) => {
    const newDonut = request.body
    DonutModel.create(newDonut)
        .then(() => {
            response.redirect('/')
        })
        .catch((err) => {
            response.send(err);
        })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it

router.get("/:id/edit", (request, response) => {

    const donutId = request.params.id
    DonutModel.findById(donutId)
        .then((donut) => {
            response.render('donuts/edit', {
                donut
            })
        })
        .catch((err) => {
            response.send('things');
        })
})

//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)

router.put('/:id', (request, response) => {
    const updatedDonut = request.body
    const donutId = request.params.id
    DonutModel.findByIdAndUpdate(donutId, updatedDonut, { new: true })
        .then(() => {
            response.redirect(`/${donutId}`)
        })
        .catch((err) => {
            response.send(err);
        })

})




//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"

router.delete('/:id', (request, response) => {
    const donutId = request.params.id
    DonutModel.findByIdAndRemove(donutId)
        .then((donut) => {
            response.redirect('/');
        })
        .catch((err) => {
            response.send(err);
        })
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router