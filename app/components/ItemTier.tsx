import { Box, Typography } from '@mui/material';
import tierColorMap from '../constants/tierColorMap';

interface Props {
  itemLevel: number;
}

export function ItemTier({ itemLevel }: Props) {
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
