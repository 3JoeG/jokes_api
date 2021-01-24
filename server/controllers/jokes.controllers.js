const Joke= require('../models/joke.model');

module.exports.findAllJokes = (req,res)=>{
    console.log("Searching")
    Joke.find()
        .then(allJokes => res.json({results: allJokes}))
        .catch(err=>res.json(err))
}

module.exports.createJoke = (req,res)=>{
    console.log("creating")
    Joke.create(req.body)
        .then(newJoke=>{results: newJoke})
        .catch(err=>res.json(err));
    
}

module.exports.oneJoke =(req,res) =>{
    console.log("Just this one", req.params.jokeId)
    Joke.findOne({_id:req.params.jokeId})
        .then(oneJoke => res.json({results: oneJoke}))
        .catch(err=>res.json(err))

}


module.exports.updateJoke =(req,res) =>{
    console.log("Update this one", req.params.jokeId)
    Joke.findOneAndUpdate({_id:req.params.jokeId},req.body,
    {
        new: true,
        runValidators:true,
        useFindAndModify:true
    })
    .then(updateJoke => res.json({results: updateJoke}))
    .catch(err=>res.json(err))
}

module.exports.deleteJoke =(req,res) =>{
    console.log("deleted this one", req.params.jokeId)
    Joke.findOneAndDelete({_id:req.params.jokeId})
    .then(deleteJoke => res.json({results: deleteJoke}))
    .catch(err=>res.json(err))
}