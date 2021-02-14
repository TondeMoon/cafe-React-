import Name from './Name';
import MainText from './MainText';
import Buttons from './Buttons';
import Header from '../headerMenu/Header';
import Description from './Description';
import Address from './Address';
import background from './../../back.jpg';

const MainPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <Name />
        <MainText />
        <Buttons />
      </div>
      <Description />
      <Address />
    </div>
  );
};

export default MainPage;
