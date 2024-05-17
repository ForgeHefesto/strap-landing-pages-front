import { Heading } from '../../components/Heading';
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import * as Styled from './styles';

import { mockBase } from '../Base/mock';

import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFoud';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mapData } from '../../Api/map-data';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        console.log(pageData);
        setData(() => pageData[0]);
      } catch (error) {
        setData(() => undefined);
      }
    };
    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }
  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml[0].children[0].text}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumn {...section} key={`columns-${index}`} />;
        }
        if (component === 'section.section-content') {
          return <GridContent {...section} key={`content-${index}`} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={`grid-${index}`} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={`image-${index}`} />;
        }
      })}
    </Base>
  );
}

export default Home;
