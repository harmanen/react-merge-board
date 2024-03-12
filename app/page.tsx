import Box from '@mui/material/Box';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box className={styles.contentContainer}>
        <Box className={styles.infoContainer}>INFO</Box>
        <Box className={styles.gridContainer}>GRID</Box>
      </Box>
    </main>
  );
}
