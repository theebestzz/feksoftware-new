import "./globals.css";

import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });

import { Inter } from "next/font/google";

export const metadata = {
  title: "Fek Software - Hayal Edin, Kodlayalım.",
  description: "Web geliştirme ve mobil geliştirme konusunda uzman",
};

const fontHeading = localFont({
  src: "../public/assets/fonts/CalSans-SemiBold.ttf",
  variable: "--font-heading",
});
const fontHeadingAlt = localFont({
  src: "../public/assets/fonts/cd-semi.otf",
  variable: "--font-headingAlt",
});

const fontSubHeading = localFont({
  src: "../public/assets/fonts/product-font.ttf",
  variable: "--font-subheading",
});
const fontSubAlt = localFont({
  src: "../public/assets/fonts/jakarta.ttf",
  variable: "--font-subalt",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden overflow-y-auto relative h-full w-full bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className} ${fontHeading.variable} ${fontSubHeading.variable} ${fontHeadingAlt.variable} ${fontSubAlt.variable}  `}
      >
        <div className="absolute bottom-0 left-[-10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="w-full mx-auto py-[-50px] px-0 font-subalt ">
          <main>{children}</main>{" "}
        </div>
      </body>
    </html>
  );
}
