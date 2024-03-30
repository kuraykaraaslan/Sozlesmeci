import React from "react";


export default function SidebarLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 bg-base-100 rounded-box p-4">
        {sidebar}
      </div>
      <div className="col-span-12 md:col-span-8 bg-base-100 flex flex-col rounded-box p-4 overflow-auto items-center">
        {children}
      </div>
    </div>
  );
}

