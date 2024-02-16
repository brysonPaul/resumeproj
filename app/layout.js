
// app/layout.tsx
import "./globals.css";
import {Providers} from "./providers";
export const metadata = {
  title: 'Brysons Website',
  description: 'Welcome to my site!',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
