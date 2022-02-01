import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Layout,
  Header,
  Button,
  Carousel,
  Box,
  // Sections
  AboutSection,
  PricingSection,
  ContactSection,
  FeaturedVideoSection,
} from '@/components';
import styled from 'styled-components';
import css from '@styled-system/css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import toast from 'react-hot-toast';

const AboveFold = styled.div`
  position: relative;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 32rem;
  }
`;

const CoverVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

const CoverMobileImg = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: white;
  background: rgb(0, 0, 0, 0.55);
  justify-content: center;
  align-items: center;
`;

const AboveFoldCTA = styled.div`
  margin-bottom: 10%;
  text-align: center;
`;

const SocialContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1.75rem;
  & svg {
    cursor: pointer;
    color: white;
    font-size: 2.5rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
`;

const Home = ({ data }: { data: Record<string, any> }) => {
  // get data from server-side, add to state on first render
  const [videoIDs, setVideoIDs] = useState([] as any);

  useEffect(() => {
    setVideoIDs(data);
  }, [data]);

  useEffect(() => {
    // Popup toast when /?success=true (after contact submission)
    if (Router?.query?.success) {
      (() =>
        toast.success('Successfully Sent Message', {
          position: 'bottom-center',
          duration: 4000,
          style: {
            fontFamily: 'Inter, sans-serif',
            background: 'black',
            color: 'white',
          },
        }))();
      Router.push('/', undefined, { shallow: true });
    }
  }, []);

  const router = useRouter();

  return (
    <Layout title="Homepage">
      <AboveFold>
        <Overlay>
          <AboveFoldCTA>
            <Header uppercase fontSize={['3rem', '5rem', null, '10rem']}>
              Turni Saha
            </Header>
            <Header
              uppercase
              as="h2"
              render="h5"
              pb="0.55rem"
              mt={['-0.55rem', '-2rem', '-2.5rem', '-6rem']}
              fontSize={[null, '1.15rem', '1.5rem', '2rem']}
            >
              Marketing | Videography | Creation
            </Header>

            <SocialContainer>
              <a
                href="https://www.linkedin.com/in/turni-saha-236817165"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.instagram.com/turnisaha.videography"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.facebook.com/turni.saha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </SocialContainer>
            <Button
              variant="outline"
              size="lg"
              mt="1rem"
              onClick={() => router.push('/contact')}
            >
              Get In Touch
            </Button>
          </AboveFoldCTA>
        </Overlay>
        <CoverVideo muted loop autoPlay playsInline controls={false}>
          <source src="/AboveFold.mp4" type="video/mp4" />
        </CoverVideo>
        <CoverMobileImg src="/AboveFoldImg.png" alt="Cover" />
      </AboveFold>
      <AboutSection />
      <Box pb="7rem">
        {videoIDs.length !== 0 && <Carousel array={videoIDs?.items} />}
      </Box>
      <FeaturedVideoSection />
      <PricingSection />
      <ContactSection />
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/youtube`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
