import styled, { css } from 'styled-components';

import { Container as TextComponent } from '../TextComponent/style';
import { Container as SectionContainer } from '../SectionContainer/style';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: {theme.fonts.sizes.small};
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.small}
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
