import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
  font-size: ${theme.fonts.sizes.medium}
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large}
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge}
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.IteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorFont, size, uppercase }) => css`
    color: ${colorFont ? theme.colors.darkBg : theme.colors.lightBg};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
