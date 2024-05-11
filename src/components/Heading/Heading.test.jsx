import { ThemeProvider } from 'styled-components';
import { screen } from '@testing-library/react';

import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading colorFont={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.darkBg,
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorFont={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.lightBg,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    const { rerender } = renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xhuge);
  });

  it('should render with uppercase letter', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>Children</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
