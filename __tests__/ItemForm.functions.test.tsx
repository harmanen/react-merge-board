import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import ItemForm from '@/app/components/ItemForm';
import mockData from '@/app/data';
import { Item } from '@/app/components/Board.type';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { chainIds, itemLevels, itemTypes } from '@/app/constants/itemInfo';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

describe('ItemForm', () => {
  // Pick first item in mockData
  const index = 0;
  const item = mockData.items[index] as Item;

  // Remove level number from itemType
  item.itemType = item.itemType.split('_')[0];

  const props = {
    activeCellIndex: index,
    setActiveCellIndex: () => null,
    itemsOnBoard: mockData.items as Array<Item>,
    setItemsOnBoard: () => null,
    variant: 'edit',
    isMobile: false,
    initialValues: item,
  };

  it('should handle item type change ', () => {
    const newItemType = itemTypes[10];

    if (newItemType === item.itemType) {
      throw new Error('New item type is the same as old!');
    }

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    fireEvent.mouseDown(screen.getByLabelText('Item type', { exact: false }));
    // MUI Select is in an element with role listbox
    fireEvent.click(within(screen.getByRole('listbox')).getByText(newItemType));
    expect(screen.getByDisplayValue(newItemType)).toBeInTheDocument();
  });

  it('should handle item level change ', () => {
    const currentItemLevel = item.itemLevel;

    const newItemLevel =
      currentItemLevel === itemLevels[0]
        ? currentItemLevel + 1
        : currentItemLevel - 1;

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    fireEvent.mouseDown(screen.getByLabelText('Level', { exact: false }));

    // MUI Select is in an element with role listbox
    fireEvent.click(
      within(screen.getByRole('listbox')).getByText(newItemLevel),
    );

    expect(screen.getByDisplayValue(newItemLevel)).toBeInTheDocument();
  });

  it('should handle item chain ID change ', () => {
    const newChainId = chainIds[10];

    if (newChainId === item.chainId) {
      throw new Error('New item chain ID is the same as old!');
    }

    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    fireEvent.mouseDown(screen.getByLabelText('Chain ID', { exact: false }));
    // MUI Select is in an element with role listbox
    fireEvent.click(within(screen.getByRole('listbox')).getByText(newChainId));
    expect(screen.getByDisplayValue(newChainId)).toBeInTheDocument();
  });
});
