import Joi from 'joi'
import data from '../config.json'

export const validateConfiguration = () => {
  const validationResult = Joi.object({
    database: Joi.object({
      'db-name': Joi.string().required(),
      'db-uri': Joi.string().required()
    }),
    server: Joi.object({
      port: Joi.number().integer().required()
    })
  }).validate(data)

  if (!validationResult.error) return

  throw new Error(validationResult.error.message)
}
