import Image from 'next/image';

import * as Styled from './styles';

import ImgAdvantage4k from '../../assets/img/advantage4K.png';
import ImgAdvantageHDR from '../../assets/img/advantageHDR.png';
import ImgAdvantage120FPS from '../../assets/img/advantage120FPS.png';
import ImgAdvantageVelocity from '../../assets/img/advantageVelocity.png';

export const Advantages = () => {
  return (
    <Styled.AdvantagesContainer>
      <Styled.AdvantagesItem>
        <Image src={ImgAdvantage4k} width={92} height={70} />
        <Styled.AdvantageName>True gaming</Styled.AdvantageName>
      </Styled.AdvantagesItem>
      <Styled.AdvantagesItem>
        <Image src={ImgAdvantageHDR} width={92} height={70} />
        <Styled.AdvantageName>High Dynamic Range</Styled.AdvantageName>
      </Styled.AdvantagesItem>
      <Styled.AdvantagesItem >
        <Image src={ImgAdvantage120FPS} width={92} height={70} />
        <Styled.AdvantageName>Frame per second</Styled.AdvantageName>
      </Styled.AdvantagesItem>
      <Styled.AdvantagesItem>
        <Image src={ImgAdvantageVelocity} width={92} height={70} />
        <Styled.AdvantageName>Velocity Architecture</Styled.AdvantageName>
      </Styled.AdvantagesItem>
    </Styled.AdvantagesContainer>
  );
};
