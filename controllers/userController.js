

const signup = async (req, res, next) => {
  res.json({
    status: 'success',
    message: 'Signup route is running'
  })
}

// !Exporting inside the object allows you to export multiple entities from a single module. 
module.exports = { signup }

