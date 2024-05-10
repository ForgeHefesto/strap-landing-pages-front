import P from 'prop-types';
import * as Styled from './style';

export const Heading = ({
  children,
  colorFont = false,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      uppercase={uppercase}
      colorFont={colorFont}
      as={as}
      size={size}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorFont: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['huge', 'big', 'medium', 'small']),
  uppercase: P.bool,
};
