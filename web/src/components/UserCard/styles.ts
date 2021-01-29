import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #aaa;
  width: auto;
  padding: 25px 15px;
  border-radius: 30px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  transition: all 0.2s;

  img {
    width: 100%;
    max-width: 200px;
    align-self: center;
  }

  &:hover {
    transform: scale(1.06);
  }

  &:active {
    transform: scale(1.02);
  }
`

export const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.div`
  margin-top: 0.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  gap: 5px;
`

export const InfoItemLabel = styled.strong``

export const InfoItemValue = styled.div`
  word-break: break-word;
`
