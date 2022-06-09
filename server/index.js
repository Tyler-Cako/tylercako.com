const express = require('express')
const app = express()
const port = 5001 || process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})