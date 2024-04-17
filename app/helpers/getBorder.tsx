/**
 * Appends borders to "light" grid items at the edges of the board
 * so they don't look like a part of the background but the grid.
 * E.g. cell at index 1 would get border at the top of the element etc.
 * @param index Array index of a cell.
 * @param width Number of cells horizontally on the board.
 * @param height Number of cells vertically on the board.
 * @returns CSS definitions for the borders of the cell at `index`.
 */
export default function getBorder(
  index: number,
  width: number,
  height: number,
) {
  const gridItemStyles = {
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
}
