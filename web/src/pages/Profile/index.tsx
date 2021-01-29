import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

import GridList from '../../components/GridList'
import Spinner from '../../components/Spinner'
import UserCard from '../../components/UserCard'
import { User, useUserDetailsQuery } from '../../generated/graphql'
import { Container, Title } from './styles'

interface Params {
  id: string
}

const Profile: React.FC = () => {
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
        <img src={user.picture} alt="userPicture" />

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

const UserContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 1rem;
  font-size: 24px;
  width: 100%;
  flex-wrap: wrap;

  img {
    width: 160px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Info = styled.div`
  margin-top: 0.5rem;
`

const InfoItem = styled.div`
  display: flex;
  gap: 5px;
`

const InfoItemLabel = styled.strong``

const InfoItemValue = styled.span`
  word-break: break-word;
`

export default Profile
