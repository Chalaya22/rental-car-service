import { NavMenu, HeaderWrapper, Container } from './Nav.styled';

export const Nav = () => {
  return (
    <HeaderWrapper>
      <Container>
        <NavMenu to="/">Home</NavMenu>
        <NavMenu to="/catalog">Catalog</NavMenu>
        <NavMenu to="/favorites">Favorites</NavMenu>
      </Container>
    </HeaderWrapper>
  );
};
