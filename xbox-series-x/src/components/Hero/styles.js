import styled, { css } from 'styled-components';

export const HeroContainer = styled.main`
  width: 70%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const HeroSubtitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2.1rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  line-height: 2.5rem;
  letter-spacing: 0.03em;
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 17.1rem;
  line-height: 90.8%;
  letter-spacing: -0.03em;
`;

export const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 150%;
  letter-spacing: -0.03em;
  max-width: 500px;
`;

export const HeroImageContainer = styled.div`

`;
