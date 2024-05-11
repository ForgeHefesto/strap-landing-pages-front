import * as Styled from './style';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return (
    <div>
      <Styled.Container>{children}</Styled.Container>
    </div>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
