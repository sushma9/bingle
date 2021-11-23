const { PythonShell } = require('python-shell')
const path = require('path')

const sayHello = (req, res) => {
  // The query string
  console.log(req.query.query)

  let options = {
    mode: 'json',
    scriptPath: path.join(__dirname, '..', 'python'),
    args: [req.query.query],
  }

  PythonShell.run('script.py', options, function (err, results) {
    if (err) throw err

    // 'results' is an array consisting of messages collected during execution.
    // console.log('results: %j', results)
    // res.send(`<h2>${results[0]}</h2>`)
    res.send(results[0])
  })
}

module.exports = {
  sayHello,
}