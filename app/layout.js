
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

export default function RootLayout({children}) {
  return (
    <html lang="en" className="dark {lato.className}">
      <body>
        <Providers lato = {lato}>
          <Bar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
