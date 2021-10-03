import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';
import Link from 'next/link';
import css from '@styled-system/css';
import { Button, Box } from '@/components';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalTheme } from '@/utils/UI';

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
  ${css({
    color: 'text',
  })}
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  & > div:nth-child(1) > a {
    text-decoration: none;
    ${css({
      color: 'text',
    })}
    text-transform: uppercase;
    ${css({
      fontFamily: 'title',
    })}
    font-size: 1.4rem;
  }

  ${(props) =>
    props.scroll &&
    css({
      pt: '0.65rem',
      pb: '0.65rem',
      bg: 'background',
    })}
`;

const LinkSection = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  & > a {
    margin-right: 3rem;
    margin-left: 3rem;
    text-decoration: none;
    text-transform: uppercase;
    ${css({
      color: 'text',
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
  ${layout};
`;

const IconContainer = styled.button`
  cursor: pointer;
  width: 2.5rem;
  background: none;
  border: none;
  & > * {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

const MobileMenu = styled.div<LayoutProps>`
  display: none;
  ${css({
    fontFamily: 'title',
    bg: 'background',
  })}
  height: 15.5rem;
  width: 100%;
  position: absolute;
  top: 3rem;
  padding-left: 2rem;
  transition: 0.25s;
  ${layout};
`;

const VerticalLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    text-decoration: none;
    ${css({
      color: 'text',
      pt: '1.5rem',
    })}
    text-transform: uppercase;
    ${css({
      fontFamily: 'title',
    })}
    font-size: 1.25rem;
  }
`;

const Navbar = () => {
  const [scrollPosition, setScrollPositon] = useState(0);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPositon(position);
  };

  const handleResize = () => {
    const intBreakpoint = parseInt(
      GlobalTheme.breakpoints[2].split('px').shift() as string,
      10,
    );
    if (window.innerWidth >= intBreakpoint) {
      setMobileMenuActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scroll = mobileMenuActive ? true : scrollPosition > 10;

  const mobileNavOnClick = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const router = useRouter();

  return (
    <Wrapper>
      <NavbarRoot scroll={scroll}>
        <Box pl={['2rem', null, null, '3rem']}>
          <Link href="/">Turni Saha</Link>
        </Box>
        <LinkSection display={['none', null, null, 'flex']}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </LinkSection>
        <Box pr="3rem" display={['none', null, null, 'flex']}>
          <Button variant="outline" onClick={() => router.push('/contact')}>
            Contact
          </Button>
        </Box>
        <Box
          pr={['1.5rem', null, null, '3rem']}
          display={['block', null, null, 'none']}
        >
          <IconContainer onClick={mobileNavOnClick}>
            <MenuIcon />
          </IconContainer>
        </Box>
        <MobileMenu display={mobileMenuActive ? 'block' : 'none'}>
          <VerticalLinkSection>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </VerticalLinkSection>
          <Box mr="3.75rem" pt="2rem">
            <Button
              width="max"
              variant="outline"
              onClick={() => router.push('/contact')}
            >
              Contact
            </Button>
          </Box>
        </MobileMenu>
      </NavbarRoot>
    </Wrapper>
  );
};

export default Navbar;
