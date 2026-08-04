import { Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

const ptSans = PT_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-pt-sans' 
});

export const metadata = {
  title: 'King Flower Shop | Fresh Gorgeous Bouquets',
  description: 'Fresh flowers, heartfelt gifts, and fast delivery to make someone’s day special.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${ptSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
