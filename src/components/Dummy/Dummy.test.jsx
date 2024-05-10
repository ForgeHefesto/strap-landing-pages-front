import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Dummy } from '.';

describe('<Dummy />', () => {
  it('should render with default values', () => {
    renderTheme(<Dummy>texto</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
