import React from 'react'
import GridList from '../components/GridList'
import { useHistory } from 'react-router'

import UserCard from '../components/UserCard'
import { useUsersListQuery } from '../generated/graphql'
import { useSearch } from '../hooks/useSearch'
import Spinner from '../components/Spinner'

const Home: React.FC = () => {
  const { query } = useSearch()
  const { data, loading, error } = useUsersListQuery({
    variables: { search: query },
  })
  const history = useHistory()

  if (loading || error) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (data?.list.length === 0) {
    return <div>Sem dados :(</div>
  }

  return (
    <GridList>
      {data?.list.map(user => (
        <UserCard
          key={user._id}
          data={user}
          onClick={id => history.push(`/${id}`)}
        />
      ))}
    </GridList>
  )
}

export default Home
