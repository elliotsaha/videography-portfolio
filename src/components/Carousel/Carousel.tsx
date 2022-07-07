import React, { useState, useEffect } from 'react';
import { Flex, Box, Header, YoutubeThumbnail } from '@/components';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import css from '@styled-system/css';
import { darken } from 'polished';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { GlobalTheme } from '@/utils/UI';

export interface CarouselProps {
  array: Array<Record<string, any>>;
}
const ChunkedMapList = styled.div`
  display: flex;
  flex-direction: row;

  & > div:nth-child(2) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const IconButton = styled.button<SpaceProps>`
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
  ${css({
    borderRadius: '1',
    bg: 'transparent',
    color: 'primary',
    border: '0',
    borderColor: 'primary',
    '&:hover': {
      color: darken(0.04, GlobalTheme.colors.primary),
      borderColor: darken(0.04, GlobalTheme.colors.primary),
    },
    '&:active': {
      color: darken(0.06, GlobalTheme.colors.primary),
      borderColor: darken(0.06, GlobalTheme.colors.primary),
    },
  })}
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    position: absolute;
    font-size: 1.75rem;
  }
  ${space}
`;

const chunkArr = (array: Array<Record<string, any>>, chunk: number) => {
  // get closest possible number divisble by chunk that is lower than array.length
  const divisbleArrayLen = array.length - (array.length % chunk);
  array = array.slice(0, divisbleArrayLen);

  const resArr = [];
  // i is incremented by chunk amount on each iteration
  // a slice from i's current position and i's next position is pushed to resArr
  for (let i = 0, j = array.length; i < j; i += chunk) {
    resArr.push(array.slice(i, i + chunk));
  }

  return resArr;
};

const Carousel = (props: CarouselProps) => {
  const { array } = props;
  const [chunkNum, setChunkNum] = useState(1);

  useEffect(() => {
    // change the number of carousel items visible at a time dependent on screen width
    const breakpoints: number[] = [];

    Object.values(GlobalTheme.breakpoints).map((i: unknown): null => {
      const intBreakpoint = parseInt(
        (i as string).split('px').shift() as string,
        10,
      );
      breakpoints.push(intBreakpoint);
      return null;
    });

    const chunkNumResize = () => {
      if (window.innerWidth >= breakpoints[2]) {
        setChunkNum(3);
      } else if (window.innerWidth >= breakpoints[1]) {
        setChunkNum(2);
      } else {
        setChunkNum(1);
      }
    };

    chunkNumResize();
    window.addEventListener('resize', chunkNumResize);
  }, []);

  const chunkedArr = chunkArr(array, chunkNum);

  const [idx, setIdx] = useState(0); // index position for chunkedArr

  // if on the first carousel item and prev function is called:
  // reset to last carousel item, otherwise:
  // decrement carousel item index by 1
  const prev = () => {
    if (idx === 0) {
      setIdx(chunkedArr.length - 1);
    } else {
      setIdx(idx - 1);
    }
  };

  // if on the last carousel item and next function is called:
  // reset to first carousel item, otherwise:
  // increment carousel item index by 1
  const next = () => {
    if (idx === chunkedArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box width={['100%', 'auto']}>
        <Box pr="3rem" ml={['1.5rem', '0rem']}>
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
        <ChunkedMapList>
          {chunkedArr[idx].map((i) => (
            <YoutubeThumbnail
              youtubeData={i}
              setSize
              key={i.snippet.resourceId.videoId}
            />
          ))}
        </ChunkedMapList>

        <Flex pt="2rem" ml={['1.5rem', '0rem']}>
          <IconButton mr="0.5rem" onClick={prev}>
            <BiChevronLeft />
          </IconButton>
          <IconButton onClick={next}>
            <BiChevronRight />
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Carousel;
