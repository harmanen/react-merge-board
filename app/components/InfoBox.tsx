import React from 'react';
import { Box, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import './InfoBox.css';
import ScaledTypography from './ScaledTypography';
import Link from 'next/link';
import ItemForm from './ItemForm';
import { itemLevels } from '../constants/itemInfo';

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
  return (
    <Box className="info-container">
      {/* Title */}
      <Typography
        align="center"
        variant="h6"
      >
        Merge board
      </Typography>

      {/* TMP */}
      <Typography
        variant="subtitle2"
        align="center"
        color="error"
        sx={{ position: 'absolute', top: 0, right: 0, padding: '0.2rem' }}
      >
        Work in progress!
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
          {/* Select form and set initial values */}
          {activeItem === null && (
            <Box className="form-container">
              <ItemForm
                activeCellIndex={activeCellIndex}
                itemsOnBoard={itemsOnBoard}
                setItemsOnBoard={setItemsOnBoard}
                variant="add"
                initialValues={{
                  itemType: 'BroomCabinet',
                  chainId: 'BroomCabinet',
                  itemLevel: itemLevels[0].toString(),
                  isHidden: false,
                  isInBubble: false,
                }}
              />
            </Box>
          )}
          {activeItem !== null && activeItem !== undefined && (
            <Box className="form-container">
              <ItemForm
                activeCellIndex={activeCellIndex}
                setActiveCellIndex={setActiveCellIndex}
                itemsOnBoard={itemsOnBoard}
                setItemsOnBoard={setItemsOnBoard}
                variant="edit"
                initialValues={{
                  // Remove tier number from type name
                  itemType: activeItem.itemType.split('_')[0],
                  chainId: activeItem.chainId,
                  itemLevel: activeItem.itemLevel.toString(),
                  isHidden: activeItem.visibility === 'hidden',
                  isInBubble: activeItem.isInsideBubble,
                }}
              />
            </Box>
          )}
        </>
      )}

      {/* Version */}
      <ScaledTypography
        className="app-version"
        variant="subtitle2"
      >
        <Link
          href="https://github.com/harmanen/react-merge-board?tab=readme-ov-file#version-history"
          target="blank"
        >{`(v${packageJSON.version})`}</Link>
      </ScaledTypography>
    </Box>
  );
}
