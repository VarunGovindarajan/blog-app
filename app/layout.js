import Navbar from '@/components/Navbar';
import SessionWrapper from '@/components/SessionWrapper';
import './globals.css';
import Footer from '@/components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar/>
          {children}
        </SessionWrapper>
        <Footer/>
      </body>
    </html>
  );
}