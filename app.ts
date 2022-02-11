import routerDrivers from './routes/drivers'
import routerOrders from './routes/orders'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(routerDrivers)
app.use(routerOrders)

export { app }
