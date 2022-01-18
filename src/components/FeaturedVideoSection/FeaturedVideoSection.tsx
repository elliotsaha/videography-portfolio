import { Header, Flex, Box } from '@/components';
import styled from 'styled-components';
import css from '@styled-system/css';

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

const FeaturedVideoSection = () => {
  const youtubeVideoLink =
    'https://www.youtube.com/embed/32hsGWID9Ug?showinfo=0&controls=0&rel=1&modestbranding=1';

  return (
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
        src={youtubeVideoLink}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
      <Box mb="3rem" pl={['0rem', null, null, '4rem']} px={['1.5rem', '0rem']}>
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
          crowded, there’s music and the goal of the video was to capture the
          reunion of people after the pandemic and get people excited about the
          upcoming year.
        </FeaturedFilmText>
      </Box>
    </Flex>
  );
};

export default FeaturedVideoSection;
