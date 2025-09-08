import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.blue.bold('Database connected'))
  } catch (e) {
    console.log(colors.red.bold('Failed to connect to the database'))
  }
}

connectDB()

const server = express()
server.use(express.json())
server.use('/api/products', router)

export default server