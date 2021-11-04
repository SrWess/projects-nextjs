import Image from 'next/image'

import { Menu } from '../Menu';
import LogoSrc from '../../assets/img/logo.png';

import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.LogoContainer>
        <Image src={LogoSrc} height={44} width={144}/>
      </Styled.LogoContainer>

      <Styled.MenuContainer>
        <Menu />
      </Styled.MenuContainer>
    </Styled.Header>
  );
};
