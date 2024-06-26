import * as Styled from './style';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
