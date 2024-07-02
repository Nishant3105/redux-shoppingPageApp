import Card from '../UI/Card';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Card>
      <MainHeader />
      <main>{props.children}</main>
    </Card>
  );
};

export default Layout;
