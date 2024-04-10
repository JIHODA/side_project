import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://web-next-mu.vercel.app/"),
  title: "TOMATO HERB",
  description: "토마토허브 (TomatoHerb)",
  icons: {
    icon: "/assets/101511086942750785_1680437922.jpg",
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
