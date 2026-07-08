import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import AuthControl from '../components/AuthControl';
import AuthModals from '../components/AuthModals';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  title: 'EnPassant Chess Forum',
  description: 'The official chess club of ABESEC. Outsmart the Entire Arena!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="antialiased text-ep-black bg-ep-bg min-h-screen relative font-sans">

        <AuthProvider>
          <div className="relative z-10">
            <AuthControl />
            <AuthModals />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
