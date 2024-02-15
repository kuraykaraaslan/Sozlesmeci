import { Metadata } from "next"
import Navbar from "../../components/main/Navbar";

import './main.css';

export const metadata: Metadata = {
  title: "Sözleşmeci",
  description: "Sözleşmeci çok yakında sizlerle!",
  keywords: "sözleşmeci, sözleşme, hukuk, avukat, dava, mahkeme, yargı",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-base-200 flex flex-col min-h-screen">
        <Navbar />
        <div className="p-4">
        {children}
        </div>
      </body>
    </html>
  );
}
