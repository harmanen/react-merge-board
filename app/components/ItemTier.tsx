import { Box, Typography } from '@mui/material';
import { tierColorMap } from '../constants/tierColorMap';
import { type ItemTier } from '../types/ItemTier.type';

export function ItemTier({ itemLevel }: ItemTier) {
  return (
    <Box
      className="item-tier-container"
      style={{
        background: `radial-gradient(circle, #FFFFFF, #FFFFFF 40%, ${tierColorMap[itemLevel]})`,
      }}
    >
      <Typography
        align="center"
        sx={{
          color: tierColorMap[itemLevel],
          fontSize: 'var(--item-tier-font-size)',
          fontWeight: '700',
          width: '100%',
        }}
      >
        {itemLevel}
      </Typography>
    </Box>
  );
}
