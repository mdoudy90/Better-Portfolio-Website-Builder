import React, { useState } from 'react' //! remove once finished

import dynamic from "next/dynamic";
import { useSelector } from 'react-redux';

import Layout from '../src/client/components/Layout';
import Sidebar from '../src/client/components/Sidebar';
import Themebar from '../src/client/components/Themebar';

// const PDFViewer = dynamic(() => import("../src/client/components/PDFViewer.js"), {
//   ssr: false
// });

// export default function Doc() {
//   const theme = useSelector((state) => state.settings.theme);

//   return (
//     <div className={`theme--${theme}`}>
//       <main className="main" id="main">
//         <Layout>
//           <PDFViewer />
//         </Layout>
//         <Themebar />
//         <Sidebar />
//       </main>
//     </div>
//   );
// }

const HIGHLIGHTS = [
  {
    "heading": "Point 1",
    "details": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    "media": "SOME MEDIA"
  },
  {
    "heading": "Point 2",
    "details": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    "media": "SOME MEDIA"
  },
  {
    "heading": "Point 3",
    "details": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    "media": "SOME MEDIA"
  },
  {
    "heading": "Point 4",
    "details": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    "media": "SOME MEDIA"
  }
]

const ProjectPopover = () => {
  const [indexInView, setIndexInView] = useState(0);

  return (
    <div className="project-popover">
      <div className="project-popover__overview">
        <h3 className="project-popover__heading">Helbiz Ads-Hub</h3>
        <p className="project-popover__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ullam vitae. Cupiditate nisi doloremque corrupti esse, eligendi non deleniti dolores repellat quia, excepturi quod assumenda blanditiis facilis sapiente aut nostrum.
        </p>
      </div>
      <div className="project-popover__highlights">
        { HIGHLIGHTS.map(({ heading, details, media }, i) => (
          <div className={`project-popover__highlight ${indexInView === i ? 'project-popover__highlight--selected' : ''}`} key={i}>
            <h4 className="project-popover__title" onClick={() => setIndexInView(i)}>
              {heading}
            </h4>
            { indexInView === i && (
              <div className="project-popover__highlight-details">
                { details.map((point) => (
                  <p className="project-popover__highlight-text">{point}</p>
                ))}
                <div className="project-popover__highlight-media">{media}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Doc() {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div className={`theme--${theme}`}>
      <main className="main" id="main">
        <Layout>
          <ProjectPopover />
        </Layout>
      </main>
    </div>
  );
}