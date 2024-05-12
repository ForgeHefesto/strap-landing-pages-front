import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">texto</MenuLink>);
    expect(screen.getByRole('link', { name: 'texto' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should renderopen a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        texto
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'texto' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        texto
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143C;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        texto
      </a>
    `);
  });
});
