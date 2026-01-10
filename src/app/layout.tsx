import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TransitionProvider from "@/components/TransitionProvider";
import SplashProvider from "@/components/SplashProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica-light-587ebe5a59211.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

const helveticaRounded = localFont({
  src: "./fonts/helvetica-rounded-bold-5871d05ead8de.otf",
  variable: "--font-helvetica-rounded",
});

export const metadata: Metadata = {
  title: "Devhut Studio",
  description: "Next-Gen Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helvetica.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashProvider>
            <TransitionProvider>
            <Navbar />

              {children}
            </TransitionProvider>
            <Footer />
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
