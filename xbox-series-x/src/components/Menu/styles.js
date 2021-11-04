import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  width: 441px;

  display: flex !important;
  align-items: center !important;
  justify-content: space-between;

  list-style: none;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7rem;
  letter-spacing: 0.01em;
  line-height: 2.1rem;
  text-decoration: none;

  &:hover {
    filter: brightness(0.8);
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonOrder = styled.a`
  background: #9bf00b;
  color: #0a0a0a;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.01em;
  line-height: 1.8rem;
  text-decoration: none;
  padding: 2.1rem 3rem;

  &:hover {
    filter: brightness(0.8);
    transition: all 0.2s ease-in-out;
  }
`;
