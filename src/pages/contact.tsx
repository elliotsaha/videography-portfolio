import { Layout, ContactSection, Box } from '@/components';

const Contact = () => (
  <Layout title="Contact">
    <Box minHeight="calc(100vh - 8rem)" pt="12">
      <ContactSection />
    </Box>
  </Layout>
);

export default Contact;
