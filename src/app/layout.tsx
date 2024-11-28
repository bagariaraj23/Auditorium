"use client"

import type { Metadata } from "next";
import { BrowserRouter } from "react-router-dom";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Auditorium",
//   description: "Decentralized event booking store for all",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId="asdnkdnvasnsv">
          <BrowserRouter>
            <MetaMaskUIProvider
              sdkOptions={{
                dappMetadata: {
                  name: "Auditorium",
                },
                infuraAPIKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
                // Other options.
              }}
            >
              {children}
            </MetaMaskUIProvider>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
