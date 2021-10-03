import { useRouter } from 'next/router';
import {
  Layout,
  Header,
  Button,
  Flex,
  Carousel,
  Box,
  Grid,
  Card,
  TextField,
} from '@/components';
import styled from 'styled-components';
import Image from 'next/image';
import css from '@styled-system/css';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import { up, down } from 'styled-breakpoints';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

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

const BackgroundEl = styled.div`
  ${css({
    bg: 'background',
  })}
`;

const BelowFold = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  ${up('3')} {
    padding: 5rem;
  }
  ${down('0')} {
    padding: 0;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  overflow: hidden;
`;

const HeadshotContainer = styled.div`
  ${css({
    borderRadius: '2',
  })}
  overflow: hidden;
  position: relative;
  width: 30rem;
  margin-right: 2.5rem;
  height: 40rem;
  ${up('2')} {
    height: 98%;
  }
  ${down('2')} {
    margin-bottom: 4rem;
  }
  ${down('0')} {
    width: 100%;
    border-radius: 0;
  }
  ${up('0')} {
    ${css({
      borderRadius: '2',
    })}
  }
  ${up('3')} {
    margin-right: 7.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: 17rem;
  }
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
    width: 100%;
    height: 17rem;
    border-radius: 0;
  }
`;

const HeadshotPara = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  ${css({
    color: 'text',
  })}
  max-width: 30rem;
  ${css({
    fontFamily: 'body',
  })}
  ${down('0')} {
    font-size: 0.95rem;
    line-height: 1.25rem;
    max-width: 26.5rem;
  }
`;

const FeaturedVideo = styled.iframe`
  width: 40rem;
  height: 20rem;
  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 27.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 37rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 100%;
  }
`;

const FeaturedFilmText = styled.p`
  max-width: 27.5rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: -1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: -1rem;
    max-width: 37rem;
  }
  ${css({
    fontFamily: 'body',
    color: 'text',
  })}
`;

const SocialContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1.75rem;
  & > svg {
    font-size: 2.5rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
`;

const Home = () => {
  // youtube video IDs
  const videoIDs = [
    '4ilPPFw5owE',
    'm-HKKy2sLrs',
    'fGtFW50TpZA',
    'GNEO5WfKcYI',
    'QSnU671Js-c',
    'bLK4KanWTRs',
    'HvQT3Hl44qE',
    'Yv1Ui_Y3Ryw',
    '32hsGWID9Ug',
    'OWKj5xSlR80',
    'ed56xTQ2JT0',
    'XJgWxru0EQo',
  ];

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.success) {
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
      router.push('/', undefined, { shallow: true });
    }
  }, [router]);

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
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
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

      <BackgroundEl>
        <BelowFold id="about">
          <Flex
            justifyItems="center"
            alignItems="start"
            flexDirection={['column', null, null, 'row']}
          >
            <HeadshotContainer>
              <Image
                src="/Headshot.jpeg"
                alt="Turni Saha Headshot"
                placeholder="blur"
                blurDataURL="/Headshot.jpeg"
                layout="fill"
                objectFit="cover"
                objectPosition="100% 15%"
              />
            </HeadshotContainer>
            <Flex
              flexDirection="column"
              pl={['1.5rem', '0rem']}
              pr={['1.5rem', '0rem']}
            >
              <Header
                as="h2"
                fontSize={[null, null, '2.75rem', '3rem']}
                uppercase
                color="text"
                mt="-0.5rem"
              >
                Hi, My name is Turni
              </Header>
              <HeadshotPara>
                With 4+ years of experience in the video/film industry, I have
                extensive experience in working with various clients and
                delivering various forms of video content (Narrative doc piece,
                short form social media content, music videos, etc.)
                <br />
                <br />
                Looking to work with clients to produce the best quality
                content! Whether you need quick one-off projects or looking
                build a long term relationship, I am ready to create the best
                work for you!
                <br />
                <br />
                <Flex
                  pb="1rem"
                  alignItems="start"
                  flexDirection={['column', 'row']}
                >
                  <Box pb={['0.5rem', '0rem']}>
                    <Header
                      as="h3"
                      render="h4"
                      uppercase
                      color="primary"
                      pr={['0rem', '7rem']}
                    >
                      Camera
                    </Header>
                    Sony A7SIII
                  </Box>
                  <div>
                    <Header as="h3" render="h4" uppercase color="primary">
                      Software
                    </Header>
                    Adobe Premiere Pro + <br />
                    Adobe Cloud
                  </div>
                </Flex>
                <Header as="h3" render="h4" uppercase color="primary">
                  Experience
                </Header>
                Digital Video | Video Production | Video Editing | Short Form
                Video | Promotional Videos
              </HeadshotPara>
            </Flex>
          </Flex>
        </BelowFold>
        <Box pb="7rem">
          <Carousel array={videoIDs} />
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          pb="7rem"
          mx="auto"
          maxWidth={[null, null, null, '61rem', '69rem']}
          px={['0rem', '3rem']}
          flexDirection={['column', null, null, 'row']}
        >
          <FeaturedVideo
            src="https://www.youtube.com/embed/32hsGWID9Ug?showinfo=0&controls=0&rel=1&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <Box
            mb="3rem"
            pl={['0rem', null, null, '4rem']}
            px={['1.5rem', '0rem']}
          >
            <Header as="h1" render="h2" color="white" uppercase>
              Featured Video
            </Header>

            <Header
              as="h2"
              render="h5"
              color="primary"
              mt="-1.5rem"
              pb="1.75rem"
              uppercase
            >
              Garden Party (University of British Columbia)
            </Header>
            <FeaturedFilmText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus arcu sit amet velit convallis vehicula. Mauris finibus mi
              eu nulla luctus posuere. Fusce scelerisque, diam et luctus rutrum,
              arcu ligula cursus est,
            </FeaturedFilmText>
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Header
            as="h1"
            render="h2"
            color="white"
            uppercase
            width={['90%', 'auto']}
          >
            Pricing Estimates
          </Header>

          <Header
            as="h2"
            render="h5"
            color="primary"
            mt="-1.5rem"
            uppercase
            width={['90%', 'auto']}
            pb="1.5rem"
          >
            What to Expect From Me
          </Header>
          <Grid
            gridTemplateColumns={['1fr', null, '1fr 1fr']}
            gridTemplateRows="1fr 1fr"
            gridGap="2rem"
            width={['90%', null, '42rem', '60rem', '67rem']}
            pb="5rem"
            pr={['0.5rem', '0rem']}
          >
            <Card
              icon={<HouseRoundedIcon />}
              header="Real Estate Videography"
              price="$200-$300"
            >
              These would be house tours, real estate agent promotions and
              content, etc. Real Estate Videography is normally a quick and
              snappy process. Ask for a quote!
            </Card>
            <Card
              icon={<InsertPhotoRoundedIcon />}
              header="Corperate Advertisements"
              price="$600"
            >
              These are ads, corporate highlights, interviews, etc. Generally
              these would take a few hours and a brief meeting beforehand to
              properly capture the goal of the video. Ask for a quote!
            </Card>
            <Card
              icon={<CameraAltIcon />}
              header="Half Day Event Filming"
              price="$500-$1000"
            >
              These would generally be events that take 6 hours or less.
              Depending on the equipment needed and the scale of the event, the
              price varies. Ask for a quote!
            </Card>
            <Card
              icon={<CameraEnhanceIcon />}
              header="Full Day Event Filming"
              price="$750-$1300"
            >
              These would be full day/night events such as festivals, music
              videos, product shoots, etc. Depending on the scope of the event
              and the gear needed the price will vary. Ask for a quote!
            </Card>
          </Grid>
        </Flex>
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

            <form
              name="contact"
              action="/success"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <TextField
                  width={['15rem', '27rem']}
                  placeholder="Name"
                  mb="1.5rem"
                  type="text"
                  name="name"
                />
                <TextField
                  width={['15rem', '27rem']}
                  placeholder="Email"
                  mb="1.5rem"
                  type="email"
                  name="email"
                />
                <TextField
                  width={['15rem', '27rem']}
                  placeholder="Message"
                  as="textarea"
                  mb="1.5rem"
                  rows={15}
                  type="text"
                  name="message"
                />
                <Box width="100%">
                  <Button variant="outline" size="lg" type="submit">
                    Submit
                  </Button>
                </Box>
              </Flex>
            </form>
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
};

export default Home;
