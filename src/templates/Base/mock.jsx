import linkMock from '../../components/NavLinks/mock';
import mockGrid from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} />
    </>
  ),
  links: linkMock,
  logoData: {
    text: 'Logo',
    link: 'http://www.google.com.br',
    srcImg: '',
  },
  footerHtml: '<p>Teste de footer</p>',
};
