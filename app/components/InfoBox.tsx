import React from 'react';
import { Box, Typography } from '@mui/material';
import packageJSON from '../../package.json';
import './InfoBox.css';
import ScaledTypography from './ScaledTypography';
import Link from 'next/link';
import ItemForm from './ItemForm';
import { itemLevels } from '../constants/itemInfo';
import { type InfoBox } from '../types/InfoBox.type';

export function InfoBox({
  activeCellIndex,
  setActiveCellIndex,
  activeItem,
  itemsOnBoard,
  setItemsOnBoard,
  isMobile,
}: InfoBox) {
  return (
    <Box className="info-container">
      {/* Title */}
      <Typography
        align="center"
        variant="h6"
        component="h1"
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
          {/* Select form and set initial values */}
          {activeItem === null && (
            <Box className="form-container">
              <ItemForm
                activeCellIndex={activeCellIndex}
                itemsOnBoard={itemsOnBoard}
                setItemsOnBoard={setItemsOnBoard}
                variant="add"
                isMobile={isMobile}
                initialValues={{
                  itemType: 'BroomCabinet',
                  chainId: 'BroomCabinet',
                  itemLevel: itemLevels[0].toString(),
                  isHidden: false,
                  isInBubble: false,
                  pausedUntil: null,
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
                isMobile={isMobile}
                initialValues={{
                  // Remove tier number from type name
                  itemType: activeItem.itemType.split('_')[0],
                  chainId: activeItem.chainId,
                  itemLevel: activeItem.itemLevel.toString(),
                  isHidden: activeItem.visibility === 'hidden',
                  isInBubble: activeItem.isInsideBubble,
                  pausedUntil: activeItem.pausedUntil,
                  createdAt: activeItem.createdAt,
                }}
              />
            </Box>
          )}
        </>
      )}

      {/* Version */}
      <ScaledTypography
        className="app-version"
        variant="body2"
        component="h2"
      >
        <Link
          href="https://github.com/harmanen/react-merge-board?tab=readme-ov-file#version-history"
          target="blank"
        >{`(v${packageJSON.version})`}</Link>
      </ScaledTypography>
    </Box>
  );
}
