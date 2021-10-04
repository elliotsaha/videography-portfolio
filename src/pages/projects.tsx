import { Layout, Flex, Grid, Header, Box } from '@/components';
import { darkenColor } from '@/utils/ColorManipulation';
import Image from 'next/image';
import styled from 'styled-components';
import css from '@styled-system/css';

const BackgroundEl = styled.div`
  ${css({
    bg: 'background',
    color: 'white',
  })}
  min-height: 100vh;
`;

const ImageOverlay = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.transition};
`;

const ImageContainer = styled.div`
  position: relative;
  ${css({
    borderRadius: '0',
    borderBottomLeftRadius: '1',
    borderBottomRightRadius: '1',
  })}
  overflow: hidden;
  ${({ theme }) => theme.transition};
  &:hover ${ImageOverlay} {
    ${({ theme }) => theme.transition};
    visibility: visible;
    opacity: 1;
  }
`;

const ViewButton = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  ${({ theme }) => theme.transition};
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${css({
    borderRadius: '3',
    fontFamily: 'title',
    fontSize: '1',
    p: '0.5rem',
    pr: '1.2rem',
    pl: '1.2rem',
    bg: 'transparent',
    color: 'white',
    border: '0',
    borderColor: 'white',
    '&:hover': {
      color: darkenColor('#FFFFFF', 0.15),
      borderColor: darkenColor('#FFFFFF', 0.15),
    },
    '&:active': {
      color: darkenColor('#FFFFFF', 0.25),
      borderColor: darkenColor('#FFFFFF', 0.25),
    },
  })}
`;

const FeaturedVideo = styled.iframe`
  width: 36rem;
  height: 22rem;
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

const Projects = () => {
  const videoIDs = [
    'HvQT3Hl44qE',
    '4ilPPFw5owE',
    'ed56xTQ2JT0',
    'Yv1Ui_Y3Ryw',
    'm-HKKy2sLrs',
    'QSnU671Js-c',
    'GNEO5WfKcYI',
    'OWKj5xSlR80',
    'bLK4KanWTRs',
    '7yb29hSMz80',
    'fGtFW50TpZA',
    'XJgWxru0EQo',
    'VbiUDxORtWA',
    'pu8iUb1VZv4',
    'tWgo5yfnigo',
    'LM3xgo-_ocY',
    '32hsGWID9Ug',
  ];

  return (
    <Layout>
      <BackgroundEl>
        <Flex
          justifyContent="center"
          alignItems="center"
          pb="5rem"
          maxWidth="61.5rem"
          ml="auto"
          mr="auto"
          pt="10rem"
        >
          <FeaturedVideo
            src="https://www.youtube.com/embed/32hsGWID9Ug?showinfo=0&controls=0&rel=1&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <Box mb="3rem" pl="3.25rem">
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
        <Flex justifyContent="center" alignItems="center" mt="2rem" pb="3rem">
          <Grid
            gridTemplateColumns="320px 320px 320px"
            gridTemplateRows="180px 180px 180px"
            gridGap="0.75rem"
          >
            {videoIDs.map((i) => (
              <Flex justifyContent="center" alignItems="center" key={i}>
                <ImageContainer>
                  <ImageOverlay>
                    <ViewButton
                      onClick={() =>
                        window.open(
                          `https://www.youtube.com/watch?v=${i}`,
                          '_blank',
                        )
                      }
                    >
                      View
                    </ViewButton>
                  </ImageOverlay>
                  <Image
                    src={`https://img.youtube.com/vi/${i}/mqdefault.jpg`}
                    alt="Youtube Video"
                    placeholder="blur"
                    blurDataURL={`https://img.youtube.com/vi/${i}/mqdefault.jpg`}
                    width="320px"
                    height="180px"
                    quality={90}
                  />
                </ImageContainer>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </BackgroundEl>
    </Layout>
  );
};

export default Projects;
