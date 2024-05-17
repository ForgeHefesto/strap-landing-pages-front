import * as Styled from './style';
import P from 'prop-types';

import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" arial-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

GoTop.propTypes = {};
