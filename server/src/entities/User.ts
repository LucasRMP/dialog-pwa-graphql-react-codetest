import { Field, Int, ObjectType } from 'type-graphql'

import { Friend } from './Friend'

@ObjectType()
export class User {
  @Field({ nullable: false })
  _id: string

  @Field({ nullable: false })
  email: string

  @Field(() => Int)
  index: number

  @Field({ nullable: false })
  picture: string

  @Field(() => Int)
  age: number

  @Field()
  eyeColor: string

  @Field()
  name: string

  @Field()
  company: string

  @Field()
  phone: string

  @Field()
  greeting: string

  @Field(() => [Friend])
  friends: Friend[]
}
