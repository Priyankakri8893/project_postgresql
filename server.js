const express = require('express')
const app = express()
const userRoute = require("./routes/user.route")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/user", userRoute)

app.listen(3000, () => console.log('express is running on port 3000'))
