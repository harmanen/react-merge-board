// Scale font size automatically using this component
import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { type ScaledTypography } from '../types/ScaledTypography.type';

export default function ScaledTypography({
  children,
  ...props
}: ScaledTypography): ReactNode {
  return (
    <Typography
      {...props}
      sx={{ fontSize: 'var(--scaled-font-size)' }}
    >
      {children as ReactNode}
    </Typography>
  );
}
