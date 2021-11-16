import Image from 'next/image';

import * as Styled from './styles';

import ImgXboxOne from '../../assets/img/xbox-one.png';

export const Hero = () => {
  return (
    <Styled.HeroContainer>
      <Styled.HeroWrapper>
        <Styled.HeroSubtitle>Completely New</Styled.HeroSubtitle>
        <Styled.HeroTitle>Xbox Series X</Styled.HeroTitle>
        <Styled.HeroDescription>
          Experience 12 teraflops of graphics processing power and 4K resolution
          at up to 120 fps second with Xbox Series X. *
        </Styled.HeroDescription>
      </Styled.HeroWrapper>
      <Styled.HeroImageContainer>
        <Image src={ImgXboxOne} />
      </Styled.HeroImageContainer>
    </Styled.HeroContainer>
  );
};
