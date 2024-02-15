import './globals.css';
import React from 'react';

import { Metadata } from 'next';

export const meta: Metadata = {
    title: 'Contact',
    description: 'Contact us',
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
