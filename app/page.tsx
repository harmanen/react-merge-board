import Box from '@mui/material/Box';
import styles from './page.module.css';
import mockData from './data.json';
import { Grid } from '@mui/material';

// Grid size
const { width, height } = mockData;
const gridSize = width * height;

// Sanity check
if (gridSize !== mockData.items.length) {
  console.warn('Amount of items does not match the grid!');
}

// Create list of grid ids. Used to generate the board.
let gridIdList = [];
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
        <Grid
          columns={width}
          container
          className={styles.gridContainer}
          // Dynamically define grid height
          sx={{
            maxHeight: `calc(6 * var(--layout-padding) + ${height} * var(--grid-size))`,
          }}
        >
          {gridIdList.map((item, index) => (
            <Grid
              item
              xs={1}
              key={item}
              className={
                index % 2 === 0 ? styles.gridItemDark : styles.gridItemLight
              }
            >
              {item}
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
