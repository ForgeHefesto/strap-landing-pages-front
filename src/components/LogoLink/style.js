import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primaryColor};

    > img {
      max-height: 3rem;
    }
  `}

`;
