import app from '../app'
import http from 'node:http'
import { Listr } from 'listr2'
import { server } from '../config.json'
import { connectToTheDB } from '../services/dataBase'
import { validateConfiguration } from '../lib/validateConfiguration'

(async () => {
  interface Ctx {}
  const task = new Listr<Ctx>(
    [
      {
        title: 'Preparando Servidor',
        task: (ctx, task): Listr =>
          task.newListr(
            [
              {
                title: 'Verificando configuracion',
                task: () => validateConfiguration()
              },
              {
                title: 'Conectando con la BD',
                task: async () => await connectToTheDB()
              },
              {
                title: 'Iniciando Servidor',
                task: () => http.createServer(app).listen(server.port)
              }
            ],
            {
              concurrent: true,
              rendererOptions: {
                collapse: false,
                clearOutput: true,
                showErrorMessage: true
              }
            }
          )
      }
    ])

  await task.run()
})()
