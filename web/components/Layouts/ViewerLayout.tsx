'use client';
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Document ,PDFDownloadLink } from "@react-pdf/renderer";

export default function ViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  function GetDocument() {
    return (
      <Document  className="w-[210mm] h-[297mm] bg-white pt-20 px-10 pb-10 select-none border-2 border-base-200 shadow-lg">
      {children}
      </Document>
    );
  }

  return (
    <div className="flex flex-col w-full border-2 border-base-200 shadow-lg rounded-box">
      <div className="navbar bg-base-200 rounded-t-box h-14">
        <div className="navbar-start hidden lg:flex">
          <a className="text-xl text-primary gap-2 ml-2 font-bold select-none">Görüntüleyici</a>
        </div>
        <div className="navbar-center">
          <button className="btn btn-ghost">
            <FontAwesomeIcon icon={faArrowLeft} /> Önceki Sayfa
          </button>
          <select className="select select-bordered select-primary">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <PDFDownloadLink document={<GetDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Yükleniyor..." : "İndir"
            }
          </PDFDownloadLink>
          <button className="btn btn-ghost">
            Sonraki Sayfa <FontAwesomeIcon icon={faArrowRight} />
          </button>

        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={() => window.print()}>Yazdır</a>
        </div>
      </div>
      <div className="flex flex-col w-full h-full bg-gray-300 items-center justify-center overflow-auto pb-10 pt-2">
          <GetDocument />
      </div>
    </div>
  );
}

