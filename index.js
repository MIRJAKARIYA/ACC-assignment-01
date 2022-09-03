const express = require("express");
const cors = require("cors");
const usersRouter = require('./routes/v1/users.route');


const app = express();
const port = process.env.PORT || 5000;

//global middlewares
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

//routes
app.use('/user',usersRouter)



app.get("/", (req, res) => {
   res.render("home.ejs",{
    port: port
   })
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


//for no routes found
app.all("*",(req, res)=>{
    res.send("No route found")
  });


//for error which express can't handle'

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
