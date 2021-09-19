import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import css from '@styled-system/css';
import { Button, Box } from '@/components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.5s;
`;
const NavbarRoot = styled.div<{ scroll: boolean }>`
  width: 100%;
  transition: 0.25s;
  position: fixed;
  padding-top: 1rem;
  display: flex;
  color: white;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  & > div:nth-child(1) > a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    ${css({
      fontFamily: 'title',
    })}
    font-size: 1.4rem;
  }

  ${(props) =>
    props.scroll &&
    css({
      pt: '0.2rem',
      pb: '0.6rem',
      bg: 'black',
    })}
`;

const LinkSection = styled.div`
  display: flex;
  align-items: center;
  & > a {
    margin-right: 3rem;
    margin-left: 3rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    ${css({
      fontFamily: 'title',
    })}
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background: linear-gradient(currentColor 0 0) var(--p, 50%) 100% /
      var(--d, 0%) 3px no-repeat;
    transition: 0.3s, background-position 0s;

    &:hover {
      --d: 100%;
      --p: 0%;
      transition: 0.3s, background-size 0.3s 0.3s;
    }
  }
`;

const Navbar = () => {
  const [scrollPosition, setScrollPositon] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPositon(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = scrollPosition > 10;

  return (
    <Wrapper>
      <NavbarRoot scroll={scroll}>
        <Box pl="3rem">
          <Link href="/">Turni Saha</Link>
        </Box>
        <LinkSection>
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">About</Link>
        </LinkSection>
        <Box pr="3rem">
          <Button variant="outline">Contact</Button>
        </Box>
      </NavbarRoot>
    </Wrapper>
  );
};

export default Navbar;
