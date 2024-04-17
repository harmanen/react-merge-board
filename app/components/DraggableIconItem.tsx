import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box, IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import { Block } from '@mui/icons-material';
import { ItemTier } from './ItemTier';
import { tierColorMap } from '../constants/tierColorMap';
import IconWrapper from './IconWrapper';
import { type DraggableIconItem } from '../types/DraggableIconItem.type';
import { itemIcon } from '../types/itemInfo.type';
import { itemInfo } from '../constants/itemInfo';

/**
 * Component for draggable elements that can be dropped into droppable grid
 * elements.
 * - Uses the `useDraggable` hook of the dnd kit.
 * - Handles movement of an item being dragged.
 * - Selects and renders appropriate icon element defined in {@link itemInfo}
 * and wraps it with {@link IconWrapper} component if the item has
 * status `isHidden` or `isInBubble`.
 * - Drops shadow for the icon. Color is based on the item's level
 * (see {@link tierColorMap}).
 * - Renders {@link ItemTier} component.
 *
 */
export function DraggableIconItem({
  id,
  iconItem,
  index,
  isHidden = false,
  isInBubble = false,
  isActive,
  children,
}: DraggableIconItem) {
  // Helper functions
  const getIcon = (item: itemIcon) => {
    // Get icon or use default if missing
    const unwrappedIcon = item.icon || <Block sx={{ color: 'red' }} />;

    // Special case(s) handled separately
    if (isHidden) {
      return <IconWrapper variant="hidden">{unwrappedIcon}</IconWrapper>;
    } else if (isInBubble) {
      return <IconWrapper variant="bubble">{unwrappedIcon}</IconWrapper>;
    } else {
      return unwrappedIcon;
    }
  };

  // Component
  const { itemId, itemLevel } = iconItem;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: 'item',
      // Used to set active cell. Same as "id" for droppable containers
      index: index,
    },
  });

  // Handle movement
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  // Icon shadow
  let filter = `drop-shadow(0.1rem 0.2rem 0.3rem ${tierColorMap[itemLevel]})`;

  if (isHidden) {
    filter = '';
  }

  return (
    <IconButton
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      disableRipple
      className="icon-button"
      sx={{ zIndex: isActive ? 999 : 'inherit' }}
      data-testid="draggable-icon-item"
    >
      <Box
        className="icon-container"
        style={{
          filter: filter,
        }}
      >
        {getIcon(itemInfo[itemId])}
      </Box>
      <ItemTier itemLevel={itemLevel} />
      {children}
    </IconButton>
  );
}
