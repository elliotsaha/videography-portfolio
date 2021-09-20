import React, { useState } from 'react';
import { Flex, Grid } from '@/components';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import css from '@styled-system/css';
import { darkenColor } from '@/utils/ColorManipulation';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

export interface CarouselProps {
  array: Array<string>;
}

const ImageContainer = styled.div`
  ${css({
    borderRadius: '1',
  })}
  overflow: hidden;
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
  const chunkNum = 3;
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

  const templateGridArr = [];
  for (let i = 0; i < chunkNum; i += 1) {
    templateGridArr.push('1fr');
  }
  const templateGridStr = templateGridArr.join(' ');

  return (
    <>
      <Grid
        gridTemplateColumns={templateGridStr}
        gridGap="1rem"
        maxWidth="72rem"
        mr="auto"
        ml="auto"
      >
        {chunkedArr[idx].map((i) => (
          <Flex justifyContent="center" alignItems="center" key={i}>
            <ImageContainer>
              <Image
                src={`https://img.youtube.com/vi/${i}/mqdefault.jpg`}
                alt="Youtube Video"
                placeholder="blur"
                blurDataURL={`https://img.youtube.com/vi/${i}/mqdefault.jpg`}
                width="320px"
                height="180px"
                quality={75}
              />
            </ImageContainer>
          </Flex>
        ))}
      </Grid>

      <Flex maxWidth="69rem" mr="auto" ml="auto" mt="1.5rem">
        <IconButton mr="0.5rem" onClick={prev}>
          <BiChevronLeft />
        </IconButton>
        <IconButton onClick={next}>
          <BiChevronRight />
        </IconButton>
      </Flex>
    </>
  );
};

export default Carousel;
