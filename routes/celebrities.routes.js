// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
// all you(r routes here
  
router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrities");
});

router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((dbCelebritiy) => {
      //     console.log(`Celebrities were successfully added`)
      res.redirect('/celebrities')
    })
    .catch((err) => {
       res.render('/celebrities/new-celebrities')
    });
});
router.get("/", (req, res) => {
    Celebrity.find()
    .then(allCelebrities=>{
   res.render("celebrities/celebrities",{allCelebrities});
  })

  .catch((err)=>{
console.log (err)
  })
})
module.exports = router;
