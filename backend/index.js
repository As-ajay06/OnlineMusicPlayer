const express = require("express");
const app = express();
const userRouter = require('./src/routes/userRouter')
const artistRouter = require('./src/routes/artistRouter')

const port = 3000;


app.use(express.json())
app.use("/api/v1/user", userRouter)
app.use("/api/v1/spotify", artistRouter)
  

app.listen(port, console.log("listening on port " + port))