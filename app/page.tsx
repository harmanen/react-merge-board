import Box from '@mui/material/Box';
import styles from './page.module.css';

// Replace with an API call
import mockData from './data';
import Content from './components/Content';

// Grid size
const { width, height } = mockData;
const gridSize = width * height;

// Sanity check
if (gridSize !== mockData.items.length) {
  console.warn('Amount of items does not match the grid!');
}

// Create list of grid ids.
// Used to generate the board with unique droppable regions.
let gridIdList: Array<number> = [];
for (let i = 0; i < gridSize; i++) {
  gridIdList.push(i);
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
        <Content
          gridIdList={gridIdList}
          mockData={mockData}
        />
      </Box>
    </main>
  );
}
