import { Card, Flex, Header, Grid, Layout } from '@/components';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import styled from 'styled-components';
import css from '@styled-system/css';

const BackgroundEl = styled.div`
  min-height: 100vh;
  padding-top: 9rem;
  ${css({
    bg: 'background',
  })}
`;

const Pricing = () => (
  <Layout title="Pricing">
    <BackgroundEl>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
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
            content, etc. Real Estate Videography is normally a quick and snappy
            process. Ask for a quote!
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
            These would generally be events that take 6 hours or less. Depending
            on the equipment needed and the scale of the event, the price
            varies. Ask for a quote!
          </Card>
          <Card
            icon={<CameraEnhanceIcon />}
            header="Full Day Event Filming"
            price="$750-$1300"
          >
            These would be full day/night events such as festivals, music
            videos, product shoots, etc. Depending on the scope of the event and
            the gear needed the price will vary. Ask for a quote!
          </Card>
        </Grid>
      </Flex>
    </BackgroundEl>
  </Layout>
);

export default Pricing;
