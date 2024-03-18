import { Box, Typography } from '@mui/material';
import tierColorMap from '../constants/tierColorMap';

interface Props {
  itemLevel: number;
}

export function ItemTier({ itemLevel }: Props) {
  // Use black font color for certain cases to get some contrast
  let textColor;

  switch (itemLevel) {
    case 1:
    case 11:
      textColor = '#000000';
      break;

    default:
      textColor = tierColorMap[itemLevel];
      break;
  }

  return (
    <Box
      className="item-tier-container"
      style={{
        background: `radial-gradient(circle, #FFFFFF, #FFFFFF 40%, ${tierColorMap[itemLevel]})`,
      }}
    >
      <Typography
        className="item-tier-text"
        style={{ color: textColor }}
      >
        {itemLevel}
      </Typography>
    </Box>
  );
}
