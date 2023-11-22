import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import muiTheme from "@/themes/muiTheme";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export const metadata: Metadata = {
  title: {
    template: "%s | Blockademy",
    default: "Blockademy",
  },
  description:
    "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
  openGraph: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [
      "https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png",
    ],
    title: "Blockademy",
    type: "website",
    url: "https://blockademy.ai/",
  },
  twitter: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [
      "https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png",
    ],
    site: "Blockademy",
    title: "Blockademy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Script
        src="https://chat-api.spartez-software.com/chat-widget.js"
        defer
      />
      <chat-widget
        jira-id="0191cdbc-70cf-3d52-91cf-9c3a49b689f2"
        service-desk-id="1"
      ></chat-widget>
       <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XS8QL1EDRD`}
        strategy="afterInteractive"
      />
      */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XS8QL1EDRD');
      `}
      </Script>
      <body>
        <Providers>
          <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </Providers>
        <ToastContainer autoClose={1000} pauseOnHover={false} />
      </body>
    </html>
  );
}
