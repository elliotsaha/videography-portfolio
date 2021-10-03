import { Layout, Header, Box, Flex, Button, TextField } from '@/components';
import Image from 'next/image';
import styled from 'styled-components';
import css from '@styled-system/css';

const BackgroundEl = styled.div`
  ${css({
    bg: 'background',
  })}
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.5rem;
  width: 100%;
`;

const ContactHeadshotContainer = styled.div`
  ${css({
    borderRadius: '2',
  })}
  overflow: hidden;
  position: relative;
  width: 28rem;
  height: 41rem;
  margin-top: 2rem;
  margin-left: 6rem;
  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    margin-left: 2.5rem;
    width: 27rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 29rem;
    height: 40rem;
    margin-left: 0;
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100vw;
    height: 17rem;
    border-radius: 0;
  }
`;

const Contact = () => (
  <Layout>
    <BackgroundEl>
      <Flex
        justifyContent="center"
        alignItems="center"
        pb="5rem"
        flexDirection={['column-reverse', null, null, 'row']}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box width="100%">
            <Header as="h1" render="h2" color="white" uppercase>
              Get In Touch
            </Header>
            <Header
              as="h2"
              render="h5"
              color="primary"
              uppercase
              mt="-1.5rem"
              pb="1.75rem"
            >
              Start Working With Me Today
            </Header>
          </Box>
          <TextField
            width={['15rem', '27rem']}
            placeholder="Name"
            mb="1.5rem"
          />
          <TextField
            width={['15rem', '27rem']}
            placeholder="Email"
            mb="1.5rem"
          />
          <TextField
            width={['15rem', '27rem']}
            placeholder="Message"
            as="textarea"
            mb="1.5rem"
            rows={15}
          />
          <Box width="100%">
            <Button variant="outline" size="lg">
              Submit
            </Button>
          </Box>
        </Flex>
        <ContactHeadshotContainer>
          <Image
            src="/ContactHeadshot.jpeg"
            alt="Turni Saha Headshot"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/ContactHeadshot.jpeg"
            objectPosition="100% 5%"
          />
        </ContactHeadshotContainer>
      </Flex>
    </BackgroundEl>
  </Layout>
);

export default Contact;
