const JokesController = require("../controllers/jokes.controllers");


module.exports=app=>{
    app.get("/api/jokes", JokesController.findAllJokes)
    app.post("/api/jokes/create", JokesController.createJoke)
    app.get("/api/jokes/:id", JokesController.oneJoke)
    app.put("/api/jokes/update/:id",JokesController.updateJoke)
    app.delete("/api/joke/delete/:id",JokesController.deleteJoke)
}