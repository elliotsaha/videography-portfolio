import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home = () => (
  <Layout>
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Button size="sm">Hello</Button>
      <Button size="md">Hello</Button>
      <Button size="lg" variant="outline">
        Hello
      </Button>
    </div>
  </Layout>
);

export default Home;
