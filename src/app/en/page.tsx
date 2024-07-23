"use client";

import dynamic from "next/dynamic";
import PDF from "./pdf";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <PDF />
      </PDFViewer>
    </div>
  );
}
