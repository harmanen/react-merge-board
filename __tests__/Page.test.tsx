// Some tests for Content, Board, and InfoBox are here.
// This is for convenience to automatically pass reasonable props.
// Other components are tested in their appropriate test files.

import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Page from '../app/page';
import { version } from '../package.json';
import mockData from '@/app/data';
import { limitForMobile } from '@/app/constants/global';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { itemLevels } from '@/app/constants/itemInfo';
import { Item } from '@/app/components/Board.type';

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
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    act(() => {
      resize();
    });

    await userEvent.click(screen.getAllByTestId('draggable-icon-item')[0]);

    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();
  });

  it('renders info text if outside of board is clicked', async () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    await userEvent.click(screen.getAllByTestId('draggable-icon-item')[0]);

    // Form should be rendered
    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();

    await userEvent.click(document.getElementsByTagName('main')[0]);

    // Form should not be rendered
    expect(screen.getByText(infoText)).toBeInTheDocument();
  });

  it('should handle adding items ', async () => {
    const indexOfEmptyCell = mockData.items.indexOf(null);

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    const getAmountOfDraggables = () =>
      screen.getAllByTestId('draggable-icon-item').length;

    const initialNumberOfDraggables = getAmountOfDraggables();

    // Click an empty cell
    await userEvent.click(
      screen.getAllByTestId('droppable-grid-item')[indexOfEmptyCell],
    );

    // Should have opened an add form
    const addItemButton = screen.getByText('Add item', { exact: false });
    expect(addItemButton).toBeInTheDocument();

    // Click add button
    await userEvent.click(addItemButton);

    // Should have changed to edit form
    expect(screen.getByText('Delete', { exact: false })).toBeInTheDocument();

    // Should have placed a draggable icon
    expect(getAmountOfDraggables()).toEqual(initialNumberOfDraggables + 1);
  });

  it('should handle editing items ', async () => {
    const indexOfFirstOccupiedCell = mockData.items.findIndex(
      (item) => item !== null,
    );

    const item = mockData.items[indexOfFirstOccupiedCell] as Item;
    const initialLevel = item.itemLevel;

    const newLevel =
      initialLevel === itemLevels[0] ? initialLevel + 1 : initialLevel - 1;

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    const getAmountOfDraggables = () =>
      screen.getAllByTestId('draggable-icon-item').length;

    const initialNumberOfDraggables = getAmountOfDraggables();

    // Click an item
    await userEvent.click(
      screen.getAllByTestId('draggable-icon-item')[indexOfFirstOccupiedCell],
    );

    // Should have opened an edit form
    const editItemButton = screen.getByText('Edit', { exact: false });
    expect(editItemButton).toBeInTheDocument();

    // Change level
    fireEvent.mouseDown(screen.getByLabelText('Level', { exact: false }));
    // MUI Select is in an element with role listbox
    fireEvent.click(within(screen.getByRole('listbox')).getByText(newLevel));

    // Click edit button
    await userEvent.click(editItemButton);

    // Should have stayed in edit form
    expect(screen.getByText('Edit', { exact: false })).toBeInTheDocument();

    // Should have changed level
    expect(screen.getByDisplayValue(newLevel)).toBeInTheDocument();

    // Amount of icons should be the same
    expect(getAmountOfDraggables()).toEqual(initialNumberOfDraggables);
  });

  it('should handle deleting items ', async () => {
    const indexOfFirstOccupiedCell = mockData.items.findIndex(
      (item) => item !== null,
    );

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Page />
      </LocalizationProvider>,
    );

    const getAmountOfDraggables = () =>
      screen.getAllByTestId('draggable-icon-item').length;

    const initialNumberOfDraggables = getAmountOfDraggables();

    // Click an item
    await userEvent.click(
      screen.getAllByTestId('draggable-icon-item')[indexOfFirstOccupiedCell],
    );

    // Should have opened an edit form
    const deleteItemButton = screen.getByText('Delete', { exact: false });
    expect(deleteItemButton).toBeInTheDocument();

    // Click delete button
    await userEvent.click(deleteItemButton);

    // Should not render form
    expect(
      screen.getByText('Start by selecting a cell!', { exact: false }),
    ).toBeInTheDocument();

    // Should have removed a draggable icon
    expect(getAmountOfDraggables()).toEqual(initialNumberOfDraggables - 1);
  });
});
