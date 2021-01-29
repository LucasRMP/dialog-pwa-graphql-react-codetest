import React from 'react'
import { Img } from 'react-image'
import { useParams } from 'react-router'

import GridList from '../../components/GridList'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import Spinner from '../../components/Spinner'
import UserCard from '../../components/UserCard'
import { User, useUserDetailsQuery } from '../../generated/graphql'
import {
  Container,
  Title,
  Info,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  UserContainer,
} from './styles'

interface Params {
  id: string
}

function Profile() {
  const { id } = useParams<Params>()
  const { data, loading } = useUserDetailsQuery({ variables: { id } })

  const user = React.useMemo(() => {
    if (!data) return
    return data.find
  }, [data])

  if (!user || loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <Container>
      <UserContainer>
        <Img
          src={user.picture}
          loader={<ImagePlaceholder />}
          alt="userProfileImage"
          loading="lazy"
        />

        <Info>
          <InfoItem>
            <InfoItemLabel>name: </InfoItemLabel>
            <InfoItemValue>{user.name}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>age: </InfoItemLabel>
            <InfoItemValue>{user.age}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>email: </InfoItemLabel>
            <InfoItemValue>{user.email}</InfoItemValue>
          </InfoItem>
        </Info>
      </UserContainer>

      <Title>Friends:</Title>
      <GridList>
        {user.friends.map(friend => (
          <UserCard data={friend as User} />
        ))}
      </GridList>
    </Container>
  )
}

export default Profile
