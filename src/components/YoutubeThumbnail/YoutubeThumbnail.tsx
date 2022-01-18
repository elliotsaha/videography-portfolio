import { GlobalTheme } from '@/utils/UI';
import { darken } from 'polished';
import Image from 'next/image';
import styled from 'styled-components';
import css from '@styled-system/css';

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

const ImageContainer = styled.div<{ setSize: boolean }>`
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
  width: 100%;
  height: ${(props) => (props.setSize ? '220px' : '100%')};
  ${(props) =>
    props.setSize &&
    css`
      height: 220px;
      width: 22rem;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    ${(props) =>
      props.setSize &&
      css`
        width: 18.5rem;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100vw;
    ${(props) =>
      props.setSize &&
      css`
        width: 100%;
        height: 250px;
        border-radius: 0;
      `}
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
      color: darken(0.15, '#FFFFFF'),
      borderColor: darken(0.15, '#FFFFFF'),
    },
    '&:active': {
      color: darken(0.25, '#FFFFFF'),
      borderColor: darken(0.25, '#FFFFFF'),
    },
  })}
`;

const YoutubeThumbnail = ({
  youtubeData,
  setSize,
}: {
  youtubeData: Record<string, any>;
  setSize: boolean;
}) => (
  <ImageContainer setSize={setSize}>
    <ImageOverlay>
      <ViewButton
        onClick={() =>
          window.open(
            `https://www.youtube.com/watch?v=${youtubeData.snippet.resourceId.videoId}`,
            '_blank',
          )
        }
      >
        View
      </ViewButton>
    </ImageOverlay>
    <Image
      src={youtubeData.snippet.thumbnails.medium.url}
      alt={youtubeData.snippet.title}
      placeholder="blur"
      blurDataURL={youtubeData.snippet.thumbnails.medium.url}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </ImageContainer>
);

export default YoutubeThumbnail;
