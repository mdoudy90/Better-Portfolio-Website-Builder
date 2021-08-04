import dynamic from "next/dynamic";
import { useSelector } from 'react-redux';

import Layout from '../src/client/components/Layout';
import Sidebar from '../src/client/components/Sidebar';
import Themebar from '../src/client/components/Themebar';

const PDFViewer = dynamic(() => import("../src/client/components/PDFViewer.js"), {
  ssr: false
});

export default function Doc() {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div className={`theme--${theme}`}>
      <main className="main" id="main">
        <Layout>
          <PDFViewer />
        </Layout>
        <Themebar />
        <Sidebar />
      </main>
    </div>
  );
}
