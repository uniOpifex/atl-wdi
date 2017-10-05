// var mongoose = require("mongoose");
// var Donut = require("./donuts.js");


// mongoose.connect('mongodb://localhost/donut');

// const db = mongoose.connection;

// // Will log an error if db can't connect to MongoDB
// db.on('error', function (err) {
//     console.log(err);
// });

// // Will log "database has been connected" if it successfully connects.
// db.once('open', function () {
//     console.log("database has been connected!");
// });

// var DonutModel = Donut.DonutModel;

// // First we clear the database of existing students and projects.
// DonutModel.remove({}, function (err) {
//     console.log(err);
// });



// var Sprinkles = new DonutModel({
//     name: "Sprinkles",
//     description: "A lotta sprinkles, a lotta yum.",
//     img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
//     price: 5,
//     qty: 99
// });
// var PlainOleDount = new DonutModel({
//     name: "Plain Ole Donut",
//     description: "Plain donut for plain people.",
//     img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg",
//     price: 25,
//     qty: 15
// });
// var Chocolate = new DonutModel({
//     name: "Chocolate",
//     description: "Chocolate Donut nom nom nom",
//     img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg",
//     price: 7000,
//     qty: 1
// });
// var DonutHoles = new DonutModel({
//     name: "Donut Holes",
//     description: "For the snackers.",
//     img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg",
//     price: 10,
//     qty: 23
// });




// // // Now, we will generate instances of a Student and of their Project.
// // var becky = new StudentModel({ name: "Becky", age: 29 });
// // var brandon = new StudentModel({ name: "Brandon", age: 29 });
// // var steve = new StudentModel({ name: "Steve", age: 29 });

// // var project1 = new ProjectModel({ title: "Project 1!!", unit: "JS" });
// // var project2 = new ProjectModel({ title: "Project 2!!", unit: "Express" });
// // var project3 = new ProjectModel({ title: "Project 3!!", unit: "React" });
// // var project4 = new ProjectModel({ title: "Project 4!!", unit: "Rails" });

// // // create two arrays that we can iterate over
// // var students = [becky, brandon, steve];




// // Disconnect from database
// db.close();
