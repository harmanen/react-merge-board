import { Box } from '@mui/material';
import { ReactNode } from 'react';
import './Bubble.css';

interface Bubble {
  children: ReactNode;
}

export default function Bubble({ children }: Bubble) {
  return (
    <Box className="bubble-outer-container">
      <Box className="bubble" />
      <Box className="bubble-item-container">{children}</Box>
    </Box>
  );
}
