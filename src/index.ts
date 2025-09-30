import server, { connectDB } from './server'
import colors from 'colors'

const port = process.env.PORT || 3000

async function startServer() {
  try {
    console.log(colors.yellow.bold('Connecting to the database...'))
    await connectDB()

    server.listen(port, () => {
      console.log(colors.cyan.bold(`REST API running on port: ${ port }`))
    })
  } catch (e) {
    console.log(colors.red.bold('✗ Failed to start the server'), e)
    process.exit(1)
  }
}

startServer()
  .catch(e => {
    console.log(colors.red.bold('✗ Fatal error during startup'), e)
    process.exit(1)
  })
