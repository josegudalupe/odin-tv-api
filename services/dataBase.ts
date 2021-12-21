import mongoose from 'mongoose'
import { database } from '../config.json'

export const connectToTheDB = async () => {
  return await mongoose.connect(
    database['db-uri'],
    {
      dbName: database['db-name']
    }
  )
}
