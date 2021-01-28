import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class Friend {
  @Field()
  _id: string

  @Field(() => Int)
  index: number

  @Field()
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
  email: string

  @Field()
  phone: string
}
