import * as express from 'express'
import * as cors from 'cors'
import * as bodyparser from 'body-parser'

import { requestLoggerMiddleware } from './request.logger.middleware'

const app = express()
app.use(cors())
app.use(bodyparser.json())

app.use(requestLoggerMiddleware)

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req: express.Request, resp: express.Response, next: express.NextFunction) => 
    resp.send('ようこそ Typescript+Expressの世界へ')
)

export { app }
