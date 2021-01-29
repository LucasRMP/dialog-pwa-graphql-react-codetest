import React from 'react'
import styled from 'styled-components'

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-inbox"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
  </svg>
)

function NoData() {
  return (
    <NoData.Container>
      <Icon />
      Nada para mostrar
    </NoData.Container>
  )
}

NoData.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  img {
    color: #fff;
  }
`

export default NoData
