import { Layout, Box, Flex, Header, Button } from '@/components';
import styled from 'styled-components';
import css from '@styled-system/css';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import {
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import { useRouter } from 'next/router';

const IconContainer = styled.div<{ color?: string }>`
  width: 3.25rem;
  font-size: 3.25rem;
  margin-right: 4rem;
  & svg {
    font-size: 3.25rem;
    margin-left: -0.5rem;
    width: 4rem;
    height: 100%;
    color: ${(props) => props.color};
  }
`;
const CardBody = styled.div<TypographyProps & LayoutProps & SpaceProps>`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-left: -1.5rem;
  max-width: 21rem;
  color: white;
  ${css({
    fontFamily: 'body',
  })}
  ${typography};
  ${layout};
  ${space};
`;

const Price = styled.span`
  font-size: 1.3rem;
  ${css({
    fontFamily: 'body',
    fontWeight: 700,
    color: 'primary',
  })}
`;
const SocialMediaPacks = () => {
  const Packs = [
    {
      title: 'Bronze Pack',
      price: '$1,000',
      icon: <AutoGraphOutlinedIcon />,
      iconColor: '#CD7F32',
      assets: [
        '1 Youtube video edit per week',
        '2 revisions per week',
        '6 Tiktoks repurposed from past content per week',
      ],
    },
    {
      title: 'Gold Pack',
      price: '$3,000',
      icon: <EmojiEventsOutlinedIcon />,
      iconColor: '#FFD700',
      assets: [
        '2 Youtube video edits per week',
        'Unlimited revisions per week',
        '12 Tiktoks repurposed from past content per week',
        'Hashtag research and scheduling on Tiktok so that your Tiktok account runs without you ever having to look at it',
      ],
    },
    {
      title: 'Diamond Pack',
      price: '$6,000',
      icon: <MilitaryTechOutlinedIcon />,
      iconColor: '#B9F2FF',
      assets: [
        '4 Youtube video edits per week',
        'Unlimited revisions per week',
        '24 Tiktoks repurposed from past content per week',
        'Hashtag research and scheduling on Tiktok so that your Tiktok account runs without you ever having to look at it',
        'Engaging on comments on various platforms',
        '4 blogs on topics of your choice per month',
      ],
    },
  ];

  const router = useRouter();

  return (
    <Layout title="Social Media Packs">
      <Box minHeight="calc(100vh - 4rem)" pt="8">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex flexDirection="column" alignItems="center" px="2rem">
            <Header as="h2" color="white" m={0} pt="3rem" textAlign="center">
              SOCIAL MEDIA PACKS
            </Header>
            <CardBody
              textAlign="center"
              maxWidth="30rem"
              ml={0}
              pt="0.5rem"
              pb="1rem"
            >
              By picking a social media pack it allows me to view your past
              content and repurpose it to revitalize your social media
            </CardBody>
            <Button
              variant="outline"
              mb="3rem"
              onClick={() => router.push('/contact')}
            >
              Contact Me Now
            </Button>
          </Flex>
          <Flex justifyContent="center" flexDirection={['column', null, 'row']}>
            {Packs.map((i, idx) => (
              <Flex
                border="0"
                borderRadius="1"
                borderColor="grey"
                p="2rem"
                flexDirection="column"
                mx={['0rem', null, idx % 2 === 0 ? '2rem' : '0rem']}
                my={['1rem', null, '0rem']}
                key={i.title}
              >
                <IconContainer color={i.iconColor}>{i.icon}</IconContainer>
                <Flex color="white" flexDirection="column">
                  <Header as="h3" my="0.5rem">
                    {i.title.toUpperCase()}
                  </Header>
                  <Price>{i.price} monthly</Price>
                  <CardBody>
                    <ul>
                      {i.assets.map((j) => (
                        <li key={j}>{j}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SocialMediaPacks;
