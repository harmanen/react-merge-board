import {
  Box,
  Button,
  ButtonProps,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './InfoBox.css';
import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import itemInfo, {
  chainIds,
  itemLevels,
  itemTypes,
} from '../constants/itemInfo';
import './ItemForm.css';
import { DateTimeField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { dateFormat } from '../constants/formats';

interface InitialValues {
  itemType: string;
  chainId: string;
  itemLevel: string;
  isHidden: boolean;
  isInBubble: boolean;
  pausedUntil: string | null;
  createdAt?: string;
}

interface ItemForm {
  activeCellIndex: UniqueIdentifier | undefined;
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
  initialValues: InitialValues;
  isMobile: boolean;
}

interface ItemAddForm extends ItemForm {
  variant: 'add';
  setActiveCellIndex?: never;
}

interface ItemEditForm extends ItemForm {
  variant: 'edit';
  setActiveCellIndex: setActiveCellIndex;
}

// Internal components
const DefaultButton = ({
  children,
  sx = {},
  color = 'success',
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      size="small"
      color={color}
      sx={{ minWidth: '30px', ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
};

// Main component
export default function ItemForm({
  activeCellIndex,
  setActiveCellIndex,
  itemsOnBoard,
  setItemsOnBoard,
  variant,
  isMobile,
  initialValues,
}: ItemAddForm | ItemEditForm) {
  // Update initial values correctly as new items are selected
  // Dates are stored as dayjs objects in the state
  const [itemType, setItemType] = useState(initialValues.itemType);
  const [chainId, setChainId] = useState(initialValues.chainId);
  const [itemLevel, setItemLevel] = useState(initialValues.itemLevel);
  const [isHidden, setIsHidden] = useState(initialValues.isHidden);
  const [isInBubble, setIsInBubble] = useState(initialValues.isInBubble);
  const [createdAt, setCreatedAt] = useState(
    dayjs.utc(initialValues.createdAt),
  );
  const [pausedUntil, setPausedUntil] = useState(
    dayjs.utc(initialValues.pausedUntil),
  );

  useEffect(() => {
    setItemType(initialValues.itemType);
    setChainId(initialValues.chainId);
    setItemLevel(initialValues.itemLevel);
    setIsHidden(initialValues.isHidden);
    setIsInBubble(initialValues.isInBubble);
    setCreatedAt(dayjs.utc(initialValues.createdAt));
    setPausedUntil(dayjs.utc(initialValues.pausedUntil));
  }, [initialValues]);

  // Disable edit button if no changes are done
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setIsEdited(
      itemType !== initialValues.itemType ||
        chainId !== initialValues.chainId ||
        itemLevel !== initialValues.itemLevel ||
        isHidden !== initialValues.isHidden ||
        isInBubble !== initialValues.isInBubble ||
        createdAt.toString() !==
          dayjs.utc(initialValues.createdAt).toString() ||
        pausedUntil.toString() !==
          dayjs.utc(initialValues.pausedUntil).toString(),
    );
  }, [
    initialValues,
    itemType,
    chainId,
    itemLevel,
    isHidden,
    isInBubble,
    createdAt,
    pausedUntil,
  ]);

  const handleChangeType = (event: SelectChangeEvent) => {
    setItemType(event.target.value as string);
  };

  const handleChangeChainId = (event: SelectChangeEvent) => {
    setChainId(event.target.value as string);
  };

  const handleChangeLevel = (event: SelectChangeEvent) => {
    setItemLevel(event.target.value as string);
  };

  const handleDelete = () => {
    // Index to string as 0 is falsy
    if (itemsOnBoard && activeCellIndex?.toString() && setActiveCellIndex) {
      const newItems = [...itemsOnBoard];
      newItems[Number(activeCellIndex)] = null;

      setItemsOnBoard(newItems);
      setActiveCellIndex(undefined);
    }
  };

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    event.preventDefault();

    // 1 -> 01 etc.
    const itemTier = Number(itemLevel) < 10 ? `0${itemLevel}` : itemLevel;

    // Update items
    // Index to string as 0 is falsy
    if (activeCellIndex?.toString()) {
      const newItemsOnBoard = [...itemsOnBoard];

      // Strictly speaking, this is incorrect!
      // However, as the ids are used only to get the correct icon
      // (does not depend on the item level), this is good enough...
      // Finds the id of the first similar item on the itemInfo object.
      const item = Object.entries(itemInfo).find(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([id, item]) => item.itemType.split('_')[0] === itemType,
      );

      let itemId = -1;
      if (item) itemId = Number(item[0]);

      newItemsOnBoard[activeCellIndex as number] = {
        uuid: uuidv4().slice(0, 8),
        itemId: Number(itemId),
        itemType: `${itemType}_${itemTier}`,
        chainId: chainId,
        // Check for dayjs object without date
        pausedUntil: Number.isNaN(pausedUntil.get('year'))
          ? null
          : pausedUntil.toISOString(),
        // Generate date only for add form
        createdAt:
          variant === 'add'
            ? new Date(Date.now()).toISOString()
            : createdAt.toISOString(),
        visibility: isHidden ? 'hidden' : 'visible',
        itemLevel: Number(itemLevel),
        isInsideBubble: isInBubble,
      };

      setItemsOnBoard(newItemsOnBoard);
    }
  };

  // Lists for Select components
  const itemTypesList: Array<string> =
    variant === 'add' ? ['BroomCabinet'] : itemTypes;

  const chainIdsList: Array<string> =
    variant === 'add' ? ['BroomCabinet'] : chainIds;

  return (
    <Box
      component="form"
      className="form-container"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={2}
      >
        {/* Item type */}
        <Grid
          item
          xs={5}
        >
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            required
          >
            <InputLabel id="input-item-type-label">Item type</InputLabel>
            <Select
              labelId="input-item-type-label"
              id="input-item-type"
              label="Item type"
              value={itemType}
              onChange={handleChangeType}
            >
              {itemTypesList.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  dense={isMobile}
                  sx={{ fontSize: 'var(--scaled-font-size)' }}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Item level */}
        <Grid
          item
          xs={3}
        >
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            required
          >
            <InputLabel id="input-item-level-label">Level</InputLabel>
            <Select
              labelId="input-item-level-label"
              id="input-item-level"
              label="Level"
              value={itemLevel}
              onChange={handleChangeLevel}
            >
              {itemLevels.map((level) => (
                <MenuItem
                  key={level}
                  value={level}
                  dense={isMobile}
                  sx={{ fontSize: 'var(--scaled-font-size)' }}
                >
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Chain id */}
        <Grid
          item
          xs={4}
        >
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            required
          >
            <InputLabel id="input-item-chain-label">Chain ID</InputLabel>
            <Select
              labelId="input-item-chain-label"
              id="input-item-chain"
              label="Chain ID"
              value={chainId}
              onChange={handleChangeChainId}
            >
              {chainIdsList.map((chainId) => {
                // Highlight default option for chaindId
                const isDefaultChainable = chainId.includes(itemType);

                return (
                  <MenuItem
                    key={chainId}
                    value={chainId}
                    dense={isMobile}
                    sx={{
                      fontWeight: isDefaultChainable ? '700' : 'inherit',
                      fontSize: 'var(--scaled-font-size)',
                    }}
                  >
                    {isDefaultChainable ? `${chainId} (default)` : chainId}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        {/* Time fields  */}
        <Grid
          item
          xs={6}
        >
          <DateTimeField
            id="input-paused-until"
            label="Paused until"
            value={pausedUntil}
            onChange={(newValue) => newValue && setPausedUntil(newValue)}
            size="small"
            format={dateFormat}
            fullWidth
            slotProps={{
              textField: {
                error: false,
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <DateTimeField
            id="input-created-at"
            label={
              variant === 'add'
                ? 'Created at (fills in automatically)'
                : 'Created at'
            }
            value={variant === 'add' ? null : createdAt}
            onChange={(newValue) => newValue && setPausedUntil(newValue)}
            size="small"
            format={dateFormat}
            fullWidth
            disabled
          />
        </Grid>
        {/* Buttons */}
        <Grid
          item
          xs={5}
        >
          {variant === 'add' && (
            <DefaultButton type="submit">Add item</DefaultButton>
          )}
          {variant === 'edit' && (
            <>
              {/* Edit button */}
              <DefaultButton
                type="submit"
                sx={{
                  marginRight: '0.3rem',
                }}
                disabled={!isEdited}
              >
                Edit
              </DefaultButton>
              {/* Delete button  */}
              <DefaultButton
                color="error"
                onClick={handleDelete}
              >
                Delete
              </DefaultButton>
            </>
          )}
        </Grid>
        {/* Checkboxes */}
        <Grid
          item
          xs={7}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <FormControlLabel
            label="Hidden"
            control={
              <Checkbox
                checked={isHidden}
                onChange={() => setIsHidden(!isHidden)}
                inputProps={{ 'aria-label': 'controlled' }}
                disabled={isInBubble}
                data-testid={
                  isHidden ? 'is-hidden-checked' : 'is-hidden-unchecked'
                }
              />
            }
          />
          <FormControlLabel
            label="In bubble"
            control={
              <Checkbox
                checked={isInBubble}
                onChange={() => setIsInBubble(!isInBubble)}
                inputProps={{ 'aria-label': 'controlled' }}
                disabled={isHidden}
                data-testid={
                  isInBubble ? 'is-in-bubble-checked' : 'is-in-bubble-unchecked'
                }
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
