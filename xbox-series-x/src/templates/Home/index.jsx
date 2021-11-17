import { Advantages } from '../../components/Advantages';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

export const Home = () => {
  return (
    <div className="container">
      <Header />

      <Hero />
      <Advantages />
    </div>
  );
};
