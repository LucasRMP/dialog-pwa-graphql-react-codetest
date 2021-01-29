import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Title = styled.strong`
  display: block;
  font-size: 28px;
  margin-bottom: 0.5rem;
`

export const UserContainer = styled.div`
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

export const Info = styled.div`
  margin-top: 0.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  gap: 5px;
`

export const InfoItemLabel = styled.strong``

export const InfoItemValue = styled.span`
  word-break: break-word;
`
