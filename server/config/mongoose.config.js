const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/assign_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log("connected to the database"))
.catch(err=>console.log("database connection error, err"))