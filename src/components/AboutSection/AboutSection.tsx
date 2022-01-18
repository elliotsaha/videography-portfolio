import { Header, Flex, Box } from '@/components';
import { up, down } from 'styled-breakpoints';
import styled from 'styled-components';
import css from '@styled-system/css';
import Image from 'next/image';

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

const AboutContainer = styled.div`
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

const AboutSection = () => (
  <AboutContainer>
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
          extensive experience in working with various clients and delivering
          various forms of video content (Narrative doc piece, short form social
          media content, music videos, etc.)
          <br />
          <br />
          Looking to work with clients to produce the best quality content!
          Whether you need quick one-off projects or looking build a long term
          relationship, I am ready to create the best work for you!
          <br />
          <br />
          <Flex pb="1rem" alignItems="start" flexDirection={['column', 'row']}>
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
          Digital Video | Video Production | Video Editing | Short Form Video |
          Promotional Videos
        </HeadshotPara>
      </Flex>
    </Flex>
  </AboutContainer>
);

export default AboutSection;
