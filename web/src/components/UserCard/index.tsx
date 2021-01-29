import React from 'react'
import { Img } from 'react-image'

import { User } from '../../generated/graphql'
import ImagePlaceholder from '../ImagePlaceholder'
import {
  Container,
  Info,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  ContentWrapper,
} from './styles'

type UserPick = Pick<
  User,
  'picture' | 'email' | '_id' | 'name' | 'age' | 'eyeColor' | 'company'
>

interface Props {
  data: UserPick
  onClick?: (_id: string) => void
}

const infoFields: Partial<keyof UserPick>[] = [
  'name',
  'age',
  'eyeColor',
  'company',
  'email',
]

function UserCard({ data, onClick }: Props) {
  return (
    <Container onClick={() => onClick?.(data._id)}>
      <ContentWrapper>
        <Img src={data.picture} loader={<ImagePlaceholder />} loading="lazy" />

        <Info>
          {infoFields.map(key => (
            <InfoItem key={key}>
              <InfoItemLabel>{key}: </InfoItemLabel>
              <InfoItemValue>{data[key]}</InfoItemValue>
            </InfoItem>
          ))}
        </Info>
      </ContentWrapper>
    </Container>
  )
}

export default UserCard
