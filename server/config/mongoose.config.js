const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost/joking",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connection Successful"))
    .catch(err => console.log("Connection FAILED",err))