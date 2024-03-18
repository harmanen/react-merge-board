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
        className="item-tier-text"
        style={{ color: tierColorMap[itemLevel] }}
      >
        {itemLevel}
      </Typography>
    </Box>
  );
}
