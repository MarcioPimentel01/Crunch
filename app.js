const express = require('express')

const userRoutes = require('./routes/userRoutes')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Running',
    message: 'Rest API is running'
  })
})

// ! Routes go here

app.use('/api/v1/auth', userRoutes)


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})