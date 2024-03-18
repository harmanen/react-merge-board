import { Box, Typography } from '@mui/material';
import tierColorMap from '../constants/TierColorMap';

interface Props {
  itemLevel: number;
}

export function ItemTier({ itemLevel }: Props) {
  return (
    <Box className="item-tier-container">
      <Typography
        className="item-tier-text"
        style={{ color: tierColorMap[itemLevel] }}
      >
        {itemLevel}
      </Typography>
    </Box>
  );
}
