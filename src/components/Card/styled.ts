import styled from 'styled-components'

export const CardWrapper = styled.div<{ seen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 224px;
  border-radius: 8px;
  background: ${({ seen }) => (seen ? '#FFF6A5' : '#ffffff')};
  font-family: sans-serif;
`

export const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 260px;
`

export const CardImage = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt
}))`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`

export const SeenWrapper = styled.div`
  position: absolute;
  padding: 5px 8px;
  top: 17px;
  left: 25%;
  border-radius: 8px;
  background-color: rgba(44, 44, 44, 0.74);
`

export const Seen = styled.span`
  color: #ffffff;
`

export const SliderIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: absolute;
  bottom: 36px;
  right: 10px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 11px;
  padding: 5px 12px;
`

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #5a5a5a;
`

export const Price = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #2c2c2c;
`

export const IconWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
`

export const IconSlider = styled.div`
  display: flex;
  fill: #ffffff;

  &:hover {
    fill: #00a0ab;
    cursor: pointer;
  }
`

export const IconContent = styled.div`
  display: flex;
  fill: #c7c7c7;

  &:hover {
    fill: #00a0ab;
    cursor: pointer;
  }
`

export const Title = styled.span`
  font-weight: 500;
  color: #2c2c2c;
`

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const Locality = styled.span`
  font-size: 12px;
  color: #8f8f8f;
`

export const Date = styled.span`
  font-size: 12px;
  color: #8f8f8f;
`
