import * as Styled from './styles';

export const Menu = () => {
  return (
    <Styled.Nav>
      <Styled.NavList>
        <Styled.NavLink href="#">Browser</Styled.NavLink>
        <Styled.NavLink href="#">Games</Styled.NavLink>
        <Styled.NavLink href="#">Controller</Styled.NavLink>
        <Styled.NavLink href="#">Insides</Styled.NavLink>
      </Styled.NavList>

      <Styled.ButtonOrder href="#">
        Order Console
      </Styled.ButtonOrder>
    </Styled.Nav>
  );
};
