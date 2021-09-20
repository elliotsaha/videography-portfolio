import { Layout, Header, Button, Flex, Carousel, Box } from '@/components';
import styled from 'styled-components';
import Image from 'next/image';
import css from '@styled-system/css';

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
  & > img {
    object-fit: cover;
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

  return (
    <Layout>
      <AboveFold>
        <Overlay>
          <AboveFoldCTA>
            <Header uppercase fontSize="10rem">
              Turni Saha
            </Header>
            <Header uppercase as="h2" render="h4" mt="-5rem">
              Marketing | Content | Creation
            </Header>
            <Button variant="outline" size="lg" mt="1rem">
              Get In Touch
            </Button>
          </AboveFoldCTA>
        </Overlay>
        <CoverVideo src="/AboveFold.mp4" muted loop autoPlay />
      </AboveFold>

      <BackgroundEl>
        <BelowFold>
          <Flex justifyItems="center" alignItems="start">
            <HeadshotContainer>
              <Image
                src="/Headshot.jpg"
                alt="Turni Saha Headshot"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus arcu sit amet velit convallis vehicula. Mauris finibus mi
              eu nulla luctus posuere. Fusce scelerisque, diam et luctus rutrum,
              arcu ligula cursus est,
            </FeaturedFilmText>
          </Box>
        </Flex>
      </BackgroundEl>
    </Layout>
  );
};

export default Home;
