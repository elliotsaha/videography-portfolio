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
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const AboveFold = styled.div`
  position: relative;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
`;
const CoverVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
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
  padding: 5rem;
  padding-top: 7.5rem;
  display: flex;
  justify-content: center;
`;

const HeadshotContainer = styled.div`
  ${css({
    borderRadius: '2',
  })}
  overflow: hidden;
  position: relative;
  width: 30rem;
  height: 45rem;
  margin-right: 7.5rem;
`;

const ContactHeadshotContainer = styled.div`
  ${css({
    borderRadius: '2',
  })}
  overflow: hidden;
  position: relative;
  width: 30rem;
  height: 40rem;
  margin-top: 2rem;
  margin-left: 5rem;
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
`;

const FeaturedVideo = styled.iframe`
  width: 40rem;
  height: 20rem;
`;

const FeaturedFilmText = styled.p`
  max-width: 27.5rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
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

  return (
    <Layout>
      <AboveFold>
        <Overlay>
          <AboveFoldCTA>
            <Header uppercase fontSize="10rem">
              Turni Saha
            </Header>
            <Header uppercase as="h2" render="h4" mt="-6.5rem">
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
              onClick={() => router.push('/#contact')}
            >
              Get In Touch
            </Button>
          </AboveFoldCTA>
        </Overlay>
        <CoverVideo src="/AboveFold.mp4" muted loop autoPlay />
      </AboveFold>

      <BackgroundEl>
        <BelowFold id="about">
          <Flex justifyItems="center" alignItems="start">
            <HeadshotContainer>
              <Image
                src="/Headshot.jpeg"
                alt="Turni Saha Headshot"
                placeholder="blur"
                blurDataURL="/Headshot.jpeg"
                layout="fill"
                objectFit="cover"
              />
            </HeadshotContainer>
            <Flex flexDirection="column">
              <Header as="h2" uppercase color="text" mt="-0.5rem">
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
                <Flex pb="1rem" alignItems="start">
                  <div>
                    <Header
                      as="h3"
                      render="h4"
                      uppercase
                      color="primary"
                      pr="7rem"
                    >
                      Camera
                    </Header>
                    Sony A7SIII
                  </div>
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
          <Box maxWidth="69rem" ml="auto" mr="auto">
            <Header as="h1" render="h2" color="text" uppercase>
              Recent work
            </Header>
            <Header
              as="h2"
              render="h5"
              color="primary"
              mt="-1.5rem"
              pb="1.75rem"
              uppercase
            >
              What I&apos;ve Been Up To
            </Header>
          </Box>
          <Carousel array={videoIDs} />
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          pb="7rem"
          maxWidth="69rem"
          ml="auto"
          mr="auto"
        >
          <FeaturedVideo
            src="https://www.youtube.com/embed/32hsGWID9Ug?showinfo=0&controls=0&rel=1&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <Box mb="3rem" pl="4rem">
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
              Garden Party is the grand opening party of the school year. It’s
              crowded, there’s music and the goal of the video was to capture
              the reunion of people after the pandemic and get people excited
              about the upcoming year.
            </FeaturedFilmText>
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Header as="h1" render="h2" color="white" uppercase>
            Pricing Estimates
          </Header>
          <Grid
            gridTemplateColumns="1fr 1fr 1fr"
            gridGap="4rem"
            width="70rem"
            pb="5rem"
          >
            <Card
              icon={<WallpaperIcon />}
              header="Corperate Advertisements"
              price="$600"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed erat facilisis magna facilisis viverra non id arcu. Vivamus id
              mattis purus. Nunc semper lectus nisi, vel efficitur ex malesuada
              eget. Suspendisse sodales ultrices tortor ac posuere. Integer
            </Card>
            <Card
              icon={<CameraAltIcon />}
              header="Half Day Event Filming"
              price="$500-$1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed erat facilisis magna facilisis viverra non id arcu. Vivamus id
              mattis purus. Nunc semper lectus nisi, vel efficitur ex malesuada
              eget. Suspendisse sodales ultrices tortor ac posuere. Integer
            </Card>
            <Card
              icon={<CameraEnhanceIcon />}
              header="Full Day Event Filming"
              price="$750-$1300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed erat facilisis magna facilisis viverra non id arcu. Vivamus id
              mattis purus. Nunc semper lectus nisi, vel efficitur ex malesuada
              eget. Suspendisse sodales ultrices tortor ac posuere. Integer
            </Card>
          </Grid>
        </Flex>
        <Flex
          id="contact"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          pb="5rem"
          width="72rem"
          ml="auto"
          mr="auto"
          pl="2.5rem"
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
            <TextField width="30rem" placeholder="Name" mb="1.5rem" />
            <TextField width="30rem" placeholder="Email" mb="1.5rem" />
            <TextField
              width="30rem"
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
            />
          </ContactHeadshotContainer>
        </Flex>
      </BackgroundEl>
    </Layout>
  );
};

export default Home;
