import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

export async function readFile<T>(identifier = 'users'): Promise<T[]> {
  try {
    const data = await promisify(fs.readFile)(
      path.join(__dirname, '..', 'data', `${identifier}.json`),
      { encoding: 'utf-8' },
    )

    if (!data) {
      return []
    }

    return JSON.parse(data)
  } catch {
    throw new Error(`Path not found: ${identifier}`)
  }
}

// const writeFile = (
//   fileData,
//   callback,
//   filePath = dataPath,
//   encoding = 'utf8',
// ) => {
//   fs.writeFile(filePath, fileData, encoding, err => {
//     if (err) {
//       throw err
//     }

//     callback()
//   })
// }
