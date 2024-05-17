import P from 'prop-types';

import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title={'Error 404'}
      html="<p>A pagina que voce busca nao foi encontrada <a href='/'>Clique aqui para voltar</a></p>"
    />
  );
};
