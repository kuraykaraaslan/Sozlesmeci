'use client';
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Document, Page, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";



export default function ViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const viewerRef = React.createRef<PDFViewer>();

  return (
    <div className="flex flex-col w-full border-2 border-base-200 shadow-lg rounded-box">
      <div className="navbar bg-base-200 rounded-t-box h-14">
        <div className="navbar-start hidden lg:flex">
          <a className="text-xl text-primary gap-2 ml-2 font-bold select-none">Görüntüleyici</a>
        </div>
        <div className="navbar-center gap-2 hidden">
          <button className="btn btn-ghost">
            <FontAwesomeIcon icon={faArrowLeft} style={{ width: "1em", height: "1em"}} /> Önceki Sayfa
          </button>
          <select className="select select-bordered select-primary">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="btn btn-ghost" onClick={() => console.log(viewerRef.current)}>
            Sonraki Sayfa <FontAwesomeIcon icon={faArrowRight} style={{ width: "1em", height: "1em"}} />
          </button>

        </div>
        <div className="navbar-end">
          <PDFDownloadLink document={children as Document} fileName={"sozlesmeci-" + Date.now() + ".pdf"}>
            {({ blob, url, loading, error }) =>
              loading ? <button className="btn btn-ghost">Yükleniyor...</button> : <button className="btn btn-primary"><FontAwesomeIcon icon={faFilePdf} style={{ width: "1em", height: "1em"}} /> İndir</button>
            }
          </PDFDownloadLink>
          

        </div>
      </div>
      <div className="flex flex-col w-full h-full bg-gray-300 items-center justify-center overflow-auto pb-10">
          <PDFViewer className="w-[100%] h-[100%] min-h-[1200px]"  onRender={() => console.log("rendered")}>
            {children}
          </PDFViewer>
      </div>
    </div>
  );
}

