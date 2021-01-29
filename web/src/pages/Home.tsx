import React from 'react'
import { useHistory } from 'react-router'

import UserCard from '../components/UserCard'
import { useUsersListQuery } from '../generated/graphql'
import useSearch from '../hooks/useSearch'
import Spinner from '../components/Spinner'
import NoData from '../components/NoData'
import GridList from '../components/GridList'

function Home() {
  const { query } = useSearch()
  const { data, loading, error } = useUsersListQuery({
    variables: { search: query },
  })
  const history = useHistory()

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (error || data?.list.length === 0) {
    return <NoData />
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
