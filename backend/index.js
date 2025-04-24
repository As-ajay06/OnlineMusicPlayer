const express = require("express");
const app = express();
const userRouter = require('./src/routes/userRouter')
const adminRouter = require('./src/routes/adminRouter')
const spotifyRouter = require('./routes/spotifyRouter')

const port = 3000;


app.use(express.json())

app.use("api/v1/user", userRouter)
app.use("api/v1/admin", adminRouter)
app.use("api/v1/spotify", spotifyRouter)

  

app.listen(port, console.log("listening on port " + port))