import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
