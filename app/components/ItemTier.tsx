import { Box, Typography } from '@mui/material';

interface Props {
  itemLevel: number;
}

export function ItemTier({ itemLevel }: Props) {
  return (
    <Box className="item-tier-container">
      <Typography className="item-tier-text">{itemLevel}</Typography>
    </Box>
  );
}
