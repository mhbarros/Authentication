import { Router } from 'express'
import { UserRoutes } from './auth.route'

const Routes = Router()

Routes.use('/user', UserRoutes)

export { Routes }
