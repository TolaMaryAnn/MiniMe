
import { content } from "../../tailwind.config";
import "./globals.css";

export const metadata = {
  title: "MiniMe",
  description: "Welcome to MiniMe! A playful take on mini versions, a versitile collection of taste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lacquer&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
