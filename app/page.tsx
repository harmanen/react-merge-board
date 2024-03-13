import Box from '@mui/material/Box';
import styles from './page.module.css';
import mockData from './data.json';
import { Board } from './components/Board';

// Grid size
const { width, height } = mockData;
const gridSize = width * height;

// Sanity check
if (gridSize !== mockData.items.length) {
  console.warn('Amount of items does not match the grid!');
}

// Create list of grid ids. Used to generate the board.
let gridIdList: Array<string> = [];
for (let i = 1; i <= gridSize; i++) {
  gridIdList.push(`grid-item-${i}`);
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        className={styles.contentContainer}
        // Dynamically define grid width
        sx={{
          width: `calc(6 * var(--layout-padding) + ${width} * var(--grid-size))`,
        }}
      >
        <Box className={styles.infoContainer}>INFO</Box>
        {gridIdList && (
          <Board
            width={width}
            height={height}
            gridIdList={gridIdList}
          />
        )}
      </Box>
    </main>
  );
}
