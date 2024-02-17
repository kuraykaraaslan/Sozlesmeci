'use client';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Demo from '../../components/main/Heros/Demo';
import Pricing from '../../components/main/Heros/Pricing';

function MyApp() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col w-full h-full -mt-14 items-center justify-center overflow-auto pb-10">
      <Demo />
      <Pricing />
    </div>
  );
}

export default MyApp;
