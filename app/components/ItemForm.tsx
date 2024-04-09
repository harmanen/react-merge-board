import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './InfoBox.css';
import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import itemInfo, {
  chainIds,
  itemLevels,
  itemTypes,
} from '../constants/itemInfo';
import { Add, Check, Delete } from '@mui/icons-material';
import './ItemForm.css';

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
}

interface ItemAddForm extends ItemForm {
  variant: 'add';
  setActiveCellIndex?: never;
}

interface ItemEditForm extends ItemForm {
  variant: 'edit';
  setActiveCellIndex: setActiveCellIndex;
}

export default function ItemForm({
  activeCellIndex,
  setActiveCellIndex,
  itemsOnBoard,
  setItemsOnBoard,
  variant,
  initialValues,
}: ItemAddForm | ItemEditForm) {
  // Update initial values correctly as new items are selected
  const [itemType, setItemType] = useState(initialValues.itemType);
  const [chainId, setChainId] = useState(initialValues.chainId);
  const [itemLevel, setItemLevel] = useState(initialValues.itemLevel);
  const [isHidden, setIsHidden] = useState(initialValues.isHidden);
  const [isInBubble, setIsInBubble] = useState(initialValues.isInBubble);
  const [createdAt, setCreatedAt] = useState(initialValues.createdAt);
  const [pausedUntil, setPausedUntil] = useState(initialValues.pausedUntil);

  useEffect(() => {
    setItemType(initialValues.itemType);
    setChainId(initialValues.chainId);
    setItemLevel(initialValues.itemLevel);
    setIsHidden(initialValues.isHidden);
    setIsInBubble(initialValues.isInBubble);
    setCreatedAt(initialValues.createdAt);
    setPausedUntil(initialValues.pausedUntil);
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
        createdAt !== initialValues.createdAt ||
        pausedUntil !== initialValues.pausedUntil,
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

  const handleChangeCreatedAt = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatedAt(event.target.value as string);
  };

  const handleChangePausedUntil = (event: ChangeEvent<HTMLInputElement>) => {
    setPausedUntil(event.target.value as string);
  };

  console.log(pausedUntil);

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
        pausedUntil: pausedUntil ? pausedUntil : null,
        createdAt: new Date(Date.now()).toISOString(),
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
              {chainIdsList.map((chainId) => (
                <MenuItem
                  key={chainId}
                  value={chainId}
                >
                  {chainId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Time fields  */}
        <Grid
          item
          xs={6}
        >
          <TextField
            id="input-paused-until"
            label="Paused until"
            value={pausedUntil || ''}
            onChange={handleChangePausedUntil}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TextField
            disabled
            id="input-created-at"
            label={
              variant === 'add'
                ? 'Created at (fills in automatically)'
                : 'Created at'
            }
            value={createdAt || ''}
            onChange={handleChangeCreatedAt}
            size="small"
            fullWidth
          />
        </Grid>
        {/* Buttons */}
        <Grid
          item
          xs={5}
        >
          {variant === 'add' && (
            <Button
              variant="contained"
              color="success"
              type="submit"
              startIcon={<Add />}
            >
              Add item
            </Button>
          )}
          {variant === 'edit' && (
            <>
              {/* Edit button */}
              <IconButton
                color="success"
                type="submit"
                sx={{
                  marginRight: '0.3rem',
                  padding: 0,
                }}
                disabled={!isEdited}
              >
                <Check className="icon-edit-button" />
              </IconButton>
              {/* Delete button  */}
              <IconButton
                color="error"
                onClick={handleDelete}
                size="large"
                sx={{ padding: 0 }}
              >
                <Delete className="icon-delete-button" />
              </IconButton>
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
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
