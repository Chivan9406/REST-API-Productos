import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'

export async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    // console.log(colors.blue.bold('Database connected'))
  } catch (e) {
    console.log(colors.red.bold('Failed to connect to the database'))
  }
}

connectDB()

const server = express()
const corsOptions: CorsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:3000'
    ].filter(Boolean)

    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'), false)
    }
  },
  credentials: true
}
server.use(cors(corsOptions))
server.use(express.json())
server.use(morgan('dev'))
server.use('/api/products', router)
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default server