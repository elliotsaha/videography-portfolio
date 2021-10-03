import React, { useState, useEffect } from 'react';
import { Flex, Box, Header } from '@/components';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import css from '@styled-system/css';
import { darkenColor } from '@/utils/ColorManipulation';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';
import { GlobalTheme } from '@/utils/UI';

export interface CarouselProps {
  array: Array<string>;
}

const ImageOverlay = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.transition};
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    ${({ theme }) => theme.transition};
    visibility: visible;
    opacity: 1;
  }
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
  height: 220px;
  width: 22rem;
  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 18.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100%;
    height: 250px;
    border-radius: 0;
  }
`;

const ChunkedMapList = styled.div`
  display: flex;
  flex-direction: row;

  & > div:nth-child(2) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
      color: darkenColor('primary', 0.15, true),
      borderColor: darkenColor('primary', 0.15, true),
    },
    '&:active': {
      color: darkenColor('primary', 0.25, true),
      borderColor: darkenColor('primary', 0.25, true),
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

const chunkArr = (array: Array<string>, chunk: number) => {
  const resArr = [];
  for (let i = 0, j = array.length; i < j; i += chunk) {
    resArr.push(array.slice(i, i + chunk));
  }

  return resArr;
};

const Carousel = (props: CarouselProps) => {
  const { array } = props;
  const [chunkNum, setChunkNum] = useState(1);

  useEffect(() => {
    const breakpoints: number[] = [];

    GlobalTheme.breakpoints.map((i: string): null => {
      const intBreakpoint = parseInt(i.split('px').shift() as string, 10);
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

  const prev = () => {
    if (idx === 0) {
      setIdx(chunkedArr.length - 1);
    } else {
      setIdx(idx - 1);
    }
  };

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
            <ImageContainer key={i}>
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
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ImageContainer>
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
