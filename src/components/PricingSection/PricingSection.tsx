import { Card, Flex, Header, Grid, Box, Button } from '@/components';
import styled from 'styled-components';
import css from '@styled-system/css';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/router';

const IconContainer = styled.div`
  width: 3.25rem;
  font-size: 3.25rem;
  margin-top: 2rem;
  & svg {
    font-size: 3.25rem;
    width: 100%;
    height: 100%;
    ${css({
      color: 'primary',
    })}
  }
`;

const CardBody = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: white;
  text-align: center;
  padding-right: 2rem;
  padding-left: 2rem;
  max-width: 40rem;
  ${css({
    fontFamily: 'body',
  })}
`;

const ContactMeLink = styled.a`
  font-size: 1.2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-top: -0.3rem;
  text-decoration: none;
  & svg {
    font-size: 1.7rem;
  }
  ${css({
    fontFamily: 'body',
    fontWeight: 700,
    color: 'primary',
  })}
`;

const PricingSection = () => {
  const router = useRouter();
  return (
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
        gridTemplateRows={[
          '1.5fr 0.8fr 0.8fr 0.8fr 0.8fr',
          null,
          '1fr 0.7fr 0.7fr',
          '1.5fr 1fr 1fr',
        ]}
        gridGap="2rem"
        width={['90%', null, '42rem', '60rem', '67rem']}
        pb="5rem"
        pr={['0.5rem', '0rem']}
      >
        <Box
          gridColumn={['1', null, '1 / span 2']}
          border="0"
          borderColor="grey"
          borderRadius="1"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <IconContainer>
              <PublicIcon />
            </IconContainer>
            <Header
              color="white"
              as="h3"
              uppercase
              mb="0.7rem"
              mt="0.7rem"
              fontSize={['1.75rem', '2rem']}
            >
              Social Media Packs
            </Header>
            <ContactMeLink href="/contact">
              Get a Quote <KeyboardArrowRightIcon />
            </ContactMeLink>
            <CardBody>
              Creating content for different platforms can be time-consuming and
              can degrade the quality of your content. I can take on repurposing
              your content and running your TikTok account so that you can focus
              on creating the content you love! I have 5+ years of experience in
              videography, editing, and content creation. I would use your past
              content and repurpose it to revitalize your Tiktok! Through
              engagement in comments and likes, your account activity would
              skyrocket without you having to lift a finger.
            </CardBody>
            <Button
              variant="outline"
              mb="3rem"
              onClick={() => router.push('/social-media-packs')}
            >
              See Available Packs
            </Button>
          </Flex>
        </Box>
        <Card icon={<HouseRoundedIcon />} header="Real Estate Videography">
          These would be house tours, real estate agent promotions and content,
          etc. Real Estate Videography is normally a quick and snappy process.
          Ask for a quote!
        </Card>
        <Card
          icon={<InsertPhotoRoundedIcon />}
          header="Corporate Advertisements"
        >
          These are ads, corporate highlights, interviews, etc. Generally these
          would take a few hours and a brief meeting beforehand to properly
          capture the goal of the video. Ask for a quote!
        </Card>
        <Card icon={<CameraAltIcon />} header="Half Day Event Filming">
          These would generally be events that take 6 hours or less. Depending
          on the equipment needed and the scale of the event, the price varies.
          Ask for a quote!
        </Card>
        <Card icon={<CameraEnhanceIcon />} header="Full Day Event Filming">
          These would be full day/night events such as festivals, music videos,
          product shoots, etc. Depending on the scope of the event and the gear
          needed the price will vary. Ask for a quote!
        </Card>
      </Grid>
      <Button
        variant="outline"
        mt="-3rem"
        mb="2rem"
        onClick={() => router.push('/contact')}
      >
        Get a Quote
      </Button>
    </Flex>
  );
};

export default PricingSection;
