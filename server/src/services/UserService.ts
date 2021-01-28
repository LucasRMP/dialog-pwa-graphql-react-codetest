import { readFile } from '../utils/file'
import { User } from '../entities/User'

type FilterFunction = (value: User, index: number) => boolean | Promise<boolean>

export class UserService {
  static async find(filter?: FilterFunction): Promise<User[]> {
    const users = await readFile<User>('users')

    return filter ? users.filter(user => filter(user, user.index)) : users
  }
}
