import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './InfoBox.css';
import { UniqueIdentifier } from '@dnd-kit/core';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import { chainIds, itemLevels, itemTypes } from '../constants/itemInfo';

interface InitialValues {
  itemType: string;
  chainId: string;
  itemLevel: string;
  isHidden: boolean;
  isInBubble: boolean;
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
  const [itemType, setItemType] = useState(initialValues.itemType);
  const [chainId, setChainId] = useState(initialValues.chainId);
  const [itemLevel, setItemLevel] = useState(initialValues.itemLevel);
  const [isHidden, setIsHidden] = useState(initialValues.isHidden);
  const [isInBubble, setIsInBubble] = useState(initialValues.isInBubble);

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
    if (itemsOnBoard && activeCellIndex && setActiveCellIndex) {
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
    if (activeCellIndex) {
      const newItemsOnBoard = [...itemsOnBoard];

      newItemsOnBoard[activeCellIndex as number] = {
        uuid: uuidv4().slice(0, 8),
        itemId: 1173,
        itemType: `${itemType}_${itemTier}`,
        chainId: chainId,
        pausedUntil: null,
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
          xs={4}
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
          xs={4}
        >
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            required
          >
            <InputLabel id="input-item-level-label">Item level</InputLabel>
            <Select
              labelId="input-item-level-label"
              id="input-item-level"
              label="Item level"
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
        {/* Buttons */}
        <Grid
          item
          xs={4}
        >
          {variant === 'add' && (
            <Button
              variant="contained"
              color="success"
              type="submit"
            >
              Add item
            </Button>
          )}
          {variant === 'edit' && (
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              Delete item
            </Button>
          )}
        </Grid>
        {/* Checkboxes */}
        <Grid
          item
          xs={8}
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
