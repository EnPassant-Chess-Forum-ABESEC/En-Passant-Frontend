import { Courier_Prime } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import AuthControl from '../components/AuthControl';
import AuthModals from '../components/AuthModals';

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
      <body className="min-h-screen relative">
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
