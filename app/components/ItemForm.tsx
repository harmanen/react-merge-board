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
import {
  itemInfo,
  chainIds,
  itemLevels,
  itemTypes,
} from '../constants/itemInfo';
import './ItemForm.css';
import { DateTimeField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { dateFormat } from '../constants/formats';
import { type ItemAddForm, ItemEditForm } from '../types/ItemForm.type';

/**
 * Internal component for Button default props and styles.
 */
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

/**
 * Form component to add, edit, and delete items.
 *
 * Renders
 * - Dropdown Selects for
 *   - Item type.
 *   - Item level.
 *   - Chain ID.
 * - DateTimeFields for
 *   - Paused until.
 *   - Created at (read only).
 * - Checkboxes for
 *   - Is hidden.
 *   - Is in bubble.
 * - Buttons
 *   - `Add item` if active cell is empty.
 *   - `Edit` and `Delete` if actice cell has an item.
 *
 * Handles
 * - Form submission (add or edit item)
 * - Item deletion
 *
 * Notes
 * - `Edit` button is disabled if the current values of the field match the
 * initial values.
 * - Checkboxes are mutually exclusive (disable other if the other is checked).
 * - Form layout is controlled using MUI Grid component.
 * - Uses constants  {@link itemInfo}, {@link chainIds}, {@link itemLevels},
 * {@link itemTypes}, and {@link dateFormat}.
 */
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
  const [createdAt, setCreatedAt] = useState(dayjs(initialValues.createdAt));
  const [pausedUntil, setPausedUntil] = useState(
    dayjs(initialValues.pausedUntil),
  );

  useEffect(() => {
    setItemType(initialValues.itemType);
    setChainId(initialValues.chainId);
    setItemLevel(initialValues.itemLevel);
    setIsHidden(initialValues.isHidden);
    setIsInBubble(initialValues.isInBubble);
    setCreatedAt(dayjs(initialValues.createdAt));
    setPausedUntil(dayjs(initialValues.pausedUntil));
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
        createdAt.toString() !== dayjs(initialValues.createdAt).toString() ||
        pausedUntil.toString() !== dayjs(initialValues.pausedUntil).toString(),
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
