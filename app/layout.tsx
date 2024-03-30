import './globals.css';

import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Sözleşmeci",
  description: "Sözleşmeci bir hukuk platformu değildir. Sadece sözleşmelerinizi oluşturmanıza yardımcı olur. Tüm hukuki sorunlarınız için avukatınıza başvurun.",
  keywords: "sözleşmeci, sözleşme, hukuk, avukat, dava, mahkeme, yargı",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
