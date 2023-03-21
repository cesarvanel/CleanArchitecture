import express, { type Application } from 'express'
import http from 'http'

class App {
  private readonly express: Application
  private readonly port: number
  private readonly httpServer: http.Server

  constructor (port: number) {
    this.port = port
    this.express = express()
    this.httpServer = http.createServer(this.express)
  }

  public listen = (): void => {
    this.httpServer.listen(this.port, () => {
      console.log('server is laungh')
    })
  }
}

export default App
