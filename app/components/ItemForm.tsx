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
import './InfoBox.css';

const itemLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ItemForm() {
  const [itemType, setItemType] = useState('BroomCabinet');
  const [chainId, setChainId] = useState('BroomCabinet');
  const [itemLevel, setItemLevel] = useState(itemLevels[0].toString());
  const [isHidden, setIsHidden] = useState(false);
  const [isInBubble, setIsInBubble] = useState(false);

  const handleChangeType = (event: SelectChangeEvent) => {
    setItemType(event.target.value as string);
  };

  const handleChangeChainId = (event: SelectChangeEvent) => {
    setChainId(event.target.value as string);
  };

  const handleChangeLevel = (event: SelectChangeEvent) => {
    setItemLevel(event.target.value as string);
  };

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    event.preventDefault();

    // 1 -> 01 etc.
    const itemTier = Number(itemLevel) < 10 ? `0${itemLevel}` : itemLevel;

    console.log({
      itemId: 1173,
      itemType: `${itemType}_${itemTier}`,
      chainId: chainId,
      pausedUntil: null,
      createdAt: new Date(Date.now()).toISOString(),
      visibility: isHidden ? 'hidden' : 'visible',
      itemLevel: itemLevel,
      isInsideBubble: isInBubble,
    });
  };

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
            <InputLabel htmlFor="input-item-type-label">Item type</InputLabel>
            <Select
              labelId="input-item-type-label"
              id="input-item-type"
              label="Item type"
              value={itemType}
              onChange={handleChangeType}
            >
              <MenuItem value="BroomCabinet">BroomCabinet</MenuItem>
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
            <InputLabel htmlFor="input-item-level-label">Item level</InputLabel>
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
            <InputLabel htmlFor="input-item-chain-label">Chain ID</InputLabel>
            <Select
              labelId="input-item-chain-label"
              id="input-item-chain"
              label="Chain ID"
              value={chainId}
              onChange={handleChangeChainId}
            >
              <MenuItem value="BroomCabinet">BroomCabinet</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Buttons */}
        <Grid
          item
          xs={4}
        >
          <Box className="button-container">
            <Button
              variant="contained"
              color="success"
              type="submit"
            >
              Add item
            </Button>
          </Box>
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
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
