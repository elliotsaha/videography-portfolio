import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from '@/utils/UI';
import { Navbar } from '@/components';

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
    </>
  );
};

export default Layout;
