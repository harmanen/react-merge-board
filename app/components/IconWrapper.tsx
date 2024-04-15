import { Box } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import './IconWrapper.css';
import { type IconWrapper } from '../types/IconWrapper.type';

export default function IconWrapper({ variant, children }: IconWrapper) {
  return (
    <Box className="wrapper-outer-container">
      {variant === 'bubble' && (
        <Box
          className="wrapper-icon-bubble"
          data-testid="icon-bubble"
        />
      )}
      {variant === 'hidden' && (
        <Visibility
          className="wrapper-icon-hidden"
          data-testid="icon-hidden"
        />
      )}
      <Box className="wrapper-item-container">{children}</Box>
    </Box>
  );
}
