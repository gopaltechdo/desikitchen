import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* //to center the page */}

        <main className="max-w-6xl mx-auto border p-4 text-gray-700 font-semibold">
        <Header/>

          {children}</main>
          <footer className='border-t p-8 text-center grey-500'>
  &copy; 2024 All rights reserved
</footer>
      </body>
    </html>
  );
}
