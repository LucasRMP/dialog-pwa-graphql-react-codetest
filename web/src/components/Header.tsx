import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { useSearch } from '../hooks/useSearch'
import SearchInput from './SearchInput'

function Header() {
  const history = useHistory()
  const { query, setQuery } = useSearch()

  return (
    <Header.Container>
      <Header.Logo to="/">MySocial</Header.Logo>

      <SearchInput
        initialValue={query}
        onSubmit={query => {
          if (history.location.pathname !== '/') {
            history.push('/')
          }

          console.log(query)
          setQuery(query)
        }}
      />
    </Header.Container>
  )
}

Header.Container = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  padding: 1rem 0;
  margin-bottom: 1rem;
`

Header.Logo = styled(Link)`
  color: #fff;

  padding: 1rem 0;
  font-size: 28px;
`

export default Header
