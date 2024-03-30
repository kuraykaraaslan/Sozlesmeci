import React from "react";


export default function FullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12 bg-base-100 flex flex-col rounded-box p-4">
        {children}
      </div>
    </div>
  );
}

