import express from 'express'
import { Routes } from './routes'

const app = express()
app.use(Routes)
app.listen(3000)
