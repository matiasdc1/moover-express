import { Driver } from '../models/models'
import { Router } from 'express'
import type { Response, Request } from 'express'

const routerDrivers = Router()

routerDrivers.get('/drivers', async (_req: Request, res: Response) => {
  try {
    const users = await Driver.findAll({})
    res.status(200).send({ data: users })
  } catch (e: any) {
    res.status(400).send({ error: e })
  }
})

export default routerDrivers
