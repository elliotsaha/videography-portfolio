import Button from '@/components/Button';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

const Home = () => (
  <Layout>
    <Header>TITLE</Header>
    <Button onClick={() => console.log('a')} size="lg">
      Hello
    </Button>
  </Layout>
);

export default Home;
