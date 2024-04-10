import { Metadata } from 'next';
import styles from './page.module.css';
import Content from './components/Content';

// Replace with an API call
import mockData from './data';

export const metadata: Metadata = {
  title: 'React merge board',
  description: 'Proof of concept app for merge-type games',
};

// Grid size
const { width, height } = mockData;
const gridSize = width * height;

// Sanity check
if (gridSize !== mockData.items.length) {
  // Replace with error?
  // eslint-disable-next-line no-console
  console.warn('Amount of items does not match the grid!');
}

// Create list of grid ids.
// Used to generate the board with unique droppable regions.
const gridIdList: Array<number> = [];
for (let i = 0; i < gridSize; i++) {
  gridIdList.push(i);
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Content
        gridIdList={gridIdList}
        mockData={mockData}
      />
    </main>
  );
}
