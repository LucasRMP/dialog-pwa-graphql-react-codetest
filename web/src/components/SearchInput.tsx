import React from 'react'
import styled from 'styled-components'

interface Props {
  onSubmit: (text: string) => void
  initialValue?: string
}

function SearchInput({ onSubmit, initialValue = '' }: Props) {
  const [searchValue, setSearchValue] = React.useState(initialValue)

  return (
    <SearchInput.Container>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.currentTarget.value)}
        type="text"
        placeholder="search"
        aria-label="search"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            onSubmit(searchValue)
          }
        }}
      />
    </SearchInput.Container>
  )
}

SearchInput.Container = styled.div`
  min-width: 33%;

  input {
    height: 2.8rem;
    border-radius: 30px;
    padding: 12px;
    border: 1px solid #fff;
    color: #fff;
    width: 100%;
    font-size: 18px;
    transition: all 0.2s;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border-radius: 20px;
    transition: all 0.2s;

    &:focus {
      transform: scale(1.02);
      border-color: #00d4ff;
    }

    &::placeholder {
      color: #ddd;
    }
  }
`

export default SearchInput
