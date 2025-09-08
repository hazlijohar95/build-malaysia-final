import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" 
          as="style" 
          onLoad={() => {}} 
        />
        <noscript>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" 
            rel="stylesheet" 
          />
        </noscript>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-black text-white antialiased">
        <div className="min-h-screen bg-black">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}