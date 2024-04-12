// Some tests for Content, Board, and InfoBox are here.
// This is for convenience to automatically pass reasonable props.
// Other components are tested in their appropriate test files.

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { version } from '../package.json';
import mockData from '@/app/data';
import { limitForMobile } from '@/app/constants/global';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Helpers
const resize = () => {
  global.window.innerWidth = limitForMobile - 1;
  global.window.dispatchEvent(new Event('resize'));
};

// Tests
describe('Page', () => {
  const infoText = 'Start by selecting a cell!';

  it('renders texts', () => {
    render(<Page />);

    const heading1 = screen.getByRole('heading', { level: 1 });
    const versionNumber = screen.getByRole('heading', { level: 2 });

    expect(heading1).toBeInTheDocument();
    expect(heading1.textContent).toEqual('Merge board');

    expect(versionNumber).toBeInTheDocument();
    expect(versionNumber.textContent).toEqual(`(v${version})`);

    expect(screen.getByText(infoText)).toBeInTheDocument();
  });

  it('renders texts (mobile)', () => {
    render(<Page />);

    // https://legacy.reactjs.org/docs/test-utils.html#act
    act(() => {
      resize();
    });

    const heading1 = screen.getByRole('heading', { level: 1 });
    const versionNumber = screen.getByRole('heading', { level: 2 });

    expect(heading1).toBeInTheDocument();
    expect(heading1.textContent).toEqual('Merge board');

    expect(versionNumber).toBeInTheDocument();
    expect(versionNumber.textContent).toEqual(`(v${version})`);

    expect(screen.getByText(infoText)).toBeInTheDocument();
  });

  it('renders correct amount of grids and items', () => {
    render(<Page />);

    expect(screen.getAllByTestId('droppable-grid-item').length).toEqual(
      mockData.width * mockData.height,
    );

    expect(screen.getAllByTestId('draggable-icon-item').length).toEqual(
      mockData.items.filter((item) => item !== null).length,
    );
  });

  it('renders correct amount of grids and items (mobile)', () => {
    render(<Page />);

    act(() => {
      resize();
    });

    expect(screen.getAllByTestId('droppable-grid-item').length).toEqual(
      mockData.width * mockData.height,
    );

    expect(screen.getAllByTestId('draggable-icon-item').length).toEqual(
      mockData.items.filter((item) => item !== null).length,
    );
  });

  it('renders form after a cell is clicked', async () => {
    const user = userEvent.setup();

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    await user.click(screen.getAllByTestId('draggable-icon-item')[0]);

    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();
  });

  it('renders form after a cell is clicked (mobile)', async () => {
    const user = userEvent.setup();

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    act(() => {
      resize();
    });

    await user.click(screen.getAllByTestId('draggable-icon-item')[0]);

    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();
  });

  it('renders info text if outside of board is clicked', async () => {
    const user = userEvent.setup();

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    await user.click(screen.getAllByTestId('draggable-icon-item')[0]);

    // Form should be rendered
    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();

    await user.click(document.getElementsByTagName('main')[0]);

    // Form should not be rendered
    expect(screen.getByText(infoText)).toBeInTheDocument();
  });
});
