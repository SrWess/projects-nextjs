import * as Styled from './styles';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <span className="hero__subtitle">Completely New</span>
        <h1 className="hero__title">Xbox Series X</h1>
        <p className="hero__description">
          Experience 12 teraflops of graphics processing power and 4K resolution
          at up to 120 fps second with Xbox Series X. *
        </p>
      </div>
      <div className="hero__image">
        <h1>Image XBOX</h1>
      </div>
    </div>
  );
};
