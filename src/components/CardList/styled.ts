import styled from 'styled-components'

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 224px 224px 224px 224px;
  gap: 24px;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 224px 224px 224px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 224px 224px;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 224px;
  }
`

export const BottomContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ShowMore = styled.span`
  font-weight: 500;
  color: #00a0ab;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const NoCardsText = styled.span`
  font-weight: 500;
  color: #00a0ab;
`
