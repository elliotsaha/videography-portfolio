import { Layout, Header, Button, Card } from '@/components';
import styled from 'styled-components';

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

const CardSection = styled.div`
  position: relative;
  background: black;
  padding: 5rem;
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

    <CardSection>
      <Card header="Hello">
        awdwadwada wdawdwad awd aw daw dawd awd aw dawd
      </Card>
    </CardSection>
  </Layout>
);

export default Home;
