'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Document } from "@react-pdf/renderer";

export default function Viewer(document: Document) {
  return (
    <div className="grid grid-row-12 select-none w-full">
      <div className="navbar bg-base-200 rounded-t-box">
        <div className="navbar-start hidden lg:flex">
          <a className="text-xl text-primary gap-2 ml-2 font-bold select-none">Görüntüleyici</a>
        </div>
        <div className="navbar-center">
          <button className="btn btn-ghost">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <input type="text" className="input input-primary" placeholder="Ara..." />
          
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">İndir</a>
        </div>
      </div>
        {document}
    </div>
  );
}

