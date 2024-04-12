import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ItemForm from '@/app/components/ItemForm';
import mockData from '@/app/data';
import { Item } from '@/app/components/Board.type';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { itemLevels } from '@/app/constants/itemInfo';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const formattedDayjs = (timestamp: string | null) => {
  // Split date and time from ISO string yyyy-mm-ddThh:mm:ssZ
  const [date, time] = dayjs.utc(timestamp).format().split('T');
  // Slice "Z"
  return `${date} ${time.slice(0, -1)}`;
};

describe('ItemForm', () => {
  // Pick first item in mockData
  const index = 0;
  const item = mockData.items[index] as Item;

  // Remove level number from itemType
  item.itemType = item.itemType.split('_')[0];

  const { itemType, chainId, itemLevel, createdAt, pausedUntil } = item;

  const props = {
    activeCellIndex: index,
    setActiveCellIndex: () => null,
    itemsOnBoard: mockData.items as Array<Item>,
    setItemsOnBoard: () => null,
    variant: 'edit',
    isMobile: false,
    initialValues: item,
  };

  const itemTypeForAddForm = 'BroomCabinet';

  const initalValuesForAddForm = {
    itemType: itemTypeForAddForm,
    chainId: itemTypeForAddForm,
    itemLevel: itemLevels[0].toString(),
    isHidden: false,
    isInBubble: false,
    pausedUntil: null,
  };

  it('renders field labels', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    expect(
      screen.getByLabelText('Item type', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Level', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Chain ID', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Paused until', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Created at', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Hidden', { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('In bubble', { exact: false }),
    ).toBeInTheDocument();
  });

  it('renders initial values for edit form', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    expect(screen.getByText(itemType)).toBeInTheDocument();
    expect(screen.getByText(itemLevel)).toBeInTheDocument();
    expect(screen.getByText(`${chainId} (default)`)).toBeInTheDocument();

    expect(
      screen.getByDisplayValue(formattedDayjs(pausedUntil)),
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue(formattedDayjs(createdAt)),
    ).toBeInTheDocument();
  });

  it('renders initial values for add form', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm
          {...props}
          variant="add"
          initialValues={initalValuesForAddForm}
        />
      </LocalizationProvider>,
    );

    expect(screen.getByText(itemTypeForAddForm)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();

    expect(
      screen.getByText(`${itemTypeForAddForm} (default)`),
    ).toBeInTheDocument();

    expect(screen.getByDisplayValue('YYYY-MM-DD hh:mm:ss')).toBeInTheDocument();

    expect(
      screen.getByLabelText('Created at (fills in automatically)'),
    ).toBeInTheDocument();
  });

  it('renders buttons in edit form', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm {...props} />
      </LocalizationProvider>,
    );

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('renders a button in add form', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* @ts-expect-error variant type mismatch but works */}
        <ItemForm
          {...props}
          variant="add"
          initialValues={initalValuesForAddForm}
        />
      </LocalizationProvider>,
    );

    expect(screen.getByText('Add item')).toBeInTheDocument();
  });
});
