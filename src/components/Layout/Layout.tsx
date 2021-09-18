import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from '@/utils/UI';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
