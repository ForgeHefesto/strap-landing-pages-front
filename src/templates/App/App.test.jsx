/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {renderTheme} from '../../styles/render-theme'

import Home from './index';
import { theme } from '../../styles/theme';

describe('<Home />',() => {
  it('should render home', () => {
    renderTheme(<Home />);
  })
})
