const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/create", (req, res) => {
  Celebrity.find().then((allCelebrities) => {
    res.render("movies/new-movie", { allCelebrities });
  });
});
router.post("/create", (req, res) => {
  console.log(`req.body=>`, req.body);
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then((dbMovie) => {
      //  console.log(`Movies were successfully added`)
      res.redirect("/movie");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/", (req, res) => {
  Movie.find()
    .then((allMovies) => {
      console.log(allMovies);
      res.render("movies/movies", { allMovies });
    })

    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .populate("cast")
    .then((foundmovie) => {
        console.log(foundmovie)
      res.render("movies/movie-details", { foundmovie });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.post("/:id/delete",(req,res)=>{
    const { id } = req.params;
    Movie.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/movie');
    })
    .catch((err) => {
      console.log(err);
    })
})
module.exports = router;
