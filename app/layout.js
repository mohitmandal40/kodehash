import getAllLinks from "@/services/getLinks";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const linksList = await getAllLinks();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header linksList={linksList} />
        {children}
      </body>
    </html>
  );
}
