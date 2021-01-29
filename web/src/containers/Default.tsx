import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

interface Props {
  children: JSX.Element
}

function DefaultLayout({ children }: Props) {
  return (
    <DefaultLayout.Container>
      <Header />
      {children}
    </DefaultLayout.Container>
  )
}

DefaultLayout.Container = styled.div`
  margin: 0 10%;
  min-height: 100vh;
  margin-bottom: 30px;
`

export default DefaultLayout
