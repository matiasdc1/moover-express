import { app } from './app'
import { env } from './env'
import fs from 'fs'
import http from 'http'
import https from 'https'

const httpsPort = env.HTTPS_PORT || '3000'
const httpPort = env.HTTP_PORT || '3030'

const key = fs.readFileSync(__dirname + '/certificates/ssl.key')
const cert = fs.readFileSync(__dirname + '/certificates/ssl.crt')

const options = {
  // requestCert: true,
  // rejectUnauthorized: false,
  key: key,
  cert: cert,
}

http.createServer(app).listen(httpPort, () => {
  console.log(`server started at http://localhost:${httpPort}`)
})

https.createServer(options, app).listen(httpsPort, () => {
  console.log(`server started at https://localhost:${httpsPort}`)
})
