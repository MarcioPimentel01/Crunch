const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Running',
    message: 'Rest API is running'
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})