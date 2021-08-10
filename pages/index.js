import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

import Layout from '../src/client/components/Layout';
import Sidebar from '../src/client/components/Sidebar';
import ThemeBar from '../src/client/components/ThemeBar';
import About from '../src/client/components/About';
import Header from '../src/client/components/Header';
import Footer from '../src/client/components/Footer';
import Section from '../src/client/components/Section';
import { ProjectCards } from '../src/client/components/ProjectCards';
import Gallery from '../src/client/components/Gallery';
import Contact from '../src/client/components/Contact';
import data from '../src/client/lib/data.json';

const { sections } = data;

function Index({ stars, forks }) {
  const theme = useSelector((state) => state.settings.theme);
  const sectionRefs= useRef({});
  const [sectionInView, setSectionInView] = useState(null);

  useEffect (() => {
    const refPositions = Object.entries(sectionRefs.current).map(([ref, el]) => [ref, el.offsetTop]);
    const main = document.getElementById('main');

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = main;
      let idx = refPositions.findIndex(([_, el], i) => (
        scrollTop >= el && (
          refPositions[i + 1] && refPositions[i + 1][1]
            ? scrollTop < refPositions[i + 1][1]
            : true
        )
      ));
      if (clientHeight + scrollTop === scrollHeight) {
        idx = refPositions.length - 1;
      }
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

  const _buildSectionComponent = (type, heading) => {
    const sectionMap = {
      about: <About heading={heading} />,
      projectCards: <ProjectCards heading={heading} />,
      gallery: <Gallery heading={heading} />,
      contact: <Contact heading={heading} />
    }
    return sectionMap[type];
  }

  return (
    <div className={`theme--${theme}`}>
      <main className="main" id="main">
        <Layout>
          <Header scrollTo={scrollTo} />
          { sections.map(({ type, heading }) => (
              <Section
                key={heading}
                heading={heading}
                ref={(el) => { sectionRefs.current[heading.toLowerCase()] = el }}
              >
                {_buildSectionComponent(type, heading)}
              </Section>
            ))
          }
          <Footer stars={stars} forks={forks} />
        </Layout>
        <ThemeBar />
        <Sidebar scrollTo={scrollTo} sectionInView={sectionInView} />
      </main>
    </div>
  )
};

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/mdoudy90/website-v2');
  const json = await res.json();

  return {
    props: {
      stars: json.stargazers_count || 0,
      forks: json.forks_count || 0
    },
  }
}

export default Index;
