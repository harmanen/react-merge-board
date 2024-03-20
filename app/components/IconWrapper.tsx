import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Visibility } from '@mui/icons-material';
import './IconWrapper.css';

type Variant = 'bubble' | 'hidden';

interface IconWrapper {
  children: ReactNode;
  variant: Variant;
}

export default function IconWrapper({ variant, children }: IconWrapper) {
  return (
    <Box className="wrapper-outer-container">
      {variant === 'bubble' && <Box className="wrapper-icon-bubble" />}
      {variant === 'hidden' && <Visibility className="wrapper-icon-hidden" />}
      <Box className="wrapper-item-container">{children}</Box>
    </Box>
  );
}
