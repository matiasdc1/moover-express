import { env } from '../env'
import { Sequelize } from 'sequelize'

const { AWS_USERNAME, AWS_ENDPOINT, AWS_NAME, AWS_PASSWORD } = env

const db = new Sequelize(AWS_NAME, AWS_USERNAME, AWS_PASSWORD, {
  host: AWS_ENDPOINT,
  dialect: 'mysql',
  logging: false,
})

const main = async () => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()

export { db }
