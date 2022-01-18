import { useEffect, useState } from 'react';
import {
  Layout,
  Flex,
  Grid,
  YoutubeThumbnail,
  Box,
  FeaturedVideoSection,
} from '@/components';

const Projects = ({ data }: { data: Record<string, any> }) => {
  const [videoIDs, setVideoIDs] = useState([] as any);

  useEffect(() => {
    setVideoIDs(data);
  }, [data]);

  return (
    <Layout title="Projects">
      <Box pt="12" maxWidth="67.5rem" mx="auto">
        <FeaturedVideoSection />
        <Flex justifyContent="center" alignItems="center" mt="2rem" pb="3rem">
          <Grid
            gridTemplateColumns={[
              '100%',
              '400px',
              '320px 320px',
              '320px 320px 320px',
            ]}
            gridAutoRows="180px"
            gridGap="0.75rem"
          >
            {videoIDs.length !== 0 &&
              videoIDs.items.map((i: any) => (
                <Flex justifyContent="center" alignItems="center" key={i}>
                  <YoutubeThumbnail setSize={false} youtubeData={i} />
                </Flex>
              ))}
          </Grid>
        </Flex>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/youtube`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default Projects;
