import { Router } from 'express'

const UserRoutes = Router()
UserRoutes.post('/', (req, res) => {
  res.json({ page: 'User Login' })
})
UserRoutes.post('/register', (req, res) => {
  res.json({ page: 'User Register' })
})

export { UserRoutes }
