import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ReduxProvider } from "@/providers/redux-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata = {
  title: "Estatein",
  description:
    "Explore Estatein Real Estate – your top destination for luxury property investment. Modern apartments, commercial spaces, and premium projects in prime locations with high ROI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-gray-08`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
