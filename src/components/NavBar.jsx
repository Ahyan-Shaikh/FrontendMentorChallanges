import { styled } from "@linaria/react"

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 2.5rem 0;

  color: var(--color-primary);
`

function NavBar({children}) {
  return (
    <StyledNavBar>
      {children}
    </StyledNavBar>
  )
}
export default NavBar