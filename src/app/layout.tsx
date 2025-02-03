import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import DeviconLoader from "@/components/devicon";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <DeviconLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
