import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";
import data from "../lib/data.json";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const { resume } = data.document;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoad = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  }

  return (
    <Document
      file={resume}
      onLoadSuccess={onDocumentLoad}
      loading="Loading..."
    >
      { Array.from({ length: numPages }, (_, i) => (
        <Page
          key={`page-${i + 1}`}
          pageNumber={i + 1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      ))}
    </Document>
  );
}

export default PDFViewer;
