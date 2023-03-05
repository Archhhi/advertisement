import styled from 'styled-components'

export const CardLoader = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt
}))`
  width: 32px;
  height: 32px;
  object-fit: cover;
`
