const router = require("express").Router();

const movieRoute = require('./movies.routes');
const celebrityRoute = require('./celebrities.routes')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// const movieRoutes = require("./movies.routes")
// app.use('/movie', movieRoutes)

module.exports = (app) => {
 app.use('/', router);
 app.use('/movie', movieRoute);
 app.use('/celebrities', celebrityRoute);
}

// module.exports = router

