const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000 || process.env.PORT

//middleware
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))