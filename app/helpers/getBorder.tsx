const getBorder = (index: number, width: number, height: number) => {
  // Append border to "light" grid items at the edges of the board
  // so they don't look like a part of the background but the grid.
  // Could be optimized using CSS :nth?
  let gridItemStyles = {
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
  };

  const border = 'var(--grid-item-border)';

  // Top
  if (index <= width && index % 2 !== 0) {
    gridItemStyles.borderTop = border;
  }
  // Left
  if (index % width === 0) {
    gridItemStyles.borderLeft = border;
  }
  // Right
  if ((index + 1) % width === 0) {
    gridItemStyles.borderRight = border;
  }
  // Bottom
  if (index >= width * height - width && index % 2 !== 0) {
    gridItemStyles.borderBottom = border;
  }

  return gridItemStyles;
};

export default getBorder;
