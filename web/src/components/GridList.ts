import styled from 'styled-components'

const GridList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default GridList
