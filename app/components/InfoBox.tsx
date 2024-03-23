import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import './InfoBox.css';
import ScaledTypography from './ScaledTypography';

interface InfoBox {
  activeCellIndex: UniqueIdentifier | undefined;
  setActiveCellIndex: setActiveCellIndex;
  activeItem: ItemOnBoard | null | undefined;
  itemsOnBoard: Array<ItemOnBoard | null>;
  setItemsOnBoard: setItemsOnBoard;
}

export function InfoBox({
  activeCellIndex,
  setActiveCellIndex,
  activeItem,
  itemsOnBoard,
  setItemsOnBoard,
}: InfoBox) {
  const handleDelete = () => {
    if (itemsOnBoard && activeCellIndex) {
      const newItems = [...itemsOnBoard];
      newItems[Number(activeCellIndex)] = null;

      setItemsOnBoard(newItems);
      setActiveCellIndex(undefined);
    }
  };

  return (
    <Box className="info-container">
      {/* Title */}
      <Typography
        align="center"
        variant="h6"
      >
        Merge board
      </Typography>

      {/* Main content */}
      {activeCellIndex === undefined ? (
        <Box className="no-active-cell-container">
          <ScaledTypography align="center">
            Start by selecting a cell!
          </ScaledTypography>
        </Box>
      ) : (
        <>
          <Box className="button-container">
            {activeItem === null ? (
              <Button
                variant="contained"
                color="success"
                disabled
              >
                Add item
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Delete item
              </Button>
            )}
          </Box>
        </>
      )}

      {/* Version */}
      <ScaledTypography
        className="app-version"
        variant="subtitle2"
      >{`(v${packageJSON.version})`}</ScaledTypography>
    </Box>
  );
}
