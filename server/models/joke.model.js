const mongoose= require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"Setup to Joke Required"],
        minlength: [3,"Setup must be more than 2 characters"]
    },

    punchline:{
        type: String,
        require:[true, "Punchline required"],
        minlength: [2, "Punchline must be more than 1 character"]
    }

})

const Joke=mongoose.model("Joke", JokeSchema)

module.exports=Joke;