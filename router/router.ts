import { IRouter, Router, Request, Response } from 'express'
import { author, description, name, version } from '../package.json'

const router: IRouter = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    Nombre: name,
    Descripcion: description,
    Version: version,
    Autor: author
  })
})

export default router
