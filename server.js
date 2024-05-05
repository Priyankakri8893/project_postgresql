const express = require('express')
const app = express()
require("./db/postgresql")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => console.log('express is running on port 3000'))
