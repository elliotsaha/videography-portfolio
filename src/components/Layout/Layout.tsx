import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from '@/utils/UI';
import { Navbar } from '@/components';
import { Toaster } from 'react-hot-toast';
import { NextSeo } from 'next-seo';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = (props: LayoutProps) => {
  const { children, title } = props;
  return (
    <>
      <NextSeo
        title={`Turni Saha's Film Portfolio | ${title}`}
        description="Hi, my name is Turni Saha and I'm a skilled videographer, marketer, and photographer. My services include doing real estate videography, corporate advertisements, half day event filming, and full day event filming."
      />
      <ThemeProvider theme={GlobalTheme}>
        <Navbar />
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
};

export default Layout;
