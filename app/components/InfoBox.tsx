import React from 'react';
import { Box, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import { ItemOnBoard, setActiveCellIndex, setItemsOnBoard } from './Board.type';
import { UniqueIdentifier } from '@dnd-kit/core';
import './InfoBox.css';
import ScaledTypography from './ScaledTypography';
import Link from 'next/link';
import ItemForm from './ItemForm';

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
          {/* Select form */}
          {activeItem === null && (
            <Box className="form-container">
              <ItemForm
                activeCellIndex={activeCellIndex}
                itemsOnBoard={itemsOnBoard}
                setItemsOnBoard={setItemsOnBoard}
                variant="add"
              />
            </Box>
          )}
          {activeItem !== null && (
            <Box className="form-container">
              <ItemForm
                activeCellIndex={activeCellIndex}
                setActiveCellIndex={setActiveCellIndex}
                itemsOnBoard={itemsOnBoard}
                setItemsOnBoard={setItemsOnBoard}
                variant="edit"
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
