import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

dotenv.config()

const isProduction = process.env.NODE_ENV === 'production'

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [ __dirname + '/../models/**/*' ],
  logging: !isProduction ? console.log : false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: isProduction ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
})

export default db