import { styled } from "@linaria/react"

const StyledTitle = styled.h1`
  letter-spacing: 0.4rem;
`

function Title ({ title }) {
  return <StyledTitle>{title}</StyledTitle>
}
export default Title