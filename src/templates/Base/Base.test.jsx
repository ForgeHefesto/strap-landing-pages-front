import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
