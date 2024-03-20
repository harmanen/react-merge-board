import { Box } from '@mui/material';
import { ReactNode } from 'react';
import './IconWrapper.css';

interface IconWrapper {
  children: ReactNode;
}

export default function IconWrapper({ children }: IconWrapper) {
  return (
    <Box className="wrapper-outer-container">
      <Box className="bubble" />
      <Box className="wrapper-item-container">{children}</Box>
    </Box>
  );
}
