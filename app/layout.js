
// app/layout.tsx
import "./globals.css";
import {Providers} from "./providers";
export const metadata = {
  title: 'Brysons Website',
  description: 'Welcome to my site!',
}
import { Lato } from 'next/font/google';
const lato = Lato({
  subsets: ['latin'], // Specify necessary subsets
  weight: ['100'], // Include desired weights
});
import Bar from "./components/Bar";
import Footer from "./components/Footer";

export default function RootLayout({children}) {
  return (
    <html lang="en" className="dark"  >
      <body className="dark" style={{width:"100%"}}>
        <Providers lato = {lato}>
          <Bar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
