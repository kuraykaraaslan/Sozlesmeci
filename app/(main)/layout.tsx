import { Metadata } from "next"
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

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

        <div className="alert alert-error mb-4">
          <div className="flex-1">
            <label>🚨</label>
            <label> <span className="font-bold">Sorumluluk Reddi:</span> Sözleşmeci bir hukuk platformu değildir. Sadece sözleşmelerinizi oluşturmanıza yardımcı olur. Tüm hukuki sorunlarınız için avukatınıza başvurun.</label>
          </div>
        </div>

        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
