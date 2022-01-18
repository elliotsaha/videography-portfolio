import { Layout, PricingSection, Box } from '@/components';

const Pricing = () => (
  <Layout title="Pricing">
    <Box minHeight="calc(100vh - 4rem)" pt="8">
      <PricingSection />
    </Box>
  </Layout>
);

export default Pricing;
