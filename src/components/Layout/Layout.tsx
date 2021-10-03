import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from '@/utils/UI';
import { Navbar } from '@/components';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <Navbar />
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
};

export default Layout;
