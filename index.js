const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yolo123333 444344!')
})
app.listen(process.env.PORT || 3000)