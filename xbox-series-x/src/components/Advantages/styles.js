import styled from 'styled-components';


export const AdvantagesContainer = styled.section`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 84px auto;
`

export const AdvantagesItem = styled.div`
  width: 165px;
`

export const AdvantageName = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
