import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head';
import { useSelector } from 'react-redux';

import Layout from '../src/client/components/Layout';
import Sidebar from '../src/client/components/Sidebar';
import Themebar from '../src/client/components/Themebar';
import About from '../src/client/components/About';
import Header from '../src/client/components/Header';
import Section from '../src/client/components/Section';
import { ProjectCards } from '../src/client/components/ProjectCards';
import Gallery from '../src/client/components/Gallery';
import Contact from '../src/client/components/Contact';
import { meta, sections } from '../src/client/lib/data.json';

const COMPONENT_MAP = {
  about: <About />,
  projectCards: <ProjectCards />,
  gallery: <Gallery />,
  contact: <Contact />
}

export default function Home() {
  const theme = useSelector((state) => state.settings.theme);
  const sectionRefs= useRef({});
  const [sectionInView, setSectionInView] = useState(null);

  useEffect (() => {
    const refPositions = Object.entries(sectionRefs.current).map(([ref, el]) => [ref, el.offsetTop]);
    const main = document.getElementById('main');

    const handleScroll = () => {
      const idx = refPositions.findIndex(([_, el], i) => (
        main.scrollTop >= el && (
          refPositions[i + 1] && refPositions[i + 1][1]
            ? main.scrollTop < refPositions[i + 1][1]
            : true
        )
      ));
      setSectionInView(refPositions[idx] ? refPositions[idx][0] : null);
    }

    main.addEventListener("scroll", handleScroll);

    return () => main.addEventListener("scroll", handleScroll);
},[])

  const scrollTo = (e) => {
    if (!e.target.getAttribute('scroll-dest')) return;
    const ref = sectionRefs.current[`${e.target.getAttribute('scroll-dest').toLowerCase()}`];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`theme--${theme}`}>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href={meta.favIcon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={meta.description} />
        <link rel="apple-touch-icon" href={meta.mobileIcon} />
      </Head>
      <main className="main" id="main">
        <Layout>
          <Header scrollTo={scrollTo} />
          { sections.map(({ type, heading }) => (
              <Section
                key={type}
                heading={heading}
                ref={(el) => { sectionRefs.current[heading.toLowerCase()] = el }}
              >
                {COMPONENT_MAP[type]}
              </Section>
            ))
          }
        </Layout>
        <Themebar />
        <Sidebar scrollTo={scrollTo} sectionInView={sectionInView} />
      </main>
    </div>
  )
}
