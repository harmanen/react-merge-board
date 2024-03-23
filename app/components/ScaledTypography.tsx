// Scale font size automatically using this component
import { Typography, TypographyStyle } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends TypographyStyle {
  // Needed to be manually defined to get rid of an error...
  // TypographyStyle out of date?
  translate?: 'yes' | 'no' | undefined;
}

export default function ScaledTypography({
  children,
  ...props
}: Props): ReactNode {
  return (
    <Typography
      {...props}
      sx={{ fontSize: 'var(--scaled-font-size)' }}
    >
      {children as ReactNode}
    </Typography>
  );
}
