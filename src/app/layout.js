import { Courier_Prime } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import AuthControl from '../components/AuthControl';
import AuthModals from '../components/AuthModals';
import Logo from '../components/Logo';
import TickerLayout from '../components/TickerLayout';
import { TransitionProvider } from '../context/TransitionContext';

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
  display: 'swap',
});

export const metadata = {
  title: 'EnPassant Chess Forum',
  description: 'The official chess forum of ABESEC. Outsmart the Entire Arena!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${courier.variable}`}>
      <body className={`min-h-screen relative`}>
        <AuthProvider>
          <TransitionProvider>
            <TickerLayout>
              <header className="fixed top-[var(--recruitment-ticker-height,0px)] left-0 w-full z-50 px-6 md:px-12 pt-6 md:pt-10 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4 md:gap-0 pointer-events-none">
                <div className="pointer-events-auto w-full flex justify-center md:justify-start md:w-auto">
                  <Logo />
                </div>
                <div className="pointer-events-auto w-full md:w-auto flex justify-center md:justify-end">
                  <AuthControl />
                </div>
              </header>
              <AuthModals />
              {children}
            </TickerLayout>
          </TransitionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
