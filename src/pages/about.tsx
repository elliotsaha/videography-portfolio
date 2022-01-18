import { Layout, AboutSection, Box } from '@/components';

const About = () => (
  <Layout title="About">
    <Box minHeight="calc(100vh - 4rem)" pt="8">
      <AboutSection />
    </Box>
  </Layout>
);
export default About;
