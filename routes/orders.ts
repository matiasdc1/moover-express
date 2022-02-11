import { Driver, Order } from '../models/models'
import { Router } from 'express'
import moment from 'moment'
import { nanoid } from 'nanoid'
import type { Response, Request } from 'express'

const routerOrders = Router()

routerOrders.get('/orders', async (req: Request, res: Response) => {
  if (!req.query.id) {
    res.status(400).send({ error: 'Missing order id.' })
    return
  }
  try {
    const orders = await Order.findAll({
      where: {
        //@ts-ignore
        id: req.query.id,
      },
      include: [
        {
          model: Driver,
          as: 'driver',
          attributes: ['id', 'name'],
        },
      ],
    })

    res.status(200).send({ data: orders[0] })
  } catch (e) {
    res.status(400).send({ error: e })
  }
})

routerOrders.post('/orders', async (req: Request, res: Response) => {
  const { driverId, dirPick, dirDel, dateStarted } = req.body
  const id = nanoid()
  const status = 1
  const dateExpected = moment(dateStarted).add(10, 'days').toISOString()
  const dateFinished = ''
  try {
    const order = await Order.create({
      id,
      driverId,
      status,
      dirPick,
      dirDel,
      dateStarted,
      dateExpected,
      dateFinished,
    })

    res.status(200).send({ data: order })
  } catch (e) {
    res.status(400).send({ error: e.errors })
  }
})

export default routerOrders
