import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

export async function readFile<T>(identifier = 'users'): Promise<T[]> {
  try {
    const data = await promisify(fs.readFile)(
      path.resolve(__dirname, '..', 'data', `${identifier}.json`),
      { encoding: 'utf-8' },
    )

    if (!data) {
      return []
    }

    return JSON.parse(data)
  } catch (err) {
    console.log(err)
    throw new Error(`Path not found: ${identifier}`)
  }
}
