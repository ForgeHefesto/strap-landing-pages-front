import * as Styled from './style';
import P from 'prop-types';

export const Dummy = ({ children }) => {
  return (
    <div>
      <Styled.Container>
        <h1>{children}</h1>
      </Styled.Container>
    </div>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};
