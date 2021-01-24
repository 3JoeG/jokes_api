const express= require("express");
const cors = require("cors");
const port=8000;
const app=express();
const mongoose= require("mongoose");

app.use(cors());
app.use(express.json());

require("./server/config/mongoose.config");
require("./server/routes/jokes.routes")(app)





app.listen(port, ()=> console.log(`Listening on port ${port}`));