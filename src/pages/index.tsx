import { Layout, Header, Button, Flex } from '@/components';
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

const BelowFold = styled.div`
  ${css({
    bg: 'background',
  })}
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

const Home = () => (
  <Layout>
    <AboveFold>
      <Overlay>
        <AboveFoldCTA>
          <Header uppercase fontSize="10rem">
            Turni Saha
          </Header>
          <Header uppercase as="h2" render="h4" mt="-5rem">
            Videographer | Producer | Creator
          </Header>
          <Button variant="outline" size="lg" mt="1rem">
            Get In Touch
          </Button>
        </AboveFoldCTA>
      </Overlay>
      <CoverVideo src="/AboveFold.mp4" muted loop autoPlay />
    </AboveFold>

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
            extensive experience in working with various clients and delivering
            various forms of video content (Narrative doc piece, short form
            social media content, music videos, etc.)
            <br />
            <br />
            Looking to work with clients to produce the best quality content!
            Whether you need quick one-off projects or looking build a long term
            relationship, I am ready to create the best work for you!
            <br />
            <br />
            <Flex pb="1rem" alignItems="start">
              <div>
                <Header as="h3" render="h4" uppercase color="primary">
                  Camera
                </Header>
                Black Magic Pocket Cinema 6k
              </div>
              <div>
                <Header as="h3" render="h4" uppercase color="primary">
                  Software
                </Header>
                Final Cut Pro X + Davinci Resolve
              </div>
            </Flex>
            <Header as="h3" render="h4" uppercase color="primary">
              Experience
            </Header>
            Digital Video | Video Production | Video Editing | Short Form Video
            | Promotional Videos
          </HeadshotPara>
        </Flex>
      </Flex>
    </BelowFold>
  </Layout>
);

export default Home;
