import 'reflect-metadata'
import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

config()
import initApolloServer from './apolloServer'

async function init() {
  const app = express()

  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
  app.use(
    cors({
      origin: process.env.WEB_APP_URL!,
    }),
  )

  await initApolloServer(app)

  const port = process.env.PORT || 4000
  app.listen(port, () => {
    console.log(`Your server is running on port ${port}`)
  })
}
init()
