import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CTA from '@/components/CTA';

interface LayoutProps {
  children: ReactNode;
  overlayHeader?: boolean;
  showCTA?: boolean;
}

const Layout = ({ children, overlayHeader = false, showCTA = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header overlay={overlayHeader} />
      <main className={`flex-1 ${overlayHeader ? '' : 'pt-[5.0625rem] md:pt-[6.75rem]'}`}>
        {children}
      </main>
      {showCTA && <CTA />}
      <Footer />
    </div>
  );
};

export default Layout;